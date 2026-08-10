# KNOWLEDGE_ARCHITECTURE — Representing Research Knowledge

**Compiled:** 2026-08-10 | **Evidence taxonomy:** `[D]` DOCUMENTED, `[O]` OBSERVED, `[I]` IMPLEMENTED, `[R]` RESEARCH-SUPPORTED, `[N]` INFERRED, `[S]` SPECULATIVE | Reference keys → REFERENCES.md

---

## 1. The representation spectrum

Research knowledge can be stored in several forms, each with distinct tradeoffs:

| Representation | What it stores | Strengths | Weaknesses | Evidence |
|---|---|---|---|---|
| **Plain documents / notes** | Human-authored text | Portable, readable, user-controlled | No structure for machine retrieval; no provenance links; no conflict handling | PKM baseline (Obsidian etc.) `[O→third-party] REF-78` |
| **Vector index** | Chunk embeddings | Semantic similarity search; simple; scalable | Opaque ("black box" retrieval); no relations; duplicates/conflicts invisible; source linkage must be bolted on | RAG survey `[R] REF-20`; production RAG `[O→third-party] REF-59/72` |
| **Sparse index (BM25)** | Token statistics | Exact-match recall (names, IDs, code); cheap; interpretable | No semantics; synonym/paraphrase blindness | Hybrid consensus `[R] REF-20`; contextual BM25 `[D] REF-06` |
| **Relational/SQL** | Structured entities + relations | Precise queries, joins, permissions, transactions | Rigid schema; poor fit for free text; engineering overhead | Vector-DB decision guides keep pgvector for relational shops `[O→third-party] REF-59` |
| **Knowledge graph** | Entities + typed relationships (+ claims) | Multi-hop reasoning; global sensemaking; contradiction edges (scite-style) | Expensive LLM-based construction; extraction errors propagate; evaluation pitfalls `[O→third-party] REF-75` | GraphRAG `[R] REF-24`; HippoRAG `[R] REF-25`; scite `[O→third-party] REF-73` |
| **Graph + vector hybrid** | Graph topology + chunk embeddings | Multi-hop + semantic; HippoRAG = KG + PPR + dense; GraphRAG = graph + text units | Complexity; two stores to keep consistent | HippoRAG `[R] REF-25`; GraphRAG `[R] REF-24` |
| **Claim→evidence graph** | Claims as first-class nodes, linked to supporting/contradicting source passages | Verification-native; conflicts explicit; confidence computable | Requires extraction discipline; extraction quality varies | scite's typed citations `[O→third-party] REF-73`; FActScore atomic facts `[R] REF-33`; ALCE attribution `[R] REF-32` |
| **AI memory (agent-managed)** | Self-edited memory blocks/tiers | Long-horizon coherence; adaptation | Forgetfulness; invalidation hard; opaque | MemGPT `[R] REF-27`; Generative Agents `[R] REF-28`; Mem0/Letta `[I] REF-54/55` |

---

## 2. The core design tension: retrieval-ready vs verification-ready

The single most important architectural lesson from the studied systems:

- **Retrieval-ready** representations (vector indexes) are optimized for *finding* information. They are not verification-ready: a chunk retrieved does not tell you which claim it supports, whether a conflicting chunk exists, or how confident you should be.
- **Verification-ready** representations (claim→evidence links, typed citation edges, atomic facts) are optimized for *trusting* information. They are expensive to build and keep current.

Every mature system in this study handles both concerns **as separate layers**: NotebookLM grounds chat in retrieval but verification happens in the citation UI `[D] REF-01`; Claude Research separates synthesis from the CitationAgent pass `[D] REF-04`; scite's whole product is the claim/citation layer `[O→third-party] REF-73`; FActScore evaluates factuality as atomic facts `[R] REF-33`.

**Recommended stance for the project:** keep the *document/chunk layer* (retrieval) and the *claim layer* (verification) separate but linked. Claims reference source passages; passages index back to documents; documents carry provenance metadata. This mirrors how the most reliable studied systems are actually arranged, and it is implementable with a simple relational/JSON backbone plus a vector index — no exotic graph store required initially.

```
DOCUMENT LAYER        PASSAGE LAYER            CLAIM LAYER
source (PDF/URL/…) ──► chunk/passage ────────► claim
  │ provenance         │ embedding vector      │ evidence: [passage ids]
  │ metadata           │ document id           │ support/contradict links
  │ version            │ structure path        │ confidence score
                        │                        │ verification status
```

---

## 3. Source-to-claim mapping: the scite pattern made implementable

scite classifies ~1.2B citation statements as **supporting / contradicting / mentioning** with context snippets `[O→third-party] REF-73`. The pattern transfers directly to any corpus:

- During ingestion, extract *statements* (claims, findings, definitions) from each source with their location.
- When sources disagree, create typed links: claim A (from source 1) **contradicts** claim B (from source 2); both remain visible.
- Consensus products show that surfacing disagreement is a *feature*, not a failure `[O→third-party] REF-73`.
- Research-supported basis: FActScore's atomic facts `[R] REF-33` and ALCE's citation metrics `[R] REF-32` give the evaluation machinery for such a layer.

**Complexity note:** full automatic claim extraction is imperfect (Elicit's extraction needs human spot-checks `[O→third-party] REF-73`). A pragmatic ladder:
1. **Level 0 (baseline):** passage-level citations only (like NotebookLM).
2. **Level 1:** sentence-level citation links + extractable structured fields (like Elicit).
3. **Level 2:** typed claim graph with support/contradict edges (like scite), built semi-automatically with human confirmation.

---

## 4. Knowledge graphs: when they earn their cost

Evidence summary `[R] REF-24/25`:
- GraphRAG's global search wins on **sensemaking questions** over large corpora (themes, patterns, cross-cutting trends) but is expensive to index and its reported judge-based win rates are inflated by evaluation artifacts `[O→third-party] REF-75`.
- HippoRAG's KG + Personalized PageRank wins on **multi-hop questions** ("connect A to B via C") at 10–30× lower query cost than iterative retrieval `[R] REF-25`.
- Neither is needed for simple lookup or small corpora.

**Decision rule:** add graph structures only when evaluation demonstrates (a) multi-hop or global-sensemaking questions that flat retrieval answers poorly, AND (b) corpus size/importance justifies index cost. For a student-research-scale corpus, the claim→passage layer above likely covers most needs with far less machinery.

---

## 5. AI memory as knowledge architecture

Memory research distinguishes what an agent/system should persist across sessions `[R] REF-27/28, [I] REF-54/55`:

| Memory type | Content | Studied implementations |
|---|---|---|
| **Working/session context** | Current task state | Standard context windows; compaction |
| **Episodic memory** | Past research runs, queries, decisions | Generative Agents memory stream `[R] REF-28`; Anthropic plan persistence `[D] REF-04` |
| **Semantic memory** | Derived facts, concepts, summaries | MemGPT archival storage `[R] REF-27`; Mem0 extraction `[I] REF-54` |
| **Source memory** | What sources exist, their provenance, status | NotebookLM notebook = source corpus `[D] REF-01`; Elicit paper library `[O→third-party] REF-73` |
| **Preference/task memory** | User's study goals, formats, thresholds | Mem0/Generative Agents importance scoring `[I/R]` |

**What should be remembered** (evidence-leaning): research plans across context limits `[D] REF-04`; project/source state (the notebook pattern `[D] REF-01`); derived knowledge with provenance; user study progress (retention state for spaced repetition `[R] REF-39–43`).

**What should NOT be remembered:** raw conversation dumps (cost, drift); unprovenanced claims (they poison later synthesis); stale summaries without invalidation hooks.

**Invalidation & updates:** the literature gives no turnkey solution — memory systems are evaluated on long-horizon consistency (LongMemEval: Mem0 ≈49.0% `[I] REF-54`), which is far from solved. Practical stance: **treat stored knowledge as derived artifacts with source links and timestamps; invalidate when linked sources change or are contradicted; prefer recomputation over mutation** (re-index on source edit; regenerate summaries; keep versions).

**Conflict handling:** never silently overwrite — surface contradictions (Consensus/scite pattern) and let the claim layer record both sides.

---

## 6. Knowledge representation recommendation (evidence-weighted)

| Need | Representation | Priority |
|---|---|---|
| Semantic search over user corpus | Vector index (hybrid w/ BM25) | MUST |
| Exact-term recall | BM25/sparse | MUST (in hybrid) |
| Provenance & versioning | Relational/JSON backbone (sources, passages, claims tables) | MUST |
| Source grounding citations | Passage ids in generation context + citation cards | MUST |
| Study progress / spaced repetition state | Simple app state + scheduler (FSRS-style) | SHOULD |
| Claim-level verification | Claim→passage links; support/contradict edges; confidence | SHOULD (Level 2) |
| Multi-hop reasoning | HippoRAG-style graph retrieval | COULD (validated need) |
| Global sensemaking | GraphRAG-style community summaries | COULD (large corpora only) |
| Agent long-horizon memory | MemGPT-style tiered memory | EXPERIMENTAL |

**Anti-cargo-cult guardrail:** the evidence does NOT support adopting a knowledge graph or a vector database *because* a famous product might use one. It supports adopting each structure only when the project's own corpus, question types, and evaluation demonstrate the failure it fixes.
