# TAMA — POST-AUDIT INTEGRITY, VERIFICATION & GOVERNANCE MASTER DIRECTIVE

## STATUS

The TAMA System Audit has been completed.

The audit established that TAMA is structurally healthy, but identified several unresolved knowledge-integrity issues, a duplicated Vault architecture, documentation debt, and opportunities to turn TAMA's auditing principles into executable safeguards.

The audit report must be treated as the immediate baseline for this mission:

`research/TAMA_SYSTEM_AUDIT_REPORT.md`

The previous audit identified, among other things:

- a critical legacy 2004-edition PSO/AMBF conflict with the verified 2005 IRR;
- an unresolved stair-width claim;
- missing Fire Code IRR material;
- missing CMO 61 full text;
- 14 identical mirror-file pairs;
- documentation synchronization issues that have already been repaired;
- shallow TOA, BT4, RC, and Philippine adaptive-reuse coverage;
- the need for automated auditing;
- the need for recurring knowledge-integrity checks.

This mission is **not** a generic cleanup task.

Its purpose is to:

> **Verify the remaining high-risk knowledge, establish TAMA's decision-authority model, prepare the Vault for safe architectural consolidation, and convert the audit system into repeatable automated safeguards before large-scale knowledge acquisition resumes.**

---

# 1. PRIMARY OBJECTIVE

Execute the following sequence:

```text
AUDIT RESULTS
      ↓
LEGAL / KNOWLEDGE VERIFICATION
      ↓
CITATION & LEGACY CLEANUP
      ↓
ARCHITECTURAL CONSOLIDATION PLAN
      ↓
DECISION-AUTHORITY SYSTEM
      ↓
AUTOMATED AUDIT
      ↓
KNOWLEDGE REGRESSION TESTS
      ↓
FINAL INTEGRITY CHECK
      ↓
CONTROLLED KNOWLEDGE ACQUISITION
```

Do not skip stages simply because the repository currently appears healthy.

The purpose is to make TAMA **more resilient to its own future growth.**

---

# 2. GOVERNING PRINCIPLE

TAMA must distinguish between:

> **Knowing something**

and:

> **Knowing that its knowledge is trustworthy.**

A knowledge system becomes increasingly dangerous as it grows if it cannot determine:

- which source is authoritative;
- whether information is current;
- whether two sources conflict;
- whether a document is obsolete;
- whether its indexes are synchronized;
- whether an agent is using outdated knowledge;
- whether an acquisition target has already been fulfilled.

Therefore:

> **Integrity takes priority over expansion.**

---

# 3. USE THE AUDIT AS THE BASELINE

Before making changes:

Read:

`research/TAMA_SYSTEM_AUDIT_REPORT.md`

Verify its important findings against the current repository state.

Do not blindly assume that the audit is still current.

The repository may have changed since the audit.

Classify each audit finding:

```text
CONFIRMED
RESOLVED SINCE AUDIT
OUTDATED
STILL UNRESOLVED
CONTRADICTED
UNKNOWN
```

If the audit itself is wrong, document and correct it.

---

# 4. DO NOT START LARGE-SCALE ACQUISITION

Until the following are addressed:

### Required before unrestricted acquisition

1. Stair-width verification.
2. Fire Code IRR status assessment.
3. Legacy citation integrity.
4. Mirror architecture decision or at minimum a formal consolidation strategy.
5. Automated repository audit capability.
6. Initial knowledge regression tests.
7. Decision-authority rules.

You may perform targeted research required to complete these tasks.

Do not begin a broad "research everything" operation yet.

---

# 5. PHASE I — STAIR-WIDTH VERIFICATION

The audit identified an unresolved claim concerning the stair-width requirement for occupants ≥50.

Specifically, verify whether the existing claim:

> **≥50 occupants → 1.10 m stair width**

is actually supported by the relevant authoritative Philippine regulation/IRR.

Do not accept:

- an AI-generated summary;
- a student reviewer;
- a blog;
- a secondary cheat sheet;

as sufficient evidence where an authoritative source can be obtained.

Search for the actual regulatory basis.

Determine:

```text
Exact requirement
Relevant section
Table number if applicable
Edition
Occupancy/context
Exceptions
Measurement basis
Authority
```

Then classify the existing TAMA claim:

```text
VERIFIED
INCORRECT
CONTEXT-DEPENDENT
OUTDATED
UNVERIFIED
```

If incorrect:

- correct the relevant curated material;
- preserve historical material where appropriate;
- add an audit/provenance notice where necessary;
- update affected reviewer material;
- update the knowledge matrix;
- update the research queue.

If the evidence remains insufficient:

> Do not guess.

Mark the claim:

`UNVERIFIED`

and record exactly what evidence remains necessary.

---

# 6. PHASE II — FIRE CODE IRR

The audit identified the lack of a held authoritative copy of the Fire Code IRR / RA 9514 implementing material.

Research the availability of the official source.

Prioritize:

1. Bureau of Fire Protection
2. Official Philippine government repositories
3. Official government publications
4. Other authoritative government archives

Only use secondary sources when necessary to locate or interpret the primary source.

Determine:

```text
Does an official copy exist?
Can it legally and reliably be acquired?
Is the source complete?
What edition/version/date is it?
Are the relevant egress and occupant-load tables available?
```

If the environment permits acquisition:

> acquire and preserve the source.

If the environment does not permit acquisition:

> record the exact source location and acquisition blocker.

Do not fabricate or reconstruct missing regulatory text from memory.

---

# 7. PHASE III — FIRE CODE CITATION AUDIT

Inspect all TAMA documents that cite:

- RA 9514
- Fire Code IRR
- egress requirements
- occupant-load requirements
- stair requirements
- exit requirements
- fire-resistance requirements

Identify citations that cannot currently be verified.

For each:

```text
FILE
CLAIM
CURRENT CITATION
SOURCE AVAILABLE?
VERIFIED?
CORRECT SOURCE
STATUS
```

Do not silently delete questionable information.

Use:

```text
UNVERIFIED
SUPERSEDED
CORRECTED
VERIFIED
```

where appropriate.

Once the authoritative source is obtained, perform a second citation pass.

---

# 8. PHASE IV — LEGACY KNOWLEDGE RETIREMENT

The audit found legacy 2004-edition PSO material.

Do not delete historical material automatically.

Instead establish a clear distinction:

```text
CURRENT
HISTORICAL
SUPERSEDED
UNVERIFIED
```

For legacy material that remains useful historically:

- preserve it;
- annotate it;
- link it to the authoritative current source;
- prevent agents from treating it as current compliance information.

Search for additional references to the obsolete values.

The goal is:

> **No current reviewer, mentor, examiner, or researcher should accidentally use superseded regulatory values as current requirements.**

---

# 9. PHASE V — MIRROR ARCHITECTURE ANALYSIS

The audit found 14 identical mirror-file pairs across two overlapping Vault schemes.

Do NOT immediately delete or move them.

Instead produce:

# TAMA VAULT CONSOLIDATION PROPOSAL

Analyze:

```text
Current architecture
Canonical candidates
Mirror pairs
Dependencies
Agent references
Documentation references
Git history considerations
Risks
Migration complexity
Rollback strategy
```

Evaluate the audit recommendation:

```text
CANONICAL

00-CORE-BUILDING-LAWS/
01-CURRENT-COURSES/
02-HISTORY-ARCHIVE/
00-BOOKS/
```

with the Build-T29 series directories converted into:

> pointer/readme structures

where appropriate.

However, independently verify whether this is actually the best architecture.

You may disagree with the recommendation if repository evidence supports another design.

---

# 10. DO NOT PERFORM CONSOLIDATION YET

The consolidation itself is an architectural change.

Therefore:

> **Prepare the migration plan, but do not execute destructive or large-scale restructuring without explicit authorization.**

The proposal must include:

```text
BEFORE
AFTER
FILES MOVED
FILES PRESERVED
FILES CONVERTED TO POINTERS
REFERENCES UPDATED
AGENTS AFFECTED
ROLLBACK METHOD
EXPECTED RISKS
```

---

# 11. PHASE VI — DECISION AUTHORITY MODEL

TAMA must now adopt explicit decision classes.

Create or propose a system that distinguishes:

## 🟢 AUTONOMOUS

TAMA may execute without asking.

Examples:

- fixing stale indexes;
- correcting verified paths;
- updating file counts;
- adding verified metadata;
- marking a verified acquisition complete;
- fixing broken documentation references;
- annotating obsolete material;
- updating machine-generated reports.

---

## 🟡 RECOMMENDATION

TAMA should analyze and propose, but not execute automatically.

Examples:

- reorganizing the Vault;
- changing canonical locations;
- modifying course dependencies;
- changing agent architecture;
- restructuring major documentation;
- merging large knowledge domains.

---

## 🔴 HUMAN AUTHORIZATION REQUIRED

TAMA must stop and request authorization.

Examples:

- deleting knowledge;
- destructive file migrations;
- resolving ambiguous legal conflicts;
- changing project architecture;
- overwriting user-created work;
- irreversible restructuring;
- changing fundamental curriculum assumptions;
- replacing authoritative sources with inferred alternatives.

---

# 12. IMPORTANT OVERRIDE PRINCIPLE

The purpose of this system is NOT to make TAMA blindly obey the user.

The purpose is also NOT to make TAMA blindly overrule the user.

Instead:

> **TAMA may challenge a user decision when repository integrity, evidence, or system safety provides a concrete reason.**

When doing so, TAMA must state:

```text
USER DECISION
WHY IT MAY BE PROBLEMATIC
EVIDENCE
RISK
RECOMMENDED ALTERNATIVE
CONSEQUENCE OF IGNORING RECOMMENDATION
```

The final authority remains proportional to the decision class.

---

# 13. PHASE VII — AUTOMATED AUDIT

Implement, where technically appropriate:

```text
npm run audit
```

The audit should automatically detect at minimum:

### Filesystem integrity

- missing referenced files;
- broken paths;
- orphan files;
- duplicate files;
- invalid references.

### Index integrity

- files missing from indexes;
- index entries pointing to nonexistent files;
- duplicate index entries.

### Acquisition integrity

- completed targets still marked pending;
- missing acquisition records;
- acquired files missing from the log.

### Agent integrity

- referenced files missing;
- invalid agent paths;
- missing agent dependencies.

### Documentation integrity

- stale version strings;
- broken internal references;
- contradictory repository counts where machine-verifiable.

Do not create an elaborate system merely for appearance.

Prefer a small, reliable audit tool over a large fragile framework.

---

# 14. AUDIT OUTPUT

The automated audit should produce machine-readable results where practical.

For example:

```text
PASS
WARN
FAIL
```

and preferably:

```text
checks performed
checks passed
warnings
failures
affected files
suggested remediation
```

The command should return a non-zero exit code for genuine failures if appropriate for CI/use in development.

---

# 15. PHASE VIII — KNOWLEDGE REGRESSION TESTS

TAMA must begin testing not only its software but also its **knowledge integrity**.

Create a lightweight knowledge regression framework.

Example tests:

### Regulatory authority

```text
TEST:
Current PD 1096 R-2 AMBF values

EXPECTED:
Current authority resolves to verified 2005 IRR material.

FAIL:
A superseded 2004 PSO table is treated as current.
```

### Vault indexing

```text
TEST:
Every canonical Vault knowledge file is indexed.

FAIL:
Canonical file is missing from index.
```

### Acquisition queue

```text
TEST:
Completed acquisition cannot remain pending.

FAIL:
Queue contradicts actual repository state.
```

### Agent references

```text
TEST:
Every agent-referenced path exists.

FAIL:
Broken reference.
```

### Superseded knowledge

```text
TEST:
Superseded regulatory information is visibly marked.

FAIL:
Legacy values appear as unqualified current requirements.
```

---

# 16. KNOWLEDGE REGRESSION TEST DESIGN

Do not attempt to test every sentence in the Vault.

Prioritize:

```text
Critical regulations
Important formulas
High-risk technical values
Course prerequisites
Agent-critical knowledge
Frequently reused facts
Known historical errors
Previously discovered contradictions
```

The purpose is to catch **regressions**, not to prove that every sentence is correct.

---

# 17. PHASE IX — KNOWLEDGE GOVERNANCE REGISTRY

Propose a lightweight metadata convention for important knowledge.

Where practical, track:

```text
Knowledge ID
Title
Canonical path
Source
Source authority
Publication date
Edition/version
Current status
Last verified
Course/domain
Depth
Confidence
Supersedes
Superseded by
Known conflicts
Used by agents
```

Do not force unnecessary metadata onto every tiny file.

Prioritize important authoritative knowledge.

---

# 18. PHASE X — SOURCE AUTHORITY

Maintain a clear hierarchy.

Example:

```text
TIER 1
Official government / original authoritative source

TIER 2
Peer-reviewed / university / professional authority

TIER 3
Reputable educational / technical source

TIER 4
Community / informal source

TIER 5
Unverified / questionable
```

This is not an absolute truth system.

A lower-tier source may still be useful for discovery or practical experience.

However:

> Lower-tier sources must not silently override authoritative sources.

---

# 19. PHASE XI — KNOWLEDGE FRESHNESS

Introduce:

```text
CURRENT
HISTORICAL
SUPERSEDED
UNVERIFIED
```

and, where useful:

```text
Last verified:
Verification frequency:
```

Prioritize re-verification for:

- laws;
- regulations;
- building codes;
- university curriculum;
- software;
- technical standards.

Historical knowledge generally requires less frequent re-verification.

---

# 20. PHASE XII — FINAL INTEGRITY AUDIT

After completing the above work:

Run:

```text
npm test
npm run audit
knowledge regression tests
```

if available.

Then perform another repository-level audit.

Compare:

```text
BEFORE
AFTER
```

Determine whether any new inconsistencies were introduced.

---

# 21. DO NOT DECLARE SUCCESS TOO EARLY

Do not say:

> "TAMA is fully correct."

No finite audit can establish that.

Use precise conclusions such as:

> "No known integrity failures were detected within the audited scope."

or:

> "The following unresolved uncertainties remain."

---

# 22. POST-MISSION ACQUISITION GATE

Only after the final audit should you determine whether TAMA is ready for broader knowledge acquisition.

Classify:

### 🟢 OPEN

Large-scale acquisition may resume.

### 🟡 CONTROLLED

Only targeted acquisition should occur.

### 🔴 BLOCKED

Critical integrity issue prevents further expansion.

Explain the decision.

---

# 23. RESEARCH PRIORITY AFTER INTEGRITY WORK

Once the integrity mission is complete, prioritize:

```text
1. Stair-width verification
2. Fire Code IRR acquisition/verification
3. Legacy regulatory citation cleanup
4. Mirror consolidation proposal
5. Automated npm audit
6. Knowledge regression tests
7. TOA movement depth
8. BT4 specifications / QS depth
9. RC worked examples
10. RA 7160 planning material
11. Philippine adaptive-reuse case studies
12. CMO 61 acquisition when authoritative material becomes available
```

Do not blindly follow this order if evidence indicates another issue is more critical.

TAMA may reorder the queue if it can explain why.

---

# 24. FUTURE OPERATING LOOP

Once implemented, TAMA should operate approximately as:

```text
              ┌─────────────────┐
              │ KNOWLEDGE GAP   │
              └────────┬────────┘
                       ↓
              ┌─────────────────┐
              │ RESEARCH        │
              └────────┬────────┘
                       ↓
              ┌─────────────────┐
              │ VERIFY          │
              └────────┬────────┘
                       ↓
              ┌─────────────────┐
              │ CURATE          │
              └────────┬────────┘
                       ↓
              ┌─────────────────┐
              │ VAULT           │
              └────────┬────────┘
                       ↓
              ┌─────────────────┐
              │ INDEX / RECORD  │
              └────────┬────────┘
                       ↓
              ┌─────────────────┐
              │ AGENT USE       │
              └────────┬────────┘
                       ↓
              ┌─────────────────┐
              │ AUDIT           │
              └────────┬────────┘
                       ↓
              ┌─────────────────┐
              │ REGRESSION TEST │
              └────────┬────────┘
                       ↓
              ┌─────────────────┐
              │ KNOWLEDGE DEBT  │
              └────────┬────────┘
                       │
                       └──────────→ RESEARCH
```

This should become TAMA's long-term operating cycle.

---

# 25. FINAL DELIVERABLES

At the end of this mission, produce:

### REQUIRED

1. **Post-Audit Verification Report**
2. **Stair-Width Verification Result**
3. **Fire Code IRR Acquisition/Verification Report**
4. **Legacy Citation Integrity Report**
5. **Vault Consolidation Proposal**
6. **Decision Authority Specification**
7. **Automated Audit Implementation**
8. **Knowledge Regression Test Specification/Implementation**
9. **Updated Knowledge Debt Register**
10. **Updated Research Queue**
11. **Final Integrity Audit**

---

# 26. FINAL REPORT MUST ANSWER

## A. What did the previous audit get right?

## B. What did it get wrong or miss?

## C. Which high-risk knowledge claims are now verified?

## D. Which remain unresolved?

## E. What was repaired?

## F. What architectural changes are recommended?

## G. What changes require human approval?

## H. What can TAMA safely change autonomously?

## I. What automated safeguards now exist?

## J. What knowledge regression tests exist?

## K. Is TAMA ready for unrestricted acquisition?

## L. If not, exactly what blocks it?

## M. What should TAMA research next?

---

# 27. NON-NEGOTIABLE RULES

### DO:

- inspect actual repository state;
- verify claims;
- use authoritative sources;
- preserve historical information;
- annotate superseded knowledge;
- distinguish fact from inference;
- repair safe inconsistencies;
- document uncertain issues;
- test your own changes;
- challenge questionable decisions with evidence;
- prefer reversible changes;
- keep an audit trail.

### DO NOT:

- fabricate sources;
- fabricate regulations;
- silently overwrite user work;
- delete knowledge merely because it is duplicated;
- treat old information as current;
- treat AI-generated material as authoritative;
- claim verification without evidence;
- perform destructive architectural changes without authorization;
- declare TAMA "complete";
- expand the Vault merely for the sake of increasing file count.

---

# 28. ULTIMATE OBJECTIVE

The objective is not simply to make TAMA contain more information.

The objective is to make TAMA capable of maintaining a trustworthy academic knowledge infrastructure as it grows.

TAMA should eventually be able to determine:

> **What do I know?**

> **Where did I learn it?**

> **How authoritative is the source?**

> **Is it still current?**

> **Does anything contradict it?**

> **Which version is canonical?**

> **Which agents depend on it?**

> **What am I uncertain about?**

> **What knowledge is missing?**

> **What should I research next?**

> **What am I allowed to change myself?**

> **When must I stop and ask the human?**

That is the target architecture.

---

# BEGIN POST-AUDIT MISSION

Start by reading and validating:

`research/TAMA_SYSTEM_AUDIT_REPORT.md`

Then inspect the current repository.

Do not assume the report remains perfectly current.

Work through the phases in order.

Do not perform the mirror consolidation itself until authorization is obtained.

Do not begin unrestricted knowledge acquisition until the acquisition gate has been evaluated.

**Verify → Repair → Govern → Automate → Test → Re-audit → Acquire.**