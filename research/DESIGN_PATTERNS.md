# DESIGN_PATTERNS — Recurring Patterns in AI Research & Knowledge Systems

**Compiled:** 2026-08-10 | **Evidence taxonomy:** `[D]` DOCUMENTED, `[O]` OBSERVED, `[I]` IMPLEMENTED, `[R]` RESEARCH-SUPPORTED, `[N]` INFERRED, `[S]` SPECULATIVE | Reference keys → REFERENCES.md
**Value labels:** HIGH VALUE / PROMISING / SITUATIONAL / LOW VALUE / ANTI-PATTERN

---

## Pattern catalog

### P1. Source-grounded corpus (notebook) — **HIGH VALUE**
- **What:** User-curated source universe; all Q&A and artifacts grounded in it; answers can decline outside it. NotebookLM `[D] REF-01/02`.
- **Why it exists:** eliminates the dominant hallucination class (unsupported claims) by construction; makes verification a UI affordance (cite → passage).
- **Where it works:** study, course material, personal research, small-team documents.
- **Where it fails:** open-world questions; corpus too small; when users expect general knowledge answers.
- **Complexity:** Low–Med. **Research value:** High (residual hallucination ~low but nonzero `[O] REF-71`). **Scalability:** corpus-capped. **Reliability:** best-in-class among studied patterns.

### P2. Hybrid retrieval + reranking — **HIGH VALUE**
- **What:** dense (embedding) + sparse (BM25) candidates → cross-encoder/LLM rerank. Production consensus `[O→third-party] REF-79`; Advanced-RAG pillar `[R] REF-20`.
- **Why:** dense misses exact terms; sparse misses semantics; reranking fixes ordering.
- **Where it fails:** tiny corpora (overkill); multilingual/code (consider late interaction `[R] REF-45`).
- **Complexity:** Med. **Scalability:** high. **Reliability:** high; measurable via recall@k sweeps.

### P3. Contextual chunk enrichment — **HIGH VALUE**
- **What:** LLM-written 50–100-token chunk context prepended before indexing (embeddings + BM25). Anthropic `[D] REF-06`: 49% retrieval-failure reduction; ~67% with reranker; ~$1.02/M tokens.
- **Where it fails:** sub-100-token chunks; costs at ingest.
- **Complexity:** Low–Med (one LLM call per chunk at ingest). **Research value:** highest documented per-dollar retrieval improvement in this study.

### P4. Structure-aware parsing & chunking — **HIGH VALUE**
- **What:** layout-aware PDF parsing (Docling `[I] REF-56`), headings/sections/tables preserved; structure-aware chunking beats fixed-size `[O→third-party] REF-79`.
- **Why:** tables/figures/multi-column are the classic RAG failure; structure enables better chunks and citations.
- **Complexity:** Med (pick parser; benchmark on own corpus `[O→third-party] REF-57`).

### P5. Claim→passage→document provenance chain — **HIGH VALUE**
- **What:** every claim links to source passages; passages to documents; documents carry metadata/version. Basis of NotebookLM citations `[D] REF-01`, Elicit sentence links `[O→third-party] REF-73`, FActScore `[R] REF-33`.
- **Why:** provenance is what makes verification, invalidation, and confidence scoring possible.
- **Complexity:** Med (schema + extraction discipline). **Research value:** foundational.

### P6. Separate verification/citation pass — **HIGH VALUE**
- **What:** a dedicated stage (agent or deterministic checker) attaches/verifies citations after synthesis; Claude Research CitationAgent `[D] REF-04`; prevents game-of-telephone.
- **Why:** synthesis-and-verify in one pass degrades attribution (ALCE ~50% incomplete support `[R] REF-32`).
- **Complexity:** Med. **Research value:** one of the strongest documented design decisions.

### P7. Plan-first research with external plan persistence — **HIGH VALUE**
- **What:** lead agent writes the plan to memory before context truncation; plan reviewable/editable by user (Gemini DR `[D] REF-11`); Claude Research `[D] REF-04`.
- **Why:** plans survive long runs; HITL at the cheapest, highest-leverage point.
- **Complexity:** Low–Med.

### P8. Orchestrator-workers with isolation + artifact pattern — **HIGH VALUE (conditional)**
- **What:** lead decomposes; isolated subagents (own contexts) do parallel work; outputs to filesystem, lightweight refs return `[D] REF-04`.
- **When:** breadth-first, decomposable research with budget tolerance (~15× tokens).
- **Fails:** non-decomposable tasks; tight budgets; without output contracts.
- **Complexity:** High. **Scalability:** token-cost-bound.

### P9. Adaptive retrieval (retrieve-when-needed + quality gate) — **PROMISING**
- **What:** model decides whether to retrieve (Self-RAG `[R] REF-22`); retrieval evaluator with fallbacks (CRAG `[R] REF-23`).
- **Why:** saves tokens when parametric knowledge suffices; rescues bad retrieval.
- **Complexity:** Med–High. **Research value:** positive but requires training/setup; eval on own tasks first.

### P10. Graph-anchored multi-hop retrieval — **PROMISING/SITUATIONAL**
- **What:** KG + Personalized PageRank for cross-source inference; HippoRAG `[R] REF-25` (up to 20% multi-hop gains; 10–30× cheaper than iterative retrieval).
- **When:** multi-hop question load is real and measured.
- **Complexity:** Med–High (KG construction). **Research value:** strong where multi-hop matters.

### P11. Global sensemaking via community summaries — **SITUATIONAL**
- **What:** GraphRAG-style hierarchical communities + map-reduce global search `[R] REF-24`.
- **When:** large corpora + "what are the themes/trends" questions; budget for LLM indexing; **validate evals against judge bias** `[O→third-party] REF-75`.
- **Complexity:** High. **Scalability:** ingest-heavy.

### P12. Socratic study loop (generate → test → review → reschedule) — **HIGH VALUE**
- **What:** AI generates practice questions from user's sources; user retrieves answers; spaced repetition schedules review; FSRS-style scheduler; active recall + spacing are the two best-evidenced learning techniques `[R] REF-39–43`; AI-generated cards + spacing showed positive results in MOOC study `[R] REF-43`.
- **Why it works:** retrieval practice ~61% vs ~40% rereading at 1 week `[R] REF-39`; spaced retrieval doubles retention `[R] REF-40`.
- **Complexity:** Med. **Research value:** the strongest learning-gain evidence in the study.

### P13. Contradiction & consensus surfacing — **HIGH VALUE (verification domain)**
- **What:** typed support/contradict edges (scite `[O→third-party] REF-73`); yes/no/maybe meters + confidence (Consensus `[O→third-party] REF-73`).
- **Why:** conflicting sources are the norm in research; surfacing beats averaging.
- **Complexity:** Med. **Research value:** differentiator.

### P14. Atomic-fact verification gate — **PROMISING**
- **What:** decompose output into atomic facts; verify against sources (FActScore `[R] REF-33`, automated scorer <2% error vs human).
- **When:** long-form outputs; CI-grade quality gates.
- **Complexity:** Med.

### P15. Notebook-scoped memory & user progress state — **HIGH VALUE**
- **What:** persistence of sources, notes, chat, review state per project; NotebookLM `[D] REF-01`; spaced-repetition state `[R] REF-39–43`.
- **Why:** continuity across sessions is the product; no global learning needed.
- **Complexity:** Low.

### P16. Tiered agent memory (core/recall/archival) — **SITUATIONAL**
- **What:** MemGPT-style self-managed paging `[R] REF-27`, Letta `[I] REF-55`.
- **When:** long-horizon autonomous agents; not needed for corpus-grounded study.
- **Complexity:** High.

### P17. Evaluation harness with golden sets — **HIGH VALUE (meta-pattern)**
- **What:** RAGAS metrics `[R] REF-36`; ALCE citation metrics `[R] REF-32`; position/length-controlled judges + human validation (bias audit `[O→third-party] REF-75`; RAGBench `[R] REF-38`).
- **Why:** every pattern above needs measurement to justify itself; unmeasured systems fail silently.

### P18. MCP tool integration — **HIGH VALUE (integration pattern)**
- **What:** standardized tools/resources/prompts over JSON-RPC; Anthropic `[D] REF-10`; now Linux Foundation (AAIF); adopted by OpenAI/Google; all major frameworks converge on it `[O→third-party] REF-58`.
- **Complexity:** Low–Med. **Interoperability:** high.

### P19. Model-agnostic orchestration — **SITUATIONAL**
- **What:** route queries to best-fit models (Perplexity `[O→third-party] REF-72`).
- **Why:** model choice is a quality lever `[D] REF-04`; avoids lock-in.
- **Fails:** complexity of multiple providers; consistency issues.

### P20. Audio/video overview generation — **SITUATIONAL**
- **What:** TTS/AV pipelines over corpus-derived outlines (NotebookLM `[D] REF-03`).
- **Value:** engagement; **no learning-gain evidence**; production complexity high (multi-stage, expensive, hallucination-prone `[O] REF-71`).
- **Verdict for project:** COULD HAVE at maturity; not a core differentiator.

---

## Pattern ratings summary

| Pattern | Value | Complexity | Evidence strength |
|---|---|---|---|
| P1 Source-grounded corpus | HIGH | Low–Med | D/O |
| P2 Hybrid + rerank | HIGH | Med | R/D/O |
| P3 Contextual enrichment | HIGH | Low–Med | D |
| P4 Structure-aware parsing | HIGH | Med | I/O |
| P5 Provenance chain | HIGH | Med | D/R/O |
| P6 Separate verification pass | HIGH | Med | D/R |
| P7 Plan-first + plan memory | HIGH | Low–Med | D |
| P8 Orchestrator-workers | HIGH (conditional) | High | D |
| P9 Adaptive retrieval | PROMISING | Med–High | R |
| P10 Graph multi-hop (HippoRAG) | PROMISING/SITUATIONAL | Med–High | R/I |
| P11 Community summaries (GraphRAG) | SITUATIONAL | High | R (+judge-bias caveat) |
| P12 Socratic study loop | HIGH | Med | R |
| P13 Contradiction surfacing | HIGH | Med | O/R |
| P14 Atomic-fact gate | PROMISING | Med | R |
| P15 Notebook memory | HIGH | Low | D/R |
| P16 Tiered agent memory | SITUATIONAL | High | R/I |
| P17 Eval harness | HIGH (meta) | Med | R/O |
| P18 MCP | HIGH (integration) | Low–Med | D/O |
| P19 Model-agnostic routing | SITUATIONAL | Med | O |
| P20 Audio/video overviews | SITUATIONAL | High | D/O (no learning evidence) |
