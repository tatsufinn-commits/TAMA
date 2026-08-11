# TAMA KNOWLEDGE GOVERNANCE REGISTRY (Phase IX — Post-Audit)

**Date:** 2026-08-10 | **Status:** ACTIVE — lightweight metadata convention for important authoritative knowledge
**Purpose:** TAMA must answer: *What do I know? Where from? How authoritative? How current? What contradicts it? What depends on it?*

---

## 1. THE METADATA CONVENTION (for IMPORTANT knowledge objects only)

For canonical/authoritative knowledge (laws, verified tables, curriculum anchors, critical formulas), track:

| Field | Example (PD 1096 IRR 2005) |
|---|---|
| Knowledge ID | K-LAW-001 |
| Title | 2005 Revised IRR of PD 1096 (NBCP) |
| Canonical path | vault/00-CORE-BUILDING-LAWS/PD-1096-NBCP/RAW/PD-1096_IRR-2005_FULLTEXT.txt |
| Curated derivative | PD-1096-IRR-2005-VERIFIED-TABLES.md · PD-1096-IRR-RULES-INDEX.md |
| Source / authority | DPWH (official; via Wayback of dpwh.gov.ph) — TIER 1 |
| Publication / edition | 2005 Revised Edition (promulgated Oct 2004, effective June 2005) |
| Status | CURRENT |
| Last verified | 2026-08-10 (text extraction verified; tables checked against text) |
| Verification frequency | ANNUAL (or on PH code amendment news) |
| Course/domain | AR181-1; all studios (code compliance) |
| Depth | 4 (Advanced) |
| Confidence | HIGH (official text) |
| Supersedes | 2004-edition IRR/study-guide tables (legacy RULE-7-8 file) |
| Superseded by | — (check for newer DPWH IRR editions) |
| Known conflicts | RULE-7-8-ZONING-AMBF.md (annotated SUPERSEDED) |
| Used by agents | @mentor, @examiner, @drillmaster (via curated files + decks) |

## 2. THE REGISTRY (important knowledge objects — created at this audit)

| ID | Title | Canonical path | Authority (Tier) | Status | Last verified | Conflicts |
|---|---|---|---|---|---|---|
| K-LAW-001 | PD 1096 statute 1977 | 00-CORE/PD-1096-NBCP/RAW/PD-1096_NBCP_FULLTEXT_1977.txt | TIER 1 | CURRENT | 2026-08-10 | — |
| K-LAW-002 | PD 1096 IRR 2005 | 00-CORE/PD-1096-NBCP/RAW/PD-1096_IRR-2005_FULLTEXT.txt | TIER 1 | CURRENT | 2026-08-10 | legacy 2004 tables |
| K-LAW-003 | RA 9266 | 00-CORE/RA-9266-SPP-DOCS/RAW/…2004.txt | TIER 1 | CURRENT | 2026-08-10 | — |
| K-LAW-004 | RA 9514 statute | 00-CORE/RA-9514-FIRE-CODE/RAW/…2008.txt | TIER 1 | CURRENT | 2026-08-10 | — |
| K-LAW-005 | Fire Code IRR 2019 | NOT HELD (recorded) | TIER 1 | UNVERIFIED | — | egress values in decks |
| K-LAW-006 | BP 344 + IRR | 00-CORE/BP-344/RAW/…1983.pdf | TIER 1 | CURRENT | 2026-08-10 | — |
| K-LAW-007 | RA 10066 | 00-CORE/RA-10066-HERITAGE/RAW/…2009.txt | TIER 1 | CURRENT | 2026-08-10 | — |
| K-LAW-008 | Housing laws (PD 957/BP 220) | 00-CORE/PD-957… · BP-220… | TIER 1 | CURRENT | 2026-08-10 | — |
| K-LAW-009 | Environmental laws (×6) | 00-CORE/ENVIRONMENTAL-LAWS/RAW/ | TIER 1 | CURRENT | 2026-08-10 | — |
| K-LAW-010 | CHED CMO 61 (full text) | NOT HELD (sample curriculum held) | TIER 1 | UNVERIFIED | — | — |
| K-STR-001 | Statics fundamentals + worked ex | 02-HISTORY/STATICS-STRENGTH/… | TIER 2 (MIT OCW-linked) | CURRENT | 2026-08-10 | — |
| K-STR-002 | SOM + truss analysis | 02-HISTORY/STATICS-STRENGTH/… | TIER 2 | CURRENT | 2026-08-10 | — |
| K-STR-003 | Moment distribution worked ex | 01-CURRENT/STRUCTURAL-THEORY/… | TIER 2 | CURRENT | 2026-08-10 | — |
| K-STR-004 | Sidesway frames | 01-CURRENT/STRUCTURAL-THEORY/… | TIER 2 | CURRENT | 2026-08-10 | — |
| K-HOA-001 | PH architecture + National Artists | 02-HISTORY/HOA-1-TO-4/PHILIPPINE-… | TIER 1-2 (CCP/NCCA) | CURRENT | 2026-08-10 | Nakpil year 1972/1973 (recorded) |
| K-HOA-002..006 | Period modules (Rom/Goth/Ren/Bar/Mo) | 02-HISTORY/HOA-1-TO-4/PERIOD-MODULES/ | TIER 2 | CURRENT | 2026-08-10 | — |
| K-MEP-001 | MEPFS worked calculations | 01-CURRENT/UTILITIES-3-MEPFS/… | TIER 2-3 | CURRENT | 2026-08-10 | BU2 code values flagged |
| K-BT-001 | PH materials + assemblies | 02-HISTORY/BUILDING-TECH-1-2/… | TIER 2-3 | CURRENT | 2026-08-10 | prices time-sensitive |
| K-PLN-001 | CLUP/zoning process | 07-PLANNING/CLUP-AND-ZONING-PROCESS.md | TIER 1-2 (HLURB) | CURRENT | 2026-08-10 | agency name (DHSUD) flagged |
| K-GRN-001 | BERDE + PGBC | 07-PLANNING/PHILIPPINE-GREEN-BUILDING.md | TIER 1-2 | CURRENT | 2026-08-10 | PGBC thresholds flagged |
| K-CAS-001..008 | Case studies (8) | 01-CURRENT/ARCH-DESIGN-5/… | TIER 2-3 | CURRENT | 2026-08-10 | — |

## 3. FRESHNESS CLASSIFICATION (Phase XI)

| Class | Domains | Verification frequency |
|---|---|---|
| CRITICAL CURRENCY | Laws, building codes, professional regs, technical standards | On amendment news + ANNUAL |
| HIGH CHANGE | University curriculum, software/scripts, CMO issuances | ANNUAL / on notice |
| MODERATE | Professional-practice fee schedules, agency names | ANNUAL |
| LOW CHANGE | Historical architecture, theory classics, period modules | Every 2–3 yrs |
| STATIC | Public-domain classics, settled history | Rarely |

## 4. SOURCE AUTHORITY (Phase X — maintained)

TIER 1 official govt/original · TIER 2 peer-reviewed/university/professional · TIER 3 reputable educational/technical · TIER 4 community/informal · TIER 5 unsourced.
**Rule:** lower tiers never silently override higher tiers; lower tiers retain discovery/practical value and are labeled.

## 5. MAINTENANCE

- Registry entries updated on: new canonical acquisition, supersession, verification pass, conflict resolution.
- The `npm run audit` + knowledge-regression suite re-checks the machine-verifiable subset of this registry.
