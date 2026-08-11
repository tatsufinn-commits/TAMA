# TAMA VAULT CONSOLIDATION PROPOSAL (Phase V — Post-Audit)

**Date:** 2026-08-10 | **Status:** PROPOSAL — requires 🟡 RECOMMENDATION → 🔴 HUMAN AUTHORIZATION before execution
**Basis:** `research/TAMA_SYSTEM_AUDIT_REPORT.md` (14 identical mirror pairs found; 15 duplicate basenames incl. 2 distinct READMEs)

---

## 1. CURRENT ARCHITECTURE (BEFORE)

Two overlapping organizational schemes coexist in `vault/`:

| Scheme | Root folders | Role |
|---|---|---|
| **README-era (canonical)** | `00-CORE-BUILDING-LAWS/` · `01-CURRENT-COURSES/` · `02-HISTORY-ARCHIVE/` (+ `00-BOOKS/`) | Where ALL new content has been added since acquisition began; documented in README |
| **Build T29 "7-cluster series"** | `01-BUILDING-LAWS-AND-PROFPRAC/` · `02-DESIGN-STUDIO-SPINE/` · `03-BUILDING-TECHNOLOGY-SERIES/` · `04-BUILDING-UTILITIES-SERIES/` · `05-STRUCTURAL-STUDIES-SERIES/` · `06-HISTORY-AND-THEORY-SERIES/` · `07-PLANNING-AND-ENVIRONMENTAL/` | Older topical mirror scheme (Build T29 per STUDY_LOGBOOK) |

## 2. MIRROR PAIR INVENTORY (14 identical pairs — verified byte-identical at audit)

| Knowledge object | Canonical candidate | Mirror location(s) |
|---|---|---|
| RULE-7-8-ZONING-AMBF | 00-CORE/PD-1096-NBCP | 01-BUILDING-LAWS/PD-1096-NBCP |
| RAMPS-DOORS-PARKING | 00-CORE/BP-344 | 01-BUILDING-LAWS/BP-344 |
| EGRESS-AND-OCCUPANT-LOADS | 00-CORE/RA-9514 | 01-BUILDING-LAWS/RA-9514 |
| ARCHITECTURE-ACT-AND-SPP200 | 00-CORE/RA-9266 | 01-BUILDING-LAWS/RA-9266 |
| CONTRACTS-AND-BIDDING-DOCS | 01-CURRENT/PROF-PRACTICE-1 | 01-BUILDING-LAWS/UAP-DOC-301 |
| ZONING-AND-SPACE-PROGRAMMING | 01-CURRENT/ARCH-DESIGN-5 | 02-DESIGN-STUDIO-SPINE/AD5-AD6 |
| PRESTRESSED-CONCRETE-AND-STEEL | 01-CURRENT/BUILDING-TECH-3-4 | 03-BT-SERIES/BT3 |
| MOMENT-DISTRIBUTION-AND-RCD | 01-CURRENT/STRUCTURAL-THEORY | 05-STRUC-SERIES/STRUC3 |
| CENTRAL-HVAC-AND-ACOUSTICS | 01-CURRENT/UTILITIES-3 | 04-BU-SERIES/BU3 |
| WOOD-JOINERY-AND-MASONRY | 02-HISTORY/BUILDING-TECH-1-2 | 03-BT-SERIES/BT1 |
| HISTORY-OF-ARCHITECTURE-TIMELINE | 02-HISTORY/HOA-1-TO-4 | 06-HOA-SERIES/HOA1 |
| THEORY-OF-ARCHITECTURE-CHING | 02-HISTORY/TOA-1-TO-2 | 06-TOA-SERIES/TOA |
| SHEAR-AND-MOMENT-EQUATIONS | 02-HISTORY/STATICS-STRENGTH | 05-STRUC-SERIES/STRUC1 |
| PLUMBING-AND-ELECTRICAL-SYSTEMS | 02-HISTORY/UTILITIES-1-2 | 04-BU-SERIES/BU1 |

**Non-mirror duplicates (excluded):** `README.md` (00-BOOKS vs 00-INCOMING-DROP-BOX — distinct documents, both valid).

## 3. ANALYSIS

- **Content divergence:** ZERO (all 14 pairs byte-identical at audit; audit annotations were applied to BOTH members, preserving identity).
- **Dependencies:** agents reference only `vault/00-CORE-BUILDING-LAWS/`, `01-CURRENT-COURSES/`, `02-HISTORY-ARCHIVE/` (AGENTS.md jurisdiction) — the series folders are NOT agent-referenced.
- **Documentation:** README documents 00/01/02 only.
- **Git history:** all content was added post-initial-upload; series files and canonical files entered in the same commits (mirroring occurred via the upload). No unique git history on either side.
- **Risk of inaction:** dual maintenance (annotations had to be applied twice), potential divergence over time, confusing navigation, inflated file counts.
- **Risk of action:** any move/delete touches 14×2 files; deleting the series folders loses the Build-T29 conceptual grouping.

## 4. RECOMMENDED TARGET ARCHITECTURE (AFTER)

```
vault/
├── 00-CORE-BUILDING-LAWS/   (canonical — laws, codes, registry, RAW texts)
├── 00-BOOKS/                (canonical — links library)
├── 01-CURRENT-COURSES/      (canonical — active coursework knowledge)
├── 02-HISTORY-ARCHIVE/      (canonical — foundational knowledge)
├── 07-PLANNING-AND-ENVIRONMENTAL/  (canonical — planning/environmental; NOTE: unique content,
│                                     NOT mirrored — keep as-is)
├── 00-DROP-BOX/ · 00-INCOMING-DROP-BOX/  (unchanged)
├── VAULT-INDEX.md · KNOWLEDGE-COVERAGE-MATRIX.md · COMMON-MISTAKES-AND-EXAM-TRAPS.md
└── _SERIES-INDEX/ (NEW, optional) — a single README mapping each retired series folder
    to its canonical location
```

**Series folders (01-BUILDING-LAWS-AND-PROFPRAC, 02-DESIGN-STUDIO-SPINE, 03/04/05/06-*):**
Option A (recommended): replace each with a short `README.md` pointer ("This folder was consolidated into `vault/00-CORE-BUILDING-LAWS/…` — see VAULT-INDEX") and delete the 14 mirrored files.
Option B (conservative): keep folders, convert the 14 mirrored files into README pointers to canonical paths (no deletion of content — same bytes, referenced once).
Option C (no change): leave as-is; document as intentional mirrors.

**Recommendation: Option A or B.** Option B is the most reversible (git revert restores everything) and satisfies "preserve > destroy".

## 5. MIGRATION PLAN (for authorization)

| Step | Action | Files | Risk |
|---|---|---|---|
| 1 | Freeze new vault writes | — | none |
| 2 | Re-verify 14 pairs byte-identical | 28 files | none (verified) |
| 3 | (Option B) Replace 14 mirror files with pointer READMEs | 14 files | low (content preserved in canonical) |
| 4 | Update VAULT-INDEX (series sections → pointer notes) | 1 file | low |
| 5 | Update KNOWLEDGE-COVERAGE-MATRIX (series rows → canonical) | 1 file | low |
| 6 | Update AGENTS.md jurisdiction text (mention 00-BOOKS, 07-PLANNING) | 1 file | low |
| 7 | Update README layout section | 1 file | low |
| 8 | Run `npm test` + `npm run audit` + regression | — | none |
| 9 | Commit as one atomic change | — | rollback = `git revert` |

**Rollback:** `git revert <commit>` restores all 14 mirrors + docs (Option B is fully reversible).

## 6. EXPECTED OUTCOMES

- 14 duplicate maintenance points eliminated.
- Single canonical path per knowledge object (provenance clarity).
- Agent/documentation references unaffected (they already target canonical paths).
- Repo file count: −14 mirrored files (or converted to pointers).
- Future acquisitions write once.

## 7. DECISION REQUESTED

- **Option A** (delete series mirrors + pointer READMEs) — most cleanup, requires deletion authorization.
- **Option B** (convert mirrors to pointers, retain folders) — recommended; fully reversible.
- **Option C** (no change; document mirrors) — accepted if user prefers zero structural change.
