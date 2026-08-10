# MASTER ROADMAP — TAMA v1.0
## The Architectural Academic Intelligence Engine & Mapúa Exam System
**Target System:** TAMA (Knowledge Vault + Socratic Exam Trainer)  
**Academic Target:** Mapúa BS Architecture 3rd-Year Departmentals & Comprehensive Exit Exams (ALE Coverage)  
**Author:** Tatsufinn (with Lead Systems Architecture Directives)  
**Current Production Version:** `TAMA 1.9.0.0.a v`  
**Status:** Approved Master Roadmap  

---

# I. SCOPE & VISION

TAMA (Tatsufinn + Marciale + Integration) is an offline-first, source-grounded academic intelligence system designed specifically for a 3rd-Year Architecture student at Mapúa University. 

It provides a 7-cluster organized knowledge vault (`vault/`), automated Socratic mock exam generation with distractor trap analysis (`reviewers/`), interactive terminal study runners (`study.js`, `solve.js`, `grade-exam.js`, `query-code.js`), and an eventual plugin interface to connect study hours, exam countdowns, and XP directly into **TheHUB (Marciale-OS)**.

### Master Build Versioning Convention:
```text
TAMA [Milestone].[Build].[Iteration].[Stage] v
       │           │       │           └── Stage (a = alpha, b = beta, r = release)
       │           │       └────────────── Iteration (sub-build refinements)
       │           └────────────────────── Build Number (discrete deliverable)
       └────────────────────────────────── Milestone (Major System Phase)
```

---

# II. MASTER BUILD PHASES

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │                        TAMA MASTER ROADMAP PHASES                          │
 └────────────────────────────────────────────────────────────────────────────┘
                                       │
     ┌──────────────────┬──────────────┼──────────────┬──────────────────┐
     ▼                  ▼              ▼              ▼                  ▼
┌─────────────┐  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐  ┌─────────────┐
│ MILESTONE 0 │  │ MILESTONE 1 │ │ MILESTONE 2 │ │ MILESTONE 3 │  │ MILESTONE 7 │
│ Foundation  │  │ Vault Engine│ │ Socratic    │ │ TheHUB Sync │  │ 7-Cluster   │
│ (Builds 0-4)│  │ (Builds 5-8)│ │ (Builds 9-12│ │(Builds 13-16│  │ Vault Rehaul│
├─────────────┤  ├─────────────┤ ├─────────────┤ ├─────────────┤  ├─────────────┤
│• 11 Docs    │  │• Core Laws  │ │• Dept Exams │ │• Mapúa ICS  │  │• 7 Clusters │
│• 5 Personas │  │• Active Y3  │ │• Flashcards │ │• Study XP   │  │• Drop Box   │
│• 9 Laws     │  │• History Y1 │ │• Diagnostic │ │• Brain Mod  │  │• Course Map │
└─────────────┘  └─────────────┘ └─────────────┘ └─────────────┘  └─────────────┘
```

---

# MILESTONES BREAKDOWN (BUILDS T00 – T32)

### Milestone 0: Foundational Scaffolding & Tooling (Builds T00 – T04) ✅
* **Build T00:** Monorepo scaffold & package manifest.
* **Build T01:** Academic AI Constitution (`AI_RULES.md` — 9 Supreme Laws).
* **Build T02:** Virtual Faculty Squad (`AGENTS.md` — `@curator`, `@mentor`, `@examiner`, `@drillmaster`, `@architect`).
* **Build T03:** Strategic Academic Framework & Exam Yield Index (`STRATEGIC_ACADEMIC_FRAMEWORK.md`).
* **Build T04:** Socratic Prompt Playbook (`PROMPT_PLAYBOOK.md` — 9 Scenarios).

### Milestone 1: Knowledge Vault Engine Foundation (Builds T05 – T08) ✅
* **Build T05:** Core Building Laws Vault Ingestion (PD 1096, RA 9514, BP 344, RA 9266).
* **Build T06:** 3rd-Year Active Courses Ingestion (BT3/4, Utilities 3, Structures, ProfPrac 1, Design 5).
* **Build T07:** 1st & 2nd Year Foundation Archive (HOA 1-4, TOA Ching, BT 1-2, Utilities 1-2, Statics).
* **Build T08:** Ingestion Validation & Link Verification.

### Milestone 2: Socratic Reviewers & Multi-Mode CLI (Builds T09 – T12 & T17) ✅
* **Build T09:** Mapúa Departmental Mock Exam Sets (Sets 01, 03, 04, 05).
* **Build T10:** Active Recall Flashcard Decks (BP 344, Fire Code, HOA/TOA, Structures).
* **Build T11:** 1-Page Formula Cheatsheets (AMBF, TGFA, Beam Moments, Acoustics).
* **Build T12:** Pre-Exam Weak-Spot Diagnostic Engine (`EXAM_WEAK_SPOT_ANALYZER.md`).
* **Build T17:** Multi-Mode CLI Study Runner (`study.js` — `npm run drill`).

### Milestone 3: TheHUB Plugin Integration Staging (Builds T13 – T16) ✅
* **Build T13:** Mapúa Blackboard ICS Calendar Countdown Bridge (`plugin/mapua-calendar-bridge.js`).
* **Build T14:** Study-to-Companion XP Reward Adapter (`plugin/study-momentum-bridge.js`).
* **Build T15:** Marciale Brain Profile: `mapua_architect` (`plugin/mapua-architect-brain.js`).
* **Build T16:** End-to-End Academic Ecosystem Release.

### Milestone 4: Mobile Anki Exporter & 50-Item Simulation (Builds T18 – T20) ✅
* **Build T18:** Anki / Quizlet TSV Exporter (`export-anki.js` — `npm run anki`).
* **Build T19:** 50-Item Comprehensive Mapúa Exit Exam Master Simulation (`reviewers/mock-exams/`).
* **Build T20:** Automated Terminal Exam Grader (`grade-exam.js` — `npm run grade`).

### Milestone 5: Math Calculation Wizard & Laws Matrix (Builds T21 – T24) ✅
* **Build T21:** Interactive Architectural Math Solver Wizard (`solve.js` — `npm run solve`).
* **Build T22:** Philippine Building Laws Master Comparative Matrix (`reviewers/formula-cheatsheets/`).
* **Build T23:** Socratic Custom PDF Question Generator Engine (`reviewers/mock-exams/`).
* **Build T24:** Milestone 5 Verification & Release.

### Milestone 6: Visual Flashcard Studio & Rapid Code Search (Builds T25 – T28) ✅
* **Build T25:** Standalone Visual Flashcard Web-App (`reviewers/flashcard-app/index.html`).
* **Build T26:** Mapúa Major Architectural Plate Defense Checklist (`reviewers/design-studio/`).
* **Build T27:** Rapid Building Code Quick-Search CLI (`query-code.js` — `npm run code`).
* **Build T28:** Milestone 6 Verification & Release.

---

### Milestone 7: The 7-Cluster Mapúa Architectural Knowledge Vault Rehaul (Builds T29 – T32) ✅
* **Build T29:** Reorganized `vault/` into the official 7-Cluster Mapúa Architecture Knowledge Spine:
  * `00-INCOMING-DROP-BOX/` (Raw lecture slide ingestion box)
  * `01-BUILDING-LAWS-AND-PROFPRAC/` (PD 1096, RA 9514, BP 344, RA 9266, UAP 301)
  * `02-DESIGN-STUDIO-SPINE/` (AD1 through AD10 / Space Programming & Site Planning)
  * `03-BUILDING-TECHNOLOGY-SERIES/` (BT1 Timber to BT5 Curtain Walls & Prestressed Concrete)
  * `04-BUILDING-UTILITIES-SERIES/` (BU1 Plumbing to BU4 HVAC & Acoustics)
  * `05-STRUCTURAL-STUDIES-SERIES/` (STRUC1 Statics to STRUC4 RCD Singly Reinforced Beams)
  * `06-HISTORY-AND-THEORY-SERIES/` (HOA1 Ancient to HOA4 Modernism & TOA Ching Principles)
  * `07-PLANNING-AND-ENVIRONMENTAL/` (PLAN1 Site Planning, Topography, Microclimates & BP 220 / PD 957 Housing)
* **Build T30:** Integrated `courses/` research suite (`MAPUA_ARCHITECTURE_CURRICULUM.md`, `COURSE_MASTER_INDEX.md`, `ARCHITECTURE_KNOWLEDGE_MAP.md`, `REVIEWER_KNOWLEDGE_BASE.md`) with explicit provenance chains.
* **Build T31:** Updated test harness verifying all 7 clusters and 20+ reference files.
* **Build T32:** Release of **`TAMA 1.9.0.0.a v`**.
