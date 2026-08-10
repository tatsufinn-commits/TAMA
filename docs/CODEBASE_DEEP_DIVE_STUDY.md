# 🔬 TAMA KNOWLEDGE VAULT & QUESTION GENERATION ENGINE (`CODEBASE_DEEP_DIVE_STUDY.md`)
## Technical Reference Manual: File Hierarchy, Metadata Schemas & Exam Generator Rules
**Target System:** TAMAintegration (Mapúa BS Architecture Academic Hub)  
**Standard:** Canonical Source Anatomy for AI Ingestion and Question Generation  

---

# 1. KNOWLEDGE VAULT DIRECTORY HIERARCHY

```text
vault/
├── 00-CORE-BUILDING-LAWS/
│   ├── PD-1096-NBCP/                    # National Building Code Rule 7 & 8
│   ├── RA-9514-FIRE-CODE/               # Fire Code Egress & Occupant Loads
│   ├── BP-344-ACCESSIBILITY/            # Accessibility Law Clearances
│   └── RA-9266-SPP-DOCS/                # Architecture Act & SPP 201-208
│
├── 01-CURRENT-COURSES/
│   ├── ARCH-DESIGN-5/                   # Complex Space Programming
│   ├── BUILDING-TECH-3-4/               # Prestressed Concrete, Steel, Specs
│   ├── UTILITIES-3-MEPFS/               # HVAC, Acoustics, Vertical Transport
│   ├── STRUCTURAL-THEORY/               # Moment Distribution, RCD Beams
│   └── PROF-PRACTICE-1/                 # Contracts, Bidding, UAP Doc 301
│
└── 02-HISTORY-ARCHIVE/
    ├── HOA-1-TO-4/                      # History of Architecture Series
    ├── TOA-1-TO-2/                      # Theory of Architecture Series
    ├── BUILDING-TECH-1-2/               # Wood, Masonry, Shallow Foundations
    ├── UTILITIES-1-2/                   # Plumbing, Electrical Lighting
    └── STATICS-STRENGTH-MATERIALS/      # Shear, Moment, Section Modulus
```

---

# 2. MARKDOWN VAULT METADATA SCHEMA (FRONTMATTER)

When `@curator` ingests a lecture or building law reference into `vault/`, it must include YAML frontmatter:

```markdown
---
subject_code: "BT3"
course_name: "Building Technology 3 — Heavy Construction"
term: "3rd Year 2nd Term"
ale_category: "Part 2: Building Tech & Materials"
high_yield_rank: 9.2
governing_laws: ["PD 1096", "ACI 318", "NSCP 2015"]
last_reviewed: "2026-08-10"
---

# TOPIC TITLE
...
```

---

# 3. MOCK EXAM QUESTION GENERATION JSON SCHEMA

When `@examiner` generates a mock exam in `reviewers/mock-exams/`, it structures questions according to this format:

```json
{
  "exam_id": "DEPT-BT3-2026-01",
  "subject": "Building Technology 3",
  "questions": [
    {
      "id": 1,
      "scenario": "A 5-storey commercial building requires post-tensioned unbonded tendons in its floor slab. During tensioning, which of the following represents the minimum required compressive strength of concrete (f'c) before applying full prestressing force?",
      "options": {
        "A": "15.0 MPa (2,175 psi)",
        "B": "20.5 MPa (3,000 psi)",
        "C": "27.6 MPa (4,000 psi)",
        "D": "35.0 MPa (5,000 psi)"
      },
      "correct_answer": "B",
      "citation": "ACI 318 Section 18.18 / NSCP 2015 Section 418.18",
      "rationale": "Per ACI 318, minimum compressive strength of concrete at time of initial prestress transfer shall be at least 20.5 MPa (3,000 psi) unless a higher value is specified by the structural engineer.",
      "distractor_traps": {
        "A": "15.0 MPa is insufficient and risks crushing failure at anchorages.",
        "C": "27.6 MPa is standard 28-day design strength, not initial transfer threshold.",
        "D": "35.0 MPa is high-strength mix design, not the code minimum threshold."
      }
    }
  ]
}
```
