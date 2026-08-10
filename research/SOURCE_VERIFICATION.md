# SOURCE_VERIFICATION — Trust, Grounding & Verification

**Compiled:** 2026-08-10 | **Evidence taxonomy:** `[D]` DOCUMENTED, `[O]` OBSERVED, `[I]` IMPLEMENTED, `[R]` RESEARCH-SUPPORTED, `[N]` INFERRED, `[S]` SPECULATIVE | Reference keys → REFERENCES.md

---

## 1. Why verification is the core problem

The evidence base is unambiguous that unverified generation is the defining failure of AI knowledge systems:

- ALCE: even the best models lack complete citation support ~50% of the time on ELI5 `[R] REF-32`.
- FActScore: ChatGPT achieves ~58% factual precision (atomic facts) on biographies without retrieval; retrieval-augmented systems score higher but still imperfectly `[R] REF-33`.
- Deep Research: citation mistakes and formatting errors observed; domain bias `[O] REF-08`.
- NotebookLM: grounded by construction, yet users report fabricated content in Audio Overviews and imperfect citations `[O] REF-71`.
- Elicit: extraction accuracy requires manual verification; sensitivity 39.5%, precision 41.8% (2025 evaluation) `[O→third-party] REF-73`.

**Conclusion:** verification cannot be an afterthought. It is a first-class architecture layer with its own data model, its own evaluation, and its own UX.

---

## 2. The claim taxonomy (how a system should classify statements)

A research system should be able to label every generated or stored statement:

| Label | Definition | System behavior |
|---|---|---|
| **FACT** | Established, multiply-sourced, consistent with sources | High confidence; cite supporting passages |
| **EVIDENCE** | A reported finding/observation from a specific source (may conflict with other sources) | Attribute to source; keep source-level status |
| **INFERENCE** | Derived by the system from facts/evidence (not stated in sources) | Flag as derived; show reasoning chain |
| **OPINION** | Stated preference/judgment from a source or user | Attribute; never present as fact |
| **SPECULATION** | Hypothesis without supporting evidence | Explicitly labeled; lowest confidence |
| **UNKNOWN** | Not determinable from the corpus | Explicit "cannot be answered from sources" (NotebookLM declines pattern `[D] REF-01`) |

Evidence for feasibility: FActScore demonstrates atomic-fact decomposition with an automated scorer within <2% of human scores `[R] REF-33`; scite demonstrates support/contradict/mention classification at scale `[O→third-party] REF-73`; Consensus surfaces yes/no/maybe + confidence `[O→third-party] REF-73`.

---

## 3. Source hierarchy & evidence ranking

Per the directive's hierarchy, adapted to system logic: primary technical documentation > official publications > peer-reviewed research > engineering blogs > source code > presentations/interviews > community discussion > general articles > unverified commentary. The study itself applies this (see REFERENCES.md).

System-level implementation (evidence-informed):
1. **Provenance metadata on every source** (type, publisher, date, author, domain, peer-review status, version) — ingestion must capture it (parsers like Docling preserve document structure/metadata `[I] REF-56`).
2. **Source-tier ranking** influences retrieval weighting and confidence, but must never hard-exclude lower tiers (exceptions happen — e.g., a blog by the system's creator may outrank a secondary article).
3. **Corroboration counts:** a claim supported by N independent sources is more confident than a single source (Consensus evidence meters `[O→third-party] REF-73`).
4. **Contradiction handling:** when sources disagree, both remain visible with typed edges (scite pattern `[O→third-party] REF-73`); confidence drops; the user sees the disagreement.

---

## 4. Verification mechanisms (evidence-ordered)

| Mechanism | Evidence | Complexity | Where it fits |
|---|---|---|---|
| **Passage-level inline citations** (answer → source passage) | NotebookLM `[D] REF-01`; ALCE citation metrics `[R] REF-32` | Low | Baseline for every generated artifact |
| **Sentence-level citation links** | Elicit `[O→third-party] REF-73` | Low–Med | Chat answers, extraction tables |
| **Dedicated citation/verification pass** (separate agent verifies each claim against sources) | Claude Research CitationAgent `[D] REF-04` | Med | Research reports, synthesis outputs |
| **Atomic-fact decomposition + automated check** | FActScore `[R] REF-33` (automated scorer ~<2% error vs human) | Med | CI-grade factuality gate on outputs |
| **Typed citation edges (support/contradict/mention)** | scite `[O→third-party] REF-73` | Med–High | Claim layer; literature review |
| **Contradiction & consensus surfacing + confidence scores** | Consensus `[O→third-party] REF-73` | Med | Study-mode Q&A, evidence dashboards |
| **Retrieval-failure awareness** (system detects weak retrieval & says so) | CRAG's retrieval evaluator `[R] REF-23`; Self-RAG's critique tokens `[R] REF-22` | Med | Adaptive pipeline |
| **Human spot-check UX** (one-click verify: highlight → check → correct) | Elicit usage guidance (spot-check ≥20%) `[O→third-party] REF-73`; user verification is assumed by all cited products | Low | Everywhere — verification affordances |

**Key insight from Claude Research's writeup** `[D] REF-04`: a single agent doing both synthesis and citation verification produces the "game of telephone" — claims degrade as they pass through summarization layers. **Separating the verifier from the synthesizer is the single most transferable verification design decision in the evidence base.**

---

## 5. Evaluation metrics for a verification layer

- **Faithfulness / answer relevance / context relevance** — RAGAS `[R] REF-36`; LLM-as-judge caveats: fine-tuned specialist judges outperform few-shot LLM judges (RAGBench `[R] REF-38`); LLM-as-judge results are vulnerable to position/length artifacts (GraphRAG audit `[O→third-party] REF-75`) — **use controlled order/lengths and human-validated golden sets.**
- **Citation quality** — ALCE's citation-precision/recall metrics `[R] REF-32`.
- **Factual precision** — FActScore `[R] REF-33`.
- **Retrieval quality** — recall@k, context relevance, chunk-attribution/utilization sweeps `[O→third-party] REF-79`.
- **Evaluation process** — Auepora unified process (target → dataset → metric) `[R] REF-37`.

**Project rule:** every verification feature ships with a metric and a golden set (a small human-verified corpus of Q&A + claims). If a feature cannot be measured, it cannot be trusted.

---

## 6. Failure modes specific to verification

1. **False confidence:** LLM self-reports of accuracy are unreliable; never derive confidence from the generator alone — derive it from evidence structure (corroboration, source tier, contradiction count).
2. **Citation hallucinations:** links attached to claims the source doesn't support (observed in Deep Research `[O] REF-08`; measurable via ALCE `[R] REF-32`) — verify each citation's *content*, not just its presence.
3. **Judge bias:** LLM-judge evals bias toward position/length `[O→third-party] REF-75` — randomize order, control length, validate against humans.
4. **Stale verification:** claims verified against old source versions go stale — re-verify on re-index; timestamp verification state.
5. **Gaming by source quality:** low-tier sources (blogs, forums) can out-corroborate; weight by tier, not just count.
6. **Extraction drift:** auto-extracted claims drift from source text (Elicit's conflation problems `[O→third-party] REF-73`) — sentence-level anchors + human spot-check.
7. **Prompt injection:** when agents browse open web, page content can steer claims (documented risk for Deep Research `[D] REF-08`) — treat web content as untrusted data; sandbox; evaluate injection resistance.

---

## 7. Distinguishing fact / evidence / inference / opinion / speculation / unknown in practice

Recommended system workflow:

```
GENERATED STATEMENT
   │
   ├─► Is it anchored to source passage(s)? ── no ──► flag UNGROUNDED (review or drop)
   │
   ├─► Do sources state it directly? ── yes ──► label EVIDENCE (or FACT if corroborated)
   │                                     ── no ──► is it derived? ──► label INFERENCE + show chain
   │
   ├─► Do sources contradict it? ── yes ──► surface contradiction; lower confidence
   │
   └─► Is it a judgment/hypothesis? ──► label OPINION / SPECULATION
```

This mirrors FActScore's atomic decomposition `[R] REF-33` and scite's typed classification `[O→third-party] REF-73`, and it is implementable as a deterministic post-processing stage plus (optionally) a verifier agent `[D] REF-04`.
