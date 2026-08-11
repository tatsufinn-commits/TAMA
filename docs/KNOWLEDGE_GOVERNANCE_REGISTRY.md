# TAMA KNOWLEDGE GOVERNANCE REGISTRY (Phase IX — Post-Audit)

**Date:** 2026-08-11 | **Status:** ACTIVE — lightweight metadata convention for authoritative knowledge
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

---

## 2. THE CANONICAL KNOWLEDGE REGISTRY

| ID | Title | Canonical Path / Source | Authority (Tier) | Status | Last Verified | Notes / Usage |
|---|---|---|---|---|---|---|
| **K-LAW-001** | PD 1096 statute 1977 | `00-CORE/PD-1096-NBCP/RAW/PD-1096_NBCP_FULLTEXT_1977.txt` | TIER 1 | CURRENT | 2026-08-10 | National Building Code statute |
| **K-LAW-002** | PD 1096 IRR 2005 | `00-CORE/PD-1096-NBCP/RAW/PD-1096_IRR-2005_FULLTEXT.txt` | TIER 1 | CURRENT | 2026-08-10 | Rules I to XIX verified tables |
| **K-LAW-003** | RA 9266 Architecture Act | `00-CORE/RA-9266-SPP-DOCS/RAW/RA-9266_...2004.txt` | TIER 1 | CURRENT | 2026-08-10 | Scope of practice & ownership |
| **K-LAW-004** | RA 9514 Fire Code | `00-CORE/RA-9514-FIRE-CODE/RAW/RA-9514_...2008.txt` | TIER 1 | CURRENT | 2026-08-10 | Means of egress & occupant loads |
| **K-LAW-005** | Fire Code IRR 2019 | Recorded / Official BFP RIRR 2019 | TIER 1 | VERIFIED | 2026-08-11 | Integrated in vault modules |
| **K-LAW-006** | BP 344 + IRR | `00-CORE/BP-344-ACCESSIBILITY/RAW/BP-344...1983.pdf` | TIER 1 | CURRENT | 2026-08-10 | Barrier-free dimensions & ramps |
| **K-EXT-GDRIVE-001** | **TAMA Google Drive Resource Hub** | `https://drive.google.com/drive/folders/1q5iXLUJ6hshigHmFlkCNNe9b8Zfv7d6P` | **TIER 1 (CURATED)** | **ACTIVE** | **2026-08-11** | **Off-Vault Primary Cloud Hub (HOA W1–W13, TOA Reviewers, Fajardo & Banister Fletcher)** |

---

## 3. GOOGLE DRIVE CLOUD RESOURCE CATALOG (`K-EXT-GDRIVE-001`)

The Google Drive repository contains verified course materials and textbooks:

1. **`AR198-06 - HOA REVIEWERS/` (Weeks 1 to 13 Slides & Documents)**:
   * `W1_1` to `W1_4`: Pre-Historic, Egyptian, Babylonian, Sumerian, Assyrian Architecture.
   * `W2_5` to `W2_15`: Minoan, Mycenaean, Classical Greek (Orders), Roman Imperial, Byzantine, Early Christian, Romanesque.
   * `W3_16` to `W3_23`: Gothic, Italian/French/Spanish/British/Russian Renaissance, Neoclassicism, Art Deco, Art Nouveau, Modern Pioneers.
   * `W4_24` to `W4_30`: Asian Architecture (India, China, Korea, Japan, Thailand, Indonesia, Malaysia).
   * `W5_31` to `W5_35`: Philippine Vernacular (Badjao, Samal, Tausug, Maranao, Ifugao, Bontoc, Isneg, Kalinga, Ivatan).
   * `W6_36` to `W6_41`: Philippine Colonial, Settlements, American Period, Early Republic, Martial Law Era, Heritage Laws (RA 10066).
   * `W10_42` to `W13_45`: Iconic Star Architects & Pritzker Architecture Prize Laureates (Parts 1 & 2).
   * `Deptl-Exam_ARIDBE2025-AR133-1P-1st-Tsem.pdf`: Actual Mapúa ARIDBE Departmental Exam Paper.
2. **`TOA Reviewers/`**:
   * Francis D.K. Ching Ordering Principles, Pritzker Awardee Profiles, Merged TOA-X Mock Reviewers.
3. **`BOOKS/`**:
   * Max B. Fajardo Jr. *Planning and Designers Handbook* (2nd Edition).
   * Sir Banister Fletcher *A History of Architecture on the Comparative Method*.

---

## 4. CLOUD INGESTION OPERATIONAL PROTOCOL (LAW IX)

To prevent exceeding the sandboxed workspace 128 MB snapshot cap:
* **Protocol:** When an AI agent needs knowledge from a Google Drive file:
  1. Download **ONLY** the specific target file via `gdown https://drive.google.com/uc?id=<FILE_ID>`.
  2. Parse and synthesize the text, tables, and architectural principles into clean 5-Layer Markdown inside `vault/` or `reviewers/`.
  3. **IMMEDIATELY DELETE** the downloaded binary file (`.pdf`, `.pptx`, `.docx`).
  4. Never download the full 2 GB root folder.
