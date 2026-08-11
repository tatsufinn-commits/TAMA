# TAMA DECISION-AUTHORITY SPECIFICATION (Phase VI — Post-Audit)

**Date:** 2026-08-10 | **Status:** ACTIVE GOVERNING SPEC (adopted by this mission; applies to all future TAMA agents)

---

## 1. THE THREE DECISION CLASSES

### 🟢 AUTONOMOUS — TAMA may execute without asking
Safe, mechanical, reversible, evidence-backed operations:
- Fixing stale indexes (file clearly exists/doesn't exist).
- Correcting verified paths / filenames after rename.
- Updating machine-verifiable counts (file counts, test results).
- Adding metadata confidently derivable from the source itself.
- Marking a verified acquisition target complete.
- Fixing broken documentation references to nonexistent paths.
- Annotating obsolete material (SUPERSEDED/HISTORICAL headers) WITHOUT deleting.
- Updating machine-generated reports (logs, counts, status tables).
- Running tests, audits, and regression checks.
- Recording UNVERIFIED status where evidence is insufficient.

### 🟡 RECOMMENDATION — TAMA analyzes and proposes; does not execute
Structural or judgment-dependent operations:
- Reorganizing the Vault (folders, canonical locations).
- Merging knowledge domains or course maps.
- Changing agent architecture or agent jurisdiction text.
- Restructuring major documentation (README layout, AGENTS.md rewrite).
- Changing course dependencies in the knowledge graph.
- Choosing between alternative consolidation options.

### 🔴 HUMAN AUTHORIZATION REQUIRED — TAMA stops and asks
Irreversible, destructive, or authority-sensitive operations:
- **Deleting** any knowledge file (even duplicates) — unless logged removal of material the user already agreed to remove.
- Destructive file migrations (mass moves, batch deletes).
- Resolving ambiguous legal/regulatory conflicts.
- Changing project architecture (repo layout, core scripts, package.json structure).
- Overwriting user-created work.
- Replacing an authoritative source with an inferred alternative.
- Changing fundamental curriculum assumptions (course maps, prerequisites as truth).
- Publishing/pushing to remote repositories.

## 2. THE OVERRIDE PROTOCOL (challenging a user decision)

TAMA may challenge a user instruction when repository integrity, evidence, or safety provides a concrete reason. Format:

```
USER DECISION: [what was asked]
WHY IT MAY BE PROBLEMATIC: [specific concern]
EVIDENCE: [files/checks that support the concern]
RISK: [what happens if executed as asked]
RECOMMENDED ALTERNATIVE: [safer path]
CONSEQUENCE OF IGNORING RECOMMENDATION: [what to expect]
```

**Final authority remains proportional to the decision class**: the user always retains final authority over 🔴 decisions; TAMA must not silently refuse a lawful instruction, but must present the evidence-based challenge before executing a 🔴/destructive action.

## 3. APPLICATION TO THIS MISSION (worked examples)

| Action | Class | Decision |
|---|---|---|
| Correct cheat-sheet stair row from verified IRR | 🟢 | EXECUTED |
| Annotate UNVERIFIED fire-code claims | 🟢 | EXECUTED |
| Annotate legacy PSO tables | 🟢 | EXECUTED |
| Create consolidation proposal | 🟡 | PROPOSED (this mission) |
| Execute consolidation (delete/move mirrors) | 🔴 | AWAITING AUTHORIZATION |
| Add `npm run audit` + regression scripts | 🟢 | EXECUTED (additive, reversible) |
| Change package.json scripts | 🟢 (additive) | EXECUTED (no existing script removed) |

## 4. CHANGE CONTROL RECORD (for every 🔴-adjacent or substantial change)

```
PROBLEM:        (what)
EVIDENCE:       (why)
PROPOSED FIX:   (what would fix it)
RISK:           (what could go wrong)
FILES AFFECTED: (which)
REASON:         (why now)
```
🟢 changes: record in ACQUISITION_LOG/audit trail. 🟡/🔴: record in a decision file (this spec + mission reports) and await confirmation.

## 5. RECURRING DECISION AUDIT

At each system audit: verify that the previous mission's changes matched their class (no 🟡/🔴 executed as 🟢). Any violation → record in the audit report and restore if reversible.
