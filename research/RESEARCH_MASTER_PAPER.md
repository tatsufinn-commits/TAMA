# RESEARCH MASTER PAPER — AI Research Scaffolding & Knowledge Systems

**Technical research and architectural intelligence document**
**Project:** Independent AI-powered research & knowledge environment (exploratory phase — no implementation)
**Compiled:** 2026-08-10 | **Status:** Research complete; recommendations evidence-weighted; gaps explicitly identified

**Evidence taxonomy used throughout:** `[D]` DOCUMENTED (official) · `[O]` OBSERVED (public behavior) · `[I]` IMPLEMENTED (open source) · `[R]` RESEARCH-SUPPORTED (academic/technical) · `[N]` INFERRED (technical inference) · `[S]` SPECULATIVE (unverified hypothesis). Reference keys (e.g., REF-04) point to REFERENCES.md.

---

## 1. Executive Summary

This study investigated the ecosystem of AI-powered research and knowledge systems — products, academic research, open-source implementations, engineering publications, and technical discourse — to identify what is genuinely known about how such systems work, what only appears to work, and which architectural ideas are defensible for a new independent project.

**The five findings that matter most:**

1. **Source grounding is the highest-value trust mechanism available.** NotebookLM's user-corpus grounding `[D] REF-01/02` structurally eliminates the dominant hallucination class, and the measurement literature confirms ungrounded generation is unreliable (ChatGPT ≈58% atomic-fact precision `[R] REF-33`; best models lack complete citation support ~50% of the time `[R] REF-32`). A new project should make the *source universe + provenance chain* its core data model.

2. **Retrieval quality is an engineering problem with measured solutions.** Hybrid (dense+sparse) retrieval with reranking is the production consensus `[R] REF-20, [O→third-party] REF-79`; Anthropic's contextual chunk enrichment is the single best documented per-dollar improvement (49% retrieval-failure reduction; ~67% with reranker; ~$1.02/M tokens) `[D] REF-06`. Parse quality (Docling-class layout-aware parsing `[I] REF-56`) and structure-aware chunking are prerequisites, not niceties.

3. **The strongest documented research-agent architecture is an orchestrator-worker with isolated contexts, memory-persisted plans, an artifact pattern, and a separate citation pass** (Claude Research `[D] REF-04`). Its economics — token spend explains ~80% of performance variance; ~15× token cost — define when such architecture is worth it. Meanwhile, systematic evidence shows homogeneous multi-agent debate does NOT reliably beat single-agent baselines `[R] REF-30` — "more agents" is not a quality strategy.

4. **Verification must be a separate, first-class layer with its own evaluation.** Citation presence ≠ citation support `[R] REF-32`; dedicated verification passes `[D] REF-04`, atomic-fact checks `[R] REF-33`, typed support/contradict edges `[O→third-party] REF-73`, and human verification affordances are the recurring features of trustworthy systems.

5. **For a study-oriented product, the evidence-backed learning loop is active recall + spaced repetition** (retrieval practice ≈61% vs 40% retention at 1 week `[R] REF-39`; spaced retrieval doubles retention `[R] REF-40`; positive results for AI-generated Q&A cards + spacing `[R] REF-43`). Passive consumption features (audio/video overviews) are engaging but have no learning-gain evidence — they should not be the product's core.

**Recommendation posture (detail in RECOMMENDATIONS.md):** MUST HAVE — source-grounded corpus, provenance chain, hybrid retrieval + reranking + contextual enrichment, structure-aware ingestion, verification layer, evaluation harness, claim taxonomy. SHOULD HAVE — active-recall study loop, plan-first research with HITL, contradiction surfacing, notebook memory, MCP. COULD HAVE — agentic breadth mode, HippoRAG/GraphRAG graph layers, audio/video, extraction tables. EXPERIMENTAL — reflection tokens, heterogeneous agent review, tiered agent memory. AVOID — homogeneous debate, cargo-cult vector DBs/graphs, unmeasured systems, unchecked autonomy, citation trust, unprovenanced memory.

---

## 2. Research Objectives

Per the directive: (a) identify systems resembling/overlapping an advanced AI-powered research and knowledge environment; (b) reconstruct how they work from credible public evidence, respecting proprietary boundaries; (c) classify every significant claim by evidence strength; (d) study the scaffolding — architectures, workflows, retrieval, verification, memory, agent patterns — rather than private implementations; (e) produce evidence-weighted recommendations for the new project; (f) explicitly list what could not be determined.

## 3. Scope & Methodology

**Scope:** 30+ systems and frameworks across six categories — flagship products (NotebookLM, Perplexity, ChatGPT Search/Deep Research, Claude Research, Gemini Deep Research, Elicit, Consensus, scite), open-source research systems (STORM, GPT Researcher, HippoRAG, GraphRAG), retrieval frameworks (RAG lineage, Self-RAG, CRAG, contextual retrieval), memory systems (MemGPT/Letta, Mem0, Generative Agents), study/learning tools (Khanmigo, Anki/FSRS, Quizlet, StudyFetch, study modes of major assistants), and PKM tools (Notion AI, Obsidian, Mem, Reflect, Roam, Logseq).

**Method:** 25+ targeted web searches across official documentation, arXiv/ACL literature, GitHub, and credible third-party analysis; every source logged in REFERENCES.md with an evidence class; claims about proprietary systems reconstructed via the mandatory three-layer structure (PUBLICLY ESTABLISHED / PLAUSIBLE TECHNICAL INTERPRETATION / UNKNOWN); conflicts between sources recorded; second-pass QC applied per the directive's checklist (Section 30).

**Exclusions:** implementation design (explicitly deferred); market/business analysis (identified as a gap); user studies (identified as a gap).

## 4. Evidence Classification

Six classes per directive: **DOCUMENTED** (explicit official statements), **OBSERVED** (reproducible public behavior), **IMPLEMENTED** (open source), **RESEARCH-SUPPORTED** (academic/technical), **INFERRED** (reasonable inference — never presented as fact), **SPECULATIVE** (unverifiable hypothesis). Third-party analyses are additionally labeled as such. **Notable discipline decisions:** the "13% vs 40%" NotebookLM hallucination claim is recorded but not used as fact (primary source unverifiable, REFERENCES.md Limitations); product tier/limit tables are marked time-sensitive; conflicting benchmark results (PDF parsers) are resolved as "measure on your own corpus."

## 5. Definitions

| Term | Definition used in this study |
|---|---|
| **Scaffolding** | Non-model machinery around LLMs: control flow, memory, tools, verification, human oversight |
| **Workflow** | Code-controlled orchestration of LLM/tool calls `[D] REF-05` |
| **Agent** | Model-controlled loop choosing tools from environment feedback `[D] REF-05` |
| **RAG** | Retrieval-Augmented Generation: conditioning generation on retrieved passages `[R] REF-21` |
| **Source grounding** | Constraining answers/artifacts to a defined corpus with citations `[D] REF-01` |
| **Provenance** | Claim→passage→source→metadata linkage enabling verification and invalidation |
| **Claim layer** | Knowledge representation where claims are first-class objects with typed evidence edges |
| **Verification pass** | Separate stage checking claims/citations against sources `[D] REF-04` |
| **Artifact pattern** | Subagents persist large outputs externally; pass lightweight references `[D] REF-04` |
| **Isolation boundary** | What each agent knows about others; the key multi-agent design decision `[D] REF-04/07` |
| **Active recall / spacing** | Retrieval practice and distributed review — the two best-evidenced learning techniques `[R] REF-39–42` |

## 6. Ecosystem Overview

```
PRODUCT-LEVEL SYSTEMS                          FOUNDATIONAL/OPEN-SOURCE
┌───────────────────────────────────┐         ┌───────────────────────────────────┐
│ User-corpus grounding:            │         │ Retrieval: RAG lineage, Self-RAG, │
│   NotebookLM (flagship study/     │         │   CRAG, contextual retrieval,     │
│   research notebook), StudyFetch, │         │   ColBERT/late interaction        │
│   Elicit (literature extraction)  │         │ Research pipelines: STORM, GPT    │
├───────────────────────────────────┤         │   Researcher, Deep Research API   │
│ Open-world agentic research:      │         │ Memory: MemGPT/Letta, Mem0,       │
│   ChatGPT Deep Research,          │         │   Generative Agents               │
│   Gemini Deep Research,           │         │ Graphs: GraphRAG, HippoRAG,       │
│   Claude Research, Perplexity DR  │         │   LightRAG                        │
├───────────────────────────────────┤         │ Parsing: Docling, MinerU, Marker, │
│ Evidence synthesis: Consensus,    │         │   Unstructured                    │
│   scite (citation intelligence)   │         │ Frameworks: LangGraph, CrewAI,    │
├───────────────────────────────────┤         │   AutoGen, OpenAI Agents SDK, MCP │
│ Study/learning: Khanmigo, Quizlet,│         │ Vector stores: Chroma, pgvector,  │
│   Anki/FSRS, RemNote, study modes │         │   Qdrant, Weaviate, Milvus        │
│ PKM: Notion AI, Obsidian, Mem,    │         │ Eval: RAGAS, RAGBench, ALCE,      │
│   Reflect, Roam, Logseq           │         │   FActScore                       │
└───────────────────────────────────┘         └───────────────────────────────────┘
```

**Two product families solve different problems:** *user-corpus grounding* (trust via scope restriction) and *open-world agentic research* (breadth via autonomous search). The most defensible product concept combines both, with trust semantics that differ per mode.

## 7. Comparative System Analysis

Full standardized profiles (28 fields each) in **SYSTEM_COMPARISON.md**. Highlights:

| System | Core pattern | Documented/inferred | Key lesson |
|---|---|---|---|
| NotebookLM | Source-grounded notebook + artifact studio | `[D]` features/limits; internals `[N/S]` | Grounding UX; verification affordances; residual hallucination |
| Claude Research | Orchestrator-workers + citation pass | `[D]` architecture (rare) | The multi-agent blueprint; ~15× cost |
| ChatGPT Deep Research | RL-trained browsing agent + Python sandbox | `[D]` system card | Safety documentation standard; citation errors observed |
| Gemini Deep Research | Plan-review HITL + autonomous research | `[D]` product facts; internals `[S]` | Editable-plan UX is the best HITL point |
| Perplexity | Snippet-context RAG at scale | `[O→third-party]` (Vespa, Sonar) | Snippet extraction keeps cost/latency low; model-agnostic |
| Elicit | Semantic search + structured extraction tables | `[O→third-party]` | Sentence citations; sensitivity ~39.5% → multi-source lesson |
| Consensus | Evidence synthesis + confidence/contradiction meters | `[O→third-party]` | Contradiction surfacing is a feature |
| scite | Typed citation edges (support/contradict/mention) | `[O→third-party]` | Claim-level knowledge representation at scale |
| STORM | Perspective-guided Q&A → outline → article | `[R/I]` | Question generation is the core skill |
| GPT Researcher | Planner + crawler agents + publisher | `[I]` | Minimal extensible deep-research architecture |

## 8. AI Research Architectures

Detail in **RESEARCH_ARCHITECTURES.md**. The convergent deep-research loop:

```
PLAN (persisted externally [D REF-04]; user-editable [D REF-11])
  → DECOMPOSE into independent threads
  → PARALLEL isolated gatherers (own contexts, artifact pattern [D REF-04])
  → REFLECT (coverage; new waves [D REF-04])
  → SYNTHESIZE
  → SEPARATE VERIFICATION/CITATION PASS [D REF-04]
  → REPORT
```

Key evidence: RAG paradigms (Naive→Advanced→Modular) `[R] REF-20`; Claude Research documentation `[D] REF-04`; STORM two-stage `[R] REF-26`; GPT Researcher planner/executor `[I] REF-51`; long-context-vs-RAG tension `[R] REF-35`; GraphRAG (sensemaking, expensive, eval-caveated) `[R] REF-24, [O→third-party] REF-75`; HippoRAG (multi-hop at 10–30× lower cost) `[R] REF-25`.

## 9. AI Scaffolding Patterns

Detail in **AI_SCAFFOLDING_PATTERNS.md**. High-value roles: planning, retrieval, source evaluation (CRAG-style), verification, citation attachment, synthesis. Situational: critic (needs clear rubric), memory agents, hierarchical stacks. Low value: homogeneous debate. Control structures ranked by reliability/cost: single call > workflows > orchestrator-workers > autonomous loops. Every extra LLM call compounds error and cost `[D] REF-05`; most tasks are over-served by agents.

## 10. Information Retrieval

- **Hybrid dense+sparse + reranking** is the production consensus `[R] REF-20, [O→third-party] REF-79`; typical: k=50–200 candidates, rerank top 5–20 `[O→third-party] REF-79`.
- **Contextual enrichment** (LLM chunk-context prepended at ingest): 49% retrieval-failure reduction; ~67% with reranker; ~$1.02/M tokens `[D] REF-06`; community reimplementations `[I] REF-60`; chunks 400–1000 tokens.
- **Structure-aware chunking** beats fixed-size for documents `[O→third-party] REF-79`; tables/figures require special handling `[I] REF-56`.
- **Late interaction (ColBERT)** wins multilingual/code (+8–14 recall@5) at 2–10× index cost `[R] REF-45`.
- **Lost-in-the-middle:** 20→50 docs ≈ +1–1.5% `[R] REF-34` — precision over volume; deliberate context construction.
- **Retrieval-side substitution:** HippoRAG-style graph retrieval replaces iterative agentic search for multi-hop at 10–30× lower cost `[R] REF-25`.
# RESEARCH MASTER PAPER — Part 2 (Sections 11–23)

## 11. RAG & Knowledge Retrieval

**RAG lineage** `[R] REF-20`: Naive (retrieve-then-generate; fragile) → Advanced (pre-retrieval rewriting, hybrid, reranking, compression) → Modular (adaptive retrieval, routing, memory, verification modules). Modern research agents are Modular RAG with tool loops `[D] REF-04`.

**Adaptive retrieval:** Self-RAG reflection tokens decide when to retrieve and critique support `[R] REF-22`; CRAG's retrieval evaluator corrects/falls back `[R] REF-23`; SELF-ROUTE routes RAG vs long-context `[R] REF-35`. All are PROMISING — adopt after baseline measurement.

**RAG vs long-context** `[R] REF-35`: RAG can lag long-context on some benchmarks, but predictions overlap heavily; hybrid routing matches at lower cost. Decision rule for the project: *start with the simplest option that evaluation supports*; RAG's structural advantages (cost, updates, attribution, scope) justify it in most grounded-product cases.

**Graph-augmented retrieval:** GraphRAG for global sensemaking (expensive indexing; judge-bias caveat `[O→third-party] REF-75`); HippoRAG for multi-hop (PPR over KG; 10–30× cheaper than iterative retrieval) `[R] REF-25`. Both SITUATIONAL.

## 12. Knowledge Representation

Detail in **KNOWLEDGE_ARCHITECTURE.md**. Core thesis: separate the **retrieval-ready** layer (vector + sparse index over chunks) from the **verification-ready** layer (claims with typed evidence edges), linked through provenance (claim→passage→source→metadata/version). This two-layer design mirrors how the most reliable studied systems are arranged (NotebookLM citations `[D] REF-01`; scite edges `[O→third-party] REF-73`; FActScore atoms `[R] REF-33`; Claude Research's separate citation pass `[D] REF-04`). Relational/SQL backbone for provenance; vector index for semantics; graphs only when measurement justifies them; memory as a separate tiered concern (Section 16).

## 13. Document Ingestion

- **Parsing is the hidden bottleneck:** layout-aware parsing (Docling, MIT, DocLayNet-trained; ~97.9% tables reported) `[I] REF-56`; MinerU strongest published accuracy; Marker fastest; Unstructured Apache-2.0 `[I] REF-57`; benchmarks conflict across corpora → **bake-off on the project's own documents** `[O→third-party] REF-57`.
- **Preserve structure:** hierarchy for chunking; tables as structured objects; figure captions linked; metadata (title/authors/DOI/URL/date) as provenance.
- **Media:** transcription for audio/video with transcript-anchored citations (NotebookLM `[D] REF-03`; Otter.ai `[O] REF-76`); OCR pipeline for scanned PDFs `[I] REF-56`.
- **Pipeline shape:** format detection → layout-aware parse → structure tree → metadata → structure-aware chunks (+ contextual enrichment `[D] REF-06`) → dual index.

## 14. Source Grounding & Citations

- **Grounding by construction** (user corpus only; decline outside it) is NotebookLM's core `[D] REF-01/02` and the strongest trust pattern studied.
- **Citations are the product of a pipeline, not a decoration:** generation with citation markers → dedicated verification pass (Claude Research CitationAgent `[D] REF-04`) → user-facing citation cards linking to passages `[D] REF-01`.
- **Measured reality:** best models lack complete citation support ~50% of the time (ELI5) `[R] REF-32`; ChatGPT 58% atomic-fact precision `[R] REF-33`; citation errors observed in Deep Research `[O] REF-08`; NotebookLM residual hallucination reported `[O] REF-71`. **Never trust citation presence; verify content.**
- **ALCE metrics** (citation precision/recall, fluency, correctness) provide the measurement machinery `[R] REF-32`.

## 15. Research Verification

Detail in **SOURCE_VERIFICATION.md**. Core design:

```
statement → anchored to passages? (else UNGROUNDED flag)
  → directly stated? → EVIDENCE/FACT (corroboration-weighted)
  → derived? → INFERENCE + reasoning chain
  → contradicted? → surface contradiction, lower confidence (Consensus/scite pattern [O→third-party] REF-73)
  → judgment? → OPINION/SPECULATION labels
  → unresolvable? → UNKNOWN (decline-to-answer pattern [D] REF-01)
```

Mechanisms, evidence-ordered: inline passage citations (low complexity) → sentence-level links (Elicit) → dedicated verification pass (Claude Research) → atomic-fact checks (FActScore) → typed edges (scite) → contradiction/consensus meters (Consensus) → human spot-check UX. **Evaluation:** RAGAS metrics `[R] REF-36`; ALCE `[R] REF-32`; FActScore `[R] REF-33`; judge-bias controls `[O→third-party] REF-75, [R] REF-38`; golden sets.

## 16. AI Memory

Detail in **AI_MEMORY_RESEARCH.md**. Findings:
- **Corpus memory** (notebook pattern): sources + notes + progress persisted per project — the right default for a study tool `[D] REF-01`.
- **Artifact memory** (plans/findings external to context): proven for long research runs `[D] REF-04`.
- **Self-managed tiered memory** (MemGPT/Letta): powerful but complex; long-horizon memory is an open problem (Mem0 ≈49.0% LongMemEval `[I] REF-54`).
- **Memory stream + reflection** (Generative Agents): recency+importance+relevance scoring; ablations show all components matter `[R] REF-28`.
- **Rules:** remember plans, sources, claims-with-provenance, learning progress; do not store unprovenanced summaries or raw transcripts; invalidation via recomputation from sources; contradictions surface, never silently overwrite; **the learning-state memory (spaced-repetition state) is the only memory type with direct learning-gain evidence** `[R] REF-39–43`.

## 17. Agent Architecture

- **Agents vs workflows:** workflows (code-controlled) are cheaper, more predictable, more debuggable; agents are for open-ended tasks with verifiable feedback `[D] REF-05`.
- **Documented production blueprint (Claude Research)** `[D] REF-04`: orchestrator-worker; isolated subagent contexts; memory-persisted plan before truncation; artifact pattern (subagents → filesystem, light refs back); condensed returns; iterative waves; separate citation pass; effort-scaling rules in prompts; token spend ≈ 80% of variance on BrowseComp; ~15× token cost; 90.2% internal-eval gain.
- **Tool design:** tool-description quality is paramount (MCP servers) `[D] REF-04/10`; prefer specialized tools; parallel tool calls within subagents `[D] REF-04`.
- **Session-bounded vs long-running:** production systems need different shapes (state across sessions; operational containment) — Anthropic's own analysis `[D] REF-81`.

## 18. Multi-Agent Research

Detail in **MULTI_AGENT_RESEARCH.md**. The honest evidence summary:
- Orchestrator-workers with parallel isolation: **positive, documented** `[D] REF-04`.
- Same-model debate: **negative overall** — fails to reliably beat CoT/self-consistency `[R] REF-30`; gains modest and task-limited `[R] REF-31`; original positive results `[R] REF-29` were not robust to systematic re-evaluation; **heterogeneity recovers value** (Heter-MAD `[R] REF-30`; A-HMAD).
- Verdict: multi-agent is a *token-spending strategy*, justified only by task decomposition + isolation + verifiable outputs + budget tolerance. Do not default to it; measure against single-agent baselines on the project's own tasks.

## 19. Human-in-the-Loop Design

Evidence-backed touchpoints:
1. **Plan review before execution** — Gemini Deep Research `[D] REF-11`; cheapest, highest-leverage control.
2. **Source selection at ingestion** — NotebookLM `[D] REF-01`; user-curated scope is the grounding mechanism.
3. **Verification affordances on every output** — citation cards/passage viewers `[D] REF-01`; spot-check guidance (≥20% for extraction-grade tools) `[O→third-party] REF-73`.
4. **Approval checkpoints in workflows** — LangGraph-class HITL `[O→third-party] REF-58`.
5. **Correction loops feeding evaluation sets** — eval-driven development `[D] REF-08`.
Design principle: HITL where verification is hard and cost is low (plans, citations, claim labels); automation where verification is easy (parsing, indexing, retrieval, scheduling).

## 20. Research Workflow Design

The directive's canonical workflow (QUESTION → SEARCH → SOURCE DISCOVERY → VALIDATION → INGESTION → EXTRACTION → ORGANIZATION → RETRIEVAL → ANALYSIS → CROSS-SOURCE COMPARISON → SYNTHESIS → CITATION → VERIFICATION → FINAL OUTPUT) maps onto the studied evidence as follows:

| Stage | Evidence-backed approach | Source |
|---|---|---|
| Question | Perspective-guided multi-question decomposition (STORM's core insight) | `[R] REF-26` |
| Search/Discovery | Multi-source search (single-database sensitivity is ~39.5% — Elicit lesson); open-web + user corpus modes | `[O→third-party] REF-73` |
| Source validation | Source-tier ranking + provenance metadata + corroboration counts | REFERENCES.md hierarchy; `[O→third-party] REF-73` |
| Ingestion | Layout-aware parsing; structure-aware chunks; contextual enrichment | `[I] REF-56, [D] REF-06` |
| Extraction | Sentence-anchored extraction with human spot-check | `[O→third-party] REF-73` |
| Organization | Notebook/source/passage/claim layers; typed edges for conflicts | `[D] REF-01, [O→third-party] REF-73` |
| Retrieval | Hybrid + rerank; adaptive retrieval when measured | `[R] REF-20/22, [D] REF-06` |
| Analysis/Synthesis | Plan-first agentic loop; outline-first writing (STORM); separate synthesis stage | `[D] REF-04, [R] REF-26` |
| Cross-source comparison | Contradiction/consensus surfacing; confidence from corroboration | `[O→third-party] REF-73` |
| Citation | Citation markers → dedicated verification pass → citation cards | `[D] REF-04/01` |
| Verification | Atomic-fact checks; claim taxonomy labels; user spot-check | `[R] REF-33` |
| Final output | Multi-format artifacts; study artifacts with active-recall loop | `[D] REF-01, [R] REF-39–43` |

## 21. Security & Privacy

- **Data handling:** NotebookLM education terms — no human review, no training on uploaded content (core services) `[D] REF-02`; posted privacy terms for the consumer product `[D] REF-12`. For an independent project, local-first/self-hosted storage is the strongest privacy posture (PKM portability lesson `[O→third-party] REF-78`).
- **Prompt injection:** documented risk for browsing agents `[D] REF-08` — treat web content as untrusted data; sandboxed tools; injection evaluations in CI.
- **Provenance as security:** source metadata prevents impersonation of claims; typed edges expose tampering surfaces.
- **Access control:** enterprise connectors raise authorization questions (Claude Research Workspace integrations `[D] REF-04`) — permissions must be enforced at retrieval, not just generation.

## 22. Failure Modes

Catalog in **RESEARCH_ARCHITECTURES.md §9** and **ANTI_PATTERNS.md**. The ten most important for this project:
1. Retrieval misses (mitigate: hybrid + contextual enrichment `[D] REF-06`)
2. Generation drift from sources (mitigate: verification pass `[D] REF-04`, atomic-fact gates `[R] REF-33`)
3. Citation fabrication (mitigate: content-verify citations `[R] REF-32`)
4. Lost-in-the-middle context misuse (mitigate: context construction discipline `[R] REF-34`)
5. Agent cost blowups (mitigate: effort scaling, budgets, routing `[D] REF-04/05`)
6. Compounding agent errors (mitigate: workflows over agents `[D] REF-05`)
7. Judge/eval bias (mitigate: controlled evals, golden sets `[O→third-party] REF-75`)
8. Parse degradation on messy documents (mitigate: layout-aware parsing + corpus bake-off `[I] REF-56/57`)
9. Stale knowledge (mitigate: versioned provenance + recomputation)
10. Prompt injection via browsed content (mitigate: sandboxing + injection evals `[D] REF-08`)

## 23. Performance & Scalability

- **Token economics:** tokens ≈ quality (`[D] REF-04` — 80% BrowseComp variance); architecture = token-budget strategy; multi-agent research ≈ 15× chat cost; contextual enrichment ≈ $1.02/M tokens at ingest.
- **Vector stores by scale:** <500k vectors Chroma/pgvector; 500k–50M Qdrant (Weaviate for native hybrid); 100M+ Milvus `[O→third-party] REF-59` — right-size, don't over-provision.
- **Graph retrieval shifts cost:** HippoRAG = ingest-heavy, query-cheap `[R] REF-25`; GraphRAG = LLM-indexing-heavy `[R] REF-24`.
- **Frameworks:** LangGraph for durable stateful flows with HITL; CrewAI for role-based prototypes; AutoGen in maintenance mode (Microsoft Agent Framework); OpenAI Agents SDK for lightweight; MCP convergence `[O→third-party] REF-58`.
- **Latency budgets:** retrieval stacks sized to use case (e.g., <1.5s internal docs with hybrid k=100 + rerank top-20; research-grade can afford k=200 + listwise) `[O→third-party] REF-79`.
# RESEARCH MASTER PAPER — Part 3 (Sections 24–31)

## 24. Comparative Findings

1. **Grounding scope is the trust axis.** Products rank by how strictly answers are confined to verified scopes: NotebookLM (user corpus, strict) > Elicit (papers, sentence-cited) > Consensus/scite (literature, typed) > answer engines (open web) > raw chatbots (parametric). Trust follows scope restriction — the design implication is to make scope explicit and user-controlled.
2. **Documentation asymmetry is extreme.** Claude Research is the only proprietary research agent with an official engineering write-up `[D] REF-04`; everything else about proprietary internals is INFERRED/SPECULATIVE and must stay labeled. Open-source systems (STORM, GPT Researcher, HippoRAG, GraphRAG, Docling, Mem0, Letta, frameworks) supply the implementable knowledge.
3. **Citation presence ≠ citation quality.** The measurement literature (ALCE `[R] REF-32`, FActScore `[R] REF-33`) and observed product behavior converge: every cited-output system errs; the differentiators are verification passes and user affordances.
4. **The best documented retrieval upgrade is contextual enrichment** `[D] REF-06` — cheap, measurable, and reproducible `[I] REF-60`.
5. **Learning-effectiveness evidence is concentrated in two techniques** — retrieval practice and spacing `[R] REF-39–42` — and in AI *generating practice material* from user sources `[R] REF-43`. Most product study features (audio, summaries, videos) lack efficacy evidence.
6. **Multi-agent value is task-shape-dependent:** parallel isolated gatherers = documented win `[D] REF-04`; homogeneous debate = documented no `[R] REF-30/31`.
7. **Evaluation infrastructure exists and must be used:** RAGAS `[R] REF-36`, ALCE `[R] REF-32`, FActScore `[R] REF-33`, RAGBench `[R] REF-38`, with judge-bias controls `[O→third-party] REF-75`.

## 25. Design Patterns

Full catalog with value labels in **DESIGN_PATTERNS.md** (P1–P20). HIGH VALUE: source-grounded corpus (P1), hybrid+rerank (P2), contextual enrichment (P3), structure-aware parsing (P4), provenance chain (P5), separate verification pass (P6), plan-first + plan memory (P7), orchestrator-workers conditional (P8), Socratic study loop (P12), contradiction surfacing (P13), notebook memory (P15), eval harness (P17), MCP (P18). PROMISING: adaptive retrieval (P9), atomic-fact gate (P14). SITUATIONAL: graph multi-hop (P10), community summaries (P11), tiered agent memory (P16), model-agnostic routing (P19), audio/video (P20).

## 26. Anti-Patterns

Full catalog in **ANTI_PATTERNS.md** (A1–A16). Headline items: architectural cargo culting (A1); multi-agent/debate by default (A2); no evaluation harness (A3); trusting citations' existence (A4); context stuffing (A5); fixed-size chunking on structured docs (A6); ignoring parse quality (A7); unprovenanced AI memory (A8); undefended browsing (A9); single-database discovery (A10); embeddings-only storage (A11); LLM-judge-only evals (A12); over-graphing small corpora (A13); full autonomy without checkpoints (A14); treating community claims as fact (A15); passive-consumption study design (A16).

## 27. Evidence-Based Recommendations

Full detail with evidence matrix in **RECOMMENDATIONS.md**. Summary:

- **MUST HAVE:** source-grounded corpus model (R1); provenance chain claim→passage→source (R2); hybrid retrieval + rerank + contextual enrichment (R3); structure-aware ingestion (R4); verification as first-class layer with separate pass (R5); evaluation harness with golden sets (R6); claim taxonomy labels in UI (R7).
- **SHOULD HAVE:** Socratic study loop with spaced repetition (R8); plan-first research with editable plans (R9); contradiction & consensus detection (R10); multi-perspective question generation (R11); notebook-scoped memory + progress state (R12); MCP tool integration (R13); evidence-derived confidence scoring (R14).
- **COULD HAVE:** open-world research mode (C1); orchestrated parallel subagents per documented blueprint (C2); HippoRAG multi-hop (C3); GraphRAG sensemaking at scale (C4); audio/video overviews (C5); scite-style citation intelligence (C6); Elicit-style extraction tables (C7); FActScore gates (C8); adaptive retrieval (C9).
- **EXPERIMENTAL:** reflection-token self-critique (E1); heterogeneous agent review (E2); tiered self-managed memory (E3); VLM figure extraction (E4); memory stream + reflection (E5); late-interaction retrieval (E6); automated contradiction detection (E7).
- **AVOID:** homogeneous debate; unmeasured components; cargo-culted vector DBs/graphs; full autonomy without checkpoints; citation trust without content verification; fixed-size chunking/raw-PDF ingestion; LLM-judge-only evals; unprovenanced memory; inference-presented-as-fact; passive-consumption-only study features.

**Architectural posture (evidence-weighted, still to be validated at design time):** a layered grounded-knowledge environment — ingestion (layout-aware parsing → structure-aware chunks → contextual enrichment → dual index) → retrieval (hybrid + rerank, notebook-scoped) → generation (grounded, citation-marked) → verification (separate pass, claim taxonomy, atomic-fact gates) → study layer (active-recall + spaced repetition over the corpus) → memory (notebook persistence + plan artifacts) — with an evaluation harness wrapping every layer and an optional agentic open-world research mode clearly separated from the grounded mode.

## 28. Research Gaps

Full table in **RESEARCH_GAPS.md**. Highest-priority gaps: (1) proprietary internals (NotebookLM/Perplexity/Deep Research variants — resolution unlikely, behavioral testing possible); (2) learning-efficacy evidence for grounded-AI study tools (none exists — high-value to generate); (3) Khanmigo RCT results (J-PAL, expected mid-2026 — track); (4) grounding-failure rates at scale (no public measurement); (5) claim-level contradiction detection accuracy (no public benchmark); (6) parser rankings on real mixed corpora (must measure in-project); (7) long-context-model retrieval-less performance on study-scale corpora (must benchmark at design time); (8) the "13%/40%" NotebookLM hallucination claim (primary source unverifiable — treat as unverified).

## 29. Future Research

1. **Project-specific retrieval bake-off** (200–500 golden Q&A; long-context vs hybrid RAG vs contextual-enriched RAG) — resolves the RAG-vs-long-context decision for the actual corpus.
2. **Citation-verification eval set** (~100 human-labeled claims) — calibrates the verification layer and contradiction detector.
3. **Parser bake-off** on real documents (Docling/MinerU/Marker/Unstructured).
4. **Active-recall-loop user study** (n≈20–40) comparing passive vs active study artifacts for retention.
5. **Track efficacy literature**: J-PAL Khanmigo RCT (mid-2026); any NotebookLM-class grounded-study RCTs; FSRS long-term studies.
6. **Episodic research memory experiment** — does persisting past research runs measurably improve future runs?
7. **Heterogeneous-agent review experiment** — the only debate variant with positive evidence, tested on synthesis quality vs single-agent baseline.

## 30. Conclusion

The ecosystem study answers the directive's questions:

- **What already exists?** A mature, layered ecosystem: grounded notebooks (NotebookLM-class), literature tools (Elicit/Consensus/scite-class), agentic deep research (all four major labs), open pipelines (STORM/GPT Researcher-class), memory systems, graph-RAG variants, and an evaluation literature.
- **How does it work / what is known?** Claude Research is the documented reference for agentic research `[D] REF-04`; RAG surveys and adaptive-retrieval papers define the retrieval design space `[R] REF-20/22/23`; contextual retrieval defines the best cheap retrieval upgrade `[D] REF-06`; the citation/factuality measurement literature defines verification `[R] REF-32/33`; learning science defines the study layer `[R] REF-39–43`.
- **What is only inferred?** Nearly all proprietary internals outside Claude Research — consistently labeled INFERRED/SPECULATIVE throughout this document.
- **What doesn't work?** Homogeneous multi-agent debate `[R] REF-30`; unverified citation generation `[R] REF-32`; judge-biased evaluation `[O→third-party] REF-75`; cargo-culted complexity.
- **What architecture is justified?** A source-grounded, provenance-linked, hybrid-retrieved, separately-verified layered system with an active-recall study loop and an evaluation harness — with agentic breadth, graphs, and memory as measured additions, never defaults.

The research supports building a genuinely useful system — one whose answers users can verify, whose scope users control, whose study features rest on learning science, and whose claims are distinguished from inferences — rather than an impressive one. **Research phase complete. Design phase may begin from these evidence-weighted recommendations; implementation remains out of scope until then.**

## 31. References

All sources with evidence classes, URLs, and per-source takeaways: **REFERENCES.md** (REF-01…REF-82, sections A–D: official documentation, academic research, open-source implementations, third-party analysis; plus source hierarchy and evidence-base limitations).

Key sources by cluster:
- **Grounded notebooks:** REF-01/02/03/12/70/71 (NotebookLM), REF-76 (study tools)
- **Agentic research:** REF-04/05/07/81 (Anthropic), REF-08/09 (OpenAI), REF-11 (Gemini), REF-51/74 (GPT Researcher), REF-26/50 (STORM)
- **Retrieval:** REF-20/21 (RAG), REF-06/60 (contextual retrieval), REF-34/35 (long-context), REF-45 (late interaction), REF-79 (practical guides), REF-59 (vector stores)
- **Verification & citations:** REF-22/23 (adaptive), REF-32 (ALCE), REF-33 (FActScore), REF-73 (Elicit/Consensus/scite), REF-36/37/38 (evaluation)
- **Knowledge representation:** REF-24/25/52/53 (GraphRAG/HippoRAG), REF-78 (PKM)
- **Memory:** REF-27/55 (MemGPT/Letta), REF-28 (Generative Agents), REF-54 (Mem0)
- **Multi-agent:** REF-29/30/31 (debate evidence), REF-04/07 (orchestrator evidence)
- **Ingestion:** REF-56/57 (parsers)
- **Learning science:** REF-39/40/41/42/43/44, REF-77 (Khanmigo)
- **Integration:** REF-10 (MCP), REF-58 (frameworks), REF-82 (domain survey)
