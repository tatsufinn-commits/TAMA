# COURSE_DEPENDENCY_MAP — Prerequisite & Progression Analysis

**Compiled:** 2026-08-10 | **Confidence:** HIGH / MEDIUM / LOW / UNKNOWN
**Critical caveat:** Mapúa University's *official* prerequisite list is published only inside authenticated MyMapúa. The dependency structures below come from two labeled sources:
1. **[CHED]** — prerequisites stated in the CHED CMO 61 s. 2017 sample curriculum (national template; G-03).
2. **[OBS]** — observed at Mapúa: codes, course titles, and occasional syllabus statements (Tier 4).
3. **[INF]** — logical inference from the CHED template + observed codes.

Nothing below is claimed to be Mapúa's official prerequisite list.

---

## 1. The conceptual progression (matches Mapúa's official program description: "progressively assimilating the technical aspects")

```
FOUNDATIONAL (GE + math + sciences + communication)
    │  MATH12/146, PHYS101/104-105, GED-series, ENG-series, DRAW/CAD
    ▼
BASIC ARCHITECTURAL KNOWLEDGE
    │  AR130P Theory of Arch 1 · AR120 History of Arch 1 · AR101P Graphic Design / VisCom
    ▼
ARCHITECTURAL DESIGN / STUDIO CORE (paired, sequential)
    │  AR141 AD1 → AR142-1P AD2 → AD3 → AD4 → AR145-1S AD5 → AD6 → AD7 → AD8
    ▼
TECHNICAL SYSTEMS (parallel tracks feeding the studios)
    ├── STRUCTURES:  MEC30 Statics → MEC32 Strength → CE131P Theory of Structures
    │                → CE134P Steel & Timber · CE133/191 RC Design · (Architectural Structures)
    ├── BUILDING TECHNOLOGY: AR161/163-1 BT1 → AR162-1P BT2 → (BT3 → BT4) → AR165-1P BT5
    └── BUILDING UTILITIES:  AR153P BU1 → (BU2) → AR155-1 BU3 · PFC-01 Fire Code
    ▼
INTEGRATED DESIGN (senior studios)
    │  AD7 Community Architecture & Urban Design → AD8 Design of Complex Structures
    ▼
RESEARCH & THESIS
    │  AR134-1 Research Methods → AR135-1 Architectural Essays & Reviews
    │  → AR200/AR200-2 Thesis Research Writing → Terminal Design (Thesis)
    ▼
PROFESSIONAL PRACTICE
    AR181-1 PP1 (laws) → AR182-1 PP2 (services) → PP3 (global practice) · AR188 Business Mgmt
```

## 2. CHED-template prerequisite chains [CHED — G-03]

| Course | Prerequisites (template) |
|---|---|
| AD2 | AD1 + TOA1 |
| AD3 | AD2 + TOA2 |
| AD4 | AD3 |
| AD5 | AD4 |
| AD6 | AD5 |
| AD7 | AD6 |
| AD8 | AD7 |
| AVC3 (Graphics 2) | AVC1 |
| AVC4 (Visual Techniques 2) | AVC2 |
| AVC5 (Visual Techniques 3) | AVC4 |
| CADD1 | AVC5 (Graphics 2) |
| BIM | CADD1 |
| BT1 | (co-req: Architectural Interiors) |
| BT2 | BT1 (+ BU1 co-req) |
| BT3 | BT2 + BU1 |
| BT4 | BT3 |
| BT5 | BT3 |
| BU1 | Physics 2 |
| BU2 | Physics 2 |
| BU3 | Physics 2 |
| HoA2 | HoA1 |
| HoA3 | HoA2 |
| HoA4 | HoA3 |
| TOA2 | TOA1 |
| Statics | Physics 1 + (Diff/Integral Calculus) |
| Strength of Materials | Statics |
| Theory of Structures | Strength of Materials |
| Steel & Timber Design | Theory of Structures |
| Architectural Structures | Steel & Timber Design |
| Surveying | College Algebra + Trigonometry |
| Planning 1 | Surveying + Science/Env & Society |
| Planning 2 | Planning 1 |
| Planning 3 | Planning 2 |
| Housing | Planning 2 + PP1 |
| PP1 | None |
| PP2 | PP1 |
| PP3 | PP2 |
| Research Methods for Architecture | Junior standing + English 3 |
| Specialization 1 | AD7 |
| Correlation course | Final year |

## 3. Observed Mapúa-specific dependencies [OBS/INF]

- **Design sequence pairing:** Mapúa codes pair design studios with support courses (suffix **-1P** = paired). Example: AR142-1P (Design 2) — the Scribd syllabus (2021) confirms it follows introductory design and theory content (anthropometrics, modular coordination, functional relationships, activity circuits — consistent with CHED's AD2 "Creative Design and Fundamentals" after TOA1) `[SYL]`. MEDIUM confidence.
- **Thesis chain:** AR134-1 Research Method for Architecture → AR135-1 Architectural Essays & Reviews → AR200 Thesis Research Writing / AR200-2 terminal design course. Sequence inferred from titles + [C] thesis template ("partial fulfillment for the terminal design course AR200-2") + [P] (AR200 = AD9). INFERRED — MEDIUM.
- **Structures chain at Mapúa uses engineering-dept codes:** MEC30 → MEC32 → CE131P → CE134P/CE133 — same discipline sequence as the template, with Mapúa's shared CE/MEC coding `[S]`. MEDIUM.
- **Utilities:** AR153P (BU1) appears early (plumbing/sanitary); AR155-1 (BU3) later; BU2 (electrical/mechanical) sits between — sequence inferred from template. MEDIUM for existence, LOW for exact placement.

## 4. Critical courses (knowledge integration points)

| Course | Integrates |
|---|---|
| AD5–AD8 studios | History, theory, BT, BU, structures, planning (the "spine") |
| Planning 1 (Site Planning & Landscape Arch) | Surveying + env science + design |
| Architectural Structures (template) / advanced studio structures | Statics→Strength→Theory→Steel/RC chain into design |
| Research Methods + Essays & Reviews | Writing + research methodology feeding thesis |
| PP1–PP3 | Laws → services → global practice, culminating professional readiness |
| Thesis (AR200/AR200-2) | Every prior course; capstone |

## 5. Knowledge-transfer map (course → course)

```
AR130P TOA1 ──► AR142-1P AD2 (design fundamentals)
AR120 HoA1 ──► HoA2→HoA3→AR124-1 HoA4 (chronology → context for design)
AR161 BT1 (materials) ──► AR162-1P BT2 (1-storey drawings) ──► BT3 (2-storey) ──► AR165-1P BT5 (alt. systems)
MEC30 Statics ──► MEC32 Strength ──► CE131P Theory of Structures ──► CE134P Steel/Timber, RC Design
AR153P BU1 (plumbing) + BU2 (E/M) + AR155-1 BU3 (acoustics/lighting) ──► studio technical integration
AR173 Planning 1 ──► AR173-1P Planning 2 (urban design) ──► AR176-1 Planning 3 (urban/regional)
AR181-1 PP1 ──► AR182-1 PP2 ──► PP3 (global practice) · AR188 Business Management
AR134-1 RMA ──► AR200 Thesis Research Writing ──► AR200-2 Terminal Design/Thesis
```

## 6. Unresolved dependency questions (see KNOWLEDGE_GAPS.md)

- Exact Mapúa prerequisite lists per course (MyMapúa only).
- Whether AD codes continue AR143–AR148 for designs 3–8 (UNKNOWN).
- Whether AR164-1 is BT3 or BT4 (UNKNOWN).
- Co-requisite pairs beyond the -1P suffix pattern (UNKNOWN).
