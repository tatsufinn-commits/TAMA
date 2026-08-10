# ANTI_PATTERNS — Patterns That Frequently Cause Problems

**Compiled:** 2026-08-10 | **Evidence taxonomy:** `[D]` DOCUMENTED, `[O]` OBSERVED, `[I]` IMPLEMENTED, `[R]` RESEARCH-SUPPORTED, `[N]` INFERRED, `[S]` SPECULATIVE | Reference keys → REFERENCES.md

---

## A1. Architectural cargo culting ("NotebookLM probably uses X, so we should too")
- **What:** adopting vector DBs, knowledge graphs, multi-agent stacks, or specific frameworks because a famous product is *believed* to use them, without a demonstrated problem to solve.
- **Why it's harmful:** every component adds complexity, cost, and failure surface. The evidence base contains direct warnings: RAG can underperform long-context on some tasks `[R] REF-35`; multi-agent debate fails to reliably beat baselines `[R] REF-30`; GraphRAG's apparent wins partly vanish under eval-artifact correction `[O→third-party] REF-75`.
- **Cure:** for every component, answer: What problem does this solve? Is there evidence it solves it? What is the complexity cost? What breaks at scale/failure?

## A2. Multi-agent by default / same-model debate as a quality mechanism
- **What:** spinning up "agent teams" or homogeneous debate because it sounds impressive.
- **Evidence against:** ~15× token cost for agentic research `[D] REF-04`; MAD fails to reliably beat CoT/self-consistency `[R] REF-30`; debate gains modest and task-limited `[R] REF-31`; every extra LLM call compounds error `[D] REF-05`.
- **Cure:** single-agent/workflow first; multi-agent only per REF-07 criteria; heterogeneity if debate is ever tried.

## A3. No evaluation harness ("we'll test it manually later")
- **What:** shipping retrieval/generation features without metrics, golden sets, or baselines.
- **Evidence:** unmeasured systems fail silently; LLM-judge evals are biased (position/length) `[O→third-party] REF-75`; specialist judges beat LLM judges `[R] REF-38`; citation quality is measurable and poor by default `[R] REF-32`.
- **Cure:** eval-first: RAGAS-family metrics, ALCE-style citation metrics, human-validated golden sets, baselines recorded before changes.

## A4. Trusting citations because they exist
- **What:** assuming that the presence of a citation means the claim is supported.
- **Evidence:** ~50% incomplete citation support for best models on ELI5 `[R] REF-32`; observed citation mistakes in Deep Research `[O] REF-08`; FActScore 58% ChatGPT factual precision `[R] REF-33`.
- **Cure:** verify citation *content* (does the passage support the claim?), not just presence; separate verification pass `[D] REF-04`.

## A5. Context stuffing ("more context = better")
- **What:** dumping everything into the prompt; believing long-context windows obsolete retrieval.
- **Evidence:** lost-in-the-middle U-shaped attention; 20→50 docs ≈ +1–1.5% `[R] REF-34`; long-context beats RAG on some benchmarks but with high overlap `[R] REF-35`; density of key information matters `[R]`.
- **Cure:** construct context deliberately (order, density, dedup); measure.

## A6. Fixed-size chunking on structured documents
- **What:** blind k-token splits that break headings, tables, and code.
- **Evidence:** structure-aware chunking is the practical consensus `[O→third-party] REF-79`; table extraction is a top parser-differentiator `[I] REF-56`.
- **Cure:** layout-aware parsing + structure-aware chunks (400–1000 tokens) + contextual enrichment `[D] REF-06`.

## A7. Ignoring parse quality
- **What:** feeding raw PDF text into embeddings without layout handling.
- **Evidence:** parser benchmarks show large accuracy differences; "the benchmark that decides is the one you run on your own documents" `[O→third-party] REF-56/57`.
- **Cure:** measure parsers on the project's actual corpus; keep tables structured.

## A8. Unprovenanced AI memory
- **What:** storing LLM summaries/facts without source links, then trusting them later.
- **Evidence:** memory systems still score ~49% on LongMemEval `[I] REF-54`; unverifiable stored knowledge becomes a second hallucination source; invalidation impossible without provenance.
- **Cure:** provenance-first memory; recompute derived views from sources; version everything.

## A9. Autonomous browsing without injection defenses
- **What:** letting agents browse open web with no sandbox or injection evaluation.
- **Evidence:** OpenAI documents prompt-injection risk and browser contamination for Deep Research `[D] REF-08`.
- **Cure:** treat web content as untrusted data; tool sandboxes; injection evals in CI.

## A10. Single-database discovery (Elicit's lesson)
- **What:** searching only one index and presenting results as comprehensive.
- **Evidence:** Elicit sensitivity ~39.5% on one database `[O→third-party] REF-73`; systematic review gold standard requires multiple sources.
- **Cure:** multi-source search; show coverage limitations; never claim exhaustiveness.

## A11. Storing everything in embeddings
- **What:** vector store as the only representation — no relational provenance, no versions, no conflicts.
- **Evidence:** embeddings are opaque; retrieval ≠ verification (see KNOWLEDGE_ARCHITECTURE §2).
- **Cure:** layered representation (document/passage/claim) with a relational backbone.

## A12. LLM-judge-only evaluation
- **What:** relying on a single LLM-as-judge with no controls.
- **Evidence:** judge biases from position/length artifacts (GraphRAG audit) `[O→third-party] REF-75`; fine-tuned specialist judges outperform `[R] REF-38`.
- **Cure:** controlled ordering/lengths; multiple judges; human-validated samples.

## A13. Over-graphing small corpora
- **What:** building knowledge graphs before the corpus or question type justifies it.
- **Evidence:** graph value is situational (global sensemaking / multi-hop at scale) `[R] REF-24/25`; indexing cost is high.
- **Cure:** claim→passage layer first; graph only with measured need.

## A14. Full autonomy without checkpoints
- **What:** long agentic runs with no human review points.
- **Evidence:** the most user-trusted systems expose plan review (Gemini DR `[D] REF-11`) and verification affordances (NotebookLM `[D] REF-01`); production frameworks stage approvals `[O→third-party] REF-58`.
- **Cure:** plan review + output verification + correction loops.

## A15. Treating community claims as fact
- **What:** adopting numbers/claims from blogs and forums without checking the primary source.
- **Example in this study:** the "13% vs 40%" NotebookLM hallucination-rate claim is third-party with an unverifiable primary citation — recorded but NOT used as fact (REFERENCES.md limitations).
- **Cure:** source hierarchy discipline (REFERENCES.md); classify evidence.

## A16. Passive-consumption product design
- **What:** building summaries/audio as the core learning experience with no active-recall loop.
- **Evidence:** the only well-evidenced learning techniques are retrieval practice and spacing `[R] REF-39–43`; passive consumption has no equivalent evidence.
- **Cure:** make the active loop (generate questions → answer → spaced review) the center of the study experience.
