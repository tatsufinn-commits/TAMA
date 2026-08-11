# TAMA — SYSTEM AUDIT, KNOWLEDGE INTEGRITY & SELF-REPAIR MASTER DIRECTIVE

## STATUS

This is a **maintenance, auditing, reconciliation, and self-repair mission** for the TAMA repository.

You are not being asked to merely review documentation.

You are being asked to determine whether the **actual TAMA repository, its documentation, its knowledge indexes, its research records, its Vault, and its AI-agent infrastructure accurately describe one another.**

Your primary responsibility is to establish a trustworthy representation of:

> **What TAMA actually contains, what TAMA believes it contains, what TAMA does not contain, what is outdated, what is duplicated, what is contradictory, and what must be repaired.**

Do not begin a large new knowledge-acquisition campaign until this audit has established a reliable baseline.

---

# 1. PRIMARY MISSION

Perform a comprehensive:

> **TAMA System Audit + Knowledge Integrity Audit + Documentation Reconciliation + Safe Self-Repair**

The audit must examine the repository as a living system.

You must compare:

```text
ACTUAL FILESYSTEM
        ↕
VAULT
        ↕
VAULT INDEX
        ↕
COURSE MAPS
        ↕
KNOWLEDGE COVERAGE
        ↕
RESEARCH DOCUMENTATION
        ↕
ACQUISITION LOGS
        ↕
SOURCE REGISTRY
        ↕
AGENT DOCUMENTATION
        ↕
REVIEWER SYSTEM
        ↕
PROJECT DIRECTIVES
```

The objective is to determine whether these layers agree.

---

# 2. CORE PRINCIPLE

## Repository Reality Is the Ground Truth

Do not assume that an existing document is correct merely because:

- it is official TAMA documentation
- it was created recently
- it was created by another AI
- it appears authoritative
- it says something is complete
- it says something is missing
- it appears in an index
- it appears in a research report

Verify claims against the actual repository and, where necessary, authoritative external sources.

For example:

If:

```text
KNOWLEDGE-COVERAGE-MATRIX.md
```

says:

> Resource X is missing.

but the actual Vault contains Resource X:

**the matrix is outdated.**

If the matrix says:

> Resource X exists.

but the file no longer exists:

**the matrix is incorrect.**

Do not preserve incorrect information merely because it was previously documented.

---

# 3. IMPORTANT DISTINCTION

Always distinguish between:

### FACT

Directly verified from the repository or authoritative source.

### INFERENCE

A conclusion reasonably derived from available evidence.

### UNKNOWN

The evidence is insufficient.

### OUTDATED

The statement was previously correct but is no longer accurate.

### CONTRADICTORY

Two sources currently make incompatible claims.

### UNVERIFIED

A claim exists but has not been sufficiently checked.

Never silently convert:

```text
UNKNOWN → FACT
```

or:

```text
UNVERIFIED → VERIFIED
```

---

# 4. FIRST ACTION — FREEZE LARGE-SCALE EXPANSION

Before beginning the audit:

Do not initiate a massive new acquisition campaign.

Do not flood the Vault with new resources.

Do not reorganize the entire repository unnecessarily.

Do not perform unrelated refactoring.

The purpose of this phase is:

> **Understand and repair the current system before expanding it further.**

Small external searches are permitted when required to verify a claim, source, version, date, law, standard, or other fact.

---

# 5. REPOSITORY RECONNAISSANCE

Start by inspecting the complete repository structure.

Identify:

```text
Top-level directories
Documentation
Vault
Courses
Research
Reviewers
Agents
Scripts
Configuration
Indexes
Logs
Reports
Metadata
Templates
Archived material
Raw material
Curated material
```

Do not rely exclusively on documentation to determine the structure.

Inspect the actual filesystem.

Create an internal map of the repository.

---

# 6. BUILD A REPOSITORY INVENTORY

Create or update an inventory containing, where practical:

```text
Path
Filename
Type
Size
Location
Course
Topic
Category
Status
Last modified
Referenced by
Reference targets
Possible duplicate
Canonical candidate
```

Do not unnecessarily modify every file merely to create this inventory.

Use existing TAMA infrastructure where possible.

---

# 7. IDENTIFY THE SYSTEM OF RECORD

Determine which files currently function as:

### Primary Vault Index

### Coverage Matrix

### Acquisition Log

### Research Gap Register

### Source Registry

### Course Map

### Course Dependency Map

### Agent Registry

### Reviewer Knowledge Base

### Research Reports

### Project Directives

If multiple documents appear to serve the same purpose, identify them.

Determine:

> Which is canonical?

If this cannot be confidently determined, document the ambiguity rather than guessing.

---

# 8. DOCUMENTATION-TO-REALITY RECONCILIATION

For every important claim made by TAMA's documentation:

```text
DOCUMENTED CLAIM
       ↓
SEARCH REPOSITORY
       ↓
FIND SUPPORTING EVIDENCE
       ↓
COMPARE
       ↓
CLASSIFY
```

Use classifications such as:

```text
VALID
OUTDATED
CONTRADICTED
MISSING
DUPLICATED
UNVERIFIED
AMBIGUOUS
```

Examples:

### Documentation says:

> PD 1096 IRR is missing.

### Repository says:

> PD-1096_IRR-2005_FULLTEXT.txt exists.

Result:

```text
OUTDATED DOCUMENTATION
```

Do not create another copy of the IRR.

Repair the documentation.

---

# 9. BIDIRECTIONAL REFERENCE AUDIT

Check both directions.

## Documentation → Files

If a document references:

```text
vault/example/file.pdf
```

verify that it exists.

## Files → Documentation

If important files exist in the Vault but are absent from:

- indexes
- coverage matrix
- acquisition logs
- course maps

identify them.

This catches both:

> **broken references**

and:

> **orphaned knowledge.**

---

# 10. BROKEN REFERENCE DETECTION

Search for:

- nonexistent paths
- renamed files
- deleted files
- incorrect extensions
- obsolete directory structures
- broken relative links
- references to old filenames
- references to old folder structures
- references to obsolete course names

Classify each issue.

Do not automatically repair uncertain references.

---

# 11. ORPHAN DETECTION

Find important files that appear to have no meaningful relationship to the rest of TAMA.

Examples:

```text
Vault file
      ↓
No index entry
      ↓
No course association
      ↓
No source metadata
```

Classify:

```text
VALID ORPHAN
MISPLACED
MISSING METADATA
DUPLICATE
UNNECESSARY
UNKNOWN
```

Do not delete an orphan merely because it is unreferenced.

---

# 12. DUPLICATE DETECTION

Search for duplicates at multiple levels.

## Exact duplicates

Same file contents.

## Near duplicates

Almost identical files.

## Semantic duplicates

Different documents covering essentially the same information.

## Mirror structures

Multiple directories intentionally representing the same knowledge.

Do not automatically delete duplicates.

First determine whether they are:

```text
CANONICAL
MIRROR
DERIVATIVE
ARCHIVE
SUPERSEDED
REDUNDANT
```

---

# 13. CANONICAL KNOWLEDGE

For important knowledge objects, determine whether a canonical source exists.

For example:

```text
KNOWLEDGE OBJECT:
PD 1096 IRR 2005

CANONICAL:
vault/.../PD-1096_IRR-2005_FULLTEXT.txt

DERIVATIVES:
reviewer...
summary...
course note...
```

The derivative should not be mistaken for an independent authoritative source.

Where appropriate, recommend or create metadata that makes this relationship explicit.

---

# 14. SUPERSESSION AUDIT

Identify material that may have been replaced by newer material.

Examples:

```text
Old law
New amendment

Old code edition
New code edition

Old syllabus
New curriculum

Old course structure
New course structure

Old research report
New research report
```

Classify:

```text
CURRENT
HISTORICAL
SUPERSEDED
UNKNOWN
```

Never delete historical knowledge merely because it is old.

Instead distinguish:

> **Historically useful**

from:

> **Currently applicable.**

---

# 15. VERSION AUDIT

Where applicable, inspect:

- dates
- editions
- versions
- amendments
- revisions
- publication numbers
- course versions
- repository versions

Pay particular attention to:

- Philippine laws
- building regulations
- professional regulations
- technical standards
- software documentation
- academic curriculum information

Do not claim current applicability without verification.

---

# 16. KNOWLEDGE COVERAGE AUDIT

Inspect the existing:

```text
KNOWLEDGE-COVERAGE-MATRIX
```

against the actual Vault.

For every major entry ask:

```text
Does the material actually exist?
Is it actually relevant?
Is the documented depth accurate?
Is the source quality accurately represented?
Is the material current?
Is it duplicated elsewhere?
Is the topic actually covered or merely mentioned?
```

Do not inflate coverage merely because a file exists.

---

# 17. COVERAGE ≠ DEPTH

A topic containing one paragraph is not necessarily:

> "covered."

Distinguish:

```text
0 — UNKNOWN
1 — AWARENESS
2 — FOUNDATIONAL
3 — FUNCTIONAL
4 — ADVANCED
5 — COMPREHENSIVE
```

Evaluate depth based on the actual material.

---

# 18. KNOWLEDGE QUALITY AUDIT

For important knowledge domains evaluate:

```text
Breadth
Depth
Authority
Source diversity
Currency
Provenance
Practical application
Philippine relevance
Interdisciplinary relevance
Assessment usefulness
Agent usefulness
```

Do not assign arbitrary numbers merely to make the matrix look complete.

If evidence is insufficient:

> mark it UNKNOWN.

---

# 19. SOURCE PROVENANCE AUDIT

For important sources, check whether TAMA knows:

```text
Title
Author
Organization
Publisher
Date
URL
Version
Source type
Access status
License where relevant
Course
Topic
```

Identify important sources lacking provenance.

Do not fabricate missing metadata.

---

# 20. SOURCE AUTHORITY AUDIT

Classify sources according to their actual authority.

For example:

```text
TIER 1
Government / official authority / original source

TIER 2
Peer-reviewed academic / university / professional organization

TIER 3
Reputable educational / technical sources

TIER 4
Community / informal sources

TIER 5
Unsourced / questionable
```

Do not treat a lower-tier source as equivalent to an authoritative source.

However, do not automatically delete lower-tier sources.

They may still have:

> discovery value

or:

> practical experience value.

---

# 21. SOURCE INDEPENDENCE

Determine whether multiple sources actually provide independent evidence.

For example:

```text
Website A
Website B
Website C
```

may all reproduce:

```text
Government Document X
```

Therefore they should not be counted as three independent confirmations.

Where practical, trace source lineage.

---

# 22. CONTRADICTION DETECTION

Search for conflicting claims.

Pay particular attention to:

- dimensions
- formulas
- regulations
- legal requirements
- historical dates
- architectural classifications
- technical specifications
- course requirements

When conflict exists:

```text
CLAIM A
SOURCE A

CLAIM B
SOURCE B

CONTEXT DIFFERENCE

AUTHORITATIVE SOURCE

RESOLUTION

CONFIDENCE
```

Do not silently merge conflicting information.

---

# 23. LEGAL / REGULATORY INTEGRITY

For:

- laws
- codes
- regulations
- professional standards
- building requirements
- fire safety
- accessibility
- structural standards
- electrical
- plumbing
- mechanical

verify against authoritative sources whenever possible.

Do not infer legal requirements from:

- random blogs
- student reviewers
- outdated summaries
- AI-generated documents

If an official source cannot be verified:

> mark the requirement UNVERIFIED.

---

# 24. KNOWLEDGE FRESHNESS

Identify knowledge that changes frequently.

Classify topics as:

```text
LOW CHANGE
MODERATE CHANGE
HIGH CHANGE
CRITICAL CURRENCY
```

Examples:

### Historical architecture

Usually LOW CHANGE.

### Building regulations

HIGH / CRITICAL CURRENCY.

### Software documentation

HIGH CHANGE.

### University curriculum

MODERATE / HIGH CHANGE.

Use this to recommend future verification schedules.

---

# 25. AGENT DEPENDENCY AUDIT

Inspect TAMA's agents.

For each agent determine:

```text
What knowledge does it depend on?
Where does that knowledge come from?
Are the referenced files still present?
Are the referenced documents current?
Are the instructions compatible with the current repository?
Are any referenced agents nonexistent?
Are there circular dependencies?
```

Pay particular attention to:

- `@mentor`
- `@examiner`
- `@drillmaster`
- curator agents
- research agents
- acquisition agents
- audit agents

---

# 26. AGENT-VAULT CONSISTENCY

If an agent says:

> "Use document X"

verify:

```text
X exists
X is accessible
X contains the expected information
X is still authoritative
```

If not:

> repair the reference or report the issue.

---

# 27. COURSE MAP AUDIT

For each course:

Compare:

```text
Course definition
Course topics
Course dependencies
Vault content
Research gaps
Reviewers
Agent support
```

Look for:

```text
COURSE WITH NO KNOWLEDGE
KNOWLEDGE WITH NO COURSE
TOPIC WITH NO SOURCE
SOURCE WITH NO TOPIC
DEPENDENCY WITH NO FOUNDATION
REVIEWER WITH NO VERIFIED SOURCE
```

---

# 28. COURSE DEPENDENCY AUDIT

Inspect the dependency graph.

Look for:

### Missing prerequisite

A course depends on knowledge that TAMA does not currently possess.

### Circular dependency

A → B → A

### Broken dependency

A → B, but B no longer exists.

### Unnecessary dependency

A → B, but there is insufficient reason for the relationship.

Do not redesign the entire curriculum unless evidence supports it.

---

# 29. REVIEWER AUDIT

Inspect generated reviewer material.

Determine whether:

```text
Reviewer question
      ↓
Verified knowledge
      ↓
Authoritative source
```

is traceable.

Look for:

- unsupported questions
- incorrect answers
- ambiguous questions
- obsolete information
- duplicated questions
- questions based on weak sources
- missing citations

Do not assume that a reviewer is correct simply because it already exists.

---

# 30. RESEARCH REPORT AUDIT

Check research reports against actual repository state.

Identify claims such as:

```text
"completed"
"missing"
"acquired"
"not available"
"next target"
"fully covered"
```

Verify each important claim.

The AI must be willing to conclude:

> "This previous research report is now outdated."

---

# 31. ACQUISITION LOG AUDIT

Compare:

```text
ACQUISITION LOG
      ↕
ACTUAL FILES
```

Find:

- logged but missing acquisitions
- acquired but unlogged files
- duplicate acquisition records
- incorrect paths
- obsolete targets
- targets already completed
- completed targets still listed as pending

---

# 32. RESEARCH QUEUE RECONCILIATION

After the audit:

recalculate the research queue.

Remove:

```text
Completed targets
Duplicate targets
Invalid targets
Targets already present
Targets no longer relevant
```

Add:

```text
Newly discovered gaps
Broken sources
Missing authoritative sources
Outdated knowledge
Critical contradictions
```

Prioritize by:

```text
Educational importance
Knowledge gap
Prerequisite importance
Source quality
Philippine relevance
Agent utility
Currency
```

---

# 33. KNOWLEDGE DEBT

Create or update a conceptual:

> **Knowledge Debt Register**

Knowledge debt includes:

- important missing sources
- shallow topics
- unresolved contradictions
- unverified claims
- outdated material
- missing Philippine context
- missing practical examples
- missing exercises
- missing provenance
- broken agent dependencies

Prioritize:

```text
CRITICAL
HIGH
MEDIUM
LOW
```

---

# 34. SAFE SELF-REPAIR

You are authorized to repair **clear, low-risk inconsistencies**.

Examples:

### SAFE

Updating an index because a file clearly exists.

Updating a path because a file was clearly renamed.

Marking an acquisition target complete because the exact source is verified in the Vault.

Adding missing metadata when it can be confidently derived from the source.

Removing a stale reference to a file that clearly no longer exists, while recording the change.

Updating statistics based on an actual repository count.

### NOT SAFE WITHOUT CONFIRMATION

Deleting potentially valuable knowledge.

Mass-moving Vault content.

Changing the canonical structure.

Rewriting major agent behavior.

Changing course definitions.

Resolving ambiguous legal conflicts.

Replacing authoritative sources with inferred alternatives.

Changing project architecture.

When uncertain:

> **report rather than guess.**

---

# 35. CHANGE CONTROL

Before making substantial changes:

Record:

```text
Problem
Evidence
Proposed fix
Risk
Files affected
Reason
```

For safe mechanical fixes, proceed.

For high-impact changes, create a recommendation instead.

---

# 36. NEVER DESTROY INFORMATION TO FIX BOOKKEEPING

If documentation is wrong:

> fix the documentation.

Do NOT delete correct knowledge merely to make the documentation match.

If duplicate knowledge exists:

> determine whether it is a mirror, derivative, archive, or true duplicate before deletion.

Preservation is preferred over destruction.

---

# 37. GIT / CHANGE SAFETY

Before modifying the repository:

Inspect:

```text
Git status
Recent commits
Current branch
Uncommitted changes
```

Do not overwrite unrelated work.

Do not reset or discard user work.

Do not perform destructive Git operations.

Keep changes scoped to the audit.

---

# 38. SELF-AUDIT OF THE AUDIT

Before declaring the audit complete, ask:

```text
Did I inspect actual files?
Did I verify important claims?
Did I check documentation against reality?
Did I search for orphaned knowledge?
Did I search for duplicates?
Did I inspect stale references?
Did I inspect source provenance?
Did I inspect course dependencies?
Did I inspect agent dependencies?
Did I inspect reviewer provenance?
Did I identify contradictions?
Did I identify outdated knowledge?
Did I update the research queue?
Did I preserve uncertain issues instead of guessing?
```

If any answer is NO:

> continue auditing.

---

# 39. AUDIT REPORT

Produce a comprehensive report.

Use this structure:

# TAMA SYSTEM AUDIT REPORT

## 1. Executive Summary

Explain:

- overall repository health
- major findings
- major risks
- major improvements
- whether TAMA is ready for another acquisition phase

---

## 2. Repository State

Report:

```text
Total files
Vault files
Research files
Course files
Reviewer files
Agent files
Documentation files
Other relevant categories
```

Use actual repository counts.

Do not invent statistics.

---

## 3. Documentation Integrity

Report:

```text
Valid
Outdated
Contradictory
Missing
Ambiguous
```

---

## 4. Vault Integrity

Report:

```text
Orphans
Duplicates
Mirrors
Canonical candidates
Missing metadata
Broken references
```

---

## 5. Knowledge Integrity

Report:

```text
Major knowledge gaps
Shallow topics
Contradictions
Unverified claims
Outdated knowledge
Missing Philippine context
```

---

## 6. Source Integrity

Report:

```text
High-authority sources
Weak sources
Missing provenance
Potential duplicate sources
Source lineage problems
```

---

## 7. Course Integrity

For each major course:

```text
Breadth
Depth
Dependencies
Major gaps
Agent utility
Assessment readiness
```

---

## 8. Agent Integrity

Report:

```text
Broken references
Missing dependencies
Outdated instructions
Knowledge access problems
Potential conflicts
```

---

## 9. Reviewer Integrity

Report:

```text
Unsupported material
Potential errors
Missing provenance
Outdated material
Strong material
```

---

## 10. Repairs Performed

List every actual modification.

Use:

```text
FILE
PROBLEM
CHANGE
REASON
```

---

## 11. Repairs NOT Performed

For uncertain/high-risk issues:

```text
ISSUE
WHY NOT FIXED
WHAT EVIDENCE IS NEEDED
RECOMMENDED ACTION
```

---

## 12. Knowledge Debt

List:

```text
CRITICAL
HIGH
MEDIUM
LOW
```

---

## 13. New Research Queue

Produce the corrected research priorities.

---

## 14. System Health

Provide an overall assessment:

```text
REPOSITORY INTEGRITY
KNOWLEDGE INTEGRITY
DOCUMENTATION INTEGRITY
SOURCE INTEGRITY
AGENT INTEGRITY
COURSE COVERAGE
```

Do not fabricate numerical precision.

Use:

```text
EXCELLENT
GOOD
NEEDS ATTENTION
POOR
CRITICAL
```

with explanations.

---

# 40. FINAL OUTPUT REQUIREMENT

At the end, explicitly answer:

### A. What was wrong?

### B. What was outdated?

### C. What was contradictory?

### D. What did you repair?

### E. What remains unresolved?

### F. What knowledge is missing?

### G. What should TAMA research next?

### H. Is TAMA ready for another large acquisition pass?

### I. What architectural improvements should be considered next?

---

# 41. DO NOT STOP AT REPORTING

If a problem is:

```text
clear
low-risk
mechanical
well-supported
```

**repair it.**

Do not merely tell the user:

> "You should update this."

Update it yourself.

However:

If the problem is:

```text
ambiguous
high-risk
architectural
legal
destructive
irreversible
```

do not guess.

Document it and request human confirmation if necessary.

---

# 42. POST-AUDIT OPERATING STATE

After the audit, TAMA should have:

```text
A TRUSTWORTHY VAULT INDEX
A RECONCILED COVERAGE MATRIX
A CLEANER ACQUISITION QUEUE
A DOCUMENTED KNOWLEDGE DEBT REGISTER
A LIST OF UNRESOLVED CONTRADICTIONS
A LIST OF OUTDATED KNOWLEDGE
A LIST OF BROKEN REFERENCES
A LIST OF DUPLICATES / MIRRORS
A SOURCE-PROVENANCE STATUS
A COURSE-DEPENDENCY STATUS
AN AGENT-DEPENDENCY STATUS
```

Only after this state is established should TAMA resume large-scale knowledge acquisition.

---

# 43. FUTURE AUDIT LOOP

This audit should eventually become recurring.

Recommended lifecycle:

```text
KNOWLEDGE ACQUISITION
        ↓
VAULT EXPANSION
        ↓
INDEX UPDATE
        ↓
KNOWLEDGE CURATION
        ↓
AGENT USE
        ↓
NEW KNOWLEDGE / NEW FILES
        ↓
SYSTEM AUDIT
        ↓
RECONCILIATION
        ↓
SELF-REPAIR
        ↓
NEW RESEARCH GAPS
        ↓
KNOWLEDGE ACQUISITION
        ↓
REPEAT
```

The system should therefore not treat this audit as a one-time event.

It is a **maintenance cycle for TAMA's academic brain.**

---

# 44. ULTIMATE PRINCIPLE

TAMA must never become a system that merely says:

> "I have a lot of information."

It should eventually be able to say:

> **"I know what information I possess, where it came from, how reliable it is, how current it is, how deeply it covers each subject, how it relates to other knowledge, which agents depend on it, what contradicts it, what is missing, and what I should investigate next."**

That is the standard this audit should move TAMA toward.

---

# BEGIN AUDIT

Start with the actual repository.

Do not assume the previous documentation is correct.

Do not assume the previous research is complete.

Do not assume the current indexes are synchronized.

Do not assume the current Vault structure is perfect.

**Inspect. Compare. Verify. Reconcile. Repair. Document.**

Then establish the corrected state of TAMA.

Only after that should you determine what TAMA needs to learn next.

**Repository Reality → Audit → Reconciliation → Safe Repair → Knowledge State → Research Queue → Future Acquisition.**