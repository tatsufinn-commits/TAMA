# 📜 TAMA LIVING STUDY LOGBOOK (`STUDY_LOGBOOK.md`)
## The Permanent Academic Ledger, Exam History & Mastery Tracker
**Target System:** TAMA (Mapúa BS Architecture Academic Hub)  
**Standard:** Every single study session, mock exam score, and mastered topic MUST be appended here.  
**Audience:** The Student (Tatsufinn), All Faculty AI Agents, and Future Study Sessions  

---

# 1. HOW TO USE THIS LOGBOOK

When you start a study session:
1. **Scroll to the bottom of this file** to see your recent mock exam scores and identified weak spots.
2. The AI will prioritize drilling your weakest areas before moving to new topics.
3. At the end of the session, the AI will append a structured entry using the template in Section 3.

---

# 2. ACADEMIC PROGRESS & MASTERY LEDGER

---

### [INITIALIZED] Milestone 0: Foundational Scaffolding & Academic Setup (Builds T00 – T04)
* **Date:** 2026-08-10
* **Faculty in Charge:** `@architect`
* **Changes Delivered:**
  * Created `vault/` structured dropboxes (Core Building Laws, Current 3rd-Year Courses, History Archive).
  * Established 11-document Academic Scaffolding in `docs/` (`AI_RULES.md`, `AGENTS.md`, `PROMPT_PLAYBOOK.md`, `VERSIONING_GUIDE.md`, etc.).
  * Created `research/directives/roadmap/MASTER_ROADMAP_TAMA_V1.0.md` and Integration Proposal.
* **Test Status:** `npm test` verified 100% green.

---

### [COMPLETED] Milestone 1: Knowledge Vault Engine Populated (Builds T05 – T08)
* **Date:** 2026-08-10
* **Faculty in Charge:** `@curator` / `@architect`
* **Changes Delivered:**
  * **Build T05 (Core Building Laws Vault):** Populated PD 1096 NBCP, RA 9514, BP 344, and RA 9266.
  * **Build T06 (3rd-Year Active Courses Vault):** Populated Building Tech 3/4, Utilities 3, Structural Theory, ProfPrac 1, and Arch Design 5.
  * **Build T07 (1st/2nd Year History Archive):** Populated History of Architecture, Theory of Architecture, Building Tech 1-2, Utilities 1-2, and Statics.
  * **Build T08 (Vault Link Verification):** Created `test-scaffold.js` verifying all references (>300 bytes) with 0 errors.
* **Test Status:** `npm test` passed with 100% green checkmarks.

---

### [COMPLETED] Milestone 2: Socratic Reviewers & Multi-Mode CLI (Builds T09 – T12 & T17)
* **Date:** 2026-08-10
* **Faculty in Charge:** `@examiner` / `@drillmaster`
* **Changes Delivered:**
  * **Build T09 (Departmental Sets 01, 03, 04, 05):** Created 40 situational design problems with full distractor trap analysis.
  * **Build T10 (Active Recall Flashcards):** Created 4 active recall decks covering BP 344, Fire Code, HOA/TOA, and Structures/MEPFS.
  * **Build T11 (Formula Cheatsheet):** Created 1-page formula reference for zoning, RCD beams, and acoustics.
  * **Build T12 (Pre-Exam Diagnostic):** Created `EXAM_WEAK_SPOT_ANALYZER.md` 3-day cram schedule.
  * **Build T17 (Multi-Mode CLI Study Runner):** Upgraded `study.js` with 5 interactive study modes (`npm run drill`).
* **Current Production State:** Version `TAMA 1.5.0.0.a v` operational.

---

### [COMPLETED] Milestone 3: TheHUB Plugin Integration Staging (Builds T13 – T16)
* **Date:** 2026-08-10
* **Faculty in Charge:** `@architect`
* **Changes Delivered:**
  * Created `plugin/mapua-calendar-bridge.js` (Blackboard ICS exam countdown).
  * Created `plugin/study-momentum-bridge.js` (Dispatches `hub.activity` +200 XP rewards to Companion RPG).
  * Created `plugin/mapua-architect-brain.js` (Marciale `mapua_architect` Socratic Brain Profile).
* **Test Status:** `npm test` verified 100% green.

---

### [COMPLETED] Milestone 4: Mobile Anki Exporter & Automated Exam Grader (Builds T18 – T20)
* **Date:** 2026-08-10
* **Faculty in Charge:** `@drillmaster` / `@examiner` / `@architect`
* **Changes Delivered:**
  * **Build T18 (Anki/Quizlet Exporter):** Created `export-anki.js` (`npm run anki`) generating `anki_import_deck.tsv` for mobile phone flashcard study!
  * **Build T19 (50-Item Exit Exam Master Simulation):** Created `reviewers/mock-exams/MAPUA_EXIT_EXAM_50_ITEM_MASTER_SIMULATION.md` and `.json` covering the full 3-Part PRC ALE blueprint.
  * **Build T20 (Automated Terminal Exam Grader):** Created `grade-exam.js` (`npm run grade`) that interactively prompts questions, grades answers, explains traps, and auto-logs scores into this file!
* **Current Production State:** Version `TAMA 1.6.0.0.a v` operational.

---

### [COMPLETED] Milestone 5: Math Calculation Wizard & Building Laws Matrix (Builds T21 – T24)
* **Date:** 2026-08-10
* **Faculty in Charge:** `@mentor` / `@examiner` / `@architect`
* **Changes Delivered:**
  * **Build T21 (Architectural Math Solver):** Created `solve.js` (`npm run solve`) solving AMBF Table VII.1 zoning, NSCP beam moments ($wL^2/8$), RCD Whitney stress blocks, and Sabine $RT_{60}$ acoustics with full step-by-step math!
  * **Build T22 (Building Laws Comparison Matrix):** Created `reviewers/formula-cheatsheets/PHILIPPINE_BUILDING_LAWS_MASTER_MATRIX.md` side-by-side comparing NBCP vs Fire Code vs BP 344.
  * **Build T23 (Socratic PDF Exam Generator):** Created `reviewers/mock-exams/SOCRATIC_EXAM_GENERATOR_TEMPLATE.md` for converting raw professor slides into 10-item mock exams.
* **Current Production State:** Version `TAMA 1.7.0.0.a v` operational.

---

### [COMPLETED] Milestone 6: Visual Flashcard Studio & Rapid Code Search (Builds T25 – T28)
* **Date:** 2026-08-10
* **Faculty in Charge:** `@drillmaster` / `@curator` / `@architect`
* **Changes Delivered:**
  * **Build T25 (Visual Flashcard Web-App):** Created `reviewers/flashcard-app/index.html` offering an interactive dark-mode flashcard flipper with Leitner spaced repetition and deck filtering.
  * **Build T26 (Major Plate Defense Checklist):** Created `reviewers/design-studio/MAJOR_PLATE_DEFENSE_CHECKLIST.md` with complete jury defense rubrics for 3rd-Year Design plates.
  * **Build T27 (Rapid Code Search CLI):** Created `query-code.js` (`npm run code [keyword]`) searching building laws, dimensions, and citations in $<0.1\text{s}$.
* **Current Production State:** Version `TAMA 1.8.0.0.a v` operational.

---

### [COMPLETED] Milestone 7: The 7-Cluster Mapúa Knowledge Vault Rehaul (Builds T29 – T32)
* **Date:** 2026-08-10
* **Faculty in Charge:** `@curator` / `@architect`
* **Changes Delivered:**
  * **Build T29 (7-Cluster Reorganization):** Structured `vault/` into:
    * `00-INCOMING-DROP-BOX/` (Raw lecture slide drop-off)
    * `01-BUILDING-LAWS-AND-PROFPRAC/` (PD 1096, RA 9514, BP 344, RA 9266, UAP 301)
    * `02-DESIGN-STUDIO-SPINE/` (AD1 to AD10 / Space Planning & Site Layouts)
    * `03-BUILDING-TECHNOLOGY-SERIES/` (BT1 Timber to BT5 Curtain Walls & Post-Tensioning)
    * `04-BUILDING-UTILITIES-SERIES/` (BU1 Plumbing to BU4 HVAC & Acoustics)
    * `05-STRUCTURAL-STUDIES-SERIES/` (STRUC1 Statics to STRUC4 RCD Singly Reinforced Beams)
    * `06-HISTORY-AND-THEORY-SERIES/` (HOA1 Ancient to HOA4 Modernism & TOA Ching Principles)
    * `07-PLANNING-AND-ENVIRONMENTAL/` (PLAN1 Site Planning, Microclimates & BP 220 / PD 957 Housing)
  * **Build T30 (Curriculum Intelligence Integration):** Integrated `courses/` research suite mapping Mapúa ARIDBE trimester course sequences and Program Outcomes A–M.
* **Current Production State:** Version `TAMA 1.9.0.0.a v` fully operational.

---

### [KNOWLEDGE INGESTION] Session K1: TAMA Initial Corpus Expansion (Phase A — Core Laws)
* **Date:** 2026-08-10
* **Faculty in Charge:** `@curator` / `@architect` (TAMA Knowledge Acquisition Agent)
* **Topic Covered:** PD 1096 (statute), RA 9266, BP 344 + IRR, RA 9514, RA 10912, CHED CMO 61 s. 2017
* **Activity Executed:** Vault Ingestion — 6 RAW public-domain law texts + 7 curated provenance-tagged files + source registry + vault index + coverage matrix (see `research/ACQUISITION_LOG.md` and `research/TAMA_KNOWLEDGE_ACQUISITION_REPORT.md`)
* **Score / Mastery Level:** N/A (ingestion pass) — `npm test` 100% GREEN after additions
* **Identified Weak Spots / Trap Mistakes:**
  * Statute vs IRR numbering confusion is the #1 trap: PD 1096 (21 chapters, Sec 101–2102) vs 2005 IRR (Rules I–XIX); RA 9514 (17 sections) vs Fire Code IRR (Rule 10 egress/occupant loads). Verified structure files now document both.
  * BP 344 accessible parking slot = **3.70 m minimum width** (IRR, verified); door clear width 0.80 m; curb ramp gradient ≤ 1:12 (verified quotes).
  * RA 9266 ALE rating: 70% weighted average, no subject below 50% (Sec. 15, verbatim).
* **Next Recommended Study Target:** Acquire PD 1096 IRR 2005 + Fire Code IRR (official sources) to unlock Rules I–XIX numbers; then Phase B–I OER pass per coverage matrix.

### [KNOWLEDGE INGESTION] Session K2: 00-BOOKS Library Pass
* **Date:** 2026-08-10
* **Faculty in Charge:** `@curator` (TAMA Knowledge Acquisition Agent)
* **Topic Covered:** Architecture book library — public-domain classics + commercial textbook registry
* **Activity Executed:** Vault Ingestion — created `vault/00-BOOKS/`; downloaded 4 legal public-domain PDFs (Vitruvius *Ten Books on Architecture*, Owen Jones *Grammar of Ornament*, Ruskin *Seven Lamps of Architecture*, Ware *American Vignola*) from Internet Archive; registry for commercial textbooks (Max Fajardo series, Ching, Neufert, Allen & Iano) with legal access paths only; next-targets plan added (`research/NEXT_ACQUISITION_TARGETS.md`)
* **Score / Mastery Level:** N/A (ingestion pass) — PDFs verified valid; `npm test` still 100% GREEN
* **Identified Weak Spots / Trap Mistakes:**
  * Commercial textbooks (e.g., Max Fajardo's *Simplified Methods on Building Construction*) are **copyrighted** — pirated PDFs are never stored in TAMA (Rule 4). Use the registry's legal paths instead.
  * Public-domain vs lending-restricted scans on Internet Archive: only items with `access-restricted-item: None` and non-encrypted PDFs are downloadable — verified before each acquisition.
* **Next Recommended Study Target:** PD 1096 IRR 2005 + Fire Code IRR (official sources); then public-domain classics pass 2 (Palladio, Alberti, Stones of Venice) per NEXT_ACQUISITION_TARGETS.md.

### [KNOWLEDGE INGESTION] Session K3: 00-BOOKS → Links-Only Conversion (compactness)
* **Date:** 2026-08-10
* **Faculty in Charge:** `@curator` / `@architect`
* **Topic Covered:** Book library consolidation for repo size
* **Activity Executed:** Replaced 4 stored book PDFs (~103 MB) with `vault/00-BOOKS/BOOKS-ONLINE-ACCESS.md` (11 verified free/legal links: Vitruvius, Owen Jones, Ruskin ×2, Ware ×2, Palladio, Gibbs, Stones of Venice, Gutenberg). Deleted PDF folder + old classics file. Workspace: 105 MB → 2.3 MB.
* **Score / Mastery Level:** N/A — `npm test` 100% GREEN; git history clean & compact (no PDF blobs)
* **Identified Weak Spots / Trap Mistakes:**
  * Large binary files in a git repo threaten the workspace snapshot cap — books must stay links-only, never binaries.
  * Archived scanned books are re-downloadable anytime from their item pages; links preserve full provenance.
* **Next Recommended Study Target:** PD 1096 IRR 2005 + Fire Code IRR (official sources); then per-topic OER pass per coverage matrix.

### [KNOWLEDGE INGESTION] Session K4: Target 1 (PD 1096 IRR) + Housing Laws + Books
* **Date:** 2026-08-10
* **Faculty in Charge:** `@curator` / `@architect`
* **Topic Covered:** 2005 Revised IRR of PD 1096 (official DPWH text, 432 pp); PD 957 & BP 220 housing laws; +5 book links
* **Activity Executed:** Vault Ingestion — acquired official IRR (RAW 905 KB text with page markers) + curated verified Table VIII.1 (PSO/ISA/USA/TOSL, footnotes e/f, formulas, abutments, parking 2.50×5.00 m); PD 957 + BP 220 RAW + summary; expanded BOOKS-ONLINE-ACCESS.md (Le Corbusier, Alberti, Fletcher)
* **Score / Mastery Level:** N/A — `npm test` 100% GREEN; workspace ~3.3 MB
* **Identified Weak Spots / Trap Mistakes:**
  * The IRR (not the statute) holds the examinable numbers — always cite `[PD 1096 IRR 2005 Table VIII.1]`, not `[PD 1096 Sec. 803]`, for PSO values.
  * Table footnote trap: PSO differs **with vs without firewall** (e.g., Com-3: 80% vs 90%) — the classic distractor.
  * Formula trap: PSO + ISA = MACA; PSO + TOSL = TLA — students mix ISA/TOSL.
  * BP 220 (economic/socialized) ≠ PD 957 (regular subdivision/condo) — different standards.
* **Next Recommended Study Target:** Fire Code IRR (retry official BFP/DILG); then environmental laws (RA 8749/9275/9003, PD 1586, RA 10587).

# 3. TEMPLATE FOR FUTURE STUDY SESSIONS (APPEND AT END OF CHAT)

```text
### [STUDY SESSION] Session [NUMBER]: [SUBJECT_NAME]
* **Date:** [YYYY-MM-DD]
* **Faculty in Charge:** [@mentor | @examiner | @drillmaster | @curator]
* **Topic Covered:** [e.g. Building Technology 3 — Prestressed Concrete Tendons & Grouting]
* **Activity Executed:** [Mock Exam (20 items) | 5-Minute Active Recall Drill | Vault Ingestion]
* **Score / Mastery Level:** [e.g. 17 / 20 (85%) | 12/12 Flashcards Mastered]
* **Identified Weak Spots / Trap Mistakes:**
  * [Weak spot 1: e.g. Confused post-tensioning elongation formula with pre-tensioning]
  * [Weak spot 2: e.g. Forgot minimum concrete cover for exposed coastal footings (75mm)]
* **Next Recommended Study Target:** [e.g. 15-question drill on PD 1096 Rule VII Table VII.1 AMBF calculations]
```
### [KNOWLEDGE INGESTION] Session K5: Environmental Laws + IRR Index + Theory Notes
* **Date:** 2026-08-10
* **Faculty in Charge:** `@curator`
* **Topic Covered:** RA 8749/9275/9003, PD 1586, RA 10587, RA 10754 (full texts + summary); PD 1096 IRR Rules I–XXI index + referral codes; public-domain theory notes (TOA/HOA)
* **Activity Executed:** Vault Ingestion — 6 law RAW texts (~300 KB) + ENVIRONMENTAL-LAWS-SUMMARY.md + PD-1096-IRR-RULES-INDEX.md + PUBLIC-DOMAIN-THEORY-NOTES.md; Fire Code IRR & CMO 61 recorded in SOURCE-REGISTRY (sandbox blocked downloads)
* **Score / Mastery Level:** N/A — `npm test` GREEN; workspace ~3.8 MB
* **Identified Weak Spots / Trap Mistakes:**
  * ECC (PD 1586) vs building permit (PD 1096) are separate clearances — classic conflation.
  * RA 9003 MRF requirement vs zoning waste provisions; RA 9275 STP vs septic — sanitary design distinctions.
  * Referral codes concept: NBCP numbers often come from NSCP/PEC/PMC/Plumbing — know which code governs which number.
* **Next Recommended Study Target:** RA 7160 (LGC) planning provisions summary; Fire Code IRR curation once downloadable from user's network.

# 3. TEMPLATE FOR FUTURE STUDY SESSIONS (APPEND AT END OF CHAT)
