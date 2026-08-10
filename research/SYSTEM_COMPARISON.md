# SYSTEM_COMPARISON — Standardized Profiles of Studied Systems

**Project:** AI Research Scaffolding & Knowledge Systems — exploratory research phase
**Compiled:** 2026-08-10 | **Evidence taxonomy:** DOCUMENTED / OBSERVED / IMPLEMENTED / RESEARCH-SUPPORTED / INFERRED / SPECULATIVE (see REFERENCES.md)
**Convention:** `[D]` = DOCUMENTED, `[O]` = OBSERVED, `[I]` = IMPLEMENTED, `[R]` = RESEARCH-SUPPORTED, `[N]` = INFERRED, `[S]` = SPECULATIVE. Reference keys point to REFERENCES.md.

---

# 1. Google NotebookLM

| Field | Content |
|---|---|
| **SYSTEM** | NotebookLM (a.k.a. Gemini Notebook in education marketing) |
| **CATEGORY** | Source-grounded research notebook / document intelligence / study tool |
| **PURPOSE** | "Understand anything": ground answers and generated artifacts exclusively in user-provided sources |
| **TARGET USERS** | Students, researchers, professionals, educators |
| **CORE WORKFLOW** | Create notebook → add sources (PDF, Docs, Slides, Sheets, web URLs, YouTube, audio, images) → auto-analysis & summary → grounded Q&A with inline citations → Studio artifacts (study guides, briefings, FAQs, timelines, mind maps, audio/video overviews, flashcards, quizzes, infographics, slide decks) `[D] REF-01/02/03/70` |
| **INFORMATION INGESTION** | Multi-format uploads; YouTube/audio transcribed and cited to transcript; discovered web sources become first-class citable sources `[D] REF-03`; ~25M words per notebook (100 notebooks × 50 sources, free tier; up to 300–600 sources on paid) `[D] REF-01/02/70` |
| **INFORMATION PROCESSING** | Per-source analysis and summary; cross-source connection making; multimodal generation `[D] REF-01/02` |
| **RETRIEVAL** | Not publicly documented. Product behavior shows source-scoped retrieval with passage-level citations `[O]`; "closed RAG" characterization by third parties `[N] REF-70` |
| **REASONING** | Gemini models; Deep Research integration; Guided Learning (education) `[D] REF-02/70` |
| **SOURCE GROUNDING** | Core product thesis: responses grounded **only** in notebook sources; answers may decline to answer when not in sources `[D] REF-01/02` |
| **CITATIONS** | Inline citations linking to original passages; audio/video citations link to transcript segments `[D] REF-01/03` |
| **MEMORY** | Notebook-scoped persistence of sources, notes, chat history; no cross-notebook knowledge `[O]` |
| **KNOWLEDGE REPRESENTATION** | Notebook = source corpus + notes; mind maps as derived visual graphs; no public knowledge-graph claims `[D/O]` |
| **AGENTS** | None documented at product level (agentic Deep Research is a separate feature) `[D/O]` |
| **TOOLS** | None exposed publicly (no public API for the product UI; enterprise API announced separately) `[O]` |
| **VERIFICATION** | Citation affordance is the verification mechanism; user checks passages. Hallucination still reported by users `[O] REF-71` |
| **USER CONTROL** | User curates sources; can edit notes; no control over retrieval internals; "studio" customization of outputs `[D] REF-01` |
| **PUBLICLY ESTABLISHED ARCHITECTURE** | Source-grounded Q&A + citation UI + generative Studio; Gemini-powered; per-notebook source caps; education privacy terms `[D]` |
| **INFERRED ARCHITECTURE** | Indexing pipeline (parse → chunk → embed) over notebook sources; retrieval over notebook-scoped index; generation constrained to retrieved passages with citation links; audio/video = separate generative pipelines over same sources `[N]` |
| **UNKNOWN ARCHITECTURE** | Exact retrieval (dense/sparse/hybrid), chunking, embedding models, rerankers, prompt construction, grounding enforcement mechanism, ranking, orchestration `[S→N]` |
| **STRENGTHS** | Grounding reduces unsupported-claim hallucinations by construction; verification UX (cite → passage); multi-format output value for study; free tier aggressive; privacy posture (no training on uploaded docs per education terms) `[D/O]` |
| **WEAKNESSES** | Still hallucinates (user reports); citations not always precise; free-tier daily caps; language gaps (some artifacts English-only); no user-visible retrieval controls; vendor lock-in; Sept 2025 outage demonstrated platform fragility `[O] REF-71` |
| **FAILURE MODES** | Fabrication in generated artifacts; source misinterpretation; stale indexes after source edits; service degradation/limits `[O] REF-71` |
| **PRIVACY / SECURITY** | Uploads not used to train models per posted terms; education core services: no human review, no AI training `[D] REF-02/12` |
| **SCALABILITY** | Consumer-scale per-notebook caps; not designed as an org-wide knowledge platform `[D]` |
| **RELEVANCE TO PROJECT** | **Highest.** Reference implementation of the source-grounded study-notebook pattern: source universe → cited Q&A → study artifacts → active-recall tools (flashcards/quizzes). Its limitations define the open design space (verification, citation precision, user control, open formats, privacy). |

---

# 2. Google Gemini Deep Research

| Field | Content |
|---|---|
| **SYSTEM** | Gemini Deep Research (Gemini Apps / AI Pro plans) |
| **CATEGORY** | Agentic research report generator |
| **PURPOSE** | Multi-step autonomous research producing structured cited reports |
| **TARGET USERS** | Knowledge workers, students, analysts |
| **CORE WORKFLOW** | Query → research plan presented to user (editable) → autonomous multi-source search → multi-step reasoning → cited structured report → export to Google Docs `[D] REF-11` |
| **INFORMATION INGESTION** | Web search plus plan-dependent sources: uploads, Drive, Gmail, NotebookLM sources `[D] REF-11` |
| **INFORMATION PROCESSING** | Plan → execute → synthesize; source verification links `[D] REF-11` |
| **RETRIEVAL** | Not publicly documented `[S→N]`; presumably Google Search-backed `[N]` |
| **REASONING** | Gemini 2.5+ class models; multi-step reasoning `[D/O] REF-11` |
| **SOURCE GROUNDING** | Report sections cite sources with links; weaker than NotebookLM (open-web corpus, not user corpus) `[D/O]` |
| **CITATIONS** | Comprehensive with links; quality varies in practice `[O]` |
| **MEMORY** | Plan persistence during run; no documented long-term research memory `[O]` |
| **KNOWLEDGE REPRESENTATION** | Report documents `[O]` |
| **AGENTS** | One planning/executing agent; no public multi-agent architecture claims `[O]` |
| **TOOLS** | Web search, file access, Docs export `[D]` |
| **VERIFICATION** | User reviews plan pre-execution (HITL at plan stage); links for fact-checking `[D] REF-11` |
| **USER CONTROL** | Plan editing before execution — notable human-in-the-loop design `[D]` |
| **PUBLICLY ESTABLISHED ARCHITECTURE** | Plan-first agentic research with user-editable plans `[D]` |
| **INFERRED ARCHITECTURE** | Agent loop: plan → query → read → reflect → iterate → synthesize; context management via summarization/truncation `[N]` |
| **UNKNOWN ARCHITECTURE** | Retrieval stack, agent loop internals, citation construction `[S→N]` |
| **STRENGTHS** | Transparent planning step; deep multi-source synthesis; Workspace integration `[D/O]` |
| **WEAKNESSES** | Open-web hallucination risk; citation errors; no user-corpus grounding by default `[O]` |
| **FAILURE MODES** | Plan drift; source bias; citation mistakes; domain-name bias (observed for comparable agents, REF-08) `[O]` |
| **PRIVACY / SECURITY** | Enterprise terms via Google plans; browsing exposes agent to prompt injection (mitigations unverified) `[N]` |
| **SCALABILITY** | Consumer-to-enterprise plans; per-plan report limits `[D]` |
| **RELEVANCE TO PROJECT** | **High.** The editable-plan HITL pattern is a proven UX for agentic research; the open-web grounding gap vs NotebookLM's user-corpus grounding is a key design axis. |

---

# 3. ChatGPT (Search + Deep Research)

| Field | Content |
|---|---|
| **SYSTEM** | ChatGPT Search; ChatGPT Deep Research (OpenAI) |
| **CATEGORY** | Conversational answer engine; agentic research agent |
| **PURPOSE** | Fast cited answers (Search); long-form cited reports (Deep Research) |
| **TARGET USERS** | General public, professionals, students |
| **CORE WORKFLOW** | Search: query → web search → cited answer. Deep Research: query → multi-step planning/browsing (5–30 min) → synthesize → cited report; follow-up refinement `[D] REF-09` |
| **INFORMATION INGESTION** | Web (Bing), user uploads, files; Python tool for analysis `[D] REF-08/09` |
| **INFORMATION PROCESSING** | Agentic loop with backtracking and plan adaptation; RL-trained browsing behavior (o3 / o4-mini variants) `[D] REF-08` |
| **RETRIEVAL** | Web search via Bing (per third-party dev analysis) `[N→third-party]`; internal retrieval not documented |
| **REASONING** | o3/o4-mini reasoning models trained with RL on browsing tasks `[D] REF-08` |
| **SOURCE GROUNDING** | Report claims cited to browsed pages; citation accuracy imperfect (observed) `[O] REF-08/promptingguide` |
| **CITATIONS** | Inline citations; known citation mistakes and formatting errors; bias toward certain domain names observed `[O]` |
| **MEMORY** | Session-level; no documented research memory `[O]` |
| **KNOWLEDGE REPRESENTATION** | Reports + chat `[O]` |
| **AGENTS** | Single agent (browsing tool loop); no documented multi-agent orchestration for Deep Research `[D] REF-08` |
| **TOOLS** | Browser (search/click/scroll), Python sandbox, file reading, image understanding `[D] REF-08` |
| **VERIFICATION** | System card documents eval-driven safety work incl. prompt-injection evaluation and browser contamination controls `[D] REF-08`; user-side: citation links |
| **USER CONTROL** | Prompt-level only; no plan review step documented for Deep Research `[O]` |
| **PUBLICLY ESTABLISHED ARCHITECTURE** | RL-trained reasoning model with browsing tools, Python sandbox, multi-step loop `[D]` |
| **INFERRED ARCHITECTURE** | Agent loop: plan → browse → read/parse → think → iterate; summarization of visited pages; citation pass at write time `[N]` |
| **UNKNOWN ARCHITECTURE** | Search backend, ranking, page parsing pipeline, citation attachment mechanism, context compaction `[S→N]` |
| **STRENGTHS** | Long-horizon autonomy; strong niche-source finding; user uploads + Python analysis; documented safety engineering `[D/O]` |
| **WEAKNESSES** | Citation errors; limited source-scoping control; no plan review; export limits; 5–30 min latency `[O]` |
| **FAILURE MODES** | Hallucinated citations; domain bias; injection via malicious pages; contamination in evals (documented) `[D/O] REF-08` |
| **PRIVACY / SECURITY** | Enterprise/education data controls; agent browsing = expanded attack surface (documented prompt-injection eval) `[D] REF-08` |
| **SCALABILITY** | Consumer scale; per-plan limits `[D]` |
| **RELEVANCE TO PROJECT** | **Medium-High.** Reference for autonomous browsing research and for system-card-grade safety documentation; its citation unreliability motivates the project's verification layer. |

---

# 4. Claude Research (Anthropic)

| Field | Content |
|---|---|
| **SYSTEM** | Claude Research (Claude.ai feature) |
| **CATEGORY** | Multi-agent research system (orchestrator-workers) |
| **PURPOSE** | Breadth-first research across web + enterprise sources (Google Workspace integrations) |
| **TARGET USERS** | Professionals, researchers |
| **CORE WORKFLOW** | Query → LeadResearcher plans (extended thinking) → plan persisted to memory before context truncation (>200k tokens) → 1–N parallel Subagents (Sonnet class) each with own context & tools → independent search with interleaved thinking → condensed findings (artifacts to filesystem, lightweight refs to lead) → lead synthesizes, spawns more waves if needed → dedicated CitationAgent verifies every citation → final report `[D] REF-04` |
| **INFORMATION INGESTION** | Web search tools; Google Workspace connectors; MCP-based tools `[D] REF-04` |
| **INFORMATION PROCESSING** | Orchestrator-worker with isolation; subagents act as "intelligent filters"; artifact pattern avoids game-of-telephone `[D] REF-04` |
| **RETRIEVAL** | Dynamic multi-step search, not static RAG retrieval; adapts to findings `[D] REF-04` |
| **REASONING** | Lead = Opus class; subagents = Sonnet class; interleaved thinking per tool result `[D] REF-04` |
| **SOURCE GROUNDING** | Findings traced to sources; citation pass separates verification from synthesis `[D] REF-04` |
| **CITATIONS** | Dedicated CitationAgent processes documents/report to attach specific citation locations; built to counter "game of telephone" `[D] REF-04` |
| **MEMORY** | Lead agent saves plan to external memory; subagents write artifacts to filesystem; session-bounded research runs `[D] REF-04/81` |
| **KNOWLEDGE REPRESENTATION** | Report + memory store + filesystem artifacts `[D]` |
| **AGENTS** | Yes — documented orchestrator + 3–5 (up to 10+) parallel subagents; explicit effort-scaling rules in prompts `[D] REF-04/81` |
| **TOOLS** | Web search, enterprise connectors, MCP servers; tool-description quality emphasized `[D] REF-04` |
| **VERIFICATION** | CitationAgent pass; internal eval (90.2% gain vs single Opus 4 agent); token-usage analysis on BrowseComp `[D] REF-04` |
| **USER CONTROL** | Prompt-level; research loop is autonomous once launched `[O]` |
| **PUBLICLY ESTABLISHED ARCHITECTURE** | The most fully documented proprietary research agent: orchestrator-worker, memory-persisted plans, artifact pattern, citation agent, ~15× token cost, token spend ≈ 80% of performance variance `[D]` |
| **INFERRED ARCHITECTURE** | Framework-level coordination via code/orchestrator (not agent-to-agent chat); subagent context windows sized to task; condensed-return contracts `[N]` |
| **UNKNOWN ARCHITECTURE** | Exact prompts, tool schemas, memory store implementation, subagent scheduling heuristics `[S→N]` |
| **STRENGTHS** | Best-documented multi-agent research design; parallel breadth; verification separation of concerns; honest cost accounting (15×) `[D]` |
| **WEAKNESSES** | ~15× token cost vs chat; complexity high; session-bounded (no cross-session state) `[D] REF-04/81` |
| **FAILURE MODES** | Context truncation (mitigated by memory); subagent drift (mitigated by contracts); cost blowups when effort rules mis-tuned `[D] REF-04/81` |
| **PRIVACY / SECURITY** | Enterprise connectors raise access-control questions; not detailed publicly `[S]` |
| **SCALABILITY** | Designed for bounded research runs; production long-running agents need different shapes (per Anthropic's own analysis) `[D] REF-81` |
| **RELEVANCE TO PROJECT** | **Highest.** The de facto blueprint for breadth-first agentic research; its patterns (plan persistence, artifact pattern, citation pass, effort scaling, isolation) are the most defensible multi-agent design choices in the ecosystem. |

---

# 5. Perplexity

| Field | Content |
|---|---|
| **SYSTEM** | Perplexity (answer engine + Pro Deep Research) |
| **CATEGORY** | Real-time answer engine (RAG at scale) |
| **PURPOSE** | Cited answers to web queries in seconds; deep research reports (Pro) |
| **TARGET USERS** | General public, researchers, professionals |
| **CORE WORKFLOW** | Query → live web retrieval + cached index lookup → snippet extraction/contextualization (full pages not passed to LLM) → model orchestration (best model per task; Sonar models) → synthesized cited answer `[O→third-party] REF-72` |
| **INFORMATION INGESTION** | Web crawl + real-time index updates (tens of thousands of updates/sec claimed) `[O→third-party] REF-72` |
| **INFORMATION PROCESSING** | RAG pipeline: retrieve → snippet → rank → contextualize → generate `[O→third-party] REF-72` |
| **RETRIEVAL** | Vespa-based retrieval platform (per engineering-talk reporting); model-agnostic orchestration layer `[O→third-party] REF-72` |
| **REASONING** | Multiple LLMs (GPT/Claude/Sonar family) selected per query; ROSE inference engine `[O→third-party] REF-72` |
| **SOURCE GROUNDING** | Answers built from retrieved snippets; citations inline `[O]` |
| **CITATIONS** | Inline source links; FActScore study showed retrieval-augmented PerplexityAI among better long-form factuality scorers `[R] REF-33` |
| **MEMORY** | Thread-level; no documented long-term memory `[O]` |
| **KNOWLEDGE REPRESENTATION** | Search index + cached documents `[O→third-party]` |
| **AGENTS** | Deep Research mode is agentic (multi-step); details not public `[O]` |
| **TOOLS** | Web search, file upload, (Pro) internal search APIs `[O]` |
| **VERIFICATION** | Citation affordance; users verify `[O]` |
| **USER CONTROL** | Query-level only `[O]` |
| **PUBLICLY ESTABLISHED ARCHITECTURE** | RAG answer engine; snippet-level context construction; model orchestration; Vespa (per talks); Sonar models `[O→third-party]` |
| **INFERRED ARCHITECTURE** | Query rewriting → hybrid retrieval → rerank → snippet selection → prompt assembly → generation with citation markers `[N]` |
| **UNKNOWN ARCHITECTURE** | Ranking internals, prompt templates, orchestration policy details `[S→N]` |
| **STRENGTHS** | Speed + freshness; snippet-based context keeps cost/latency low; model-agnostic design `[O→third-party]` |
| **WEAKNESSES** | Open-web reliability; shallow synthesis vs deep research agents; source quality varies `[O]` |
| **FAILURE MODES** | Stale/incorrect sources; snippet out of context; answer over-reliance on top-ranking pages `[O→third-party]` |
| **PRIVACY / SECURITY** | Consumer/enterprise plans; not studied in depth here `[S]` |
| **SCALABILITY** | Proven at consumer scale (the strongest production RAG-at-scale datapoint in this study) `[O→third-party]` |
| **RELEVANCE TO PROJECT** | **Medium.** Demonstrates snippet-level context construction and hybrid orchestration at scale; internal specifics are third-party-reported, so it informs direction, not design. |

*(Part 2 continues with Elicit, Consensus, scite, STORM, GPT Researcher, and the study/PKM stacks.)*
# SYSTEM_COMPARISON — Part 2 (Elicit, Consensus, scite, STORM, GPT Researcher, study & PKM stacks)

# 6. Elicit

| Field | Content |
|---|---|
| **SYSTEM** | Elicit (Ought/Ellicit Labs) |
| **CATEGORY** | AI literature-review assistant / systematic-review workflow tool |
| **PURPOSE** | Search papers, extract structured data, synthesize across studies |
| **TARGET USERS** | Academic researchers (esp. biomedical/social science), systematic reviewers |
| **CORE WORKFLOW** | Research question → semantic search over ~125–138M papers (Semantic Scholar) → shortlist (~50–60) → structured extraction into customizable columns (PICO, methods, outcomes, limitations) → synthesis/report mode (up to 500 sources) → export (CSV) `[O→third-party] REF-73` |
| **INFORMATION INGESTION** | Semantic Scholar metadata + full-text PDFs where accessible (paywalls block) `[O→third-party] REF-73` |
| **INFORMATION PROCESSING** | Semantic retrieval + reranking; LLM-based structured extraction with sentence-level citations `[O→third-party] REF-73` |
| **RETRIEVAL** | Semantic search over papers (single database — a known limitation) `[O→third-party] REF-73` |
| **REASONING** | GPT/Claude-class models for extraction/synthesis `[O→third-party]` |
| **SOURCE GROUNDING** | Sentence-level citations to source papers; extraction accuracy claimed ~90%, requires spot-checking; measured sensitivity ~39.5% / precision ~41.8% (2025 academic evaluation) `[O→third-party] REF-73` |
| **CITATIONS** | Sentence-level links to papers `[O→third-party]` |
| **MEMORY** | Paper library; project-level organization `[O→third-party]` |
| **KNOWLEDGE REPRESENTATION** | Tables (literature matrices) + paper library `[O→third-party]` |
| **AGENTS** | None documented `[O]` |
| **TOOLS** | Semantic search, extraction tables, report mode, Zotero import, API (Pro) `[O→third-party]` |
| **VERIFICATION** | Citation links; vendor recommends human verification of extractions `[O→third-party]` |
| **USER CONTROL** | High: users define extraction columns; screening workflows `[O→third-party]` |
| **PUBLICLY ESTABLISHED ARCHITECTURE** | Semantic Scholar index + LLM extraction/synthesis pipeline; table-first UX `[O→third-party]` |
| **INFERRED ARCHITECTURE** | Paper retrieval → relevance ranking → per-paper chunking → LLM extraction with structured output → table assembly `[N]` |
| **UNKNOWN ARCHITECTURE** | Exact models, chunking, extraction prompting `[S→N]` |
| **STRENGTHS** | Structured extraction at scale; systematic-review workflow depth; sentence-level citation transparency `[O→third-party]` |
| **WEAKNESSES** | Single-database coverage; extraction errors (tables/study arms); weaker for theory/engineering/humanities; no citation intelligence `[O→third-party]` |
| **FAILURE MODES** | Missed papers (low sensitivity); extraction conflation; paywall gaps `[O→third-party]` |
| **PRIVACY / SECURITY** | SaaS; not studied here `[S]` |
| **SCALABILITY** | 40k-paper screening at Enterprise tier `[O→third-party]` |
| **RELEVANCE TO PROJECT** | **High.** The table-extraction + sentence-citation pattern is directly reusable for claim-level extraction; its sensitivity problem motivates multi-source search and human spot-check UX. |

# 7. Consensus

| Field | Content |
|---|---|
| **SYSTEM** | Consensus |
| **CATEGORY** | Evidence-synthesis answer engine (scientific literature) |
| **PURPOSE** | "What does the research say?" — synthesized, confidence-scored answers with study filters |
| **TARGET USERS** | Researchers, clinicians, students |
| **CORE WORKFLOW** | Question → literature search (~200M papers) → study-level synthesis → yes/no/maybe meter + confidence → direct quotes + links `[O→third-party] REF-73` |
| **INFORMATION INGESTION** | Academic corpus; study metadata (sample size, population, methodology) `[O→third-party]` |
| **INFORMATION PROCESSING** | Evidence synthesis over studies; contradictory findings surfaced `[O→third-party]` |
| **RETRIEVAL** | Semantic + study-filtered search `[O→third-party]` |
| **REASONING** | LLM synthesis over retrieved studies `[O→third-party]` |
| **SOURCE GROUNDING** | Answers tied to specific papers; evidence-strength indicators `[O→third-party]` |
| **CITATIONS** | Links to source papers; quotes `[O→third-party]` |
| **MEMORY** | None documented `[O]` |
| **KNOWLEDGE REPRESENTATION** | Evidence meters; study lists `[O→third-party]` |
| **AGENTS** | None `[O]` |
| **TOOLS** | Study filters (RCT-only etc.) `[O→third-party]` |
| **VERIFICATION** | Confidence scores; contradictory-finding flags — a genuinely useful verification pattern `[O→third-party]` |
| **USER CONTROL** | Study filtering `[O→third-party]` |
| **PUBLICLY ESTABLISHED ARCHITECTURE** | Literature-scale evidence synthesis with confidence + contradiction surfacing `[O→third-party]` |
| **INFERRED ARCHITECTURE** | Corpus retrieval → per-study summarization → aggregate synthesis + contradiction analysis `[N]` |
| **UNKNOWN ARCHITECTURE** | Internal pipeline `[S→N]` |
| **STRENGTHS** | Contradiction highlighting + confidence framing; empirical-question focus `[O→third-party]` |
| **WEAKNESSES** | Weak for theoretical questions; coverage bias (biomed/social science); no organization/collections `[O→third-party]` |
| **FAILURE MODES** | Repetitive results across review papers; shallow methodology drill-down `[O→third-party]` |
| **PRIVACY / SECURITY** | SaaS `[S]` |
| **SCALABILITY** | Large corpus, consumer UX `[O→third-party]` |
| **RELEVANCE TO PROJECT** | **High.** The contradiction/consensus surfacing + confidence-scoring pattern is a core requirement for the project's verification layer. |

# 8. scite

| Field | Content |
|---|---|
| **SYSTEM** | scite (scite.ai) |
| **CATEGORY** | Citation-intelligence platform |
| **PURPOSE** | Classify how papers cite each other (supporting / contradicting / mentioning) |
| **TARGET USERS** | Researchers, librarians, evaluators |
| **CORE WORKFLOW** | Search papers → Smart Citations (1.2B+ citation statements classified) → filter by citation context → badges on Scholar/PubMed via extension `[O→third-party] REF-73` |
| **INFORMATION INGESTION** | Full-text corpus of articles; citation-statement extraction `[O→third-party]` |
| **INFORMATION PROCESSING** | Citation-context classification (support/contradict/mention) `[O→third-party]` |
| **RETRIEVAL** | Citation-aware search `[O→third-party]` |
| **REASONING** | ML classification of citation statements `[O→third-party]` |
| **SOURCE GROUNDING** | Citations are the data; context snippets shown `[O→third-party]` |
| **CITATIONS** | The product's core object `[O→third-party]` |
| **MEMORY** | Dashboards only `[O→third-party]` |
| **KNOWLEDGE REPRESENTATION** | Citation graph with typed edges — a claim-level knowledge graph `[O→third-party]` |
| **AGENTS** | None `[O]` |
| **TOOLS** | Browser extension; dashboards `[O→third-party]` |
| **VERIFICATION** | Typed citation edges let users see whether findings survived scrutiny `[O→third-party]` |
| **USER CONTROL** | Filters `[O→third-party]` |
| **PUBLICLY ESTABLISHED ARCHITECTURE** | Citation-statement classification over a large corpus `[O→third-party]` |
| **INFERRED ARCHITECTURE** | Full-text ingest → sentence-level citation-context extraction → classifier (support/contradict/mention) → typed citation graph `[N]` |
| **UNKNOWN ARCHITECTURE** | Classifier specifics `[S→N]` |
| **STRENGTHS** | Unique citation-intelligence signal; direct support for "did later work contradict this?" `[O→third-party]` |
| **WEAKNESSES** | No discovery/screening workflow; coverage dependent on corpus; USI metrics non-standard `[O→third-party]` |
| **FAILURE MODES** | Misclassification of citation intent (unverified rate); corpus gaps `[S]` |
| **PRIVACY / SECURITY** | SaaS `[S]` |
| **SCALABILITY** | 1.2B+ statements `[O→third-party]` |
| **RELEVANCE TO PROJECT** | **Medium-High.** The typed-citation-edge pattern (support/contradict/mention) is an implementable, high-value knowledge-representation idea for claim tracking. |

# 9. STORM (Stanford, open source)

| Field | Content |
|---|---|
| **SYSTEM** | STORM — Synthesis of Topic Outlines through Retrieval and Multi-perspective Question Asking (knowledge-storm) |
| **CATEGORY** | Open-source knowledge-curation / article-generation pipeline |
| **PURPOSE** | Write Wikipedia-like articles with citations from scratch |
| **TARGET USERS** | Researchers; tool for Wikipedia pre-writing; study-material generation |
| **CORE WORKFLOW** | Topic → perspective-guided question asking (perspectives discovered from similar articles) → simulated expert conversations grounded in search → outline → article generation with citations → polish `[R/I] REF-26/50` |
| **INFORMATION INGESTION** | Web search via configurable backends `[I] REF-50` |
| **INFORMATION PROCESSING** | Two-stage: pre-writing (research + outline) vs writing (article) `[R] REF-26` |
| **RETRIEVAL** | Search-grounded conversation turns; outline-driven retrieval `[R]` |
| **REASONING** | LLM (configurable) for perspectives, questions, outlines, articles `[I]` |
| **SOURCE GROUNDING** | References collected during pre-writing; citations attached in writing stage `[R]` |
| **CITATIONS** | Inline citation markers with reference list; evaluated by expert Wikipedia editors `[R] REF-26` |
| **MEMORY** | None beyond pipeline artifacts `[I]` |
| **KNOWLEDGE REPRESENTATION** | Outline + references + article `[I]` |
| **AGENTS** | Simulated multi-perspective conversations (writer + expert personas) — an agentic simulation pattern `[R]` |
| **TOOLS** | Search API; optional grounding to user sources `[I]` |
| **VERIFICATION** | Citation-to-reference consistency; human editing assumed `[R]` |
| **USER CONTROL** | Topic choice; pipeline configuration `[I]` |
| **PUBLICLY ESTABLISHED ARCHITECTURE** | Full source code; NAACL 2024 paper with evaluation `[I/R]` |
| **INFERRED ARCHITECTURE** | N/A (open source) |
| **UNKNOWN ARCHITECTURE** | N/A (open source; configuration-dependent behavior) |
| **STRENGTHS** | Open, reproducible, tested; perspective-guided questioning is a proven breadth technique; article-outline-first structure `[I/R]` |
| **WEAKNESSES** | Not publication-ready without heavy editing; search-quality dependent; LLM-cost heavy `[R]` |
| **FAILURE MODES** | Outlines/sources mismatch; perspective bias; retrieval gaps `[R]` |
| **PRIVACY / SECURITY** | Self-hosted; user controls data `[I]` |
| **SCALABILITY** | Pipeline, not service; costs scale linearly with turns `[I]` |
| **RELEVANCE TO PROJECT** | **High.** The most direct open-source blueprint for the research-pipeline half of the project (question → source discovery → outline → cited draft). |

# 10. GPT Researcher (open source)

| Field | Content |
|---|---|
| **SYSTEM** | GPT Researcher (assafelovic) |
| **CATEGORY** | Autonomous deep-research agent (open source) |
| **PURPOSE** | Produce cited research reports from a single query |
| **TARGET USERS** | Developers, analysts, students |
| **CORE WORKFLOW** | Query → task-specific planner agent generates research questions → parallel crawler agents gather per-question info → per-resource summarization with source tracking → filter/aggregate → publisher writes cited report `[I] REF-51` |
| **INFORMATION INGESTION** | Web scraping (JS support), local documents `[I]` |
| **INFORMATION PROCESSING** | Plan → execute → summarize → aggregate → publish `[I]` |
| **RETRIEVAL** | Search APIs (Tavily) + scraping `[I]` |
| **REASONING** | Configurable LLMs (GPT-4-class, 128k context) `[I]` |
| **SOURCE GROUNDING** | Summaries track sources; report aggregates cited resources (20+ sources typical) `[I]` |
| **CITATIONS** | Source-attributed report sections `[I]` |
| **MEMORY** | Context + memory tracked through research process `[I]` |
| **KNOWLEDGE REPRESENTATION** | Report + resource list `[I]` |
| **AGENTS** | Planner + execution/crawler agents + publisher `[I]` |
| **TOOLS** | Search, scrape, LLM backends `[I]` |
| **VERIFICATION** | Source tracking; no automated fact verification `[I]` |
| **USER CONTROL** | Configuration; query-level `[I]` |
| **PUBLICLY ESTABLISHED ARCHITECTURE** | Open source `[I]` |
| **INFERRED ARCHITECTURE** | N/A (open source) |
| **UNKNOWN ARCHITECTURE** | N/A |
| **STRENGTHS** | Proven open architecture; parallel gathering; active community (~28k stars); local+web research `[I] REF-51/74` |
| **WEAKNESSES** | Report quality varies; no verification layer; scraping fragility `[O→third-party] REF-74` |
| **FAILURE MODES** | Source duplication; aggregation hallucinations; search-API cost `[O→third-party]` |
| **PRIVACY / SECURITY** | Self-hosted `[I]` |
| **SCALABILITY** | Per-run cost scales with questions × sources `[I]` |
| **RELEVANCE TO PROJECT** | **High.** A minimal, extensible reference for planner/executor/publisher decomposition; can be forked/adapted. |

# 11. Study & Learning Stack (condensed)

Systems: ChatGPT Study Mode, Claude Learning Mode, Gemini Guided Learning, Khanmigo, Quizlet (+Magic Notes), Anki (FSRS), RemNote, StudyFetch, Otter.ai, Wolfram Alpha, Photomath. `[O→third-party] REF-76`

| Tool | Pattern | Evidence status |
|---|---|---|
| ChatGPT Study Mode / Claude Learning Mode / Gemini Guided Learning | Socratic tutors: coach step-by-step, refuse to hand answers; auto-generated practice quizzes | Product behavior `[O]`; underlying technique (Socratic tutoring) motivated by mastery-learning research but product-specific efficacy unpublished |
| Khanmigo | GPT-4-based Socratic tutor, safety monitor model, teacher visibility; 2M users 2024–25 | **No peer-reviewed efficacy study as of early 2026**; J-PAL RCT (AEARCTR-0013519) results expected mid-2026; critics question evidence base `[O→third-party] REF-77` |
| Quizlet | Magic Notes: PDFs → flashcard sets; Q-Chat tutor | Product behavior `[O]` |
| Anki + FSRS | Open-source spaced repetition; FSRS scheduling algorithm (successor to SM-2) | Implementation + community validation `[I/O] REF-76`; spaced repetition meta-analytically supported `[R] REF-41` |
| RemNote | Notes ↔ flashcards bidirectional; spaced repetition built-in | Product behavior `[O] REF-76` |
| StudyFetch | Lecture → study set pipeline; Spark.E tutor trained on your course | Product behavior `[O] REF-76` |
| Otter.ai | Lecture transcription + search | Product behavior `[O] REF-76` |
| Wolfram Alpha / Photomath | Symbolic computation / step-by-step math solving (non-LLM engines) | Product behavior `[O]`; high STEM accuracy by construction |

**Design lesson:** the evidence-backed learning loop is *active recall + spaced repetition* (REF-39–43), and AI's role is best evidenced when it *generates practice material from the learner's own sources* (REF-43) and *tests* the user rather than merely summarizing (Bloom's 2-sigma via tutoring, REF-44). Passive consumption features (audio overviews) are engaging but have no direct learning-gain evidence.

# 12. Personal Knowledge Management (condensed)

Systems: Notion AI, Obsidian, Logseq, Roam, Mem, Reflect, Capacities, Anytype. `[O→third-party] REF-78`

| Philosophy | Tools | Tradeoffs |
|---|---|---|
| Hierarchical / all-in-one workspace | Notion, Coda | Strong team collaboration; AI add-on; weaker graph semantics |
| Local-first network (bidirectional links + graph) | Obsidian, Logseq | Full data ownership; AI via plugins; steep self-management |
| Cloud network (block-level linking) | Roam | Academic/Zettelkasten workflows; cost; vendor lock-in |
| AI-native (auto-organization, surfacing) | Mem, Reflect, Capacities | Low-friction capture; weaker user control over structure; vendor risk; limited export |

**Design lesson:** PKM products split on *who imposes structure* (user vs AI) and *data portability*. For a research system, structure imposed on *sources* (document → claim → evidence) should be systematic, while structure imposed on *notes* should stay user-controlled. Local-first/exportable formats (Markdown) reduce lock-in risk (REF-78).

---

## Cross-cutting observations from the comparison

1. **Two distinct product families** solve different problems: *user-corpus grounding* (NotebookLM, Elicit, StudyFetch) vs *open-world agentic research* (Deep Research variants, Perplexity, STORM, GPT Researcher). A project can serve both, but they have different architectures and failure modes.
2. **The best-documented proprietary architecture is Claude Research** (REF-04) — the only one with an official engineering write-up. All other proprietary claims in this document are third-party or INFERRED.
3. **Citation affordances are universal; citation reliability is not.** Every cited-answer product shows citation errors or precision limits under scrutiny (REF-08, REF-32, REF-71, REF-73).
4. **Verification features cluster into a handful of implementable patterns:** sentence-level citation links (NotebookLM, Elicit), typed citation edges (scite), contradiction surfacing + confidence (Consensus), dedicated citation pass (Claude Research), atomic-fact checks (FActScore), user-visible source viewers (all).
5. **Study tools with real learning evidence are rare:** the only robustly evidenced techniques are retrieval practice and spacing (REF-39–43); most AI study features remain product claims.
