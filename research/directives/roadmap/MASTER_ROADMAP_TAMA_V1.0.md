# MASTER ROADMAP — TAMAintegration v1.0
## The Architectural Academic Intelligence Engine & Mapúa Exam System
**Target System:** TAMAintegration (Knowledge Vault + Socratic Exam Trainer)  
**Academic Target:** Mapúa BS Architecture 3rd-Year Departmentals & Comprehensive Exit Exams (ALE Coverage)  
**Author:** Tatsufinn (with Lead Systems Architecture Directives)  
**Status:** Approved Master Roadmap — Ready for Milestone 0 Execution  

---

# I. SCOPE & VISION

TAMAintegration (Tatsufinn + Marciale + Integration) is an offline-first, source-grounded academic intelligence system designed specifically for a 3rd-Year Architecture student at Mapúa University. 

It provides an organized knowledge dropbox (`vault/`), automated Socratic mock exam generation with distractor trap analysis (`reviewers/`), active recall drills for Philippine Building Laws, and an eventual plugin interface to connect study hours, exam countdowns, and XP directly into **TheHUB (Marciale-OS)**.

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
 │                     TAMAintegration MASTER ROADMAP                         │
 └────────────────────────────────────────────────────────────────────────────┘
                                       │
     ┌──────────────────┬──────────────┴──────────────┬──────────────────┐
     ▼                  ▼                             ▼                  ▼
┌─────────────┐  ┌─────────────┐               ┌─────────────┐    ┌─────────────┐
│ MILESTONE 0 │  │ MILESTONE 1 │               │ MILESTONE 2 │    │ MILESTONE 3 │
│  FOUNDATION │  │    VAULT    │               │  REVIEWER   │    │ THEHUB SYNC │
│ (Builds 0-4)│  │ (Builds 5-8)│               │(Builds 9-12)│    │(Builds 13-16│
├─────────────┤  ├─────────────┤               ├─────────────┤    ├─────────────┤
│ • Docs Suite│  │ • Law Vault │               │ • Mock Exams│    │ • ICS Sync  │
│ • Squad Roles│ │ • Active Y3 │               │ • Flashcards│    │ • Study XP  │
│ • Root Setup│  │ • History Y1│               │ • Pre-Mortem│    │ • Brain Mod │
└─────────────┘  └─────────────┘               └─────────────┘    └─────────────┘
```

---

# MILESTONE 0: FOUNDATIONAL SCAFFOLDING & TOOLING (Builds T00 – T04)

## Build T00 — Repository Census & Monorepo Scaffold
* **Status:** Complete
* **Goal:** Establish directory layout (`vault/`, `reviewers/`, `plugin/`, `docs/`, `research/`), root `package.json`, `.gitignore`, and `README.md`.
* **Prerequisites:** Node.js, Python 3.
* **Verification:** `npm test` runs cleanly and directory structure matches architectural plan.

## Build T01 — Academic AI Constitution (`docs/AI_RULES.md`)
* **Status:** Complete
* **Goal:** Codify the 8 Supreme Academic Laws (Zero-Hallucination on Building Laws, Socratic Explanations, Distractor Rationale, Local-First Privacy).
* **Target File:** `docs/AI_RULES.md`.
* **Verification:** AI assistants adopt non-destructive, citation-backed response behavior.

## Build T02 — Virtual Faculty Squad (`docs/AGENTS.md`)
* **Status:** Complete
* **Goal:** Define 4 specialized study personas (`@curator`, `@mentor`, `@examiner`, `@drillmaster`, `@architect`).
* **Target File:** `docs/AGENTS.md`.
* **Verification:** Prompts invoking `@examiner` produce authentic multiple-choice questions with full code citations.

## Build T03 — High-Yield Exam Matrix & Decision Engine (`STRATEGIC_ACADEMIC_FRAMEWORK.md`)
* **Status:** Complete
* **Goal:** Implement the 4-Axis Exam Yield Index (EYI) to prioritize high-yield building laws (Rule 7/8, Fire Code, BP 344) over low-yield trivia.
* **Target File:** `docs/STRATEGIC_ACADEMIC_FRAMEWORK.md`.
* **Verification:** AI scores study topics mathematically and suggests targeted study paths.

## Build T04 — Socratic Prompt Playbook (`docs/PROMPT_PLAYBOOK.md`)
* **Status:** Complete
* **Goal:** Provide ready-to-use copy-paste templates for lecture ingestion, mock exams, 5-minute drills, and structural calculations.
* **Target File:** `docs/PROMPT_PLAYBOOK.md`.
* **Verification:** Prompts yield structured markdown output with zero open-ended hallucinations.

---

# MILESTONE 1: THE KNOWLEDGE VAULT ENGINE (Builds T05 – T08)

## Build T05 — Core Building Laws Vault Ingestion (`vault/00-CORE-BUILDING-LAWS/`)
* **Goal:** Establish clean, standardized Markdown reference files for PD 1096 (NBCP), RA 9514 (Fire Code), BP 344 (Accessibility), and RA 9266 (SPP Docs).
* **Target Files:**
  * `vault/00-CORE-BUILDING-LAWS/PD-1096-NBCP/RULE-7-8-ZONING-AMBF.md`
  * `vault/00-CORE-BUILDING-LAWS/RA-9514-FIRE-CODE/EGRESS-AND-OCCUPANT-LOADS.md`
  * `vault/00-CORE-BUILDING-LAWS/BP-344-ACCESSIBILITY/RAMPS-DOORS-PARKING.md`
* **Verification:** AI can accurately query setback percentages, parking slot dimensions, and stair width formulas without internet search.

## Build T06 — 3rd-Year Active Courses Vault Ingestion (`vault/01-CURRENT-COURSES/`)
* **Goal:** Create drop-off repositories for active term courses: Arch Design 5, Building Tech 3/4, Utilities 3 (MEPFS), Structural Theory, ProfPrac 1.
* **Implementation:** Ingest lecture slides and syllabi into structured markdown summaries with formula callout boxes.

## Build T07 — 1st & 2nd Year Foundation Archive (`vault/02-HISTORY-ARCHIVE/`)
* **Goal:** Organize past subject materials (HOA 1-4, TOA 1-2, Building Tech 1-2, Utilities 1-2, Statics) into high-yield refresher cards for Exit Exam readiness.

## Build T08 — Ingestion Validation & Dead-Link Verification
* **Goal:** Automated Node script that verifies all internal markdown links, law citations, and formula tables in `vault/`.

---

# MILESTONE 2: THE SOCRATIC REVIEWER & EXAM GENERATOR (Builds T09 – T12)

## Build T09 — Mapúa Departmental Mock Exam Generator
* **Goal:** Automated generator that produces 20-question situational mock exams tailored to Mapúa's departmental exam format.
* **Requirements:** Each question must contain:
  1. Situational Project Brief (Lot type, zoning, RROW, building use).
  2. 4 Multiple-Choice Options with realistic calculation distractor traps.
  3. Complete Rationale & Law Citation for the correct answer.

## Build T10 — Active Recall & Flashcard Generator (Anki / Markdown)
* **Goal:** Generates rapid-fire active recall flashcard decks for quick memorization drilling (BP 344 clearances, NBCP parking ratios, Fire Code travel limits).

## Build T11 — Structural Calculation Step-by-Step Walkthroughs
* **Goal:** Interactive Socratic solver for moment distribution, shear/moment diagrams, and RCD beam dimensioning.

## Build T12 — Pre-Exam Weak-Spot Diagnostic Engine
* **Goal:** Analyzes scores in `docs/STUDY_LOGBOOK.md` to identify weak subject areas and generate targeted 3-day cram schedules.

---

# MILESTONE 3: THEHUB PLUGIN INTEGRATION (Builds T13 – T16)

## Build T13 — Mapúa Blackboard ICS Calendar Bridge
* **Goal:** Connects Mapúa Blackboard `.ics` feed into TheHUB, automatically marking departmental exam dates and triggering study countdowns.

## Build T14 — Study-to-Companion XP Reward Adapter
* **Goal:** Completing a 20-question mock exam in `TAMAintegration` dispatches a `hub.activity` event to TheHUB, awarding +200 XP and rare loot to your Idle Hero companion!

## Build T15 — Marciale Brain Profile: `mapua_architect`
* **Goal:** Adds a dedicated Mapúa Architecture Mentor Brain Profile to Marciale AI in TheHUB's `modules/00-utils-config.js`.

## Build T16 — End-to-End Academic Ecosystem Release
* **Goal:** Unified pre-commit test runner validating both TAMA knowledge vaults and TheHUB sync endpoints.
