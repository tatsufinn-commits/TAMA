# TAMA KNOWLEDGE ACQUISITION REPORT — Initial Corpus Expansion

**Date:** 2026-08-10 | **Mission:** TAMA Knowledge Acquisition (Phases A–I, Phase A executed fully)
**Repository:** github.com/tatsufinn-commits/TAMAintegration | **Version inspected:** TAMA 1.9.0.0.a v (roadmap) / README 1.2.0.0.a v (discrepancy noted)

---

## 1. Research Scope

- **Phase A (executed):** Core Philippine laws, codes & regulations for architectural practice — PD 1096, RA 9266, BP 344, RA 9514, RA 10912, CHED CMO 61 s.2017.
- **Phases B–I (mapped, partially covered):** current courses, foundational architecture, design, building technology, structures, MEPFS, planning/environment, history/theory, professional practice — assessed against existing vault content; acquisition targets prioritized (see §13).

## 2. Sources Investigated

- Official Gazette (Cloudflare-gated — recorded, not downloadable), lawphil.net, ChanRobles Virtual Law Library, Supreme Court e-Library, Archive.org PH-Arki-Laws collection, CHED (registry + sample curriculum via Wayback), Scribd (IRR mirrors — access-restricted), DPWH/ASEP/IIEE/PSME/NAMPAP/UAP publisher pages (paid codes), ResearchGate (policy analysis), PRC ALE coverage sources.

## 3. Sources Acquired (6 RAW + 7 curated + 1 registry)

| RAW | Curated |
|---|---|
| PD 1096 full text (1977) | PD-1096-CHAPTER-STRUCTURE-INDEX.md |
| RA 9266 full text (2004) | RA-9266-VERIFIED-KEY-PROVISIONS.md |
| BP 344 + amended IRR PDF (1983) | BP-344-IRR-VERIFIED-PROVISIONS.md |
| RA 9514 full text (2008) | RA-9514-VERIFIED-STRUCTURE.md |
| RA 10912 full text (2016) | RA-10912-CPD-ACT-SUMMARY.md |
| CHED sample curriculum PDF (2017) | CHED-CMO-61-2017-SUMMARY.md |

Plus: VAULT-INDEX.md, KNOWLEDGE-COVERAGE-MATRIX.md, ACQUISITION_LOG.md, this report, and a STUDY_LOGBOOK entry.

## 4. Sources Rejected

- Reviewer-website/SEO copies of laws (no authority; official texts obtained instead).
- Scribd IRR copies (access-restricted; converted to source records).
- Any AI-summarized "codes" pages (Tier 5 — never core authorities).

## 5. Sources Linked Instead of Acquired (records)

NSCP 2015, PEC, PMC, Revised National Plumbing Code, PD 1096 IRR 2005, Fire Code IRR, UAP Doc 301, SPP 200 series, UAP Code of Ethics, Ching/Allen textbooks, CMO 61 full text → all in `vault/00-CORE-BUILDING-LAWS/SOURCE-REGISTRY/COPYRIGHTED-AND-PAID-SOURCES.md`.

## 6. Courses Covered (mapped)

AR181-1 Professional Practice 1 (laws/CPD/contracts) · PFC-01 Fire Code · AR153P/BU1-3 · All studio code-compliance (PD 1096, BP 344) · Program-level (CHED CMO 61) · ALE prep (RA 9266 §§13–15).

## 7. Topics Covered

Full-text bases for: NBCP statute structure (21 chapters), Architecture Act key provisions (verbatim), Accessibility law + IRR dimensions (verified numbers), Fire Code structure (17 sections + BFP enforcement), CPD framework, national curriculum template (218 units, 44 professional courses, outcomes).

## 8. Knowledge Gaps

- **PD 1096 IRR 2005** — the examinable numbers live here (Rules I–XIX); only statute in RAW.
- **Fire Code IRR** — egress/occupant-load tables.
- **NSCP/PEC/PMC/PNPC** — paid codes; only records.
- **Zoning & environmental laws** (BP 220, PD 957, RA 7160, RA 10587, RA 8749/9275/9003, PD 1586) — untouched.
- **CMO 61 full text** — 404 on official site; mirror recorded.
- Phases C–I per-topic OER depth (see coverage matrix).

## 9. Duplicate Sources Removed

**0 removed.** Pre-existing duplicate *cluster* layout (00-/01-/02- vs the 7-series folders) was **observed, documented, and left intact** (Rule 9: no unnecessary architectural changes). Flagged for @architect: 14 filenames appear in both layouts; a consolidation decision (which layout is canonical; whether to symlink/redirect) is a separate refactor mission.

## 10. Legal / Access Limitations

- All 6 RAW acquisitions are **public-domain Philippine government works** (RA 8293 §175) — no copyright conflict.
- Paid codes (NSCP/PEC/PMC/PNPC), professional documents (UAP/SPP), and textbooks were **not downloaded**; recorded only, per the mission's access policy.
- Official Gazette and CHED live PDFs are currently unavailable (Cloudflare/404) — Wayback/legit mirrors used and disclosed in provenance.

## 11. Vault Changes

- **Added** (no deletions, no overwrites): 6 RAW files, 7 curated files, 1 source registry, VAULT-INDEX.md, KNOWLEDGE-COVERAGE-MATRIX.md in `vault/00-CORE-BUILDING-LAWS/`; 2 new subject folders (RA-10912-CPD, CHED-CMO-61-2017) + SOURCE-REGISTRY — **minimal extensions, documented in the index.**
- **Not changed:** courses/, reviewers/, plugin/, docs/ (except a STUDY_LOGBOOK append per Law VII), package.json, scripts, existing vault files.

## 12. Knowledge Coverage

See `vault/KNOWLEDGE-COVERAGE-MATRIX.md` (Phases A–I; ● Strong / ◐ Partial / ○ Gap). Phase A core laws: ●. Everything else: ◐–○.

## 13. Recommended Next Acquisition Targets

1. **PD 1096 2005 IRR** (official DPWH source) — unlocks the numbers for Rules I–XIX.
2. **Fire Code IRR** (BFP/DILG official issuances).
3. **CHED CMO 61 full text** (official mirror).
4. **BP 220 & PD 957** (socialized housing / subdivision — public domain, quick wins for Planning).
5. **Environmental laws** (RA 8749, RA 9275, RA 9003, PD 1586, RA 10587).
6. **Phases C–I:** per-topic OER (university modules, government publications, open standards) — prioritize per coverage matrix.
7. **@curator pass:** extract BP 344 IRR washroom/elevator/signage dimensions into flashcards once verified.

## 14. Quality Assessment

| QC Item | Result |
|---|---|
| Source quality | ● All RAW = official/public-domain government texts or verified mirrors |
| Coverage | ◐ Phase A strong; B–I mapped with priorities |
| Accuracy | ● Curated quotes verified verbatim against RAW; UNCONFIRMED flags where not |
| Provenance | ● Every curated file carries Source Information + Confidence |
| Duplication | ● 0 new duplicates; pre-existing layout duplication documented |
| Organization | ● Files placed in existing clusters; extensions documented |
| Curriculum mapping | ● Mapped to AR181-1, PFC-01, BU, studios, ALE |
| Legal compliance | ● No paywall/DRM bypass; records for restricted sources |
| AI utility | ● @drillmaster: verified dimensions/numbers · @examiner: citable sections · @mentor: statute-vs-IRR distinction · @curator: RAW sources for future extraction |
| Tests | ✅ `npm test` passes (re-run after additions) |

**Stopping condition (Phase A):** met — all priority-1 laws either acquired from authoritative sources or recorded with access paths; additional searching for these specific laws yields diminishing returns.

---

## 15. Update — 00-BOOKS Library Pass (2026-08-10)

**Requested:** add the 5 next targets + architecture book PDFs (e.g., Max Fajardo) to the vault.

**Delivered:**
- `research/NEXT_ACQUISITION_TARGETS.md` — the 5 law targets + expanded plan (books pass + OER phases).
- `vault/00-BOOKS/` created with:
  - **4 public-domain classics actually downloaded (legal)**: Vitruvius *Ten Books on Architecture* (1914 trans.), Owen Jones *Grammar of Ornament* (1856), Ruskin *Seven Lamps of Architecture* (1849), Ware *American Vignola* (1904) — all from Internet Archive, PD verified.
  - **`ARCHITECTURE-TEXTBOOK-REGISTRY.md`** — Max Fajardo series (Simplified Methods on Building Construction, Simplified Construction Estimate, General Notes on Building Construction) + Ching, Neufert, Allen & Iano, Time-Saver, etc., each with **legal access paths** (National Book Store, publishers, libraries, Google Books preview).
  - **`PUBLIC-DOMAIN-CLASSICS.md`** — provenance rows + verification procedure.
- **Declined:** downloading pirated copies of commercial textbooks (Max Fajardo etc.) — copyrighted; violates TAMA Rule 4 and mission Access Policy §17. Registry entries + legal paths provided instead.

**QC:** npm test unaffected (no engine changes); 4 PDFs verified as valid PDF documents; provenance recorded per file.

---

## 16. Update — 00-BOOKS Converted to LINKS-ONLY Library (2026-08-10)

**Reason:** repo compactness — the 4 scanned-book PDFs (~103 MB) put the workspace near the 128 MB snapshot limit and caused a git commit to be dropped from history.

**Actions taken:**
- **Created `vault/00-BOOKS/BOOKS-ONLINE-ACCESS.md`** — verified free & legal links (11 items): Vitruvius (2 copies), Owen Jones (2), Ruskin Seven Lamps (2), Ware American Vignola (2), Palladio Four Books, Gibbs Book of Architecture, Ruskin Stones of Venice, plus Project Gutenberg mirrors. Each link verified via Archive.org metadata (`access-restricted: None` + free PDF present) on 2026-08-10.
- **Deleted** the 4 stored PDFs and `PUBLIC-DOMAIN-CLASSICS.md` (content folded into the links file).
- **Kept** `ARCHITECTURE-TEXTBOOK-REGISTRY.md` (commercial books + legal paths) and updated `README.md` (links-only policy).
- **Size impact:** workspace 105 MB → **2.3 MB**; `.git` 1.5 MB (unchanged, no PDF blobs in history).
- All removed PDFs remain freely downloadable from their archive pages.

**Compliance note:** PDFs were public-domain; removal was purely for repo size, not copyright. The textbook registry continues to honor TAMA Rule 4 (no pirated commercial books).

---

## 17. Update — TARGET 1 COMPLETED + Housing Laws + Books Expansion (2026-08-10)

**Target 1 — PD 1096 2005 Revised IRR: ✅ ACQUIRED (official source)**
- Located the **official DPWH-hosted PDF** ("IRR - NATIONAL BUILDING CODE COMPLETE.pdf", 432 pp) via a 2017 Wayback Machine archive of dpwh.gov.ph (the live DPWH site is unreachable from this sandbox; the archive is a byte-for-byte copy of the official file).
- Stored as `vault/00-CORE-BUILDING-LAWS/PD-1096-NBCP/RAW/PD-1096_IRR-2005_FULLTEXT.txt` (905 KB, text-extracted with `[PDF PAGE n]` markers for citation).
- Curated `PD-1096-IRR-2005-VERIFIED-TABLES.md` with the **complete verified Table VIII.1** (PSO/ISA/USA/TOSL by occupancy, with footnote meanings e=without firewall / f=with firewall, formulas PSO+ISA=MACA and PSO+TOSL=TLA), parking slot 2.50×5.00 m, measurement rules, and the residential abutment matrix — all with PDF page references.
- This unlocks the exact examinable numbers that were previously unavailable (only the statute was held).

**Housing laws (Target 4): ✅ ACQUIRED**
- PD 957 (1976) Subdivision & Condominium Buyers' Protective Decree — RAW + verified summary.
- BP 220 (1985) Economic & Socialized Housing Standards — RAW (incl. Annex A) + verified summary.
- Stored under new `PD-957-SUBDIVISION-CONDOMINIUM/` and `BP-220-SOCIALIZED-HOUSING/` folders in 00-CORE-BUILDING-LAWS.

**Books expansion: +5 verified links**
- Added to `BOOKS-ONLINE-ACCESS.md`: Le Corbusier *Towards a New Architecture* (2 copies), Alberti *De re aedificatoria* (2 copies), Banister Fletcher *A History of Architecture on the Comparative Method*. All verified `access-restricted: None` with free PDFs on Internet Archive.

**Size:** workspace still ~3.3 MB (IRR text 905 KB is the largest new file — text, not binary). `npm test` remains green.

**Remaining targets:** Fire Code IRR (sandbox can't reach PH gov sites — will retry/record), CMO 61 full text, environmental laws, RA 7160/10754.

---

## 18. Update — Environmental Laws ✅ + Fire Code IRR/CMO 61 recorded + Course-Linked Content (2026-08-10)

**Environmental & PWD laws — ACQUIRED (Target 5 done + bonus):**
- RA 8749 (Clean Air Act 1999), RA 9275 (Clean Water Act 2004), RA 9003 (Ecological Solid Waste 2000), PD 1586 (EIS System 1978), RA 10587 (Environmental Planning Act 2013), RA 10754 (PWD Magna Carta 2016) — full texts from lawphil (public domain), stored under `vault/00-CORE-BUILDING-LAWS/ENVIRONMENTAL-LAWS/RAW/` (~300 KB total), plus a curated `ENVIRONMENTAL-LAWS-SUMMARY.md` with course mapping and exam angles.

**Fire Code IRR (Target 2) — RECORDED (official source identified, sandbox download blocked):**
- Official BFP 2019 Revised IRR located: bfp.gov.ph/wp-content/uploads/2019/10/RA9514-RIRR-rev-2019.pdf (+ archived copy + mirrors). Wayback stream truncated at 1 MB in this sandbox; recorded in SOURCE-REGISTRY §6 with instructions to download from the user's network and curate like the PD 1096 IRR.

**CMO 61 full text (Target 3) — RECORDED:**
- Official URL 404; not present in Wayback; mirrors logged (SOURCE-REGISTRY §7). Sample curriculum (held) + registry remain the authoritative available sources until official copy/FOI.

**Course-linked content added (using existing courses/ research + held IRR text):**
- `PD-1096-IRR-RULES-INDEX.md` — Rules I–XXI verified index + the referral-codes concept (Sec. 103) extracted from the held IRR text (supports AR181-1 & navigation).
- `02-HISTORY-ARCHIVE/TOA-1-TO-2/PUBLIC-DOMAIN-THEORY-NOTES.md` — curated orientation notes from the public-domain classics (Vitruvian triad, Alberti concinnitas, Ruskin's 7 lamps, Jones' 37 propositions, classical orders, Le Corbusier 5 points, Fletcher's Tree of Architecture) with book links — supports AR130P/AR132-1/HOA.

**Size:** workspace ~3.8 MB; `npm test` GREEN. Remaining: RA 7160 (LGC) summary; Fire Code IRR + CMO 61 (need user-network downloads).
