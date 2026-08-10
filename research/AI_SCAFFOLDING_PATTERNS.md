# AI_SCAFFOLDING_PATTERNS — Agent Roles, Orchestration, and Control Structures

**Compiled:** 2026-08-10 | **Evidence taxonomy:** `[D]` DOCUMENTED, `[O]` OBSERVED, `[I]` IMPLEMENTED, `[R]` RESEARCH-SUPPORTED, `[N]` INFERRED, `[S]` SPECULATIVE | Reference keys → REFERENCES.md

---

## 1. What "AI scaffolding" means here

Scaffolding = the non-model machinery around an LLM that turns a single prediction call into a capable, reliable system: control flow, memory, tools, verification, and human oversight. Anthropic's framing is the anchor: **workflows** (code-controlled orchestration of LLM calls) vs **agents** (model-controlled loops over tools) `[D] REF-05`. The evidence says most tasks are better served by workflows or even single calls; agents earn their keep only on open-ended, verifiable-feedback tasks `[D] REF-05/07`.

---

## 2. Agent roles surveyed (with evidence status)

| Role | Function | Evidence | Verdict |
|---|---|---|---|
| **Planning agent** | Decompose task, choose strategy, write plan | Claude Research LeadResearcher `[D] REF-04`; STORM outline `[R] REF-26`; GPT Researcher planner `[I] REF-51` | HIGH VALUE when tasks are genuinely multi-step; plan-first also enables HITL review (Gemini DR `[D] REF-11`) |
| **Research/retrieval agent** | Search, browse, read, filter | Subagents `[D] REF-04`; Deep Research browsing `[D] REF-08`; crawler agents `[I] REF-51` | HIGH VALUE for breadth; retrieval-side alternatives (HippoRAG) cheaper for multi-hop `[R] REF-25` |
| **Source evaluator** | Judge relevance/quality of retrieved docs | CRAG retrieval evaluator `[R] REF-23`; Self-RAG critique tokens `[R] REF-22` | HIGH VALUE as lightweight module; keeps garbage out of context |
| **Critic agent** | Critique draft against rubric | Evaluator-optimizer `[D] REF-05`; debate roles `[R] REF-29/30` | SITUATIONAL — works with a clear rubric; circular without one `[D/O]` |
| **Verifier / fact-checking agent** | Check claims against sources | CitationAgent `[D] REF-04`; FActScore automated scorer `[R] REF-33` | HIGH VALUE — separation from synthesis is the documented lesson |
| **Citation agent** | Attach/verify citations at location level | CitationAgent `[D] REF-04` | HIGH VALUE for cited outputs; citation quality is otherwise unreliable `[R] REF-32` |
| **Summarizer/condenser** | Compress findings, keep provenance | Subagent condensed returns `[D] REF-04`; STORM pre-writing `[R] REF-26` | HIGH VALUE inside pipelines; unprovenanced summaries are a memory hazard |
| **Synthesis agent** | Merge findings into coherent output | Lead agent `[D] REF-04`; publisher `[I] REF-51` | HIGH VALUE as the final stage |
| **Memory agent** | Maintain/update persistent state | MemGPT self-editing memory `[R] REF-27`; Letta `[I] REF-55` | SITUATIONAL — complexity high; benefits only long-horizon agents |
| **Tool-use agent** | Call tools in a loop | Deep Research browsing + Python `[D] REF-08`; MCP servers `[D] REF-10` | HIGH VALUE where tools are needed; MCP is the integration standard |
| **Supervisor/orchestrator** | Coordinate subagents, decide waves | LeadResearcher `[D] REF-04` | HIGH VALUE in orchestrator-worker; unnecessary for simple tasks |
| **Debate (multi-agent)** | Agents critique each other's answers | Du et al. `[R] REF-29` vs negative re-eval `[R] REF-30/31` | LOW VALUE as homogeneous same-model debate; heterogeneity helps `[R] REF-30` |
| **Hierarchical agents** | Nested supervisors/teams | Extension of orchestrator pattern; little standalone evidence | SITUATIONAL — complexity compounds; no direct evidence of benefit |
| **Human-in-the-loop roles** | Review plans, approve outputs, correct extractions | Gemini DR plan review `[D] REF-11`; Elicit spot-check practice `[O→third-party] REF-73`; LangGraph HITL `[O→third-party] REF-58` | HIGH VALUE — cheapest reliability mechanism available |

---

## 3. Control structures

| Structure | What it is | Evidence | When it wins |
|---|---|---|---|
| **Single augmented call** | One LLM call + retrieval/tools | Baseline in all systems `[D] REF-05` | Simple QA, classification, drafting |
| **Prompt chaining** | Sequential calls with programmatic checkpoints | `[D] REF-05` | Decomposable steps (extract → verify → summarize) |
| **Routing** | Classifier dispatches to specialist path | `[D] REF-05`; SELF-ROUTE `[R] REF-35` | Distinct question types; RAG vs long-context vs parametric |
| **Parallelization (sectioning/voting)** | Independent calls; merge or vote | `[D] REF-05`; subagents `[D] REF-04` | Independent facets; guardrails |
| **Orchestrator-workers** | Dynamic decomposition at runtime | `[D] REF-04` | Breadth-first research |
| **Evaluator-optimizer** | Generate → critique → loop | `[D] REF-05` | Clear rubric, iterative refinement |
| **State machine / workflow graph** | Explicit nodes/edges with durable state | LangGraph `[O→third-party] REF-58` | Durable, resumable, auditable flows (production) |
| **Agent loop (autonomous)** | Model chooses next tool call from feedback | `[D] REF-05`; Deep Research `[D] REF-08` | Open-ended goals with verifiable feedback |
| **Reflection loop** | Model reviews its own output/process | Self-RAG `[R] REF-22`; STORM research-outline-write `[R] REF-26`; Claude extended thinking `[D] REF-04` | Quality gates; adaptive retrieval |

**Reliability ladder (from the evidence):** code-controlled structures are more predictable, cheaper, and more debuggable than autonomous loops `[D] REF-05`; autonomous loops are justified only by open-endedness + verifiable feedback. The compounding-error argument (`[D] REF-05`) applies to every extra LLM call regardless of structure — so each stage must justify itself.

---

## 4. Reflection & iterative research

- **STORM** showed the core trick: iterative *question asking* grounded in retrieval (perspective-guided) beats direct prompting for breadth `[R] REF-26`.
- **Self-RAG** showed the model can learn when to retrieve and how to critique support `[R] REF-22`.
- **Claude Research** showed iterative waves of subagents driven by the lead's coverage assessment `[D] REF-04`.
- **Deep Research** shows backtracking/plan adaptation mid-run `[D] REF-08`.
- Iterative research is expensive: each iteration spends tokens; the plan must survive (memory persistence `[D] REF-04`); termination criteria must be explicit (coverage thresholds, budgets).

---

## 5. Human-in-the-loop design

Evidence-backed HITL touchpoints:
1. **Plan review** before execution (Gemini Deep Research `[D] REF-11`) — cheap, high-value; users redirect early.
2. **Source selection** at ingestion (NotebookLM's core UX `[D] REF-01`) — the most effective grounding control.
3. **Verification affordances** on every output (citation cards, passage viewers) `[D] REF-01`; spot-check guidance for extractions (≥20% for Elicit-grade tools) `[O→third-party] REF-73`.
4. **Approval checkpoints** in workflows (LangGraph HITL `[O→third-party] REF-58`; enterprise frameworks favor staged approvals `[O→third-party] REF-58`).
5. **Correction loops** — user corrections should feed evaluation sets (closed-loop learning; evidenced in practice via eval-driven development `[D] REF-08`).

---

## 6. Computational cost & maintainability summary

| Scaffolding choice | Cost profile | Maintainability | Reliability |
|---|---|---|---|
| Single call + retrieval | Lowest | Trivial | Baseline |
| Workflow (chained/routed) | Low-moderate | High (code-controlled) | High; failures localize |
| Orchestrator-workers | ~15× research-grade `[D] REF-04` | Moderate; output contracts needed | High when contracts enforced |
| Autonomous loop | High; unbounded without budgets | Low; needs tracing/guardrails | Medium; compounding errors |
| Debate | High; no reliable gain `[R] REF-30` | Low | Low (as quality mechanism) |
| Graph/KG retrieval | Ingest-heavy, query-cheap `[R] REF-25` | Moderate | High when indexes maintained |

---

## 7. Decision procedure for the project

For each capability, ask (per `[D] REF-05/07` + project needs):
1. Is the step predictable? → **code/workflow, not agent.**
2. Does it need tools? → **tool-use loop or MCP server; keep minimal.**
3. Is the output verifiable (against sources, rubrics, or tests)? → **yes: add verifier stage; no: add human review.**
4. Does it need breadth across independent threads? → **orchestrator-workers with isolation + budgets.**
5. Does it need cross-source inference chains? → **consider HippoRAG-style retrieval before agentic iteration.**
6. Does it need memory across runs? → **artifact/plan persistence first; tiered agent memory later.**
7. Can it be measured? → **if not, it doesn't ship (evaluation-first).**
