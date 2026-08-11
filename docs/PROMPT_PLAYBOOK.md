# 📖 TAMA MASTER ACADEMIC PROMPT PLAYBOOK (`PROMPT_PLAYBOOK.md`)
## The Complete Library of Socratic Prompts for Mapúa Architecture Exams
**Target System:** TAMAintegration (Mapúa BS Architecture Academic Hub)  
**How to Use:** Copy the box matching your study goal, paste it into any AI chat, and let the virtual faculty guide you!  

---

# 📑 ACADEMIC SCENARIO SELECTOR

| Scenario | Study Goal | Faculty Persona |
|---|---|:---:|
| [Scenario 1: Lecture Ingestion & Vault Clean](#scenario-1-lecture-ingestion--vault-clean) | Turn messy lecture slides/notes into clean reference notes. | `@curator` |
| [Scenario 2: Mapúa Departmental Mock Exam](#scenario-2-mapúa-departmental-mock-exam) | Generate a 20-question situational exam with distractor traps. | `@examiner` |
| [Scenario 3: 5-Minute Rapid-Fire Law Drill](#scenario-3-5-minute-rapid-fire-law-drill) | Active recall drill on building dimensions, ramps, and parking. | `@drillmaster` |
| [Scenario 4: Socratic Structural Calculation](#scenario-4-socratic-structural-calculation) | Step-by-step walkthrough for moment distribution & beam sizing. | `@mentor` |
| [Scenario 5: Pre-Exam Weak-Spot Diagnostic](#scenario-5-pre-exam-weak-spot-diagnostic) | Audit logbook scores and generate a 3-day high-yield cram plan. | `@architect` |
| [Scenario 6: Flashcard Generator (Anki/Markdown)](#scenario-6-flashcard-generator-ankimarkdown) | Generate rapid Q&A cards from a specific lecture topic. | `@drillmaster` |

---

# 📋 THE MASTER PROMPT TEMPLATES

---

### Scenario 1: Lecture Ingestion & Vault Clean
* **Goal:** Process raw lecture slides or unorganized PDF text into a structured reference file in `vault/`.

```text
Hello AI! Please assume the role of [@curator (Knowledge Ingestor)] per `docs/AGENTS.md`.
Here is my repository: https://github.com/tatsufinn-commits/TAMAintegration.git

MODE: VAULT KNOWLEDGE INGESTION

LECTURE MATERIAL TO PROCESS:
- Course: [e.g. Building Tech 3 — Pre-stressed Concrete]
- Raw Text / Lecture Notes: [Paste your lecture slides or notes here]

YOUR TASK:
1. Extract key concepts, structural specifications, material standards, and formulas into clean Markdown.
2. Cross-reference all claims against official building codes (NBCP, ACI 318, NSCP).
3. Provide a 1-page High-Yield Summary Box at the top with critical exam formulas.
4. Save/format the output so I can place it in `vault/01-CURRENT-COURSES/[COURSE_NAME]/`.
```

---

### Scenario 2: Mapúa Departmental Mock Exam
* **Goal:** Practice on authentic situational multiple-choice questions with full distractor trap explanations.

```text
Hello AI! Please assume the role of [@examiner (Mapúa Exam Creator)] per `docs/AGENTS.md`.
Here is my repository: https://github.com/tatsufinn-commits/TAMAintegration.git

MODE: MAPÚA DEPARTMENTAL MOCK EXAM GENERATION

EXAM SPECIFICATIONS:
- Subject Area: [e.g. PD 1096 NBCP Rule 7 & 8 Zoning, AMBF, TGFA, and Parking]
- Question Count: [e.g. 15 or 20 questions]
- Format: Situational Design Problems (Lot dimensions, zoning classifications, RROW widths).

MANDATORY RULES:
1. Apply Law I (Strict Law Citations) and Law III (Distractor Traps) from `docs/AI_RULES.md`.
2. Every option (A, B, C, D) must have realistic calculation distractor traps.
3. Present the questions FIRST. Do not reveal the answer key until I submit my answers!
4. After I submit my answers, grade my submission, explain why the wrong choices are traps, and log my score in `docs/STUDY_LOGBOOK.md`.
```

---

### Scenario 3: 5-Minute Rapid-Fire Law Drill
* **Goal:** Memorize critical building dimensions, occupant load factors, and accessibility clearances.

```text
Hello AI! Please assume the role of [@drillmaster (Active Recall Specialist)] per `docs/AGENTS.md`.
Here is my repository: https://github.com/tatsufinn-commits/TAMAintegration.git

MODE: RAPID-FIRE ACTIVE RECALL DRILL

TOPIC:
- Domain: [e.g. BP 344 Accessibility Law & RA 9514 Fire Code Metrics]
- Count: 10 Rapid-Fire Questions (Dimensions, ratios, occupant load factors).

INSTRUCTIONS:
1. Ask me ONE question at a time.
2. Wait for my answer before moving to the next question.
3. If I answer correctly, celebrate and immediately fire the next question.
4. If I answer incorrectly, cite the exact law section and explain the correct standard.
5. At the end of 10 questions, log my mastery score in `docs/STUDY_LOGBOOK.md`.
```

---

### Scenario 4: Socratic Structural Calculation
* **Goal:** Master complex structural formulas without getting stuck.

```text
Hello AI! Please assume the role of [@mentor (Socratic Tutor)] per `docs/AGENTS.md`.
Here is my repository: https://github.com/tatsufinn-commits/TAMAintegration.git

MODE: SOCRATIC STRUCTURAL PROBLEM SOLVING

PROBLEM TO SOLVE:
- Problem Type: [e.g. Three-Moment Equation for Continuous Beam OR RCD Singly Reinforced Beam Sizing]
- Given Data: [Paste span lengths, uniform dead/live loads, f'c concrete strength, fy steel yield strength]

INSTRUCTIONS:
1. Do NOT just solve the entire problem in one big block of text.
2. Guide me step-by-step: ask me to calculate Step 1 (e.g. factored ultimate load $W_u = 1.2D + 1.6L$).
3. Check my calculation, then guide me through Step 2 (maximum bending moment $M_u$), Step 3, and Step 4.
4. Explain the physical engineering meaning of the numbers at each stage!
```

---

### Scenario 5: Pre-Exam Weak-Spot Diagnostic
* **Goal:** Formulate a high-yield cram plan before departmental exam week.

```text
Hello AI! Please assume the role of [@architect] per `docs/AGENTS.md`.
Here is my repository: https://github.com/tatsufinn-commits/TAMAintegration.git

MODE: PRE-EXAM WEAK-SPOT AUDIT & CRAM STRATEGY

MY UPCOMING EXAM:
- Exam Name: [e.g. 3rd-Year 2nd Term Comprehensive Departmentals]
- Date of Exam: [e.g. In 5 days]

YOUR TASK:
1. Inspect `docs/STUDY_LOGBOOK.md` and review my recent mock exam scores and recorded weak spots.
2. Consult `docs/STRATEGIC_ACADEMIC_FRAMEWORK.md` and calculate the highest-yield topics for this exam.
3. Formulate a 3-Day Targeted Study Schedule prioritizing high-yield building laws and structural mechanics.
4. List the exact 5 calculation traps I am most likely to encounter on the exam!
```
