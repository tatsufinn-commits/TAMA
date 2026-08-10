# RESEARCH_ARCHITECTURES — How AI Research & Knowledge Systems Are Built

**Compiled:** 2026-08-10 | **Evidence taxonomy:** `[D]` DOCUMENTED, `[O]` OBSERVED, `[I]` IMPLEMENTED, `[R]` RESEARCH-SUPPORTED, `[N]` INFERRED, `[S]` SPECULATIVE | Reference keys → REFERENCES.md

---

## 1. The retrieval-augmented generation (RAG) lineage

RAG's canonical formulation (Lewis et al. 2020) couples a retriever with a parametric generator: retrieve top-k passages, condition generation on them `[R] REF-21`. The field matured through three paradigms per the canonical survey `[R] REF-20`:

```
Naive RAG                 Advanced RAG                 Modular RAG
query ──► retrieve ──►    pre-retrieval:               adaptive retrieval (Self-RAG,
         top-k ──►        query rewriting,             CRAG), routing, memory,
         generate          expansion,                 agentic loops, verifier,
                           indexing optimization       hybrid fusion, feedback
         problems:         post-retrieval:             patterns: any module can be
         - irrelevant      reranking, compression,     added/replaced/swapped
           chunks          prompt summarization
         - hallucination
         - weak citation
```

- **Naive RAG** (retrieve-then-generate, fixed k): simple, but sensitive to chunk quality and query phrasing; suffers irrelevant-context and hallucination issues `[R] REF-20`.
- **Advanced RAG** (pre-/post-retrieval optimization): query rewriting/expansion, hybrid retrieval, reranking, context compression — the bulk of production practice `[R] REF-20`.
- **Modular RAG**: components as swappable modules; includes agentic retrieval, self-reflection, corrective loops, and memory `[R] REF-20`. This is where modern research agents live.

**Project implication:** the project's default baseline should be Advanced-RAG-grade retrieval (hybrid + rerank + query preprocessing), with Modular-RAG capabilities (adaptive retrieval, verification modules) added where evaluation justifies them.

---

## 2. The agentic research loop (deep research pattern)

Deep-research products converge on a common loop shape despite different implementations:

```
USER QUERY
   │
   ▼
PLAN ──────► (HITL checkpoint: Gemini Deep Research shows editable plan [D REF-11])
   │
   ▼
DECOMPOSE into independent research tasks
   │
   ├─► TASK 1 ──► search ──► read ──► extract/notes     ┐
   ├─► TASK 2 ──► search ──► read ──► extract/notes     ├─ parallel (Claude Research
   ├─► TASK 3 ──► search ──► read ──► extract/notes     │  subagents [D REF-04])
   └─► ...                                              ┘
   │
   ▼
REFLECT: gaps? more tasks? (iterative waves [D REF-04])
   │
   ▼
SYNTHESIZE findings ──► CITATION/VERIFICATION PASS (dedicated agent [D REF-04])
   │
   ▼
REPORT with citations
```

### 2.1 Claude Research — the documented reference (Anthropic)

Publicly established `[D] REF-04`:
- Orchestrator-worker: a LeadResearcher (Opus-class, extended thinking) plans and coordinates; 3–5 (up to 10+) parallel Subagents (Sonnet-class) explore independent threads, each with its **own context window and tool set**; subagents do not coordinate mid-task (isolation is intentional).
- The lead saves its **plan to memory before the 200k-token context can truncate** — external memory first, not bigger contexts.
- Subagents return **condensed findings; larger artifacts go to a shared filesystem** and the lead receives lightweight references — the "artifact pattern" that minimizes the game-of-telephone.
- A **dedicated CitationAgent** processes the draft + sources and attaches specific citation locations — verification is separated from synthesis.
- Economics: ~**15× token cost** vs ordinary chat; on BrowseComp, token usage alone explains ~**80% of performance variance** (tool-call count and model choice the other two factors); internal eval showed **90.2% improvement** over a single-agent Opus-4 baseline; multi-agent systems "work mainly because they help spend enough tokens to solve the problem."
- Prompt-embedded effort scaling rules (1 agent simple fact-finding; 2–4 direct comparisons; 10+ complex research).

Inferred (unverified) `[N→S]`: framework-level orchestration code (rather than agent-to-agent chat), exact prompts, scheduling heuristics, memory-store implementation.

### 2.2 ChatGPT Deep Research (OpenAI)

Publicly established `[D] REF-08`:
- A single RL-trained reasoning model (o3-class, later o4-mini variant) with browser tools (search, click, scroll, file parsing), a sandboxed Python tool, and file-reading; trained via reinforcement learning on browsing tasks; adapts/backtracks during multi-step runs; 5–30 min runs; system card documents prompt-injection evaluations and browser-contamination controls.
- Observed limitations: citation mistakes and formatting errors; domain-name bias; difficulty constraining source scope `[O]`.

Inferred `[N]`: browsing → content extraction → summarization loop with periodic reflection; context compaction by summarization.

### 2.3 Gemini Deep Research (Google)

Publicly established `[D] REF-11`: user-editable research plan before execution; multi-source autonomous research; structured cited reports; Google Docs export. Internal architecture not public `[S→N]`.

### 2.4 STORM — open-source two-stage pipeline `[I/R] REF-26/50`

```
Topic ──► discover perspectives (from similar articles)
  ──► simulated conversations (writer ↔ expert, grounded in search)
  ──► outline generation ──► article generation with citations ──► polish
```
Key insight: **the core of automating research is generating good questions** — naive prompting fails; perspective-guided, retrieval-grounded question asking is what works. Evaluated with expert Wikipedia editors who found it helpful in pre-writing `[R]`.

### 2.5 GPT Researcher — open-source planner/executor `[I] REF-51`

Planner generates research questions → parallel crawler agents per question → per-resource summarized + source-tracked → aggregate → publish. Minimal, extensible; no verification layer; quality varies.

**Pattern synthesis:** deep research = *plan → decompose → parallel gather with isolated contexts → reflect → synthesize → verify*. The two strongest evidence-based decisions are (a) parallel isolation with separate contexts (token-spend economics, `[D] REF-04`) and (b) a separate verification/citation pass (`[D] REF-04`; ALCE shows unverified citations are unreliable `[R] REF-32`).

---

## 3. Knowledge-graph RAG

### 3.1 GraphRAG (Microsoft) `[R] REF-24, IMPLEMENTED REF-52`

- Indexing: LLM extracts entities, relationships, claims from every chunk → weighted entity graph → Leiden community detection → hierarchical community summaries (map-reduce, precomputed).
- Query: **Global search** = map-reduce over community summaries (sensemaking: "what are the main themes?"); **Local search** = entity-anchored graph traversal + text units (lookup precision).
- Results: global GraphRAG conditions outperform semantic search on sensemaking questions; semantic search better on specific lookups; no domain schema needed.
- **Critical caveats:** expensive LLM indexing; a 2025 bias audit found the 72–83% LLM-judge win rates collapse after correcting position/length artifacts in LLM-as-judge evaluation `[O→third-party] REF-75` — though claim-count analysis suggests genuine coverage gains. **Recommendation: treat GraphRAG as situational (global sensemaking over large corpora), validate with human-judged evals, and expect high indexing cost.**

### 3.2 HippoRAG `[R] REF-25, IMPLEMENTED REF-53`

- Constructs a KG from the corpus (entities/relations via LLM), then retrieval = **Personalized PageRank over the graph seeded by query entities**, combined with dense retrieval.
- Results: up to 20% over SOTA on multi-hop QA; single-step retrieval comparable to iterative retrieval (IRCoT) at **10–30× lower cost, 6–13× faster**.
- **Project implication:** for multi-hop "connect the dots across sources" questions, graph-anchored retrieval is a strong, evidence-backed alternative to expensive iterative loops.

### 3.3 LightRAG & variants

LightRAG-style dual-level (entity/relation + theme) graph indexing exists as open-source evolution; evidence base thinner than GraphRAG/HippoRAG — classed PROMISING/EXPERIMENTAL.

---

## 4. Long-context vs RAG — the tension every architecture must resolve

- **Lost in the Middle** `[R] REF-34`: LLMs use context non-uniformly (U-shaped); 20→50 retrieved docs yields only ~1–1.5% gains. Context *construction order* and *density of relevant info* matter more than raw quantity.
- **RAG vs long-context** `[R] REF-35`: on their benchmark, RAG *lags* long-context LLMs, but predictions overlap highly; a router (SELF-ROUTE) achieves long-context-comparable accuracy at lower cost; behaviors differ by model alignment.
- Medical QA work (BriefContext) shows **increasing key-information density** in context improves accuracy vs vanilla RAG `[R]`.

**Project implication:** do not assume RAG is mandatory. For small corpora (a few notebooks of student materials), a strong long-context model with whole-corpus or coarse retrieval may beat complex RAG. The rational default: *start simple (long-context + light retrieval), add RAG sophistication only when evaluation shows retrieval failures.* RAG's real advantages: cost (fewer tokens), freshness/updates, attribution (citations), and corpus-scoped grounding.

---

## 5. Retrieval engineering in practice

### 5.1 Hybrid retrieval (dense + sparse) + reranking — the production consensus
- Dense (embeddings) captures semantics; sparse (BM25) captures exact terms/identifiers; rerankers (cross-encoders, LLM listwise) fix candidate ordering. Production guides consistently recommend hybrid k=50–200 candidates + rerank top 5–20 `[O→third-party] REF-79`; the RAG survey documents reranking as an Advanced-RAG pillar `[R] REF-20`.
- **Contextual retrieval (Anthropic)** `[D] REF-06`: prepend an LLM-generated 50–100-token explanation of each chunk *in document context* before embedding and BM25 indexing → **49% reduction in top-20 retrieval failure** (contextual embeddings + contextual BM25); **~67% with a reranker**; ~$1.02/M tokens indexing cost with prompt caching. Community reimplementations exist `[I] REF-60`.
- **Late interaction (ColBERT-style)** `[R] REF-45`: per-token embeddings + MaxSim; wins on multilingual/code/mixed corpora (+8–14 recall@5 points); index 4–10× larger (PLAID: 2–3×). Situational.

### 5.2 Chunking
- Structure-aware chunking (headings, tables, sections) beats fixed-size for documents `[O→third-party] REF-79`; tables/figures need special handling (see ingestion doc); chunks 400–1000 tokens with contextual enrichment recommended by contextual-retrieval practice `[D/O] REF-06/79`; sub-100-token chunks degrade contextual enrichment `[O→third-party]`.

### 5.3 Adaptive retrieval
- **Self-RAG** `[R] REF-22`: model decides *whether* to retrieve (reflection tokens) and critiques relevance/support — improves factuality and citation accuracy vs ChatGPT and retrieval-augmented baselines.
- **CRAG** `[R] REF-23`: lightweight retrieval evaluator classifies results correct/incorrect/ambiguous; falls back to web search or decomposition; plug-and-play into other frameworks.
- **Routing** between RAG / long-context / parametric answering (SELF-ROUTE) `[R] REF-35`.
- Cost-aware: adaptive retrieval is Modular-RAG territory; add when naive retrieval's failure cost is demonstrated.

---

## 6. Architecture decision map (evidence-weighted)

| Decision | Evidence-backed default | Conditions to deviate |
|---|---|---|
| Retrieval basis | Hybrid (dense + sparse) + rerank, k=50–200 | Corpus tiny (≤ a few docs): long-context prompting may suffice `[R] REF-35` |
| Chunking | Structure-aware; 400–1000 tokens; contextual enrichment `[D/O]` | Multilingual/code-heavy: consider late interaction `[R] REF-45` |
| Graph layer | Skip initially; add HippoRAG-style for multi-hop, GraphRAG-style only for global sensemasking at scale `[R] REF-24/25` | Budget for LLM indexing; validate with human-judged evals `[O→third-party] REF-75` |
| Agentic loop | Plan → parallel isolated subagents → reflect → synthesize → separate verification pass `[D] REF-04` | Task not decomposable; cost budget small; simple QA suffices |
| Memory | External memory for plans/artifacts; notebook-scoped persistence `[D] REF-04, [R] REF-27` | Stateless single-session use cases |
| Verification | Dedicated verification stage + user-visible citation affordances `[D] REF-04, [R] REF-32/33` | Low-stakes, non-cited outputs (e.g., casual chat) |
| Model strategy | Model-agnostic orchestration layer (Perplexity pattern) `[O→third-party] REF-72`; token spend is the dominant quality lever `[D] REF-04` | Single-provider constraint acceptable |
# RESEARCH_ARCHITECTURES — Part 2 (Ingestion, Reconstruction, Failure Modes, Cost)

---

## 7. Document ingestion pipeline

Parsing is the hidden bottleneck of every knowledge system: garbage in → retrieval and citations degrade. Evidence:

- **Docling (IBM Research, MIT)** `[I] REF-56`: layout-aware parsing trained on DocLayNet (80k+ annotated pages); reported ~97.9% table extraction, 94.2% multi-column, 89.1% scanned-PDF OCR on one benchmark; structured JSON output preserving hierarchy; CPU-friendly; PDF/DOCX/PPTX/HTML/images.
- **MinerU / Marker / Unstructured** `[I] REF-57`: MinerU strongest published accuracy; Marker fastest batch throughput; Unstructured Apache-2.0; **benchmarks conflict across corpora — the deciding benchmark is your own documents** `[O→third-party] REF-57`.
- Design rules synthesized: preserve document hierarchy (headings/sections) for structure-aware chunking; extract tables as structured objects (not flattened text); keep figure captions linked to figures; retain metadata (title, authors, DOI, URL, dates) — provenance is a retrieval feature; parse images/figures via VLM only where content matters (EXPERIMENTAL); handle scanned PDFs via OCR pipeline choice.
- Audio/video: transcription (NotebookLM citations link to transcript segments `[D] REF-03`; Otter.ai demonstrates lecture-transcript search `[O] REF-76`).

```
SOURCE ──► FORMAT DETECTION ──► PARSING (layout-aware) ──► STRUCTURE TREE
   │                                                        │
   │                                                        ├─► metadata (title/author/date/DOI/URL)
   │                                                        ├─► tables/figures (structured)
   │                                                        └─► chunks (structure-aware + contextual)
```

## 8. Public-evidence reconstruction: proprietary systems

### 8.1 NotebookLM

**PUBLICLY ESTABLISHED** `[D] REF-01/02/03`:
- Accepts user-provided sources (PDF, Docs, Slides, Sheets, web, YouTube, audio, images) with per-notebook caps.
- Generates source-grounded answers with inline citations; can decline to answer outside sources.
- Auto-summarizes sources; generates study guides, briefings, FAQs, timelines, mind maps, audio/video overviews, flashcards, quizzes, infographics, slide decks.
- Powered by Gemini; education edition: no human review, no training on uploaded data (core services).
- Notebook-scoped persistence; public sharing of audio overviews; web/Deep Research source discovery.

**PLAUSIBLE TECHNICAL INTERPRETATION** `[N]`:
- Notebook-scoped indexing: parse → chunk → embed (likely Gemini-embedding-class models) → store; likely hybrid retrieval with passage-level reranking; grounded generation constrained to retrieved passages with citation markers; audio overview = separate TTS pipeline driven by an outline/summary over the same corpus; "closed RAG" (third-party characterization `REF-70`).
- Grounding enforcement likely via retrieval-only context plus prompt constraints — which would explain both the low hallucination rate and the residual hallucination reports `[O] REF-71`.

**UNKNOWN / UNVERIFIED** `[S→N]`:
- Exact embedding model, chunking algorithm, retrieval architecture, reranker, ranking, context-construction policy, grounding enforcement mechanism, orchestration, infrastructure, and the pipeline behind audio/video generation. None of these are publicly documented.

### 8.2 Perplexity

**PUBLICLY ESTABLISHED** `[O→third-party] REF-72`: answer-engine behavior (cited answers, real-time freshness); Vespa as retrieval platform (per engineering-talk reporting); model-agnostic orchestration; Sonar model family; snippet-based context construction; FActScore study places retrieval-augmented PerplexityAI above plain LLMs on long-form factuality `[R] REF-33`.

**PLAUSIBLE TECHNICAL INTERPRETATION** `[N]`: query rewrite → hybrid retrieval (live + cached index) → rerank → snippet extraction/contextualization → prompt assembly → generation with citation markers → answer.

**UNKNOWN / UNVERIFIED** `[S→N]`: ranking internals, prompt templates, orchestration policy, freshness indexing details, model selection heuristics.

### 8.3 ChatGPT Deep Research / Gemini Deep Research / Claude Research
- ChatGPT DR: `[D]` system-card facts (RL-trained browsing agent, Python sandbox) are established; internal loop details unknown `[S→N]`.
- Gemini DR: `[D]` plan-review + report facts; internals unknown `[S→N]`.
- Claude Research: **the exception** — architecture documented `[D] REF-04` (see §2.1); remaining unknowns are prompts/scheduling/infra `[S→N]`.

**Rule applied throughout:** no INFERRED item is presented as confirmed; every proprietary-system claim carries its class.

---

## 9. Architecture failure modes (cross-system)

| Failure mode | Where observed | Mitigation evidence |
|---|---|---|
| Retrieval misses (bad chunks/query) | Universal RAG failure; contextual retrieval reduces 49–67% `[D] REF-06` | Hybrid + rerank; query rewriting; adaptive retrieval `[R] REF-20/22` |
| Context misuse (lost-in-the-middle) | `[R] REF-34` | Order important info first/last; increase density `[R]`; fewer, better chunks |
| Generation drifts from sources | NotebookLM user reports `[O] REF-71`; citation gaps ~50% ELI5 `[R] REF-32` | Verification pass; atomic-fact checks `[R] REF-33`; human spot-check UX `[O→third-party] REF-73` |
| Citation errors / fabricated refs | Deep Research observed `[O] REF-08` | Dedicated citation agent `[D] REF-04`; ALCE-style metrics in CI `[R] REF-32` |
| Agent cost blowups | ~15× token cost documented `[D] REF-04`; debate methods consume more compute without reliable gains `[R] REF-30` | Effort-scaling rules; budgets; routing to single calls when task is simple `[D] REF-05/07` |
| Compounding agent errors | Anthropic: every extra LLM call adds error `[D] REF-05` | Workflows (code-controlled) over agents when path is predictable `[D] REF-05` |
| LLM-judge bias in evals | GraphRAG audit `[O→third-party] REF-75`; RAGBench `[R] REF-38` | Position/length-controlled evals; specialist judges; human validation sets |
| Parse degradation (tables/figures/scans) | Parser benchmarks `[O→third-party] REF-56/57` | Layout-aware parsing; structured table extraction; measure on own corpus |
| Staleness / source edits | General knowledge-system risk | Re-index on change; source versioning; dates in metadata |
| Prompt injection via browsed content | Documented for Deep Research `[D] REF-08` | Injection evals; restrict tools; sandbox browsing; treat web content as untrusted data |

---

## 10. Cost & scalability economics (what the evidence says)

1. **Tokens are the quality lever.** Token usage explains ~80% of variance on BrowseComp; multi-agent works "mainly because they help spend enough tokens" `[D] REF-04`. Architecture choice is largely a token-budget strategy.
2. **Parallelism buys breadth at ~15× chat cost** for agentic research `[D] REF-04`; for many tasks a single well-prompted call with retrieval is the right size `[D] REF-05`.
3. **Graph indexing moves cost to ingest:** GraphRAG-style LLM indexing is expensive; HippoRAG's PPR retrieval is 10–30× cheaper than iterative retrieval at query time `[R] REF-25`.
4. **Contextual enrichment costs ~$1.02/M tokens** at ingest (with caching) `[D] REF-06` — cheap relative to retrieval-failure cost.
5. **Vector stores scale by corpus:** <~500k vectors: Chroma/pgvector; 500k–50M: Qdrant (or Weaviate for native hybrid); 100M+: Milvus `[O→third-party] REF-59`. Do not deploy distributed stores pre-scale.
6. **Framework cost:** LangGraph for durable stateful flows (HITL, resumability); CrewAI for fast role-based prototypes; AutoGen moving to maintenance (Microsoft Agent Framework); all converging on MCP for tool integration `[O→third-party] REF-58`.

---

## 11. What the architectures imply for the project

- **The evidence supports a layered architecture:** ingestion → index → retrieval → grounded generation → verification → study/artifact layer → memory — each layer independently evaluable.
- **The strongest proprietary blueprint is Claude Research's** (documented): orchestrator-worker with isolated contexts, memory-persisted plans, artifact pattern, separate citation pass, effort scaling.
- **The strongest open-source blueprints are STORM and GPT Researcher** (implemented): two-stage research/writing and planner/executor decomposition, respectively.
- **The strongest knowledge-representation additions are typed claim→evidence links** (scite pattern), atomic-fact verification (FActScore), and graph-anchored multi-hop retrieval (HippoRAG).
- **Verification is a first-class architecture layer, not a post-hoc feature** — every reliable system in this study treats attribution as a separate concern with its own evaluation.
