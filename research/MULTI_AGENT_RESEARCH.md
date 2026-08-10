# MULTI_AGENT_RESEARCH — Agent Collaboration: Evidence, Costs, and Decisions

**Compiled:** 2026-08-10 | **Evidence taxonomy:** `[D]` DOCUMENTED, `[O]` OBSERVED, `[I]` IMPLEMENTED, `[R]` RESEARCH-SUPPORTED, `[N]` INFERRED, `[S]` SPECULATIVE | Reference keys → REFERENCES.md

---

## 1. The question the project must answer honestly

"Do multiple AI agents genuinely improve research quality, or merely increase complexity?"

The evidence base contains **both a documented yes and a documented no** — the resolution depends entirely on *what kind of multi-agent arrangement* is used:

- **YES** — orchestrator-worker with isolated parallel subagents for breadth-first research: Claude Research, DOCUMENTED, 90.2% internal-eval gain over single agent, token spend explains ~80% of variance `[D] REF-04`.
- **NO (mostly)** — same-model multi-agent *debate*: systematic evaluation shows MAD methods fail to reliably outperform single-agent CoT/self-consistency even with more compute; heterogeneity helps `[R] REF-30`. Follow-up work: debate helps only on complex/high-variance tasks; gains modest; sometimes worse than majority voting `[R] REF-31`.
- **Mixed** — original debate paper showed gains on math/strategic reasoning and factuality (Du et al.) `[R] REF-29`; A-HMAD (heterogeneous, adaptive) shows 4–7% absolute gains over prior MAD `[R] (Springer 2025)`. The strongest results consistently come from *heterogeneous* agents or *orchestrated parallel work*, not homogeneous same-model debate.

**Synthesis:** the value of multi-agent design comes from **task decomposition + isolation + parallel context windows + separate verification** (all documented in REF-04), NOT from agents "talking to each other." Same-model debate is the weakest form of multi-agent arrangement — a caution against cargo-culting "agent teams."

---

## 2. When multi-agent is justified (documented decision framework)

Anthropic's own guidance `[D] REF-07` and the effective-agents writeup `[D] REF-05`:

| Criterion | Multi-agent justified when… | Single-agent/workflow when… |
|---|---|---|
| Parallelization | Independent directions that can run concurrently with no shared state | Sequential dependencies; one context suffices |
| Context decomposition | Total information exceeds one context window; clean interfaces between parts | Task fits in context; decomposition is artificial |
| Black-box verification | Verifier needs only outputs, not internals (tests, checks) | Verification requires full context of generation |
| Task predictability | Path unpredictable; dynamic sub-task discovery needed (agents) | Path known → encode as code-driven workflow |
| Cost tolerance | ~15× token cost acceptable for the answer's value `[D] REF-04` | Cost-sensitive; simple fact-finding (Anthropic's own rule: 1 agent for simple fact-finding `[D] REF-81`) |

**Every extra LLM call adds latency, cost, and compounding error rate** `[D] REF-05` — this is the core economic argument against gratuitous multi-agent designs.

---

## 3. Architectures compared

```
A) Orchestrator-Workers (Claude Research) [D REF-04]
   Lead (plans, synthesizes) ──► N isolated Subagents (search/read, own contexts)
   Subagents ──artifacts──► filesystem ──refs──► Lead ──► CitationAgent ──► report
   Evidence: STRONG (documented production system)

B) Planner-Executor-Publisher (GPT Researcher) [I REF-51]
   Planner (questions) ──► parallel Crawler agents ──► source-tracked summaries
   ──► Publisher (report)
   Evidence: STRONG as open architecture; quality varies

C) Simulated Multi-Perspective Conversations (STORM) [R REF-26]
   Perspectives ──► simulated writer↔expert conversations grounded in search ──► outline
   Evidence: STRONG for question-generation breadth (NAACL eval)

D) Same-Model Multi-Agent Debate [R REF-29 vs REF-30/31]
   N copies of the same model debate rounds → consensus
   Evidence: CONFLICTED — positive original results; negative systematic re-evaluation;
   heterogeneity (different models/roles) recovers gains

E) Verifier/Evaluator-Optimizer [D REF-05]
   Generator ──► Evaluator (critique) ──► loop until threshold
   Evidence: DOCUMENTED pattern; fails when the evaluator can't reliably judge
```

---

## 4. The cost economics

- Claude Research: **~15× token cost** vs chat `[D] REF-04`.
- Token usage alone explains **~80% of BrowseComp variance** — agents work by buying reasoning capacity with tokens; the architecture question is *how to spend tokens efficiently* `[D] REF-04`.
- Debate: consumes additional inference compute **without reliable gains** over self-consistency `[R] REF-30` — the worst token-economics per unit of quality in this study.
- HippoRAG achieves multi-hop quality at 10–30× lower query cost than iterative agentic retrieval `[R] REF-25` — a reminder that retrieval-side engineering can substitute for agent-side token spend.
- Model choice compounds: upgrading model class gave larger gains than doubling token budgets in Anthropic's analysis `[D] REF-04/81`.

---

## 5. Subagent design: the isolation boundary and artifact pattern

The most transferable micro-decisions from the documented system `[D] REF-04`:

1. **Isolation boundary:** each subagent receives a self-contained task (objective, output format, tool list, completion condition) and does NOT coordinate mid-task. For independent-thread research, isolation is the point — it protects contexts and prevents drift.
2. **Artifact pattern:** subagents write large outputs to external storage and return lightweight references — prevents the game-of-telephone and reduces token overhead from copying through conversation history.
3. **Condensed returns:** subagents return summaries, not raw dumps; the lead synthesizes.
4. **Effort scaling in prompts:** explicit rules (1 agent simple; 2–4 comparisons; 10+ complex) prevent over-scaling — a documented production lesson `[D] REF-81`.
5. **Iterative waves:** the lead can spawn additional waves after evaluating coverage — plan-reflect-replan.

---

## 6. Failure modes & complexity costs

| Failure mode | Evidence | Mitigation |
|---|---|---|
| Cost blowup from over-delegation | ~15× documented; effort rules needed `[D] REF-04/81` | Prompt-embedded effort scaling; budgets; routing |
| Compounding errors across calls | Anthropic `[D] REF-05` | Prefer workflows (code control) where path predictable |
| Drift / incoherence across subagents | Implicit in isolation tradeoff `[D] REF-04` | Output contracts (format, length, tool lists) |
| Debate convergence on wrong answers | MAD negative results `[R] REF-30/31` | Avoid same-model debate; prefer heterogeneity + verifiers |
| Evaluation blindness | LLM-judge biases `[O→third-party] REF-75`; RAGBench `[R] REF-38` | Human-validated golden sets; position/length controls |
| Debuggability loss | Agent loops are harder to debug `[D] REF-05` | Deterministic workflow layers; tracing; checkpoints |
| Session-vs-production mismatch | Anthropic's own production analysis `[D] REF-81` | Design for bounded runs; persist state for long-running ops |

---

## 7. Verdict for the project

1. **Do not default to multi-agent.** Start single-agent/workflow. Add orchestrated parallel subagents only when the question set is breadth-first and decomposable, and only with explicit cost budgets and effort scaling.
2. **If multi-agent is used, use the documented blueprint:** orchestrator-workers, isolated contexts, artifact pattern, condensed returns, separate verification pass `[D] REF-04`.
3. **Do not use same-model debate** as a quality mechanism (negative systematic evidence `[R] REF-30`). If debate is ever explored, heterogeneous models/roles are the only variant with positive evidence (Heter-MAD `[R] REF-30`; A-HMAD `[R]`).
4. **Prefer retrieval-side solutions** (HippoRAG-style multi-hop `[R] REF-25`) before spending agent tokens on iterative search.
5. **Measure everything:** any agent layer must be evaluated against single-agent baselines on the project's own golden set, with cost per quality recorded. If multi-agent doesn't beat the baseline on YOUR tasks, it doesn't earn its 15×.
