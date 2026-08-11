# BUILDING UTILITIES 1–2 — PLUMBING & ELECTRICAL SYSTEMS: DESIGN DEPTH (BU1-2 EXPANSION)
**Course:** AR153P Building Utilities 1 (Plumbing & Sanitary) · BU2 (Electrical/Mechanical) · UTILITIES-1-2 cluster
**Depth Level:** 3 (Functional — design procedures + worked examples + PH code context)
**High-Yield Score:** 8.6 / 10 (fixture-unit & load computations are standard deptal/ALE items)
**Knowledge Value Score:** 87/100
**Status:** VERIFIED (standard practice, multi-source) / PH code values flagged

---

## Source Information
- **Sources (labeled):**
  - CED Engineering — *Design of Potable Water Plumbing Systems* (US, open PDF, Tier 2): Hunter's fixture-unit method history, q = 20·d²·√p outlet formula, continuous-demand addition.
  - Simulations4All fixture-unit calculator reference (IPC/UPC 2021 tables, Tier 3): DFU/WSFU concept, IPC drain-sizing table (representative — VERIFY against PH code).
  - Kamal Engineering drainage-calculation guide (Tier 3, labeled): NSPC + UPC tables comparison; WC = 4 DFU; min pipe sizes.
  - Plumbercalc fixture-unit guide (Tier 3): IPC/UPC fixture-unit values, Hunter's curve non-linearity, hot/cold split (hot ≈ 75% of total).
- **Vault links:** `PLUMBING-AND-ELECTRICAL-SYSTEMS.md` (existing overview — this file deepens), `MEPFS-WORKED-CALCULATIONS.md` (sizing concept example), SOURCE-REGISTRY (PH codes paid — verify editions), `COMMON-MISTAKES-AND-EXAM-TRAPS.md` (U-series).
- **Confidence:** MEDIUM–HIGH — the methods are universal; **PH-code-specific values require verification against the current Revised National Plumbing Code & PEC** (registry; not held).

---

## 1. PLUMBING — WATER SUPPLY DESIGN

### 1.1 The Fixture-Unit Method (Hunter's method — the core concept)
- Fixtures are assigned **fixture-unit (FU) weights** based on their probable flow rate and time of use (Hunter's probability theory).
- Total FU → converted to **probable peak flow (gpm/L/s)** via **Hunter's curve** (non-linear — more fixtures → lower per-fixture demand because simultaneous-use probability drops).
- **Continuous demands** (hose bibs, cooling-tower makeup, process water) are added **separately** (in gpm) — never folded into FU.

**Representative fixture-unit values (IPC-style — verify PH code tables):**
| Fixture | Supply FU | Drain (DFU) |
|---|---|---|
| Water closet (tank) | 2.5–3.0 | 3.0–4.0 (UPC 4.0) |
| Shower | 2.0 | 2.0 |
| Kitchen sink | 1.5–2.0 | 2.0 |
| Lavatory | 1.0 | 1.0 |
| Urinal | 2.0–5.0 (flush type) | 2.0–4.0 |
| Janitor sink | 3.0 | 3.0 |
| Floor drain | — | 0–2 |

**Sizing logic:** total FU → code table (developed length + available pressure) → minimum pipe size. High pressure/short runs allow smaller pipes.

### 1.2 Outlet Flow Formula (VERIFIED — CED Engineering)
```
q = 20 × d² × √p
q = flow (gpm); d = actual inside diameter (in); p = flow pressure (psi)
```
Example: 3/8" supply at 16 psi → q = 20 × (0.375)² × √16 = 20 × 0.141 × 4 = **11.3 gpm** (≈ 0.71 L/s).

### 1.3 System Configurations
- **Upfeed (direct):** street/mains pressure supplies fixtures directly — simple, no storage; pressure varies.
- **Downfeed (gravity):** roof tank → gravity distribution — constant pressure, storage reserve; PH standard for intermittent supply; tank sized for 1–2 days' demand typical.
- **Booster pumps** for high-rise zones (pressure zones every ~30–40 m).

### 1.4 Sanitary Drainage Principles
- **DFU system:** fixtures → traps → branch → stack → building drain → sewer/septic.
- **Traps:** every fixture needs a trap (water seal) + vent connection.
- **Venting:** vents protect trap seals (siphonage/blowout prevention); individual vent ≥ 1-1/4" and ≥ half the drain diameter (representative rule — verify code).
- **Pipe sizing (representative IPC-style limits):** 2" branch → ~10 DFU (vertical ~16); 3" → 35/48; 4" → 216/256 (verify PH code).
- **Minimum sizes:** WC drain min 3" regardless of DFU count (a classic trap).
- **Slope:** gravity drains ~1/8"–1/4" per foot (representative).

## 2. ELECTRICAL — BASIC DESIGN

### 2.1 Load Computation (PEC-based — verify current edition)
- **Lighting loads:** watts per m² (or per area/outlet) per occupancy (PEC tables — verify).
- **Receptacle loads:** per outlet or per m²; demand factors for groups (first 10 kVA at 100%, remainder at 50% — representative residential rule).
- **Feeder/panel sizing:** sum branch loads → apply demand factors → size feeder + overcurrent protection.
- **Current formulas:**
  - Single-phase: **I = P / (V · pf)**
  - Three-phase: **I = P / (√3 · V · pf)**
  - Example (from MEPFS file): 4,600 W at 230 V single-phase → I = 20 A → 20 A branch circuit minimum.

### 2.2 Branch Circuits vs Feeders (the classic distinction)
- **Branch circuit:** from final overcurrent device to outlets/fixtures (15/20 A typical; lighting/power).
- **Feeder:** from panel to panel/subpanel.
- Sizing order: branch loads → panel load → feeder → service entrance.

### 2.3 Design Coordination (BU2 role)
- Panel schedules, riser diagrams, grounding (PEC), PWD/emergency lighting, fire-alarm circuits (ties RA 9514 — verify Fire Code IRR).
- Coordination with mechanical (HVAC power, elevators) and plumbing (pumps) — the MEPFS integration in studios.

## 3. WORKED EXAMPLE — RESIDENTIAL WATER SUPPLY SIZING (concept)
**Given:** house with 2 WCs, 2 lavatories, 1 shower, 1 kitchen sink, 1 laundry tub.
- **FU total (supply, representative):** 2(3.0) + 2(1.0) + 1(2.0) + 1(2.0) + 1(3.0) = 6+2+2+2+3 = **15 FU**
- **Probable flow (Hunter curve, representative):** ≈ 12–15 gpm (≈ 0.76–0.95 L/s) → main supply pipe ≈ 3/4"–1" (verify against PH code table + pressure).
- **Downfeed option:** roof tank ≈ 1–2 days' demand (family of 5: ~600–1,200 L typical — verify local practice).

**Trap:** converting FU linearly to gpm (wrong — use the curve/table); ignoring continuous demands; under-sizing the WC drain (min 3").

## 4. WORKED EXAMPLE — SIMPLE ELECTRICAL PANEL LOAD (concept)
**Given:** 10 lighting points @ 100 W each; 8 receptacles @ 180 VA each; single-phase 230 V.
- Lighting: 10 × 100 = 1,000 W; Receptacles: 8 × 180 = 1,440 VA → demand factor (first 3 kVA 100% → all covered) = 1,440 VA.
- Total = 2,440 VA → I = 2,440 / 230 = **10.6 A** → 15 A branch circuit adequate; two circuits if split.

**Trap:** VA vs W vs pf; forgetting demand factors; line-to-neutral vs line-to-line voltage.

## 5. PHILIPPINE CODE CONTEXT (verify current editions)
- **Revised National Plumbing Code (PNPC)** — fixture-unit tables, min sizes, venting (current edition — verify; registry record).
- **Philippine Electrical Code (PEC Part 1/2)** — load computations, branch circuits, demand factors (verify edition; registry).
- **Philippine Mechanical Code** — pumps/HVAC tie-ins (verify).
- These are TIER-1 authoritative but **not held** (paid publications) — all PH-specific numbers above are representative-educational, flagged for verification against the current codes.

## 6. COMMON MISTAKES (U-series — ties COMMON-MISTAKES file)
| Trap | Fix |
|---|---|
| FU → gpm linear conversion | Use Hunter curve/code table (non-linear) |
| Continuous demand inside FU | Add separately (gpm) |
| WC drain < 3" | Min 3" for WC regardless of DFU |
| Vent undersized | ≥1-1/4" and ≥½ drain diameter (verify) |
| Feeder vs branch confusion | Sizing order: branch → panel → feeder → service |
| Single vs 3-phase current formula | I = P/(V·pf) vs P/(√3·V·pf) |
| Ignoring demand factors | Over-sized panels otherwise |
| PH code numbers from memory | Verify against current PNPC/PEC editions |

## 7. CROSS-COURSE CONNECTIONS
```
BU1-2 ↔ BU3 (MEPFS integration) ↔ STUDIO (systems coordination in DD)
↔ STRUCTURES (chases vs structure) ↔ PP (code compliance)
↔ TROPICAL (rainwater harvesting, water efficiency) ↔ GREEN BUILDING (BERDE water/energy credits)
```

## 8. SUGGESTED STUDY
- FU computation: 5 fixture mixes → total FU → probable flow (state curve/table source).
- Drain sizing: route a bathroom group → branch/stack sizes (verify code).
- Electrical: 3 panel-load computations (residential, small office, mixed).
- Scenario: high-rise water supply — why downfeed + booster zones? (essay)

## Provenance
Compiled 2026-08-10 from standard plumbing/electrical design practice (CED Engineering open PDF; IPC/UPC/NSPC reference tables — Tier 2-3, labeled), cross-referenced with vault MEPFS files and PH code registry records. **All PH-code-specific numbers flagged UNVERIFIED until current PNPC/PEC editions are consulted.** Status: VERIFIED (methods) / UNVERIFIED (PH code values).
