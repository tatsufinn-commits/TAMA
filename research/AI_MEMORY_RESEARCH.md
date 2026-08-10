# AI_MEMORY_RESEARCH — How Systems Remember Across Sessions

**Compiled:** 2026-08-10 | **Evidence taxonomy:** `[D]` DOCUMENTED, `[O]` OBSERVED, `[I]` IMPLEMENTED, `[R]` RESEARCH-SUPPORTED, `[N]` INFERRED, `[S]` SPECULATIVE | Reference keys → REFERENCES.md

---

## 1. The memory problem

Research tasks span sessions; users return to projects; plans outlive single contexts; knowledge evolves. The systems studied solve this at different depths:

- **NotebookLM:** notebook-scoped persistence of sources, notes, and chat — a *corpus memory* with no cross-project learning `[D/O] REF-01`.
- **Claude Research:** the lead agent **persists its plan to external memory before the 200k-token context can truncate**; subagents write findings to a filesystem and return lightweight references — *artifact memory* for long-running research `[D] REF-04`.
- **MemGPT/Letta:** OS-inspired *virtual context management* — the LLM pages data between main context (RAM-like) and external storage (disk-like) via function calls; two tiers: recall (conversation history) + archival (documents/knowledge) `[R] REF-27, [I] REF-55`.
- **Generative Agents:** append-only *memory stream* with recency (exponential decay) + importance (LLM-scored) + relevance (embedding similarity) retrieval, plus a *reflection* process that distills higher-level insights back into the stream; ablations show memory/reflection/planning are all load-bearing `[R] REF-28`.
- **Mem0:** passive *extraction layer* — pulls facts from conversations into a semantic memory store (vector + optional graph); LongMemEval ~49.0% (independent eval); library-style integration `[I] REF-54`.
- **PKM tools:** user-curated memory (notes, links, graph views) with AI assist (Notion AI, Mem, Reflect) `[O→third-party] REF-78`.

---

## 2. Memory taxonomy for a research system

| Memory type | What it should hold | Studied exemplar |
|---|---|---|
| **Working context** | Current task state, active question, retrieved passages | All systems; compaction risk |
| **Episodic memory** | Past research runs: queries, plans, decisions, dead ends | Claude Research plan memory `[D] REF-04`; Generative Agents stream `[R] REF-28` |
| **Semantic memory** | Derived knowledge: summaries, findings, concepts with provenance | MemGPT archival `[R] REF-27`; Mem0 `[I] REF-54` |
| **Source memory** | The corpus: sources, provenance, ingestion state, versions | NotebookLM notebook `[D] REF-01`; Elicit library `[O→third-party] REF-73` |
| **User/project memory** | Study goals, progress, spaced-repetition state, preferences | Learning-state records (spaced repetition `[R] REF-39–43`); PKM preferences `[O→third-party] REF-78` |

---

## 3. What should be remembered — and what should not

**Remember (evidence-leaning):**
- Research plans and intermediate artifacts (they survive context truncation; Claude Research proves the pattern) `[D] REF-04`.
- Sources with provenance + ingestion/version state (the notebook pattern; also enables invalidation) `[D] REF-01`.
- Claims with source links (only with provenance — otherwise memory becomes a second hallucination source).
- User learning progress (retention curves, review state) — this is the one memory type with direct learning-gain evidence via spaced repetition `[R] REF-39–43`.
- User preferences when explicitly signaled (avoid silent auto-extraction of sensitive or noisy data).

**Do not remember:**
- Raw conversation transcripts at scale (cost, drift, privacy).
- Unprovenanced LLM summaries (they become "facts" the system later trusts — a documented failure mode of passive memory extraction, cf. LongMemEval performance `[I] REF-54`).
- Anything the user marks private/off-record.

---

## 4. Invalidation & updates (the unsolved part)

The evidence base is honest: **memory invalidation and conflict resolution are open research problems** (LongMemEval: Mem0 ≈49.0%; no system claims reliable long-horizon memory). Practical design rules:

1. **Provenance-first:** every stored memory item links to source artifacts and carries a timestamp + verification status. Derived items are *views*, recomputable from sources.
2. **Recompute over mutate:** when a source changes, re-index and regenerate derived summaries; keep versions. NotebookLM-style notebooks already treat sources as the ground truth `[D] REF-01`.
3. **Contradiction = visibility, not deletion:** when new evidence conflicts with stored knowledge, record both with typed edges (scite pattern `[O→third-party] REF-73`) and flag the change to the user.
4. **Tiered decay:** use recency/importance/relevance scoring (Generative Agents `[R] REF-28`) for *episodic* memory; never apply decay to *source* memory (the corpus is ground truth, not a stream).
5. **Forgetting as a feature:** define retention policies per memory tier (e.g., session artifacts expire; source memory persists; user progress persists).

---

## 5. Memory architecture options for the project

| Option | Model | Evidence | When appropriate |
|---|---|---|---|
| A. Stateless + corpus | No agent memory; notebook = sources + notes | NotebookLM `[D] REF-01` | Most study/QA use cases; simplest; most privacy-friendly |
| B. Artifact memory | Plans + findings persisted externally; references passed to coordinator | Claude Research `[D] REF-04` | Agentic research runs > context limits |
| C. Passive extraction layer | Facts pulled from interactions into semantic store | Mem0 `[I] REF-54` | Chat assistants that must remember user context (research it separately — quality is modest) |
| D. Self-managed tiered memory | LLM pages between core/recall/archival via tools | MemGPT/Letta `[R] REF-27, [I] REF-55` | Long-running agents; high complexity |
| E. Memory stream + reflection | Append-only stream, scored retrieval, reflection synthesis | Generative Agents `[R] REF-28` | Research-experimental; believed-behavior domains |

**Recommendation shape:** start with **A**, add **B** when agentic research arrives, treat **C–E** as experimental with their own evaluations. The learning layer (spaced-repetition state) is separate and must be durable — it is the memory with the strongest evidence of value `[R] REF-39–43`.

---

## 6. Open questions the project must track

- What is the correct granularity for storing "derived knowledge" (summary vs claim vs fact) without provenance decay?
- How should conflicting stored knowledge be resolved automatically vs surfaced?
- When should stored memories expire, and who decides (user, policy, or system)?
- Can passive extraction (Mem0-style) reach reliability acceptable for study contexts? (Currently ~49% on LongMemEval — no.)
- Does episodic memory of past research runs measurably improve future runs? (Not yet evidenced; worth an experiment.)
