# TAMA KNOWLEDGE DEBT REGISTER (Post-Audit — 2026-08-10)

**Maintained by:** TAMA audit cycle (directive §33 / §9) | **Last updated:** 2026-08-10
**Legend:** CRITICAL · HIGH · MEDIUM · LOW — each item lists evidence + what resolves it.

---

## CRITICAL

| # | Debt | Evidence | Resolution |
|---|---|---|---|
| C1 | Fire Code IRR (RA 9514, 2019 rev) full text not held | Official BFP PDF exists (bfp.gov.ph/wp-content/uploads/2019/10/RA9514-RIRR-rev-2019.pdf + 2025 wayback snapshot); sandbox download capped at 1 MB | Download from user's network; extract text w/ page markers; run 2nd citation pass on egress/occupant-load values |
| C2 | CHED CMO 61 full PSG text not held | Official URL 404; not in Wayback; mirrors only | FOI or official mirror; keep sample curriculum as held authority |
| C3 | Fire Code citations in reviewer material UNVERIFIED | Decks/cheatsheet cite "RA 9514 Sec. 10.2.5.x" (IRR-level; IRR not held); 1.12 m stair value conflicts with verified PD 1096 1.10 m | Resolve via C1; then update affected decks/exams |

## HIGH

| # | Debt | Evidence | Resolution |
|---|---|---|---|
| H1 | Legacy 2004-edition numbers still in BP344 deck (cards 39/45 TOSL) + exit-exam Q1 citation | Audit found legacy Table VII.1 claims | Annotated; full card-value correction after C1 or against verified Table VIII.1 (annotate now, correct values on touch) |
| H2 | TOA movement-depth (beyond notes) | Depth 2–3 per reconciled matrix | Educational-priority research pass (post-gate) |
| H3 | BT4 specs/QS depth | Depth 2–3; no worked estimating | Research pass (post-gate) |
| H4 | RC design worked examples | Only beam basics held | Research pass (post-gate) |
| H5 | RA 7160 (LGC) planning provisions | Queue #6/#15 pending | Public-domain acquisition + summary |

## MEDIUM

| # | Debt | Evidence | Resolution |
|---|---|---|---|
| M1 | Mirror consolidation not executed | 14 identical pairs; proposal written (`docs/VAULT_CONSOLIDATION_PROPOSAL.md`) | User authorization (Option A/B) |
| M2 | PH adaptive-reuse case depth | Cases exist; reuse-analysis thin | Case-study pass (post-gate) |
| M3 | BU2 official-code excerpts (PEC/PMC) | Paid codes — registry only | Library/purchase; official excerpts only |
| M4 | Per-period HOA essay sets | Modules exist; no essay bank | @examiner generation (post-gate) |
| M5 | 2 legacy 07-series files lack provenance headers | SITE-PLANNING-AND-MICROCLIMATES, KEVIN-LYNCH | Add headers on next touch |

## LOW

| # | Debt | Evidence | Resolution |
|---|---|---|---|
| L1 | README layout section describes 00/01/02 only | Structure grew (00-BOOKS, 07-PLANNING, ENVIRONMENTAL-LAWS) | Refresh after consolidation decision |
| L2 | AGENTS.md jurisdiction text omits 00-BOOKS/07-PLANNING | Verified at audit | Refresh after consolidation decision |
| L3 | Nakpil year 1972/1973 conflict recorded, not resolved | CCP release vs academic sources | Note in PH architecture file (done); resolve via NCCA official if needed |
| L4 | PGBC compliance thresholds unverified | Tier-3 source only | Verify against official DPWH PGBC document |

---

## RESOLVED SINCE PREVIOUS AUDIT

| Debt | Resolution |
|---|---|
| Stair-width claim (≥50 → 1.10 m) | **VERIFIED** 2026-08-10 against official 2005 IRR (also discovered ≤50 → 0.90 m, <10 → 0.75 m; cheat-sheet corrected) |
| RULE-7-8 legacy PSO conflict | Annotated SUPERSEDED (both mirrors) + verified Table VIII.1 designated authoritative |
| Version-string split | Reconciled to 1.9.0.0.a v |
| Coverage matrix staleness | Reconciled inventory appended |
| 2 unindexed files | Indexed |
| SET 01 / exit-exam / fire-deck citation lineage | Annotated (UNVERIFIED flags + verified pointers) |
| No automated audit / regression | `npm run audit` + `npm run ktest` implemented, green |

## NEXT REVIEW
At the next audit cycle (or before any large acquisition pass), re-check CRITICAL items C1–C3 and HIGH items H1–H5.

---

## COURSE-EXPANSION MISSION UPDATE (2026-08-10)

| # | Debt | Status |
|---|---|---|
| H2 | TOA movement depth | ✅ **RESOLVED** — THEORY-MOVEMENTS-AND-THEORISTS.md (7 movements + theorist table + traps) |
| H3 | BT4 specs/QS depth | ✅ **RESOLVED** — BT4-SPECIFICATIONS-AND-QUANTITY-SURVEYING.md (specs + QS process + unit rates + worked example) |
| H4 | RC worked examples | ✅ **RESOLVED** — RCD-SINGLY-REINFORCED-BEAM-WORKED-EXAMPLES.md (2 worked examples + traps) |
| M3 | BU1-2 depth | ✅ **RESOLVED (partial)** — PLUMBING-AND-ELECTRICAL-DESIGN-DEPTH.md (FU method, drainage, electrical load; PH code values still UNVERIFIED) |
| NEW | TOA essay banks per movement | ⬜ Post-gate (now feasible — movement file exists) |
| NEW | BT4 PH estimating practice tables (prices) | ⬜ Time-sensitive; exclude or date-stamp |
