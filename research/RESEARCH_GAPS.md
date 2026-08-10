# RESEARCH_GAPS — What Could Not Be Determined

**Compiled:** 2026-08-10 | **Evidence taxonomy:** `[D]` DOCUMENTED, `[O]` OBSERVED, `[I]` IMPLEMENTED, `[R]` RESEARCH-SUPPORTED, `[N]` INFERRED, `[S]` SPECULATIVE | Reference keys → REFERENCES.md

---

## G1. Proprietary system internals (the largest gap class)

| What is unknown | Why unknown | What would resolve it | Worth pursuing? |
|---|---|---|---|
| NotebookLM retrieval architecture (embeddings, chunking, reranking, grounding enforcement) | No official engineering publication; product behavior only | Official engineering blog; patents; API documentation; large-scale reproducible testing | Partially — official disclosures are unlikely; behavioral testing is possible but time-limited |
| NotebookLM audio/video pipeline (outline generation, TTS, host scripting) | No publication | Same | Low (no learning-gain evidence anyway) |
| Perplexity ranking/orchestration internals | Third-party summaries only (Vespa, Sonar, ROSE are reported from talks) | Official engineering posts; detailed talks | Low-Med (direction-level understanding suffices) |
| ChatGPT Deep Research internal loop (context compaction, citation attachment) | System card documents capabilities, not mechanics | More system-card detail; engineering posts | Low |
| Gemini Deep Research internals | No technical publication | Official posts | Low |
| Claude Research prompts, scheduling, memory-store implementation | Engineering post covers architecture, not prompts | No expectation of disclosure | Low |
| Exact model identities/versions behind any product feature | Rapidly changing; not documented | Official release notes | Low (time-sensitive anyway) |

## G2. Learning & efficacy gaps

| What is unknown | Why unknown | Resolution | Worth pursuing? |
|---|---|---|---|
| Does NotebookLM-style tooling measurably improve learning outcomes? | No RCTs found on NotebookLM itself; only anecdotal/user-report evidence | Controlled studies on grounded-AI study tools | **Yes — high value.** The whole study-tool category lacks RCT evidence (see Khanmigo) |
| Does Khanmigo (Socratic AI tutoring) improve learning? | No peer-reviewed study as of early 2026; J-PAL RCT (AEARCTR-0013519) results expected mid-2026 `[O→third-party] REF-77` | J-PAL results; replication studies | Yes — track results when published |
| Do audio/video overviews aid retention vs reading? | No controlled evidence found | RCTs | Yes — cheap to test |
| Optimal AI question-generation quality thresholds for active recall | Question quality varies; no benchmark found | Small user studies + quality metrics | Yes |
| Does episodic research memory improve future research runs? | No direct evidence found | Controlled experiments with/without memory | Yes (EXPERIMENTAL) |

## G3. Technical gaps

| What is unknown | Why unknown | Resolution | Worth pursuing? |
|---|---|---|---|
| Reliable automatic contradiction detection at claim level | scite's classifier details are proprietary; no public benchmark for claim-level contradiction in general corpora | Build labeled evaluation set; test LLM-based classifiers | Yes — needed for R10 |
| Grounding-enforcement failure rates for grounded-chat systems at scale | No public measurement; only user reports `[O] REF-71` | Reproducible adversarial testing (perturb sources; measure fidelity) | Yes — informs verification layer design |
| The "13% vs 40%" NotebookLM hallucination claim | Primary source ("Google's paper") not locatable | Find primary source or reproduce | Low priority — treat as unverified |
| Long-context models' retrieval-less performance on study-scale corpora (specific models, 2026 versions) | Model landscape changes monthly; benchmark comparisons are dated | Run project-specific benchmark at design time | Yes — directly informs RAG-vs-long-context decision |
| GraphRAG benefit net of eval artifacts on real user questions | Bias audit `[O→third-party] REF-75` raises doubt; no independent replication on varied corpora | Independent human-judged evals | Yes if C4 is pursued |
| Optimal chunk size/contextual-enrichment settings for mixed study materials (slides, PDFs, transcripts) | Best practice ranges (400–1000 tokens) come from one vendor's guidance `[D/O] REF-06` | Corpus-specific sweep | Yes — cheap to run |
| Mem0-class passive memory reliability for study contexts | LongMemEval ~49% `[I] REF-54`; no study-domain eval | Domain-specific memory eval | Only if E3 pursued |
| PDF-parser rankings on the project's actual corpus | Benchmarks conflict across corpora `[O→third-party] REF-57` | Run all candidates on a sample of the real corpus | Yes — required before ingestion implementation |

## G4. Market/positioning gaps

| What is unknown | Why unknown | Resolution | Worth pursuing? |
|---|---|---|---|
| User willingness to pay for source-grounded study tools vs free tier (NotebookLM free) | Pricing data not analyzed in this study | Market research; competitor pricing analysis | Yes — business question, not technical |
| Whether users trust AI study tools' accuracy enough to rely on them for graded work | No large-scale trust studies found | Surveys/user studies | Yes — design-relevant |

## G5. Methodological gaps in this study

1. **Depth vs breadth tradeoff:** this study prioritized ecosystem breadth (per directive). Deep-dive verification of every claim (e.g., reproducing contextual-retrieval numbers) was not performed; numbers are as reported by the cited sources.
2. **Time-sensitivity:** all product features/limits/prices are as of 2026-08-10.
3. **Third-party dependence:** several product-behavior facts rest on blog-grade sources (clearly marked OBSERVED/third-party in REFERENCES.md); their reliability is lower than DOCUMENTED sources.
4. **Canonical learning-science citations** (R&K 2006, Cepeda 2006, Dunlosky 2013) are cited from established literature; web-verifiable corroborations are listed where found.
5. **No user studies** were conducted; all learning-effectiveness claims are from published research or product claims.

## G6. What would resolve the highest-priority gaps (action list)

1. Run a project-specific **retrieval baseline**: 200–500 golden Q&A over the target corpus types (PDFs, slides, transcripts) comparing long-context prompting vs hybrid RAG vs contextual-enriched RAG. (Resolves G3.6/G3.4; informs R3.)
2. Build a **citation-verification evaluation set** (~100 claims with human-labeled support/contradict) to calibrate the verification layer. (Resolves G3.2; informs R5/R10.)
3. Run **parser bake-off** (Docling vs MinerU vs Marker vs Unstructured) on sample real documents. (Resolves G3.7; informs R4.)
4. Track **J-PAL Khanmigo results** (mid-2026) and any NotebookLM efficacy studies as they appear. (Resolves G2.1/G2.2.)
5. Design a small **user study** (n≈20–40) comparing passive consumption vs active-recall loop for retention with the project's artifacts. (Resolves G2.3/G2.4.)
