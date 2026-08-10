# REFERENCES — Evidence Base for the AI Research & Knowledge System Study

**Project:** AI Research Scaffolding & Knowledge Systems — exploratory research phase
**Compiled:** 2026-08-10
**Method:** Sources were collected via targeted web research across official documentation, academic literature, open-source repositories, engineering publications, and credible third-party analysis. Every source is classified by evidence type per the directive's taxonomy: **DOCUMENTED** (official), **OBSERVED** (public behavior), **IMPLEMENTED** (source code), **RESEARCH-SUPPORTED** (academic/technical), **INFERRED** (reasonable inference), **SPECULATIVE** (unverified hypothesis). Third-party analyses are marked explicitly as such.

---

## A. Official Documentation & Engineering Publications (DOCUMENTED)

| ID | Source | What it establishes | Evidence class |
|----|--------|---------------------|----------------|
| REF-01 | Google — NotebookLM Help: "Learn about NotebookLM" (support.google.com/notebooklm/answer/16164461) | Official feature set: upload PDFs/websites/YouTube/audio/Drive/Slides; grounded chat with inline citations; study guides, briefings, audio overviews, mind maps, flashcards, quizzes, video overviews, infographics, slide decks; source limits; privacy terms | DOCUMENTED |
| REF-02 | Google for Education — "Generative AI Tool for Teachers & Students" (edu.google.com/ai-notebooklm) | Education edition: grounding in user sources only; limits (notebooks, sources, daily chats, overviews per day); "data is not human reviewed or used to train AI models" (Workspace for Education core services); language coverage | DOCUMENTED |
| REF-03 | Google blog (blog.google): "NotebookLM now lets you listen…" (Jan 2026 re-post of Sept 2024 Audio Overviews launch) + "NotebookLM adds audio and YouTube support" (Sept 2024) | Audio Overviews: two AI hosts, download, citation-to-transcript links for video/audio sources; source expansion history | DOCUMENTED |
| REF-04 | Anthropic Engineering — "How we built our multi-agent research system" (anthropic.com/engineering, June 2025) | Claude Research architecture: LeadResearcher + parallel subagents; plan persisted to memory before 200k-token truncation; subagent outputs to filesystem ("artifact" pattern); dedicated CitationAgent pass; token usage explains ~80% of variance on BrowseComp; ~15× token cost; 90.2% internal-eval gain; interleaved thinking; tool selection heuristics | DOCUMENTED |
| REF-05 | Anthropic — "Building effective agents" (Dec 2024); summarized by agentpatterns.ai and mer.vin (2026) | Workflows (prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer) vs autonomous agents; decision criteria; compounding error rates per extra LLM call | DOCUMENTED (primary) / third-party summaries |
| REF-06 | Anthropic — "Introducing Contextual Retrieval" (Sept 2024); summarized by callsphere.ai, ninadpathak.com; community reimplementation GitHub (RionDsilvaCS) | Contextual embeddings + contextual BM25: prepend 50–100-token LLM-generated chunk context before indexing; 49% reduction in retrieval failure (top-20) combining both; ~67% with reranker; ~$1.02 per M tokens indexing cost with prompt caching | DOCUMENTED (primary) / third-party replication |
| REF-07 | Anthropic — "When to use multi-agent systems (and when not to)" (claude.com/blog, July 2026) | Decision framework: parallelization, context-centric decomposition, black-box verification; multi-agent not always appropriate | DOCUMENTED |
| REF-08 | OpenAI — Deep Research System Card (cdn.openai.com/deep-research-system-card.pdf, Feb 2025) | Deep Research: o3-based reasoning agent for multi-step web research; RL-trained browsing (search/click/scroll), Python sandbox tool, file reading; eval results; prompt-injection & contamination mitigations; browser-based contamination handling | DOCUMENTED |
| REF-09 | OpenAI Academy — "Research with ChatGPT" (openai.com/academy, 2026) | Search vs Deep Research distinction; deep research: agentic multi-step process (plan, search, evaluate sources, refine queries, synthesize); runs 5–30 min; citation expectations; scope limits | DOCUMENTED |
| REF-10 | Anthropic — Model Context Protocol announcement (Nov 2024); Wikipedia "Model Context Protocol" (updated 2026) | MCP: open standard for AI↔system integration; JSON-RPC 2.0; tools/resources/prompts primitives; LSP-inspired; adopted by OpenAI & Google; donated to Agentic AI Foundation (Linux Foundation) Dec 2025 | DOCUMENTED |
| REF-11 | Google — Gemini Deep Research product documentation; summarized by digitalapplied.com (2026) | Deep Research: research plan shown before execution, modifiable; multi-source reports with citations; export to Google Docs; plan-dependent source access (Drive, Gmail, NotebookLM sources) | DOCUMENTED (product) / third-party summary |
| REF-12 | NotebookLM Help — "Privacy and Terms of Use in NotebookLM" (support.google.com) | Privacy: uploaded content used only to answer within the notebook; not used to train models (per Google's posted terms) | DOCUMENTED |

## B. Academic Research (RESEARCH-SUPPORTED)

| ID | Source | Contribution |
|----|--------|--------------|
| REF-20 | Gao et al. 2024 — "Retrieval-Augmented Generation for Large Language Models: A Survey" (arXiv:2312.10997) | Canonical RAG taxonomy: Naive → Advanced → Modular RAG; retrieval/generation/augmentation components; evaluation frameworks; hybrid structured+unstructured trends |
| REF-21 | Lewis et al. 2020 — "RAG for Knowledge-Intensive NLP Tasks" (arXiv:2005.11401) | Foundational RAG architecture (retriever + seq2seq generator) |
| REF-22 | Asai et al. 2023 — "Self-RAG" (arXiv:2310.11511) | Adaptive retrieval via reflection tokens (retrieve/relevant/supported/grounded); improves factuality & citation accuracy vs ChatGPT and retrieval-augmented baselines |
| REF-23 | Yan et al. 2024 — "CRAG: Corrective RAG" (arXiv:2401.15884) | Lightweight retrieval evaluator; correction strategies (correct/incorrect/ambiguous) with web-search fallback and decomposition; plug-and-play (Self-CRAG) |
| REF-24 | Edge et al. 2024 — "From Local to Global: A GraphRAG Approach to Query-Focused Summarization" (arXiv:2404.16130) | LLM-based entity/relationship/claim extraction → weighted knowledge graph → Leiden communities → hierarchical community summaries; global map-reduce search vs local search; benchmark vs semantic search on sensemaking questions; no domain schema required |
| REF-25 | Gutiérrez et al. 2024 — "HippoRAG" (NeurIPS 2024, arXiv:2405.14831) | KG + Personalized PageRank retrieval inspired by hippocampal indexing; up to 20% over SOTA multi-hop QA; 10–30× cheaper and 6–13× faster than iterative retrieval (IRCoT) |
| REF-26 | Shao et al. 2024 — "STORM" (NAACL 2024, arXiv:2402.14207) | Two-stage (pre-writing: perspective-guided question asking + simulated conversations + outline; writing: article with citations); evaluated with expert Wikipedia editors; open-source knowledge-storm |
| REF-27 | Packer et al. 2023 — "MemGPT" (arXiv:2310.08560) | Virtual context management: OS-inspired memory hierarchy (main context / external storage), self-editing memory via function calls; document analysis + multi-session agents |
| REF-28 | Park et al. 2023 — "Generative Agents" (arXiv:2304.03442) | Memory stream + reflection + planning; retrieval scores = recency + importance + relevance; ablations show all components matter for long-horizon coherence |
| REF-29 | Du et al. 2023 — "Improving Factuality and Reasoning… Multiagent Debate" (ICML 2024, arXiv:2305.14325) | Multi-round agent debate improves math/strategic reasoning & factual validity vs single agents (incl. single-agent reflection) |
| REF-30 | Chan et al. 2024 — "If Multi-Agent Debate is the Answer, What is the Question?" (arXiv:2502.08788) | Systematic evaluation: MAD methods fail to reliably beat simple single-agent baselines (CoT, self-consistency) even with more inference compute; model heterogeneity helps (Heter-MAD) |
| REF-31 | "Multi-Agent Debate for LLM Judges with Adaptive Stability Detection" (arXiv:2510.12697, 2025) | Debate helps only on complex/high-variance tasks; gains modest; simple majority voting (SoM) comparable on simpler tasks; MAD underperformed single-model on most tasks in one comparison |
| REF-32 | Gao et al. 2023 — "Enabling LLMs to Generate Text with Citations" / ALCE (arXiv:2305.14627) | First automatic citation-evaluation benchmark; fluency/correctness/citation-quality metrics correlate with human judgment; best models lack complete citation support ~50% of time on ELI5 |
| REF-33 | Min et al. 2023 — "FActScore" (EMNLP 2023, arXiv:2305.14251) | Atomic-fact decomposition evaluation of long-form factuality; ChatGPT scores ~58% factual precision on biographies; retrieval-augmented PerplexityAI scores higher; model approximates human score within <2% error |
| REF-34 | Liu et al. 2023 — "Lost in the Middle" (TACL 2024, arXiv:2307.03172) | U-shaped positional bias in long contexts; 20→50 docs only ~1–1.5% gains; implications for context construction order |
| REF-35 | Xu et al. 2024 — "Retrieval Augmented Generation or Long-Context LLMs?" (arXiv:2407.16833) | On their benchmark, RAG lags long-context LLMs but predictions overlap highly; SELF-ROUTE routing achieves LC-comparable results at lower cost; model-dependent behaviors |
| REF-36 | Es et al. 2023 — "RAGAS" (arXiv:2309.15217) | Automated RAG evaluation: faithfulness, answer relevance, context relevance/precision/recall; LLM-as-judge reference-free metrics |
| REF-37 | "Evaluation of RAG: A Survey" (arXiv:2405.07437, 2024) | Unified evaluation process (Auepora): target/dataset/metric choices; catalog of benchmarks (RGB, MultiHop-RAG, CRUD-RAG, MedRAG…) |
| REF-38 | RAGBench (arXiv:2407.11005, 2024) | Fine-tuned DeBERTa-large judge outperforms few-shot LLM judges on RAGBench; RAG-specific explainable labels |
| REF-39 | Roediger & Karpicke 2006 — "Test-Enhanced Learning" (Psychological Science 17(3)) | Retrieval practice: ~61% recall at 1 week vs ~40% for rereading (equal time); testing effect canonical result |
| REF-40 | Karpicke & Bauernschmidt 2011 — spaced retrieval (Memory & Cognition; summarized in ERIC ED599273 "Retrieval-Based Learning: A Decade of Progress") | Spaced retrieval roughly doubles long-term retention vs massed practice; retrieval practice beats elaborative studying (concept mapping) |
| REF-41 | Cepeda et al. 2006 — spacing effect meta-analysis (Psychological Bulletin 132(3)) | Distributed practice robustly outperforms massed practice across time intervals |
| REF-42 | Dunlosky et al. 2013 — "Improving Students' Learning With Effective Learning Techniques" (Psych Science in the Public Interest 14(1)) | Practice testing and distributed practice rated high-utility; rereading/ highlighting rated low utility |
| REF-43 | Bachiri et al. 2025 — "Harnessing generative AI to boost active retrieval and retention in MOOCs with spaced repetition" (Knowledge Management & E-Learning 17(3), ERIC EJ1481879) | AI-generated Q&A learning cards + spaced repetition: improved retention (75% students / 80% instructors report) in MOOC study; notes personalization and language-complexity challenges |
| REF-44 | Bloom 1984 — "The 2 Sigma Problem" (Educational Researcher 13(6)) | One-to-one tutoring ≈ 2 SD above conventional classroom instruction; motivates AI tutoring economics |
| REF-45 | jina-reranker-v3 (arXiv:2509.25085, 2025); ColBERT (Khattab & Zaharia 2020) | Late-interaction retrieval (per-token MaxSim) and cross-document reranking architectures; ColBERT index 4–10× single-vector size (PLAID reduces to 2–3×) |

## C. Open-Source Implementations (IMPLEMENTED)

| ID | Source | What it demonstrates |
|----|--------|----------------------|
| REF-50 | knowledge-storm / stanfordstorm (GitHub) | STORM pipeline modules (knowledge curation, outline, article generation, polishing); configurable LLM/retrieval backends |
| REF-51 | assafelovic/gpt-researcher (GitHub, ~28k stars) | Planner + execution agents + publisher; per-question crawler agents; source-tracked summaries; web + local docs |
| REF-52 | microsoft/graphrag (GitHub) | GraphRAG indexing + local/global search implementations |
| REF-53 | OSU-NLP-Group/HippoRAG (GitHub) | HippoRAG implementation (LLM KG construction + PPR) |
| REF-54 | Mem0 (GitHub, ~48k stars, Apache-2.0; YC-backed) + vectorize.io Mem0-vs-Letta comparison (2026) | Extraction-based memory layer; semantic retrieval (+graph on Pro); LongMemEval ~49.0% (independent eval); drop-in library |
| REF-55 | Letta / MemGPT runtime (GitHub, ~21k stars, Apache-2.0) | Full agent runtime; tiered memory (core/recall/archival); agents self-edit memory blocks |
| REF-56 | Docling (IBM Research, MIT) + parser benchmarks (ertas.ai 2026; github pdf-extraction-agenda) | Layout-aware PDF parsing (DocLayNet-trained); table extraction ~97.9% reported; structured JSON; CPU-friendly; DOCX/PPTX/HTML support |
| REF-57 | MinerU / Marker / Unstructured (open source) + benchmarks | Alternative parsing pipelines; MinerU strongest published accuracy; Marker fastest batch; Unstructured Apache-2.0; benchmarks vary by corpus — "the benchmark that decides is the one you run on your own documents" |
| REF-58 | LangGraph / CrewAI / AutoGen / OpenAI Agents SDK (comparisons: arsum.com 2026, openagents.org 2026, fungies.io 2026) | Framework tradeoffs: LangGraph = stateful graphs, durable execution, HITL; CrewAI = role-based teams, fast prototyping; AutoGen = conversational patterns (Microsoft moved it to maintenance mode in favor of Microsoft Agent Framework); OpenAI Agents SDK = lightweight, guardrails; all converging on MCP |
| REF-59 | Chroma / pgvector / Qdrant / Milvus / Weaviate (comparisons: lushbinary.com 2026, karthikeyanrathinam.medium 2026, kunalganglani.com 2026) | Vector-store decision rules: Chroma/pgvector < ~500k vectors (prototyping/Postgres shops); Qdrant 500k–50M (production default); Milvus 100M+ (distributed); Weaviate when native hybrid search desired |
| REF-60 | Community contextual retrieval reimplementation (GitHub RionDsilvaCS/NeuralVulture) | Reproduces Anthropic contextual retrieval with LlamaIndex (contextual embeddings + contextual BM25) |

## D. Third-Party Analysis & Observed Product Behavior (OBSERVED / third-party — treat as supporting, not primary)

| ID | Source | Notes |
|----|--------|-------|
| REF-70 | DigitalOcean — "What is NotebookLM" (2026); tooldirectory.ai; yuv.ai tutorial | Feature surface, plan tiers (Free/Plus/Pro/Ultra), source formats, Studio outputs, "closed RAG" characterization (third-party) |
| REF-71 | Medium — NotebookLM limitation reports (tisankan 2026; kombib 2025) | User-reported hallucinations in Audio Overviews (clauses fabricated, characters invented); claim of ~13% vs ~40% hallucination rate vs ChatGPT attributed to "Google's paper" — **unverified, treat as third-party claim**; Sept 2025 service degradation (official X post quoted); language-support discrepancies; free-tier limits |
| REF-72 | ByteByteGo — "How Perplexity Built an AI Google" (2025); aitoolland.com analysis (2026) | Perplexity pipeline: snippet extraction/contextualization → LLM synthesis with citations; model-agnostic orchestration; Vespa-based retrieval; Sonar models; ROSE inference engine; real-time index updates — **third-party analysis; some details from Perplexity engineering talks; internal specifics unverified** |
| REF-73 | Elicit / Consensus / scite comparisons (paperguide.ai 2026; thedrive.ai 2026; aitoolranked 2026; skywork 2025) | Elicit: Semantic Scholar-based (~125–138M papers), semantic search + reranking, structured extraction tables, sentence-level citations, ~90% claimed extraction accuracy, measured sensitivity ~39.5% / precision ~41.8% (2025 academic evaluation); Consensus: evidence synthesis w/ yes/no/maybe meters, study filters; scite: 1.2B+ citation statements classified supporting/contradicting/mentioning, Smart Citations browser badges; all: best for empirical literature, weaker for theory/emerging fields, need human verification |
| REF-74 | ListenLabs — open-source research agent roundup (2026) | GPT Researcher vs STORM vs Local Deep Research vs Ollama+Tavily+Firecrawl stack; deployment notes |
| REF-75 | BeanCount research log (2026) — GraphRAG bias audit | GraphRAG's 72–83% LLM-judge win rates collapse after correcting position/length artifacts in LLM-as-judge evaluation; claim-count analysis suggests genuine coverage gains |
| REF-76 | AI study-tool roundups (theairankings 2026; dupple 2026; memeburn 2026) | Landscape: ChatGPT Study Mode, Claude Learning Mode, Gemini Guided Learning, NotebookLM, Quizlet, Anki (FSRS), RemNote, StudyFetch, Khanmigo, Otter.ai, Wolfram Alpha, Photomath; consensus: combine 2–3 purpose-built tools |
| REF-77 | buildmvpfast — Khanmigo case study (2026) | Khanmigo: GPT-4/Azure, Socratic system prompts, safety monitor model, teacher review; **no published peer-reviewed efficacy study as of early 2026**; J-PAL/U Toronto RCT (AEARCTR-0013519) started June 2024, results expected mid-2026; critics (John Warner, Education Next) question evidence base; reported 2M users 2024–25 |
| REF-78 | PKM app comparisons (guptadeepak 2026; revoyant 2026; get-alfred 2026) | Notion AI, Obsidian, Logseq, Roam, Mem, Reflect, Capacities, Anytype: organizational philosophies (hierarchy vs network vs AI-driven), local-first vs cloud, AI feature depth, data portability/vendor risk |
| REF-79 | RAG practical guides (futureagi.com 2026 — chunking strategies; thread-transfer.com 2026 — reranking stacks) | Chunking: structure-aware > fixed-size for docs; late-interaction (ColBERT) wins multilingual/code (+8–14 points recall@5); reranking latency budgets and stacks (hybrid k=50–200 + cross-encoder/listwise rerank) |
| REF-80 | Leonie Monigatti — MemGPT paper review + Letta implementation (2025) | MemGPT two-tier memory design pattern; implementation walkthrough |
| REF-81 | FountainCity / The AI Engineer — Anthropic multi-agent blueprint analyses (2026) | Production validation of Anthropic's blueprint; cost multiplier ~15×; session-bounded vs long-running production agents; external-memory-first context strategy |
| REF-82 | Springer — RAG survey for healthcare (2025, s00521-025-11666-9) | RAG taxonomy applied to high-accountability domains; transparency requirements |

---

## Source Hierarchy Used When Conflicts Arise

Per the directive: (1) primary technical documentation → (2) official technical publications → (3) peer-reviewed research → (4) official engineering blogs → (5) source code → (6) developer presentations/interviews → (7) community discussions → (8) general articles → (9) unverified commentary.

**Exceptions noted in this study:**
- Anthropic's engineering blog (REF-04) is ranked as primary evidence for Claude Research because it is the only authoritative public source on that system's architecture; peer-reviewed status does not apply to product write-ups.
- Where official docs and third-party summaries conflict on product limits (e.g., REF-01/REF-02 vs REF-70 tier tables), official docs win; tier tables change frequently and are marked as time-sensitive.
- The "13% vs 40% hallucination rate" claim for NotebookLM (REF-71) is **not** used as established fact because its cited primary source ("Google's paper") could not be located and verified.
- Benchmark comparisons among PDF parsers (REF-56/57) conflict across publications; the study adopts the position that parse quality is corpus-dependent and must be measured in-project.

## Limitations of This Evidence Base

1. Proprietary system internals (NotebookLM, Perplexity, ChatGPT Deep Research, Gemini Deep Research, Claude Research) are **not publicly documented at implementation level**; only Claude Research has an official engineering write-up (REF-04). All other internal claims about these systems are INFERRED and labeled as such throughout.
2. Product features, limits, and pricing change rapidly; all product-level facts are dated 2026-08-10 and may be stale within months.
3. Some third-party analyses (REF-70 through REF-81) are marketing-adjacent or blog-grade; they are used only for product-behavior observations and practical tradeoffs, never as architectural evidence.
4. Learning-science citations (REF-39–42, REF-44) are canonical textbook-level findings included from established literature; the web-verifiable versions (ERIC EJ1481879, memx summary) are listed as corroboration.
