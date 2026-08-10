# 🏛️ TAMA (Academic Knowledge Vault & Mapúa Exam Engine)
> **Official Version:** `TAMA 1.9.0.0.a v`  
> *A local-first, source-grounded academic knowledge vault, Socratic exam simulator, and active recall engine designed for Mapúa BS Architecture 3rd-Year Departmentals & Comprehensive Exit Exams.*

---

## ⚡ Quickstart

### 1. Verify Scaffolding & Vault Integrity
```bash
npm test
```

### 2. How to Use the Knowledge Vault (`vault/`)
* **Active Term Notes:** Drop your 3rd-year lecture slides into `vault/01-CURRENT-COURSES/`.
* **Past 1st & 2nd Year Files:** Drop your foundational subject archives into `vault/02-HISTORY-ARCHIVE/`.
* **Building Laws Reference:** View standardized summaries in `vault/00-CORE-BUILDING-LAWS/`.

---

## 👥 The Academic Faculty Squad (`docs/AGENTS.md`)

When chatting with any AI model (Ollama, Claude, ChatGPT), invoke the specialized faculty role:
* **`@curator`** $\rightarrow$ Turns messy lecture slides into clean Markdown vault files.
* **`@mentor`** $\rightarrow$ Socratic step-by-step tutor for structural moment distribution & MEPFS systems.
* **`@examiner`** $\rightarrow$ Generates 20-question Mapúa Departmental Mock Exams with calculation distractor traps.
* **`@drillmaster`** $\rightarrow$ Runs 5-minute rapid-fire active recall drills on building law numbers & dimensions.
* **`@architect`** $\rightarrow$ Audits logbook mastery and coordinates future TheHUB integration.

---

## 📂 Repository Layout

```text
TAMA/
├── package.json                         # Scripts & testing harness (v1.2.0-a)
├── VERSIONING_GUIDE.md                  # Semantic versioning guide (TAMA 1.2.0.0.a v)
├── README.md                            # Main academic manual
├── vault/                               # The Knowledge Dropbox
│   ├── 00-CORE-BUILDING-LAWS/           # PD 1096 NBCP, RA 9514 Fire Code, BP 344, RA 9266
│   ├── 01-CURRENT-COURSES/              # 3rd-Year Active Term Coursework
│   └── 02-HISTORY-ARCHIVE/              # 1st & 2nd Year Foundation Archive
├── reviewers/                           # AI-Generated Mock Exams & Flashcards
├── plugin/                              # Future TheHUB Bridge Specifications
├── research/directives/roadmap/         # Master Roadmap & Integration Proposal
└── docs/                                # The 11-Document AI Academic Scaffolding Suite
```

---

## 📜 Copy-Paste Study Prompt (The Socratic Cockpit)

```text
Hello AI! Please assume the role of [@mentor | @examiner | @drillmaster | @curator] per `docs/AGENTS.md`.
Here is my repository: https://github.com/tatsufinn-commits/TAMAintegration.git

MY STUDY GOAL:
[Example: "Generate a 20-question Mapúa Departmental Mock Exam on PD 1096 Rule 7 & 8 Setbacks and AMBF calculations"]

MANDATORY RULES:
1. Follow your specific faculty jurisdiction in docs/AGENTS.md.
2. Strictly enforce Law I (Zero-Hallucination Law Citations) and Law III (Distractor Traps) in docs/AI_RULES.md.
3. Present questions first; reveal the answer key with full rationale only after I submit my answers.
4. Append our study results into docs/STUDY_LOGBOOK.md!
```
