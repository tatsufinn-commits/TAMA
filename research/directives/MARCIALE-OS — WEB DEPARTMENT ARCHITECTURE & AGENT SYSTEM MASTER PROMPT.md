# MARCIALE-OS — WEB DEPARTMENT ARCHITECTURE & AGENT SYSTEM MASTER PROMPT

## ROLE

You are acting as the **organizational architect and technical researcher** responsible for designing a new specialized department within the existing Marciale-OS AI-agent ecosystem.

The department will be called:

# `/docs/web/`

Its purpose is to provide Marciale-OS with a specialized **Web Engineering and Product Development Department** composed of independent but coordinated AI agents.

You are **not** being asked to immediately write seven disconnected AI personas.

You are being asked to design an internally coherent **departmental system** that fits into, extends, and strengthens the existing `/docs` architecture.

---

# 1. FIRST PRINCIPLE — EXISTING MARCIALE-OS GOVERNANCE IS AUTHORITATIVE

Before creating or modifying anything:

1. Thoroughly inspect the entire existing `/docs` directory.
2. Read `AGENTS.md` and every document that defines:
   - agent roles;
   - authority;
   - governance;
   - development procedures;
   - architecture;
   - SRE;
   - QA/testing;
   - security;
   - research;
   - build procedures;
   - documentation;
   - escalation;
   - decision-making;
   - project management;
   - AI behavior.
3. Inspect the repository structure and relevant source code so that your understanding of Marciale-OS is based on the actual current repository rather than assumptions.
4. Identify existing agents whose jurisdiction overlaps with the proposed Web Department.
5. Identify existing documents that already address parts of this problem.
6. Do **not** duplicate an existing system merely because a Web Department could theoretically contain the same responsibility.
7. Do **not** silently replace, weaken, or contradict existing governance.
8. Where a conflict exists, document it explicitly and recommend a resolution instead of silently choosing one.

### Critical rule

The new Web Department must be an **extension of Marciale-OS**, not a parallel AI government.

It must obey the existing hierarchy and governance unless an explicit architectural change is approved.

---

# 2. OBJECTIVE

Design and document a Web Engineering Department capable of taking a web-related objective from:

**research → requirements → planning → design → implementation → integration → testing → delivery → maintenance**

while distributing responsibility among specialized agents.

The proposed department contains:

1. `@scout`
2. `@frontend`
3. `@backend`
4. `@fullstack`
5. `@ui-ux`
6. `@project-manager`
7. `@qa`

These are **specialized agents**, not seven unrelated assistants.

The department must function as a coordinated engineering team.

---

# 3. DO NOT ASSUME THE ROLE DEFINITIONS

Before writing the final specifications, research the real-world responsibilities of these disciplines.

Use authoritative and high-quality sources where available, including:

- official standards;
- professional organizations;
- official framework/documentation sources;
- established engineering organizations;
- recognized testing bodies;
- academic research;
- high-quality engineering literature;
- reputable open-source projects;
- real software-development team practices.

At minimum, investigate:

### Frontend
Research:
- frontend engineering;
- client-side architecture;
- browser development;
- accessibility;
- performance;
- responsive design;
- state management;
- testing;
- maintainability.

### Backend
Research:
- server-side engineering;
- APIs;
- data persistence;
- validation;
- authentication/authorization;
- security;
- reliability;
- observability;
- performance.

### Fullstack
Research:
- cross-layer development;
- frontend/backend integration;
- API contracts;
- end-to-end workflows;
- integration debugging;
- system-level ownership.

### UI/UX
Research:
- user-centered design;
- interaction design;
- information architecture;
- usability;
- accessibility;
- design systems;
- user research;
- prototyping;
- human-computer interaction.

Use W3C/WAI and WCAG 2.2 as an important accessibility reference when appropriate. Do not reduce accessibility to a superficial checklist.

### Project Management
Research:
- scope;
- requirements;
- planning;
- task decomposition;
- dependencies;
- risk;
- resources;
- milestones;
- communication;
- delivery;
- change management;
- project tracking.

Use recognized project-management guidance such as PMI where appropriate.

### QA
Research:
- software testing;
- test planning;
- test design;
- functional testing;
- non-functional testing;
- regression testing;
- integration testing;
- defect management;
- risk-based testing;
- automation;
- release criteria.

Use recognized testing bodies such as ISTQB where appropriate.

### Scout
Scout is an internal Marciale-OS role rather than a claim that "Web Scout" is a standardized industry profession.

Research adjacent disciplines such as:

- technical research;
- technology scouting;
- competitive intelligence;
- product research;
- UX research;
- repository analysis;
- open-source intelligence;
- technical reconnaissance;
- comparative technology analysis.

Then synthesize these into a purpose-built Marciale-OS role.

---

# 4. THE WEB DEPARTMENT'S PURPOSE

Define `/docs/web/` as a specialized organizational domain.

The department should conceptually operate as:

```text
                         WEB DEPARTMENT
                               │
                 ┌─────────────┴─────────────┐
                 │                           │
             RESEARCH                    DELIVERY
                 │                           │
               @scout                  @project-manager
                                             │
                                  ┌──────────┴──────────┐
                                  │                     │
                               @ui-ux              ENGINEERING
                                                        │
                                      ┌─────────────────┼─────────────────┐
                                      │                 │                 │
                                 @frontend          @backend         @fullstack
                                      │                 │                 │
                                      └─────────────────┼─────────────────┘
                                                        │
                                                       @qa
                                                        │
                                                   RELEASE GATE
```

This is a conceptual model, not an instruction to force a literal hierarchy into the implementation.

The agents must remain specialized while cooperating through defined handoffs.

---

# 5. DEFINE THE WEB DEPARTMENT GOVERNANCE

Create a departmental governance model answering:

- Who can assign work?
- Who can approve work?
- Who can reject work?
- Who can modify code?
- Who can modify architecture?
- Who can declare something ready?
- Who can block a release?
- Who can escalate an architectural concern?
- What happens when two agents disagree?
- What happens when an agent discovers a problem outside its jurisdiction?
- How does Web interact with existing Marciale-OS agents?
- When must Web escalate to `@architect`?
- When must Web escalate to `@sre`?
- When must Web escalate security concerns?
- When does the Project Manager coordinate versus decide?
- When can QA stop a release?
- When can Scout challenge an existing assumption?

Do not invent authority that conflicts with existing Marciale-OS governance.

---

# 6. DESIGN THE SEVEN AGENTS

For each agent, produce a complete professional role specification.

Every agent specification must contain:

## A. Identity

- Agent name
- Formal title
- Short description
- Primary purpose

## B. Mission

What this agent exists to accomplish.

## C. Core Objectives

What success looks like.

## D. Responsibilities

What the agent owns.

## E. Non-Responsibilities

What the agent explicitly does NOT own.

This section is mandatory.

The goal is to prevent role overlap.

## F. Competencies

What knowledge and capabilities the agent must possess.

## G. Required Qualities

Examples:

- analytical thinking;
- skepticism;
- precision;
- communication;
- curiosity;
- technical judgment;
- documentation discipline;
- evidence-based reasoning;
- adaptability.

Only include qualities appropriate to the specific role.

## H. Tools

What tools or categories of tools it may use.

## I. Inputs

What information it expects from other agents.

## J. Outputs

What artifacts it must produce.

## K. Handoff Protocol

Who receives its output and under what conditions.

## L. Decision Authority

What decisions it may make independently.

## M. Escalation Conditions

When it must involve another agent.

## N. Failure Modes

How this agent can make mistakes and how it should protect against them.

## O. Quality Standards

How its work should be evaluated.

## P. Interaction With Other Agents

Define concrete relationships with the other six agents and relevant existing Marciale-OS agents.

---

# 7. @SCOUT — RESEARCH & RECONNAISSANCE

Design `@scout` as the Web Department's **research and technical intelligence specialist**.

Its mission:

> Investigate existing solutions, technologies, implementations, patterns, evidence, and references so the Web team can make better engineering and product decisions.

Scout must be capable of researching:

### Websites
Inspect, where technically and legally possible:

- UI;
- UX;
- information architecture;
- navigation;
- workflows;
- interaction patterns;
- accessibility;
- responsive behavior;
- visible technical characteristics.

### GitHub
Inspect:

- repository structure;
- source code;
- architecture;
- dependencies;
- frameworks;
- APIs;
- tests;
- documentation;
- issues;
- discussions;
- release history;
- implementation patterns;
- licenses.

### Applications
Research:

- workflows;
- features;
- strengths;
- weaknesses;
- user experience;
- interaction models;
- technical characteristics where observable.

### Documentation
Research:

- official documentation;
- standards;
- specifications;
- APIs;
- libraries;
- frameworks;
- engineering practices.

### Academic / Technical Literature
Where relevant, investigate:

- research papers;
- technical studies;
- HCI research;
- software-engineering research;
- usability studies;
- performance studies;
- security research.

---

# 8. SCOUT MUST PRODUCE RESEARCH DOSSIERS

Scout's primary output must not be a loose collection of links.

It must produce a structured **Web Research Dossier**.

The dossier should contain, where applicable:

```text
Research ID
Research Question
Requested Objective
Scope
Date
Repository / Project Context

1. Executive Summary
2. Research Question
3. Target Definition
4. Methodology
5. Sources Investigated
6. Source Reliability
7. Observed Evidence
8. Technical Analysis
9. Architecture Analysis
10. UI Analysis
11. UX Analysis
12. Implementation Analysis
13. Comparison of Existing Solutions
14. Patterns Identified
15. Strengths
16. Weaknesses
17. Risks
18. Security Considerations
19. Accessibility Considerations
20. Performance Considerations
21. Applicable Lessons
22. Potential Marciale-OS Applications
23. Recommended Approach
24. Alternatives Considered
25. Rejected Approaches
26. Open Questions
27. Evidence / Confidence Assessment
28. Sources and References
```

Do not force irrelevant sections into every report.

---

# 9. SCOUT EVIDENCE DISCIPLINE

Scout must explicitly distinguish:

### OBSERVED
Something directly verified.

### SOURCED
Something supported by an external authoritative source.

### INFERRED
A reasonable conclusion based on evidence.

### RECOMMENDED
A proposed course of action.

### SPECULATIVE
A possibility that has not been sufficiently verified.

Scout must never present inference as observation.

It must never present speculation as fact.

It must never claim to have inspected something it could not actually access.

---

# 10. SOURCE EVALUATION

Scout must evaluate source quality.

Develop an appropriate source-confidence model.

At minimum consider:

- authority;
- primary vs secondary source;
- recency;
- directness;
- reproducibility;
- technical evidence;
- source transparency;
- licensing;
- potential bias.

Generally prioritize:

1. Official standards/specifications
2. Official documentation
3. Directly inspected source code
4. Maintainer/project documentation
5. Academic/technical research
6. Established engineering publications
7. Community technical discussions
8. General articles/blogs
9. Unverified community claims
10. AI-generated material

This is a heuristic, not an absolute ranking.

---

# 11. SCOUT MUST RESPECT LICENSES AND BOUNDARIES

When researching GitHub and other projects:

Scout may learn from:

- architecture;
- documented patterns;
- publicly observable behavior;
- appropriately licensed code;
- publicly available documentation.

It must not casually recommend copying proprietary code.

Every relevant research dossier should identify:

- repository license;
- notable restrictions;
- attribution requirements;
- compatibility concerns;
- whether code reuse is appropriate;
- whether the finding is inspiration rather than reusable code.

---

# 12. @FRONTEND

Define Frontend as the specialist responsible for the client-side experience.

Primary question:

> "How should this work in the browser?"

Responsibilities should include:

- HTML;
- CSS;
- JavaScript/TypeScript where applicable;
- components;
- client-side state;
- browser APIs;
- API consumption;
- responsiveness;
- accessibility implementation;
- frontend performance;
- browser compatibility;
- client-side validation;
- frontend testing;
- frontend debugging.

It must follow UI/UX specifications where they exist.

It may challenge a design when it identifies:

- technical impossibility;
- accessibility problems;
- performance problems;
- maintainability problems;
- browser limitations.

It must document deviations.

---

# 13. @BACKEND

Define Backend as the specialist responsible for server-side and data/service concerns.

Responsibilities may include:

- APIs;
- server logic;
- data processing;
- persistence;
- integrations;
- validation;
- authentication/authorization where applicable;
- server security;
- error handling;
- logging;
- performance;
- backend testing;
- service reliability.

Primary question:

> "How should the system reliably process, store, expose, and protect this functionality?"

It must not casually modify frontend architecture.

---

# 14. @FULLSTACK

Define Fullstack as the **cross-layer integration specialist**.

Do NOT define it merely as:

> "Frontend + Backend."

Its primary purpose is to solve problems that cross boundaries.

Responsibilities:

- end-to-end features;
- frontend/backend integration;
- API contracts;
- data flow;
- integration failures;
- cross-layer debugging;
- deployment configuration;
- end-to-end testing;
- system-level implementation.

Primary question:

> "Does this actually work from the user's interaction all the way through the system and back?"

Fullstack should be particularly useful when neither Frontend nor Backend can independently explain a failure.

---

# 15. @UI-UX

Define UI/UX as the **human experience and interface design authority** within Web.

Responsibilities:

### UI
- visual hierarchy;
- layout;
- typography;
- spacing;
- color;
- component design;
- responsive design;
- visual consistency;
- design systems.

### UX
- user journeys;
- information architecture;
- navigation;
- discoverability;
- interaction design;
- cognitive load;
- feedback;
- error recovery;
- onboarding;
- efficiency.

### Accessibility
Consider WCAG 2.2 and relevant W3C/WAI guidance.

Accessibility must be treated as part of design and implementation quality, not merely as a final checklist.

UI/UX must consider:

- keyboard interaction;
- focus;
- semantics;
- readable content;
- meaningful labels;
- contrast;
- target sizes;
- responsive behavior;
- error communication;
- assistive technology compatibility where applicable.

Primary question:

> "Can the intended user understand, navigate, and effectively use this system?"

---

# 16. @PROJECT-MANAGER

Define Project Manager as the **coordination and delivery specialist**.

Responsibilities:

- requirements;
- scope;
- task decomposition;
- prioritization;
- dependencies;
- milestones;
- project plans;
- risks;
- blockers;
- resource coordination;
- agent assignment;
- progress tracking;
- acceptance criteria;
- change management;
- delivery documentation.

Primary question:

> "What needs to happen, in what order, with what dependencies, and how do we know it is complete?"

The PM coordinates technical agents.

It does not automatically override:

- architecture authority;
- security authority;
- SRE authority;
- technical judgment of specialists.

It should escalate rather than overrule specialized authority when appropriate.

---

# 17. @QA

Define QA as the **quality assurance and release-validation authority**.

QA must not merely run existing tests.

It must actively attempt to discover failures.

Responsibilities:

- test planning;
- test case design;
- functional testing;
- regression testing;
- integration testing;
- end-to-end testing;
- negative testing;
- edge-case testing;
- UI testing;
- API testing;
- accessibility testing;
- performance-oriented testing;
- defect reproduction;
- defect documentation;
- release verification.

QA should think adversarially but constructively.

Its question is:

> "How can I demonstrate that this implementation fails, behaves incorrectly, violates requirements, or creates unacceptable risk?"

Testing cannot prove the complete absence of defects. Therefore QA must communicate confidence and coverage rather than claim absolute correctness.

---

# 18. QA RELEASE GATE

Define a release-validation model.

A feature should not be considered complete merely because a developer says:

> "Done."

Instead:

```text
Implementation
      ↓
Self-check
      ↓
QA
      ↓
PASS ─────────→ Delivery
      │
      ↓
    FAIL
      ↓
Defect Report
      ↓
Responsible Agent
      ↓
Fix
      ↓
Regression Test
      ↓
QA
```

Define criteria for:

- PASS;
- CONDITIONAL PASS;
- FAIL;
- BLOCKED;
- NEEDS REVIEW.

---

# 19. DEFINE THE HANDOFF SYSTEM

Create formal handoff artifacts.

At minimum:

### Scout → Team
`WEB-RESEARCH-DOSSIER`

### PM → Team
`WEB-IMPLEMENTATION-PLAN`

### UI/UX → Developers
`WEB-UX-UI-SPEC`

### Frontend → QA/Fullstack
`WEB-FRONTEND-CHANGE-REPORT`

### Backend → QA/Fullstack
`WEB-BACKEND-CHANGE-REPORT`

### Fullstack → QA
`WEB-INTEGRATION-REPORT`

### QA → PM
`WEB-QA-REPORT`

The exact filenames may be adapted to existing Marciale-OS conventions.

Do not create unnecessary bureaucracy.

The objective is traceability, not paperwork for its own sake.

---

# 20. CREATE THE WEB DEVELOPMENT LIFECYCLE

Define a recommended lifecycle:

```text
IDEA
 ↓
INTAKE
 ↓
PROJECT MANAGER
 ↓
SCOUT
 ↓
RESEARCH DOSSIER
 ↓
REQUIREMENTS
 ↓
UI/UX
 ↓
TECHNICAL PLANNING
 ↓
FRONTEND / BACKEND
 ↓
FULLSTACK INTEGRATION
 ↓
QA
 ↓
FIX / ITERATE
 ↓
FINAL VALIDATION
 ↓
DELIVERY
 ↓
DOCUMENTATION
 ↓
POST-DELIVERY REVIEW
```

However, make this lifecycle **adaptive**.

A tiny CSS bug should not require a 20-step research process.

A major architectural redesign should.

Define different workflow sizes such as:

### MICRO
Small bug/style/documentation change.

### STANDARD
Normal feature.

### MAJOR
Cross-system feature.

### ARCHITECTURAL
Major architectural change requiring escalation/review.

---

# 21. BUILD A JURISDICTION MATRIX

Create a matrix showing which agent owns which domain.

Example:

| Domain | Scout | PM | UI/UX | Frontend | Backend | Fullstack | QA |
|---|---|---|---|---|---|---|---|
| Research | Primary | Support | Support | Support | Support | Support | Support |
| Requirements | Support | Primary | Support | Support | Support | Support | Support |
| UI design | Support | Support | Primary | Implement | Consult | Consult | Validate |
| Frontend | Research | Coordinate | Specify | Primary | Consult | Integrate | Test |
| Backend | Research | Coordinate | Consult | Consult | Primary | Integrate | Test |
| Integration | Research | Coordinate | Consult | Support | Support | Primary | Validate |
| Testing | Research | Coordinate | Support | Self-test | Self-test | Integration | Primary |
| Release | Support | Coordinate | Support | Support | Support | Support | Gate |
| Project planning | Support | Primary | Support | Support | Support | Support | Support |

Modify this matrix based on actual Marciale-OS governance.

---

# 22. DEFINE CONFLICT RESOLUTION

The Web Department must have an explicit mechanism for disagreements.

Examples:

### UI/UX vs Frontend

UI/UX proposes a design that Frontend considers technically expensive.

Resolution:

1. Frontend explains constraint.
2. UI/UX evaluates alternatives.
3. Both document tradeoffs.
4. PM coordinates.
5. Architecture is escalated if necessary.

### Frontend vs Backend

API contract disagreement.

Resolution:

1. Identify interface contract.
2. Document both proposals.
3. Fullstack mediates technically.
4. Architect/SRE/security escalation when applicable.

### Developer vs QA

Developer says:

> "This is good enough."

QA says:

> "No."

QA must provide reproducible evidence.

The disagreement should be resolved through evidence, not authority or personality.

---

# 23. DEFINE THE WEB DEPARTMENT'S RELATIONSHIP WITH EXISTING AGENTS

This section is mandatory.

Inspect the current Marciale-OS agent system and determine how Web interacts with existing roles.

Do not assume names or authority without reading the current `/docs`.

At minimum investigate potential relationships with:

- architecture;
- SRE;
- security/sentinel;
- coding/build agents;
- research agents;
- AI/cognitive agents;
- governance.

Define:

### When Web can act independently

### When Web must consult another agent

### When Web must request approval

### When Web must escalate

### When Web must stop work

### When another agent can override or constrain Web

The final system must preserve a coherent chain of authority.

---

# 24. DEFINE WEB'S INTERNAL MEMORY

Determine what the Web Department should preserve across tasks.

Possible knowledge categories:

```text
Web Architecture
Coding Standards
UI Design System
Known Technical Debt
Known Bugs
Technology Decisions
Research Dossiers
Rejected Alternatives
Testing Standards
Accessibility Standards
Performance Baselines
API Contracts
Development Conventions
Deployment Knowledge
Lessons Learned
```

Do not create permanent memory merely because it is convenient.

Define what deserves persistence and why.

---

# 25. DEFINE THE WEB DEPARTMENT'S QUALITY MODEL

Create a quality model covering:

### Correctness
Does it work?

### Maintainability
Can another developer understand and modify it?

### Reliability
Does it continue working under expected conditions?

### Security
Does it avoid introducing unacceptable vulnerabilities?

### Accessibility
Can intended users access it?

### Usability
Can users understand and operate it effectively?

### Performance
Does it perform acceptably?

### Consistency
Does it conform to Marciale-OS conventions?

### Testability
Can its behavior be reliably tested?

### Documentation
Can future agents understand what was changed and why?

---

# 26. DEFINE AGENT BEHAVIOR

All Web agents must:

- inspect before modifying;
- understand existing architecture before introducing new architecture;
- minimize unnecessary changes;
- preserve working functionality;
- avoid speculative rewrites;
- test changes;
- document meaningful changes;
- distinguish facts from assumptions;
- surface uncertainty;
- escalate when outside jurisdiction;
- avoid pretending work was completed;
- avoid claiming tests passed without actually running them;
- avoid claiming sources were inspected when they were inaccessible.

---

# 27. BEGINNER-AWARE OPERATION

Marciale-OS is being developed by a beginner.

The agents must therefore compensate for the user's limited software-engineering experience without treating the user as incapable.

When proposing work:

1. Explain what is being changed.
2. Explain why.
3. Explain risks.
4. Explain prerequisites.
5. Identify what can safely be automated.
6. Identify what requires user approval.
7. Avoid unnecessary jargon or explain it.
8. Prevent the user from accidentally approving destructive architectural decisions.

The system should be **protective without becoming paternalistic**.

---

# 28. DO NOT OVERENGINEER

This is a critical rule.

The Web Department must not introduce:

- unnecessary frameworks;
- unnecessary abstractions;
- unnecessary microservices;
- unnecessary databases;
- unnecessary dependencies;
- unnecessary rewrites;
- unnecessary documentation;
- unnecessary agents.

The correct question is not:

> "What would a massive software company build?"

It is:

> "What is the smallest robust solution appropriate for Marciale-OS's current state and future direction?"

---

# 29. RESEARCH BEFORE ARCHITECTURE

When facing an unfamiliar technical problem:

Do not immediately invent a solution.

Use this reasoning order:

```text
Understand Problem
      ↓
Inspect Existing Marciale-OS
      ↓
Scout Existing Solutions
      ↓
Compare Alternatives
      ↓
Identify Constraints
      ↓
Develop Options
      ↓
Evaluate Tradeoffs
      ↓
Recommend
      ↓
Approve
      ↓
Implement
```

Scout should be invoked when external research would materially improve the decision.

Not every trivial bug requires research.

---

# 30. DELIVERABLES YOU MUST CREATE

After completing your analysis, produce a complete Web Department documentation package.

At minimum:

### `/docs/web/WEB.md`

Department charter.

### `/docs/web/WEB_GOVERNANCE.md`

Authority, boundaries, escalation, conflicts.

### `/docs/web/WEB_WORKFLOW.md`

Development lifecycle and handoffs.

### `/docs/web/WEB_RESEARCH_PROTOCOL.md`

Scout research methodology.

### `/docs/web/WEB_QUALITY_STANDARD.md`

Engineering, QA, accessibility, usability, performance, and documentation standards.

### Agent specifications:

```text
/docs/web/scout/SCOUT.md
/docs/web/frontend/FRONTEND.md
/docs/web/backend/BACKEND.md
/docs/web/fullstack/FULLSTACK.md
/docs/web/ui-ux/UI_UX.md
/docs/web/project-manager/PROJECT_MANAGER.md
/docs/web/qa/QA.md
```

Adapt the exact structure to the existing Marciale-OS documentation conventions.

Do not create duplicate documents if an existing `/docs` document already fulfills the same function. Extend or reference existing documents instead.

---

# 31. CREATE A WEB AGENT REGISTRY

Create a registry showing:

```text
Agent
Mission
Primary Responsibility
Secondary Responsibilities
Authority
Inputs
Outputs
Escalation
Dependencies
Current Status
```

This should allow another AI agent to determine:

> "Which Web agent should handle this?"

without reading every document.

---

# 32. CREATE A TASK ROUTING SYSTEM

Define a routing matrix.

Examples:

### "The button doesn't work."

→ Frontend → QA

### "The API returns 500."

→ Backend → QA

### "The page works but the entire workflow fails."

→ Fullstack

### "The dashboard feels confusing."

→ UI/UX

### "We need to know how another app solves this."

→ Scout

### "We need to organize this feature into milestones."

→ Project Manager

### "The new feature keeps breaking existing functionality."

→ QA → responsible developer → possibly SRE

### "This requires a major architectural change."

→ Web → existing architecture authority

---

# 33. CREATE AN ESCALATION MATRIX

Define severity levels such as:

### LEVEL 0
Minor local issue.

Agent handles independently.

### LEVEL 1
Feature-level problem.

Coordinate with relevant Web agent.

### LEVEL 2
Cross-system problem.

Fullstack/QA/PM coordination.

### LEVEL 3
Security, data integrity, severe reliability, or production-impacting issue.

Escalate to appropriate existing Marciale-OS authority.

### LEVEL 4
Architectural/governance conflict.

Stop and escalate to the appropriate authority.

Use Marciale-OS's existing severity conventions if they already exist.

---

# 34. SCOUT → DECISION TRACEABILITY

For major technical decisions, Scout should help preserve:

```text
Problem
 ↓
Research
 ↓
Alternatives
 ↓
Evidence
 ↓
Decision
 ↓
Implementation
 ↓
Outcome
```

This creates institutional memory.

Future agents should be able to understand:

> "Why did Marciale-OS choose this?"

without repeating the entire research process.

---

# 35. POST-IMPLEMENTATION REVIEW

After significant features:

PM + relevant engineering agent + QA should perform a lightweight review:

- What worked?
- What failed?
- What technical debt was introduced?
- What should be documented?
- What should become a standard?
- What should be avoided next time?
- Did the original research accurately predict the problem?
- Should Scout's research methodology change?
- Should the agent roles change?

Store meaningful lessons where appropriate.

---

# 36. DO NOT CONFUSE DOCUMENTATION WITH PROGRESS

A larger document set does not automatically mean a better engineering system.

Every new document must have a purpose.

Every process must justify its cost.

Every artifact should help at least one of:

- decision quality;
- implementation quality;
- testing quality;
- maintainability;
- traceability;
- knowledge preservation;
- risk reduction.

If a proposed document does none of these, recommend against creating it.

---

# 37. FINAL ARCHITECTURAL OBJECTIVE

The finished Web Department should allow Marciale-OS to operate approximately like this:

```text
USER
 │
 ▼
PROJECT MANAGER
 │
 ├──────────────► SCOUT
 │                    │
 │                    ▼
 │              RESEARCH DOSSIER
 │                    │
 ▼                    ▼
REQUIREMENTS ─────► UI/UX
 │                    │
 │                    ▼
 │              DESIGN SPECIFICATION
 │                    │
 ├──────────────┬─────┴──────────────┐
 ▼              ▼                    ▼
FRONTEND      BACKEND            FULLSTACK
 │              │                    │
 └──────────────┴────────────────────┘
                │
                ▼
               QA
                │
        ┌───────┴────────┐
        │                │
       FAIL             PASS
        │                │
        ▼                ▼
      FIX             DELIVERY
        │
        └────────────► QA
```

But this is not a rigid waterfall.

Agents may collaborate earlier when appropriate.

---

# 38. FINAL RESEARCH REPORT

Before creating or modifying files, produce a comprehensive analysis explaining:

1. What `/docs` currently does.
2. Why Web is needed.
3. Where existing responsibilities overlap.
4. How Web should integrate with existing governance.
5. What real-world roles were studied.
6. What responsibilities were adopted.
7. What responsibilities were intentionally rejected.
8. Why Scout is necessary.
9. Why seven specialized agents are preferable to one Web Developer agent.
10. How the agents interact.
11. How authority is divided.
12. How research flows into development.
13. How QA protects the system.
14. How the department avoids overengineering.
15. What risks the proposed architecture introduces.
16. What future evolution may be necessary.

Clearly distinguish:

- repository-derived facts;
- external research;
- your inference;
- your recommendations.

---

# 39. FINAL IMPLEMENTATION RULE

Do not blindly implement everything proposed in this prompt.

First inspect the existing Marciale-OS repository and determine:

> **What already exists?**

Then:

> **What is missing?**

Then:

> **What should be extended?**

Then:

> **What should be newly created?**

Then:

> **What should explicitly NOT be created?**

The objective is not to maximize the number of documents or agents.

The objective is to create a **coherent, useful, maintainable Web Engineering Department that materially improves Marciale-OS development.**

---

# FINAL SUCCESS CRITERIA

Consider this task successful only if another AI agent can enter `/docs/web/` and answer:

> "Who should handle this?"

> "What is that agent responsible for?"

> "What authority does it have?"

> "What should it produce?"

> "Who should receive its work?"

> "When should it escalate?"

> "What standards should it follow?"

> "What existing Marciale-OS rules constrain it?"

> "What research supports this approach?"

> "How do I move a feature from idea to tested implementation?"

without needing to guess.

The Web Department should become a **specialized engineering organization inside Marciale-OS**, not merely a collection of prompts.

Build it accordingly.