# REVIEWER_KNOWLEDGE_BASE — Exam-Relevant Knowledge & Reviewer Construction Framework

**Compiled:** 2026-08-10 | **Purpose:** the structured knowledge foundation for a future reviewer-generation AI. **This is not a reviewer** — it is the evidence-based map of what reviewer content can draw on, and how to build it without fabrication.

---

## 1. Evidence posture for reviewer generation

| Knowledge source | How it may be used in reviewers |
|---|---|
| Official program outcomes A–M (HIGH) | Competency statements; "what the program requires" framing |
| Official PEOs (HIGH) | Career/objective framing per course |
| Observed course titles/codes (MEDIUM) | Course identity; naming |
| Observed student-document content (MEDIUM) | Topic clusters actually covered at Mapúa (e.g., HoA1 periods; TOA content; AD2 topics; BU1 water systems) |
| CHED template course descriptions & prereqs (HIGH as template; not Mapúa-specific) | Topic scaffolding for unobserved courses — **must be labeled "national standard content"** |
| RA 9266 / codes (HIGH where verified) | Law/ethics questions |
| Standard professional knowledge | Conceptual/definitional content — label as standard, not Mapúa-specific |
| Student-experience reports (Reddit) | Only for study-strategy context, never as content claims |

**Hard rule:** reviewer items must not claim to be "Mapúa exam questions" (no evidence); items drawn from the CHED template must be labeled as national-standard material; items that are standard professional knowledge must be labeled as such.

## 2. Question-type mapping per course cluster (directive §Reviewer-Oriented Extraction)

| Cluster | Strong question types | Weak/avoid |
|---|---|---|
| Design studios (AR141…AR200-2) | Concept questions (parti, programming); case scenarios; drawing/technical exercises (bubble diagrams, adjacency); analysis of design examples | Claiming specific studio briefs |
| History (AR120–AR124-1) | Identification (style/building/architect); matching period→characteristics; chronology; multiple choice; essay (period→context→characteristics→architects→works→influence) | Unverified attributions |
| Theory (AR130P, AR132-1) | Definitions; concept distinctions (functionalism vs formalism); architect-theory matching; short essays | — |
| Building Tech (AR161–165) | Definitions; material properties; construction sequence; drawing conventions; specs/QS computations (take-off basics) | Advanced engineering detail beyond scope |
| Utilities (AR153P, BU2, AR155-1, PFC-01) | Identification of components; code provisions (PEC/PMC/Plumbing/Fire); simple calculations (lighting, acoustics, flow); true/false | — |
| Structures (MEC30…CE134P) | Calculation problems (statics, stress, flexure); conceptual load-path questions; NSCP awareness; code applications | Advanced indeterminate analysis beyond architect scope |
| Planning (AR173–176-1, Tropical) | Site-analysis scenarios; zoning/CLUP concepts; tropical-design strategies; case studies | — |
| Professional Practice (AR181-1/2, AR188) | Code/law questions (RA 9266 verified); ethics scenarios; contract/service-phase questions; firm-structure questions | Outdated fee figures (verify UAP schedule) |

## 3. Exam-relevant knowledge domains (per course — evidence-weighted)

### AR141/AR142-1P (Design 1–2)
Observed: anthropometrics; modular coordination; functional relationships; activity circuits; basic design techniques & tools; form/shape manipulation into architectural form; designing for human habitation. → Flashcards, definitions, concept MCQs, simple design-analysis prompts.

### AR130P/AR132-1 (Theory 1–2)
Observed: definitions of architecture; form & space; proportion/scale; design process; proxemics; theories & theorists; functionalism; postmodernism; architecture timelines; semiology. → Definitions, matching, short essays, timeline questions.

### AR120–AR124-1 (History)
Observed periods (see ARCHITECTURE_HISTORY_THEORY.md §2): Prehistoric→Mesopotamian→Egyptian→Greek→Byzantine→Renaissance (HoA1); Islamic/vernacular SE Asia/18th–19th revival (HoA3); Filipino architects (course-level). → Identification, matching, chronology, essays.

### AR161–AR165-1P (Building Technology)
Template: materials → 1-storey drawings → 2-storey drawings → specs/QS → alternative systems. → Material classification, construction assemblies, drawing conventions, take-off basics.

### AR153P/BU2/AR155-1 (Utilities)
Observed: water supply fundamentals. Template: plumbing & sanitary; electrical/mechanical; acoustics & lighting; fire code. → Component ID, code provisions, simple computations.

### MEC30–CE134P (Structures)
Template: statics → strength → theory of structures → steel & timber → RC (architectural structures). → Computation problems; load-path concepts; NSCP roles.

### AR173–AR176-1 (Planning)
Observed: site-planning review material under Planning 3. Template: site planning & landscape → urban design/community → urban & regional planning. → Scenario analysis, code/law Qs, tropical strategies.

### AR181-1/AR182-1/AR188 (Professional Practice)
Verified law: RA 9266 core provisions. Template: laws → services administration → global practice; business. → Law MCQs, ethics scenarios, contract/phase questions.

### AR134-1/AR135-1/AR200/AR200-2 (Research & Thesis)
Observed: thesis research writing (AD9), terminal design course (AR200-2). → Research-method questions, thesis-format knowledge, literature-review concepts.

## 4. Reviewer construction framework (for the future reviewer AI)

**Step 1 — Identity check:** confirm course code/title against COURSE_MASTER_INDEX.md; if the code is UNKNOWN, use the template title and label it "national-standard course; Mapúa code not publicly verified."
**Step 2 — Scope check:** pull knowledge domains from the cluster docs (HISTORY/TECHNOLOGY/UTILITIES/STRUCTURES/PLANNING/PRACTICE); mark each item observed vs template vs standard.
**Step 3 — Depth control:** match question difficulty to level (design studios ramp by scale/complexity per ARCHITECTURAL_DESIGN_SEQUENCE.md §3; history progresses chronologically; structures progress statics→design).
**Step 4 — Legal grounding:** for law/code items, verify against LAWS_CODES_STANDARDS.md; flag edition-sensitive items ("verify current").
**Step 5 — Format generation:** use the question-type map (§2) and glossary (COURSE_GLOSSARY.md) for definitions/formulas (formula format: formula, variables, units, purpose, application, common mistakes).
**Step 6 — Labeling:** every item carries its evidence label (Mapúa-observed / national-template / standard / verified-law). No item may claim to be a past Mapúa exam question.
**Step 7 — QC:** run the FINAL QUALITY CONTROL checklist (below).

## 5. Program-outcome-aligned reviewer objectives (Program Outcomes A–M, official)

Reviewer sets should map to outcomes: A (integrated design knowledge), B (planning/sustainability), D (contract documents), E (heritage conservation), F (laws/codes), G (research methods), H (ICT), J (ethics), K (communication). This gives every reviewer module a defensible objective tied to the official program.

## 6. What a reviewer must NOT contain
- Fabricated course units/prereqs (UNKNOWN stays UNKNOWN).
- Claims of official Mapúa exam content.
- Merged MCL/MCM curriculum data presented as Mapúa University.
- Unverified current editions of codes (PEC/PMC/PNPC/NSCP — flagged).
- Inferred studio briefs presented as actual projects.
