# RECOMMENDATIONS — Evidence-Based Recommendations for the New Project

**Compiled:** 2026-08-10 | **Evidence taxonomy:** `[D]` DOCUMENTED, `[O]` OBSERVED, `[I]` IMPLEMENTED, `[R]` RESEARCH-SUPPORTED, `[N]` INFERRED, `[S]` SPECULATIVE | Reference keys → REFERENCES.md
**Companion docs:** DESIGN_PATTERNS.md (pattern detail), ANTI_PATTERNS.md, RESEARCH_GAPS.md, RESEARCH_MASTER_PAPER.md

---

## 0. Framing

These recommendations are **for a new, independent AI-powered research & knowledge environment** with a study/learning emphasis. They follow the directive's rule: recommend only where evidence supports the recommendation, and always state the problem solved, the evidence, the complexity cost, and the risk. None of these are implementation decisions — they are evidence-weighted directions to be validated during design.

---

## 1. MUST HAVE (strongly justified by evidence)

### R1. Source-grounded corpus model (the notebook pattern)
- **Problem solved:** unsupported-claim hallucination — the defining failure of AI knowledge systems.
- **Evidence:** NotebookLM's grounding-by-construction reduces the hallucination class structurally `[D] REF-01/02`; FActScore/ALCE show ungrounded generation is unreliable (58% factual precision; ~50% incomplete citation support) `[R] REF-32/33`.
- **Benefit:** trust; verifiability; user control of knowledge scope.
- **Complexity:** Low–Med. **Risks:** over-restriction (cannot answer outside corpus — mitigate with explicit UNKNOWN and optional open-web mode). **Alternatives:** none of comparable trust.

### R2. Provenance chain: claim → passage → source (with metadata & version)
- **Problem solved:** nothing can be verified, invalidated, or updated without provenance.
- **Evidence:** every verifiable system in the study is built on source links (NotebookLM `[D] REF-01`, Elicit `[O→third-party] REF-73`, scite `[O→third-party] REF-73`, FActScore `[R] REF-33`).
- **Benefit:** enables citations, contradiction handling, confidence scoring, invalidation, evaluation.
- **Complexity:** Med (schema + extraction discipline). **Risks:** extraction quality (mitigate: sentence anchors + spot-check UX). **Alternatives:** none.

### R3. Hybrid retrieval (dense + sparse) + reranking, with contextual chunk enrichment
- **Problem solved:** retrieval misses — the root cause of most RAG failure.
- **Evidence:** production consensus `[O→third-party] REF-79`; Advanced-RAG pillar `[R] REF-20`; contextual retrieval: 49% failure reduction, ~67% with reranker, ~$1.02/M tokens `[D] REF-06`; community reimplementations `[I] REF-60`.
- **Benefit:** large measurable retrieval-quality gains at modest cost.
- **Complexity:** Med. **Risks:** index size, ingest cost. **Alternatives:** long-context prompting for tiny corpora `[R] REF-35` — test both.

### R4. Structure-aware ingestion (layout-aware parsing, tables preserved)
- **Problem solved:** parse degradation silently destroys retrieval and citation quality.
- **Evidence:** parser benchmarks (Docling ~97.9% tables, MIT) `[I] REF-56`; corpus-dependent variance → measure on own corpus `[O→third-party] REF-57`; structure-aware chunking `[O→third-party] REF-79`.
- **Benefit:** the ingestion layer every other layer depends on. **Complexity:** Med. **Risks:** parser choice; scanned docs (OCR).

### R5. Verification as a first-class layer: separate citation/verification pass + user verification affordances
- **Problem solved:** citation unreliability (ALCE `[R] REF-32`; Deep Research observed errors `[O] REF-08`; NotebookLM user reports `[O] REF-71`).
- **Evidence:** Claude Research's dedicated CitationAgent — the documented pattern `[D] REF-04`; spot-check practice in Elicit workflows `[O→third-party] REF-73`.
- **Benefit:** outputs users can actually trust and check.
- **Complexity:** Med. **Risks:** verification cost; false negatives. **Alternatives:** deterministic claim→passage overlap checks as baseline.

### R6. Evaluation harness with golden sets from day one
- **Problem solved:** unmeasured systems fail silently.
- **Evidence:** RAGAS `[R] REF-36`; ALCE citation metrics `[R] REF-32`; FActScore `[R] REF-33`; judge-bias corrections `[O→third-party] REF-75`; specialist judges `[R] REF-38`.
- **Benefit:** every architecture decision becomes a measurement. **Complexity:** Med (a few hundred human-verified examples + metric scripts).

### R7. Claim taxonomy labels (FACT / EVIDENCE / INFERENCE / OPINION / SPECULATION / UNKNOWN) surfaced in the UI
- **Problem solved:** users cannot distinguish what the system knows vs derives vs guesses.
- **Evidence:** FActScore atomic decomposition `[R] REF-33`; scite typed edges `[O→third-party] REF-73`; Consensus confidence framing `[O→third-party] REF-73`; NotebookLM's decline-to-answer `[D] REF-01`.
- **Benefit:** honesty as a feature; enables confidence scoring. **Complexity:** Low–Med (labeling stage + display).

---

## 2. SHOULD HAVE (strongly beneficial, not essential)

### R8. Socratic study loop: auto-generated practice questions + spaced repetition scheduling
- **Problem:** passive consumption has no learning-gain evidence; active recall + spacing do.
- **Evidence:** retrieval practice 61% vs 40% at 1 week `[R] REF-39`; spaced retrieval doubles retention `[R] REF-40`; spacing meta-analysis `[R] REF-41`; AI-generated Q&A cards + spacing positive in MOOC study `[R] REF-43`; FSRS as the open scheduling algorithm `[I/O] REF-76`.
- **Complexity:** Med. **Risks:** question-generation quality; user abandonment. **Alternatives:** integrate with Anki/FSRS rather than building a scheduler.

### R9. Plan-first research workflow with user-editable plans and persistent plan artifacts
- **Evidence:** Gemini Deep Research plan review `[D] REF-11`; Claude Research plan persistence `[D] REF-04`; STORM outline-first `[R] REF-26`.
- **Benefit:** HITL at the highest-leverage point; long-run resilience. **Complexity:** Low–Med.

### R10. Contradiction & consensus detection with typed support/contradict edges
- **Evidence:** scite `[O→third-party] REF-73`; Consensus `[O→third-party] REF-73`; conflicts are the norm in research corpora.
- **Benefit:** differentiator; directly serves study of conflicting sources. **Complexity:** Med.

### R11. Multi-perspective question generation for research breadth
- **Evidence:** STORM's perspective-guided question asking `[R] REF-26` (the core of its success).
- **Benefit:** breadth without extra agents. **Complexity:** Med.

### R12. Notebook-scoped memory + user progress state (durable, local-first)
- **Evidence:** notebook pattern `[D] REF-01`; learning-state persistence `[R] REF-39–43`; PKM portability lessons (Markdown/local-first) `[O→third-party] REF-78`.
- **Benefit:** continuity across sessions; data ownership; no cross-project leakage. **Complexity:** Low.

### R13. MCP-based tool integration
- **Evidence:** MCP is the adopted open standard (Anthropic `[D] REF-10`; Linux Foundation AAIF; OpenAI/Google adoption; framework convergence `[O→third-party] REF-58`).
- **Benefit:** future-proof tool access (search, YouTube transcripts, Drive, APIs). **Complexity:** Low–Med.

### R14. Confidence scoring derived from evidence structure (not model self-report)
- **Evidence:** judge/self-report unreliability `[O→third-party] REF-75, [R] REF-38`; corroboration-based confidence mirrors Consensus `[O→third-party] REF-73`.
- **Benefit:** honest uncertainty. **Complexity:** Med.

---

## 3. COULD HAVE (future capabilities)

- **C1. Open-world research mode (optional):** agentic search outside the corpus (Deep-Research-style) with explicit trust downgrade `[D] REF-08/09`.
- **C2. Orchestrated parallel subagents** for breadth-first research tasks, per the documented blueprint (isolation, artifact pattern, effort scaling, ~15× budget) `[D] REF-04` — only after single-agent baselines are measured.
- **C3. HippoRAG-style graph multi-hop retrieval** for cross-source inference questions `[R] REF-25`.
- **C4. GraphRAG-style global sensemaking** for large corpora — with judge-bias-corrected evaluation `[R] REF-24, [O→third-party] REF-75`.
- **C5. Audio/video overview generation** (engagement; no learning evidence; high production complexity) `[D] REF-03, [O] REF-71`.
- **C6. Typed citation-intelligence layer at literature scale** (scite-like) once the claim layer exists `[O→third-party] REF-73`.
- **C7. Structured extraction tables** (Elicit-like) for literature review `[O→third-party] REF-73`.
- **C8. Atomic-fact verification gate** (FActScore-style) in CI `[R] REF-33`.
- **C9. Adaptive retrieval** (Self-RAG/CRAG-style) after baseline measurement `[R] REF-22/23`.

---

## 4. EXPERIMENTAL (interesting, requires validation)

- **E1. Reflection-token self-critique** (Self-RAG-style) on the project's own tasks `[R] REF-22`.
- **E2. Heterogeneous multi-agent configurations** for review (the only debate variant with positive evidence) `[R] REF-30`.
- **E3. Tiered self-managed memory** (MemGPT/Letta-style) for long-running research agents `[R] REF-27, [I] REF-55`.
- **E4. VLM-based figure/diagram extraction** for scientific PDFs.
- **E5. Memory-stream + reflection** (Generative Agents-style) for research-episode memory `[R] REF-28`.
- **E6. Late-interaction retrieval** (ColBERT-style) if corpora become multilingual/code-heavy `[R] REF-45`.
- **E7. Automated contradiction detection at scale** (beyond rule-based; scite-like classifiers).

---

## 5. AVOID (patterns likely to cause problems)

- **A. Homogeneous multi-agent debate as a quality mechanism** — negative systematic evidence `[R] REF-30/31`.
- **B. Knowledge graph or vector DB adoption before corpus/question analysis** — cargo-culting `[O→third-party] REF-59, [R] REF-35`.
- **C. Fully autonomous research with no checkpoints** — HITL evidence `[D] REF-11, [O→third-party] REF-58`.
- **D. Trusting citations without content verification** — ALCE/FActScore `[R] REF-32/33`.
- **E. Fixed-size chunking / raw-PDF ingestion** — parse & chunk evidence `[I] REF-56, [O→third-party] REF-79`.
- **F. LLM-judge-only evaluation** — bias evidence `[O→third-party] REF-75, [R] REF-38`.
- **G. Storing unprovenanced AI summaries as knowledge** — memory evidence `[I] REF-54`.
- **H. Presenting proprietary-system inference as fact** — the directive's core discipline (see RESEARCH_ARCHITECTURES §8).
- **I. Passive-consumption-only study features** — learning-science evidence `[R] REF-39–43`.

---

## 6. Evidence matrix

| # | Recommendation | Supporting systems | Research / papers | Evidence strength | Key risks |
|---|---|---|---|---|---|
| R1 | Source-grounded corpus | NotebookLM `[D]` | FActScore `[R]`, ALCE `[R]` | Strong (D+R) | Over-restriction; corpus limits |
| R2 | Provenance chain | NotebookLM, Elicit, scite `[D/O]` | FActScore `[R]`, ALCE `[R]` | Strong | Extraction quality |
| R3 | Hybrid + rerank + contextual enrichment | Perplexity (third-party), production guides | RAG survey `[R]`, Contextual Retrieval `[D]` | Strong | Ingest cost; index size |
| R4 | Structure-aware ingestion | Docling/MinerU `[I]` | Parser benchmarks `[O]` | Strong (I+O) | Corpus-dependent results |
| R5 | Verification layer | Claude Research `[D]`, NotebookLM `[D]`, Elicit `[O]` | ALCE `[R]`, FActScore `[R]` | Strong | Cost; over-flagging |
| R6 | Eval harness | RAGAS/RAGBench `[R]` | RAGAS `[R]`, ALCE `[R]`, bias audit `[O]` | Strong | Golden-set maintenance |
| R7 | Claim taxonomy | Consensus, scite `[O]` | FActScore `[R]` | Strong (O+R) | Labeling noise |
| R8 | Active recall + spaced repetition | Anki/FSRS `[I]`, Quizlet `[O]` | R&K 2006 `[R]`, Cepeda `[R]`, Bachiri `[R]` | Strong (R) | Generation quality; engagement |
| R9 | Plan-first workflow | Gemini DR `[D]`, Claude Research `[D]` | STORM `[R]` | Strong (D+R) | Plan quality for open tasks |
| R10 | Contradiction surfacing | scite, Consensus `[O]` | — | Medium (O) | Classification accuracy |
| R11 | Perspective questions | STORM `[R/I]` | STORM `[R]` | Medium-R | Cost per perspective |
| R12 | Notebook memory | NotebookLM `[D]`, PKM `[O]` | Spacing `[R]` | Strong | Data portability |
| R13 | MCP | Anthropic/OpenAI/Google `[D]` | — | Strong (D) | Standard churn |
| R14 | Evidence-derived confidence | Consensus `[O]` | Judge bias `[O]` | Medium | Calibration |
| C2 | Orchestrated subagents | Claude Research `[D]` | BrowseComp analysis `[D]` | Strong when criteria met | 15× cost |
| C3 | HippoRAG multi-hop | HippoRAG `[I]` | HippoRAG `[R]` | Medium-R | KG construction cost |
| C4 | GraphRAG sensemaking | GraphRAG `[I]` | GraphRAG `[R]` + bias audit `[O]` | Medium (caveated) | Judge bias; ingest cost |
| C5 | Audio/video overviews | NotebookLM `[D]` | — (no learning evidence) | Medium (O) | Production complexity; hallucination |
| E2 | Heterogeneous multi-agent | — | Heter-MAD `[R]`, A-HMAD `[R]` | Medium | Complexity; cost |
| E3 | Tiered agent memory | Letta/Mem0 `[I]` | MemGPT `[R]` | Medium | LongMemEval ~49% |
