# TAMA Versioning Guide

## Purpose

This document defines the official semantic and academic version naming convention for **TAMA** releases, knowledge vault additions, and study milestones.

The goal is to make every version label transparent and easy to understand at a glance, while communicating the academic year, major system milestone, subject vault expansion, and exam readiness stage.

---

## Current Version

```txt
TAMA 1.2.0.0.a v
```

*(Publication 1, Major Milestone 2 Reviewers, Initial Subject Modules, Alpha Study Stage).*

---

## Version Format

TAMA uses the unified 5-segment version format:

```txt
TAMA [Publication].[Major].[Minor].[Iteration].[Stage] v
```

Where each segment has a dedicated academic and systems meaning:

```txt
TAMA [Publication].[Major Milestone].[Subject Vault].[Iteration].[Stage] v
       │             │                 │               │           └── Stage (a=alpha, b=beta, r=release)
       │             │                 │               └────────────── Iteration (quiz & formula updates)
       │             │                 └────────────────────────────── Subject Module (Laws, Tech, Struct)
       │             └──────────────────────────────────────────────── Major Milestone (Scaffold, Vault, Exams, Sync)
       └────────────────────────────────────────────────────────────── Publication (Academic Generation)
```

---

## Version Number Breakdown

| Segment | Example | Meaning in TAMA |
|---|:---:|---|
| **Publication** | `1` | Academic generation cycle (e.g. `1` = 3rd-Year Mapúa BS Architecture). |
| **Major Milestone** | `2` | Major system milestone (0 = Foundation, 1 = Vault Engine, 2 = Reviewers & Exams, 3 = TheHUB Bridge). |
| **Subject Vault** | `0` | Subject domain module (0 = Core Laws, 1 = Building Tech, 2 = Utilities, 3 = Structures, 4 = ProfPrac, 5 = HOA/TOA). |
| **Iteration** | `0` | Incremental question additions, formula card updates, distractor trap refinements, and logbook updates. |
| **Stage** | `a` | Testing & study readiness stage (`a` = Alpha/Ingestion, `b` = Beta/Departmental Drill, `r` = Release/Exit Exam Ready). |
| **v** | `v` | Version label identifier. |

---

## Segment Definitions

### 1. Publication Number
Represents the major academic generation cycle.
* `TAMA 1.x.x.x.a v` $\rightarrow$ 3rd-Year Mapúa Academic Cycle.
* `TAMA 2.x.x.x.a v` $\rightarrow$ 4th-Year Comprehensive Departmentals & Design Specialization.
* `TAMA 3.x.x.x.a v` $\rightarrow$ 5th-Year Final Thesis & Comprehensive Exit Exam / PRC ALE Mastery.

---

### 2. Major Milestone Number
Represents core system capabilities:
* **Milestone 0 (`TAMA 1.0.x.x.a v`):** Foundational Scaffolding & Tooling (`docs/`, `package.json`).
* **Milestone 1 (`TAMA 1.1.x.x.a v`):** Knowledge Vault Engine Ingested (`vault/` Core Laws, Current Courses, History).
* **Milestone 2 (`TAMA 1.2.x.x.a v`):** Socratic Reviewers & Mock Exams (`reviewers/mock-exams/`, flashcards).
* **Milestone 3 (`TAMA 1.3.x.x.a v`):** TheHUB Integration & Marciale Brain Profile (`plugin/` bridge).

---

### 3. Subject Vault Number (Minor)
Represents specific architectural subject domain expansions:
* `.0` = Core Building Laws (PD 1096 NBCP, RA 9514 Fire Code, BP 344, RA 9266)
* `.1` = Building Technology 3 & 4 (Prestressed Concrete, Steel Trusses, Curtain Walls)
* `.2` = Building Utilities 3 (MEPFS Central HVAC, Acoustics, Elevators)
* `.3` = Structural Theory & RCD (Continuous Beams, Moment Distribution, Beam Sizing)
* `.4` = Professional Practice & Ethics (UAP Doc 301, SPP 200 Series)
* `.5` = History & Theory Archive (HOA 1-4, TOA 1-2)

---

### 4. Iteration Number
Increments with new mock exam sets, formula card updates, and bugfixes:
* `TAMA 1.2.0.0.a v` $\rightarrow$ Initial Set 01 Mock Exam created.
* `TAMA 1.2.0.1.a v` $\rightarrow$ Added Set 02 Mock Exam & 15 new active recall cards.

---

### 5. Stage Letter

| Stage | Name | Meaning |
|:---:|:---:|---|
| `a` | **Alpha** | Active notes ingestion and initial question generation. |
| `b` | **Beta** | Departmental exam drill readiness; timed mock tests verified. |
| `r` | **Release** | Exit Exam / ALE Board certified mastery; zero-hallucination verified. |

---

## Practical Examples & Archive Naming

| Version Label | Meaning | Standard Zip Package Name |
|---|---|---|
| `TAMA 1.0.0.0.a v` | Foundation Scaffolding complete | `TAMA-1.0.0.0.a-v.zip` |
| `TAMA 1.1.0.0.a v` | Milestone 1 Knowledge Vault populated | `TAMA-1.1.0.0.a-v.zip` |
| `TAMA 1.2.0.0.a v` | Milestone 2 Socratic Mock Exams live | `TAMA-1.2.0.0.a-v.zip` |
| `TAMA 1.3.0.0.a v` | Milestone 3 TheHUB Bridge integrated | `TAMA-1.3.0.0.a-v.zip` |

---

## Recommended Usage

Use the official version string in:
1. `docs/BUILD_LOGBOOK.md` and `docs/STUDY_LOGBOOK.md` headers.
2. Git commit messages (`git commit -m "Release TAMA 1.2.0.0.a v: Populated Core Laws & Mock Exams"`).
3. Release zip archives (`TAMA-1.2.0.0.a-v.zip` and `TAMA_SCAFFOLDING_V1.0.zip`).
4. Root `README.md` and `package.json`.
