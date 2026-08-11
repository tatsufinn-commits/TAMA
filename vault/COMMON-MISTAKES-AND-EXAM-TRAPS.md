# COMMON MISTAKES & EXAM TRAPS — CROSS-COURSE (Layer 12 Knowledge)
**Purpose:** The misconception/trap catalog for `@mentor` (explain the error), `@examiner` (build distractor traps per Law III), and `@drillmaster` (rapid-fire correction drills).
**Compiled:** 2026-08-10 | **Confidence:** HIGH where tied to verified vault sources (cited); MEDIUM otherwise (standard exam-prep knowledge, labeled)

---

## 1. BUILDING LAWS & COMPUTATIONS (tied to verified IRR/vault files)

| # | Trap | Why students fall for it | Correct rule (source) |
|---|---|---|---|
| L1 | Using PSO **without firewall** when the design has a firewall (or vice versa) | Footnote e/f ignored | Table VIII.1 has two columns: e = without firewall, f = with firewall (e.g., Com-3: 80% vs 90%) — `PD-1096-IRR-2005-VERIFIED-TABLES.md` |
| L2 | Confusing **ISA vs TOSL vs USA** in the PSO formula | Memorizing numbers, not structure | PSO + TOSL = TLA; PSO + ISA = MACA; TOSL = ISA + USA (verified footnotes c/d) |
| L3 | Computing TGFA with gross lot area instead of applying FLAR properly | Formula misapplication | TGFA = TLA × FLAR (verify per zoning); AMBF from PSO × TLA |
| L4 | Using statute sections for IRR numbers | Statute-vs-IRR confusion | Exam numbers live in the **2005 IRR** (Rules I–XXI), not PD 1096 chapters — `PD-1096-IRR-RULES-INDEX.md` |
| L5 | Quoting **RA 9514 sections** for egress/occupant-load tables | Same statute-vs-IRR trap | RA 9514 has 17 administrative sections; technical egress tables are in the **Fire Code IRR** (Rule 10) |
| L6 | Saying "Certificate of Occupancy = fire clearance" | Instrument conflation | COC (PD 1096, Building Official) vs Fire Safety Inspection Certificate (BFP, RA 9514) — separate processes |
| L7 | Treating **PD 957** (regular subdivision/condo) and **BP 220** (economic/socialized housing) as the same standards | Name similarity | Different standards; BP 220 is the socialized-housing framework — `PD-957-BP220-HOUSING-LAWS-SUMMARY.md` |
| L8 | Forgetting **ECC** (PD 1586) exists separately from the building permit | Clearance conflation | Environmentally critical projects need ECC from DENR **before** construction — separate from PD 1096 permits |
| L9 | BP 344 accessible parking "3.70 m" vs regular parking "2.50 × 5.00 m" | Dimension overload | Accessible slot min width **3.70 m** (BP 344 IRR); average car slot **2.50 × 5.00 m** (PD 1096 IRR) — both verified in vault |
| L10 | BP 344 door clear width 0.80 m vs corridor 1.20 m | Context-free memorization | Doors: 0.80 m min clear; corridors: 1.20 m min clear (verified from IRR text) |

## 2. STRUCTURES & CALCULATIONS

| # | Trap | Correct rule |
|---|---|---|
| S1 | PL/4 for an **off-center** point load | PL/4 is center-load only; otherwise Mmax = R × distance to load (worked example in `STATICS-FUNDAMENTALS-AND-WORKED-EXAMPLES.md`) |
| S2 | UDL → point load placed at wrong location | W = wL acts at the **centroid** (L/2 for uniform) |
| S3 | Mixing units (kN vs N, m vs mm) | Convert first; factor-of-1000 errors are the most common arithmetic failure |
| S4 | Sign convention flip mid-solution | State convention once; keep it; verify with a second moment point |
| S5 | Moment arm measured along member instead of perpendicular | d = perpendicular distance from line of action to point |
| S6 | wL²/8 vs wL²/10 vs wL²/11 (simple vs continuous) | wL²/8 simple span; −wL²/10 or −wL²/11 continuous-support negative (ACI coefficient method) — `MOMENT-DISTRIBUTION-AND-RCD.md` |
| S7 | 1.2D + 1.6L vs other combinations | NSCP 2015 basic: Wu = 1.2D + 1.6L (gravity) — other combos for wind/seismic per NSCP |
| S8 | Treating a **pin** as a roller (or vice versa) in FBD | Pin = 2 reactions; roller = 1; fixed = 3 (incl. moment) |
| S9 | Negative reaction = "error" | Negative means the assumed sense was wrong — state actual sense, keep going |

## 3. MEPFS / UTILITIES

| # | Trap | Correct rule |
|---|---|---|
| U1 | Lux vs lumens vs candela | Illuminance (lux) = luminous flux (lm) ÷ area (m²); lumen is flux, lux is per-area |
| U2 | Reverberation time formula misuse | Sabine: RT = 0.161 V / A (seconds; V in m³, A = total absorption in m² sabins) — check units (some texts use 0.05 for feet) |
| U3 | HVAC: mixing cooling load with heat load | Sensible vs latent loads — psychrometric process must be specified |
| U4 | Plumbing: upfeed vs downfeed confusion | Upfeed: street pressure direct; downfeed: gravity from roof tank — affects pump/booster design |
| U5 | Electrical: branch circuit vs feeder | Feeder feeds panelboards; branch circuits feed outlets — load computation order matters |

## 4. HISTORY / THEORY / PH CONTEXT

| # | Trap | Correct rule |
|---|---|---|
| H1 | Locsin → Coconut Palace (actually Mañosa) | Locsin: CCP, PICC, NAIA 1; Mañosa: Coconut Palace, neo-vernacular |
| H2 | Nakpil neoclassic vs Antonio modernism | Nakpil: Quezon Hall (neoclassic); Antonio: FEU (modernist) |
| H3 | Bahay kubo vs bahay na bato anatomy | Kubo: all-natural, stilt; Bato: stone lower + timber upper, capiz windows, volada |
| H4 | Ildefonso Santos = building architect | He is the "father of Philippine **landscape** architecture" (Rizal Park) |
| H5 | Confusing Greek orders (Doric no base; Ionic volute; Corinthian acanthus) | See `HISTORY-OF-ARCHITECTURE-TIMELINE.md` |
| H6 | Vitruvian triad misorder | firmitas (firmness), utilitas (commodity), venustas (delight) — `PUBLIC-DOMAIN-THEORY-NOTES.md` |

## 5. HOW AGENTS SHOULD USE THIS FILE

- **@examiner:** each trap = one distractor option (Law III mandate: distractors are *real* mistakes). Cite the vault file in the rationale.
- **@mentor:** when a student makes an error, look it up here, explain WHY the wrong path is tempting, then re-drill.
- **@drillmaster:** build 5-minute rapid-fire sets from the "Correct rule" column (esp. L1–L10 numbers and S-series formulas).
- **Rule:** traps are derived from verified vault content or clearly-labeled standard exam-prep knowledge — never invented.

## Provenance

- Compiled 2026-08-10 from: verified IRR/BP 344/RA 9514/PD 957/BP 220 vault files (L-series, cited), standard structural/utilities engineering knowledge (S/U-series, labeled standard), and PH architecture attributions cross-checked per `PHILIPPINE-ARCHITECTURE-HISTORY.md` (H-series). Confidence per section above.
