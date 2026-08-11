# MARCIALE-OS GOVERNANCE AMENDMENT — WEB DEPARTMENT INTEGRATION & CONSTITUTIONAL REVIEW

## PURPOSE

A major architectural expansion has been introduced into Marciale-OS: the creation of a specialized **Web Engineering Department** under:

```text
/docs/web/
```

The Web Department consists of specialized agents responsible for:

- Web research / technical reconnaissance (`@scout`)
- Frontend engineering (`@frontend`)
- Backend engineering (`@backend`)
- Fullstack engineering (`@fullstack`)
- UI/UX design (`@ui-ux`)
- Project management (`@project-manager`)
- Quality assurance (`@qa`)

This expansion potentially changes how Marciale-OS:

- researches;
- plans;
- designs;
- implements;
- tests;
- reviews;
- delivers;
- maintains;
- documents;
- and governs software.

Therefore, the existing governance system must be reviewed.

Your task is to determine whether the current Marciale-OS constitutional and governance documents are sufficient for this new department.

If they are not, design and implement the **minimum necessary governance amendments**.

---

# 1. ABSOLUTE FIRST RULE — AUDIT BEFORE MODIFYING

Do NOT immediately create a new law.

First inspect the actual repository.

Read:

```text
/docs/
```

and especially:

```text
AI_RULES.md
AGENTS.md
```

along with every document that defines:

- authority;
- agent hierarchy;
- decision-making;
- development;
- research;
- testing;
- QA;
- security;
- SRE;
- architecture;
- incident response;
- documentation;
- build procedures;
- escalation;
- approval;
- release;
- project management;
- agent interaction.

Also inspect the newly created:

```text
/docs/web/
```

and every Web Department document.

The filesystem is the source of truth.

Do not rely on previous conversations or assumptions about what the repository contains.

---

# 2. DETERMINE THE GOVERNANCE GAP

Create an audit answering:

### A. What existing rules already govern Web development?

### B. What existing rules already govern the proposed Web agents?

### C. Which existing rules are sufficient?

### D. Which rules overlap?

### E. Which rules conflict?

### F. Which rules are missing?

### G. Which existing rules should be amended rather than duplicated?

### H. Which new rules are genuinely necessary?

### I. Which proposed rules would be unnecessary bureaucracy?

Do not create a new law merely because the Web Department exists.

Create one only where a genuine governance gap exists.

---

# 3. CONSTITUTIONAL PRINCIPLE

Treat:

```text
/docs/AI_RULES.md
```

as the highest-level constitutional document **only if the existing repository confirms that this is its intended authority**.

Do not assume hierarchy.

Determine the existing hierarchy from the actual documents.

If `AI_RULES.md` is indeed the supreme governance layer, then the Web Department must be subordinate to it.

The Web Department may create specialized operational rules, but it must not silently establish authority superior to the existing constitution.

---

# 4. WEB DEPARTMENT MUST BE A DEPARTMENT — NOT A SECOND GOVERNMENT

Establish explicitly:

> `/docs/web/` is a specialized operational department within Marciale-OS.

It is not:

- an independent governance system;
- a competing authority;
- a replacement for architecture;
- a replacement for SRE;
- a replacement for security;
- a replacement for the existing AI governance;
- a mechanism for bypassing existing approval requirements.

The Web Department may possess **domain authority** over Web engineering matters while remaining subordinate to Marciale-OS's higher-level governance.

---

# 5. PROPOSE A FORMAL "WEB DEPARTMENT CHARTER"

If the audit determines that one is necessary, create a formal charter establishing:

### Purpose

Why the Web Department exists.

### Jurisdiction

What areas it governs.

### Boundaries

What it does not govern.

### Membership

Which agents belong to it.

### Authority

What decisions Web agents may make independently.

### Escalation

When they must defer to another Marciale-OS authority.

### Accountability

How Web agents are evaluated.

### Documentation

What records they must maintain.

### Quality

What minimum standards Web work must satisfy.

---

# 6. DEFINE DOMAIN AUTHORITY

Create a clear distinction between:

## Domain Authority

The Web Department may make specialized decisions concerning:

- frontend implementation;
- backend implementation;
- UI/UX implementation;
- Web architecture within approved boundaries;
- Web testing;
- Web project coordination;
- Web research;
- Web implementation practices.

## System Authority

Higher-level Marciale-OS authorities may retain authority over:

- global architecture;
- security;
- system reliability;
- constitutional rules;
- repository-wide standards;
- irreversible architectural changes;
- cross-department conflicts;
- critical incidents.

Do not invent hierarchy where the repository already has one.

Map the actual hierarchy.

---

# 7. CREATE A RULE OF JURISDICTION

The governance system should establish:

> An agent may make autonomous decisions within its assigned domain, provided that the decision does not violate a higher-level rule, affect another authority's protected domain, or introduce unacceptable system-wide risk.

This principle should prevent both extremes:

### Too little autonomy

Every tiny CSS change requires approval from the entire organization.

### Too much autonomy

A Web agent rewrites the entire architecture because it believes its solution is better.

---

# 8. CREATE A "NO SILENT OVERRIDE" RULE

No Web agent may silently override:

- existing Marciale-OS governance;
- architectural decisions;
- security controls;
- SRE controls;
- QA release gates;
- documented system invariants;
- another agent's protected authority.

If an agent believes an existing rule is incorrect:

```text
Identify conflict
      ↓
Provide evidence
      ↓
Explain consequences
      ↓
Propose alternative
      ↓
Escalate
      ↓
Receive decision
      ↓
Implement
```

An agent must not simply ignore a rule because it believes its own solution is superior.

---

# 9. CREATE A "RIGHT TO CHALLENGE" PRINCIPLE

This must coexist with the previous rule.

Agents must be allowed to challenge decisions.

The system should distinguish:

### Override

Changing another authority's decision without permission.

### Challenge

Providing evidence that the decision may be incorrect.

Challenges should be encouraged.

Unauthorized overrides should not be.

This is particularly important for:

- `@scout`;
- `@qa`;
- `@sentinel` or security-related agents;
- `@sre`;
- `@architect`.

---

# 10. SCOUT SHOULD HAVE RESEARCH AUTHORITY — NOT IMPLEMENTATION AUTHORITY

Define `@scout` carefully.

Scout should be able to:

- investigate;
- compare;
- inspect;
- analyze;
- report;
- challenge assumptions;
- identify better alternatives;
- identify risks;
- recommend approaches.

Scout should **not automatically have authority to implement** its recommendation.

Its primary power is:

> Evidence.

Its output should inform decisions made by the appropriate engineering or governance authority.

---

# 11. QA MUST HAVE RELEASE-BLOCKING AUTHORITY

Determine whether the existing governance already gives QA this ability.

If not, consider establishing:

> QA may block release of a Web change when it has reproducible evidence of a failure that violates defined requirements, acceptance criteria, safety constraints, or release standards.

However:

QA blocking must be evidence-based.

QA must provide:

- reproduction steps;
- expected behavior;
- actual behavior;
- severity;
- affected scope;
- relevant evidence.

QA must not block releases based solely on personal preference.

---

# 12. PROJECT MANAGER AUTHORITY

Define Project Manager authority carefully.

The PM may:

- coordinate;
- prioritize;
- organize;
- schedule;
- identify dependencies;
- track blockers;
- request work;
- coordinate agents.

The PM should not automatically possess authority to:

- override security;
- override architecture;
- override QA;
- bypass SRE;
- force unsafe deployment;
- alter constitutional rules.

The PM coordinates technical authority rather than replacing it.

---

# 13. FULLSTACK AS CROSS-DOMAIN MEDIATOR

Determine whether Fullstack should have explicit authority to investigate cross-layer failures.

Recommended principle:

> When a failure crosses frontend/backend boundaries and cannot be reliably assigned to one domain, Fullstack may conduct cross-layer investigation and coordinate the responsible specialists.

Fullstack should not become an unrestricted "senior developer" with authority over every other engineering agent.

---

# 14. UI/UX AUTHORITY

Establish whether UI/UX should have authority over:

- visual consistency;
- interaction design;
- information architecture;
- usability;
- accessibility requirements.

However, distinguish:

### Design authority

from:

### Implementation authority.

UI/UX can specify intended experience without necessarily dictating the exact technical implementation.

Developers may challenge a design when they identify:

- accessibility issues;
- browser limitations;
- performance problems;
- security concerns;
- unreasonable complexity;
- maintainability concerns.

Such disagreements should be documented and resolved through evidence.

---

# 15. FRONTEND / BACKEND BOUNDARIES

Define clear ownership.

Frontend owns client-side implementation.

Backend owns server/data/service implementation.

Neither should casually modify the other's domain without coordination.

Fullstack may cross the boundary when the task requires it.

This should prevent:

> "I changed your code because I needed it."

without coordination.

---

# 16. WEB + EXISTING QA/SRE/SECURITY GOVERNANCE

This is critical.

Determine exactly how Web interacts with existing:

```text
QA
SRE
Security
Architecture
Incident Response
Code Analysis
Testing
```

Do not create competing systems.

For example:

```text
Web QA
    ↓
Existing Marciale-OS QA governance
```

rather than:

```text
Web QA
      VS
Global QA
```

unless the existing architecture explicitly requires otherwise.

Likewise:

```text
Web incident
     ↓
Web triage
     ↓
Existing SRE / Incident Response
```

when severity exceeds Web's authority.

---

# 17. ESTABLISH ESCALATION RULES

Create a clear escalation matrix.

At minimum investigate:

### LEVEL 0 — Local

Minor Web issue.

Agent handles it.

### LEVEL 1 — Feature

Multiple Web agents required.

PM coordinates.

### LEVEL 2 — Cross-system

Web interacts with another Marciale-OS subsystem.

Escalate/coordinate with relevant department.

### LEVEL 3 — Critical

Security, data integrity, severe reliability, major system failure.

Existing SRE/security/incident governance takes precedence.

### LEVEL 4 — Constitutional

Conflict involving governance, authority, or foundational architecture.

Escalate to the highest appropriate existing authority.

Use existing Marciale-OS severity terminology if one already exists.

---

# 18. ESTABLISH A "PLAN BEFORE MAJOR CHANGE" RULE

For meaningful Web changes:

```text
Understand
   ↓
Inspect
   ↓
Research
   ↓
Plan
   ↓
Review
   ↓
Implement
   ↓
Test
   ↓
Validate
   ↓
Deliver
```

However:

**Do not require this entire process for trivial changes.**

Define adaptive levels.

### MICRO

Examples:

- typo;
- tiny CSS correction;
- documentation correction.

### STANDARD

Examples:

- new component;
- API endpoint;
- dashboard feature.

### MAJOR

Examples:

- new subsystem;
- significant UI redesign;
- cross-layer feature.

### ARCHITECTURAL

Examples:

- database migration;
- framework replacement;
- major architecture change.

The greater the impact, the greater the planning and review requirement.

---

# 19. ESTABLISH "EVIDENCE BEFORE DONE"

Where appropriate, a Web agent should not declare work complete solely because it believes it completed the task.

Completion should be supported by appropriate evidence.

Examples:

### Code

- tests;
- build;
- lint;
- runtime verification.

### UI

- visual verification;
- responsive testing;
- accessibility checks.

### Backend

- API tests;
- integration tests;
- error-path verification.

### Research

- sources;
- methodology;
- evidence.

### QA

- reproduction;
- test results;
- coverage.

Use the smallest evidence appropriate to the task.

---

# 20. ESTABLISH "NO FALSE COMPLETION"

This should be considered a constitutional-quality rule if one does not already exist.

An agent must never claim:

- a test passed when it was not run;
- a build succeeded when it was not verified;
- a source was inspected when it could not access it;
- a vulnerability was fixed when it was not retested;
- a feature works when it has not been validated;
- a repository was fully analyzed when portions were inaccessible.

Agents must explicitly report:

```text
VERIFIED
ASSUMED
INFERRED
NOT VERIFIED
BLOCKED
```

when relevant.

---

# 21. ESTABLISH "MINIMAL NECESSARY CHANGE"

Web agents should prefer:

> The smallest change that reliably solves the problem.

They should avoid:

- unnecessary rewrites;
- unnecessary framework changes;
- unnecessary dependency additions;
- unrelated refactoring;
- architectural changes without justification.

If a larger change is genuinely required, document why.

---

# 22. ESTABLISH RESEARCH-TO-IMPLEMENTATION TRACEABILITY

For significant Web decisions:

```text
Research
   ↓
Evidence
   ↓
Recommendation
   ↓
Decision
   ↓
Implementation
   ↓
Validation
```

The repository should be able to answer:

> "Why was this technical/design decision made?"

without forcing future agents to repeat the original research.

---

# 23. ESTABLISH A CHANGE IMPACT RULE

Before significant changes, agents should consider:

- affected modules;
- affected agents;
- affected APIs;
- affected data;
- affected users;
- affected tests;
- security implications;
- performance implications;
- accessibility implications;
- compatibility;
- rollback difficulty.

The larger the blast radius, the greater the required review.

---

# 24. ESTABLISH "STOP CONDITIONS"

A Web agent must stop and escalate rather than continue blindly when:

- requirements are contradictory;
- a destructive action is required;
- security boundaries are crossed;
- data integrity is at risk;
- an architectural conflict exists;
- required evidence is unavailable;
- another authority's decision must be changed;
- the agent cannot determine the impact of its proposed action.

Stopping is not failure.

Uncontrolled action under uncertainty is failure.

---

# 25. GOVERNANCE AMENDMENT FORMAT

If new laws/rules are necessary, use the existing naming, numbering, terminology, and formatting conventions found in `/docs`.

Do NOT invent an unrelated constitutional style.

For every proposed amendment, provide:

```text
Rule ID
Title
Purpose
Scope
Rule
Rationale
Affected Agents
Authority
Exceptions
Enforcement / Verification
Dependencies
Related Existing Rules
```

If the existing constitution uses numbered laws, amend it using that numbering system.

If it uses articles, use articles.

If it uses another structure, preserve it.

---

# 26. DO NOT DUPLICATE EXISTING LAWS

Before adding a rule:

Search the entire `/docs` tree for an existing rule addressing the same concern.

If one exists:

### Option A
Use the existing rule.

### Option B
Amend it.

### Option C
Create a Web-specific subordinate protocol that references it.

Do not create:

> "Web Law 7"

when:

> "AI Rule 7"

already governs the same behavior.

---

# 27. CREATE A GOVERNANCE DEPENDENCY MAP

After the audit, produce a map similar to:

```text
AI CONSTITUTION
       │
       ▼
GLOBAL GOVERNANCE
       │
 ┌─────┼─────────────┐
 │     │             │
ARCH   SRE        SECURITY
 │
 ▼
WEB DEPARTMENT
 │
 ├── Scout
 ├── UI/UX
 ├── PM
 ├── Frontend
 ├── Backend
 ├── Fullstack
 └── QA
```

Adapt this to the actual repository hierarchy.

Do not assume this exact hierarchy is correct.

---

# 28. UPDATE AGENT REGISTRY IF REQUIRED

If the existing:

```text
/docs/AGENTS.md
```

contains an authoritative agent registry, determine whether the seven Web agents should be added there.

Do not simply duplicate their definitions.

The global registry should answer:

> "What agents exist?"

The Web documents should answer:

> "How does the Web Department operate?"

Maintain that distinction.

---

# 29. UPDATE THE CONSTITUTION ONLY WHEN JUSTIFIED

If the audit determines that `AI_RULES.md` genuinely needs amendment:

Do so carefully.

For each amendment:

1. Identify the existing rule.
2. Explain why it is insufficient.
3. Propose the smallest necessary amendment.
4. Explain the effect.
5. Identify affected agents.
6. Check for contradictions.
7. Preserve historical clarity if the repository has a versioning convention.

Do not rewrite the entire constitution merely because Web was introduced.

---

# 30. CREATE A GOVERNANCE CHANGELOG

Record:

- what changed;
- why it changed;
- what Web capability caused the change;
- which agents are affected;
- whether the amendment is constitutional or operational;
- what existing rules were preserved;
- what rules were amended;
- what was intentionally not changed.

---

# 31. VALIDATION

After implementing governance changes:

Verify:

### Consistency

No rule contradicts another.

### Completeness

Every Web agent has a clear jurisdiction.

### Authority

No Web agent accidentally becomes superior to the existing governance hierarchy.

### Escalation

Critical issues have a clear path.

### QA

QA can identify and block genuine failures.

### Research

Scout can challenge assumptions without becoming an uncontrolled decision-maker.

### PM

Project management can coordinate without overriding protected technical authority.

### Engineering

Frontend, Backend, and Fullstack boundaries are clear.

### UX

UI/UX has appropriate design authority.

### Existing Systems

Web does not duplicate existing SRE, security, QA, architecture, or incident-response systems.

---

# 32. FINAL REPORT

Create a comprehensive governance audit documenting:

## A. Existing governance

What the repository currently establishes.

## B. Web Department impact

How Web changes the system.

## C. Governance gaps

What was missing.

## D. Existing rules reused

What did not need modification.

## E. Existing rules amended

What changed and why.

## F. New rules created

What was genuinely new.

## G. Rules intentionally NOT created

This is important.

Explain what you deliberately avoided adding and why.

## H. Authority model

Who can decide what.

## I. Escalation model

How conflicts and severe incidents move upward.

## J. Agent boundaries

How the seven agents interact.

## K. Risk assessment

Potential governance failures.

## L. Future recommendations

What may eventually need to evolve.

---

# 33. CRITICAL PRINCIPLE

Do not optimize for the number of rules.

Optimize for:

> **clarity of authority + safety + autonomy + evidence + maintainability.**

Too few rules create chaos.

Too many rules create bureaucracy.

The objective is the smallest governance system capable of reliably controlling the complexity introduced by the Web Department.

---

# 34. FINAL DECISION GATE

Before making irreversible or broad governance changes, present:

```text
PROPOSED GOVERNANCE CHANGES
────────────────────────────

1. Existing rule to amend:
   Reason:

2. New rule:
   Reason:

3. Web-specific protocol:
   Reason:

4. Existing rule reused:
   Reason:

5. Proposed rule rejected:
   Reason:

6. Potential conflicts:
   
7. Risk:
   
8. Recommended implementation order:
```

Then determine whether the existing Marciale-OS governance permits autonomous implementation.

If it does, proceed.

If approval is required, stop at the decision gate.

---

# SUCCESS CONDITION

This task is successful only when the resulting Marciale-OS governance can answer:

> **Who may decide?**

> **Who may implement?**

> **Who may challenge?**

> **Who may block?**

> **Who must be consulted?**

> **Who must be obeyed?**

> **When must an agent stop?**

> **What evidence is required before something is considered done?**

> **How does Web interact with the existing Marciale-OS departments?**

> **How can the system grow without continuously rewriting its constitution?**

The Web Department should become a **properly governed subsystem of Marciale-OS**, not an isolated collection of agents.

Do not merely add rules.

Design the governance necessary for the new capability while preserving the integrity of the existing system.