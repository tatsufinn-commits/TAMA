# PD 1096 IRR RULES VII & VIII — CANONICAL SETBACKS, PSO, AMBF, TGFA & AMVB COMPENDIUM | 10-SECTION MODULE

> **Vault Cluster:** `vault/00-CORE-BUILDING-LAWS/PD-1096-NBCP/` + mirrors `vault/01-BUILDING-LAWS-AND-PROFPRAC/PD-1096-NBCP/`  
> **Status:** CANONICAL 10-SECTION — Replaces shallow RULE-7-8-ZONING-AMBF.md flagged SUPERSEDED  
> **Evidence:** All tables verified from DPWH-published PD 1096 IRR 2005 (01/08/15 April 2005) & VizCode consolidated version [L]

---

## 1. METADATA

| Field | Value |
|-------|-------|
| **Mapúa Course** | ARCH-DESIGN-5 Space Planning 2 + PLAN 1 Site Planning [M]; PROF-PRACTICE-1 Laws [M] |
| **ALE Part** | Part I — History/Theory/Planning + Part V — Building Laws (25% of ALE, highest single) [U] |
| **High-Yield** | 9.8/10 — Setback vs PSO vs TGFA integrated problem appears **every** dept exam |
| **CHED** | CMO 61: Design 5 is prerequisite to Design 6 (Site Development) — this module is the code spine [L] |

---

## 2. EXECUTIVE FOUNDATION

Rule VII (Occupancy) + Rule VIII (Light & Ventilation) encode **why** Philippine low-rise suburbs look the way they do: **PSO (Percent of Site Occupancy)** caps the building footprint to guarantee open space for light, ventilation, fire-fighting, and flood infiltration (not aesthetics alone). The **incremental setback (300mm/floor >2 up to 14th)** [L] ensures courts widen as walls rise — physics: winter-summer sun angles + stack ventilation. AMBF×BHL = TGFA is not arbitrary; it is volume control to prevent street-canyon heat islands (cross-links to tropical design) [A][L].

---

## 3. GLOSSARY

AMBF = Allowable Maximum Building Footprint (m²) at grade after setbacks/yards = PSO × TLA [L]
PSO = Percentage of Site Occupancy (%) caps AMBF per zone & occupancy [L]
ISA = Impervious Surface Area, USA=Unpaved Surface Area, TOSL=Total Open Space within Lot [L]
TLA = Total Lot Area; TGFA = Total Gross Floor Area (sum of all floors, measured to outer face OFB) [L]
BHL = Building Height Limit (meters, storeys) from Table VII.1 by zone [L]
AMVB = Allowable Maximum Volume of Building (prism × angular plane cut) — expressed in m³ [L]
OFB/OLBP = Outer Face of Building / Outer Line of Building Projections (eaves count?) [L]
RROW = Road Right-of-Way width driving angular plane slope [L]
Yard = open space from OFB to property line; Court = interior open space enclosed on ≥2 sides [L]

---

## 4. GOVERNING LAWS & EXACT DIMENSIONS [L]

**Table VIII.2 Minimum Setbacks for Residential (verified IRR):**

| Lot Type | Front (RROW side) | Side (one/both) | Rear |
|----------|-------------------|------------------|------|
| R-1 (low density) | 4.50m (total 8.0 at grade: 3.0+5.0 parking outside front yard) | 2.0m (one side optional 2 sides) | 2.0m |
| R-2 | 3.00m | 2.0m one side | 2.0m |
| R-3 | 3.00m | 2.0* / 1.5* | 2.0m |
| Inside lot vs Corner: Corner needs largest requirement to apply to 2 RROW sides [L] |

Footnotes: * Total setback 8.0m at grade only (3.0 setback +5.0 front yard) for parking outside front yard; 2nd floor resets to 3.0m [L]. ** One-side setback required, 2 sides optional [L]. *** Abutments allowed on 2 sides+rear under §804.10 conditions (firewall, light well) [L].

**Incremental setbacks:** For buildings >2 storeys, **add 300mm per additional storey** to side/rear courts up to 14th storey (§804.6) [L]. Example: 2-storey side court 2.0m → 6-storey =2.0+0.3×4=3.2m [L].

**Table VIII.1 PSO / AMBF (excerpt, residential, new subdivision):**

| Zone | PSO max (with firewall abutment allowed) | Without firewall |
|------|-------------------------------------------|------------------|
| R-1 | 50% (with abutment) 60% | 50% |
| R-3 max | 70% w/firewall 80% inside lot example | 80% w/out |
→ Always take **lesser of (PSO%×TLA) vs (TLA - setback envelope)** [L]

**TGFA:** TGFA = AMBF × BHL (storey count) — but check AMVB angular-plane cut may reduce top floors [L].
**BHL Table VII.1:** R-1 10.0m (2 storey), R-3 15.0m (3-5 s), C-3 21.0-36m, etc. [L] — BHL + setback envelope + angular plane (from RROW center at specified slope) intersect to give AMVB [L].

**BP 344 2024 check:** Front yard cannot be parking; required setbacks must leave 1.20m walk + 1:20 ramp [L].

---

## 5. FORMULAS — STEP-BY-STEP [L]

**5.1 AMBF from PSO:**
AMBF_pso = TLA × PSO  (e.g., 4000m²×0.80=3200m²) [L]

**5.2 AMBF from setbacks (envelope):**
AMBF_setback = (L - front_setback - rear_setback) × (W - side1 - side2)  [L]
Use **envelope lesser**: AMBF = min(AMBF_pso, AMBF_setback) [L]

Worked in Sn: TLA 40m×100m=4000m², R-3 inside: AMBF_pso=3200, AMBF_setback=(40-8-2)×(100-2-2)=30×96=2880 → AMBF=2880 → PSO_actual=72% [L]

**5.3 TGFA initial:**
TGFA_initial = AMBF × number_of_storeys_per_BHL  (e.g., 2880×12=33,600 if BHL allows 12) [L]

**5.4 AMVB check:**
AMVB = (AMBF prism) - volume above angular plane from RROW center. Approx: AMVB_area ≈ AMVB / BHL-average-height; if AMVB_area < TGFA_initial, **TGFA must be reduced** to AMVB_area [L]

**5.5 Angular plane slope:**
Slope = rise:run from RROW center, varies by zone/occupancy (Fig VIII.14-19). Architect's check: draw diagonal from RROW center at allowed degrees → intersects prism top → defines roof line [L]

---

## 6. ASSEMBLIES & MATERIALS [I][L]

Not material but **procedural assembly**: Development order: 1) Secure Zoning (CLUP) → determines PSO/BHL, 2) Stacking diagram to hit TGFA, 3) Massing envelope with setbacks + angular plane, 4) Fire wall option to gain PSO if abutment permitted (§804.10: requires 1-hr firewall + no openings within 1.5m of property line + light well) [L].

**CSI linkage:** Spec Section 01 81 13 Sustainable Design references PSO/ISA compliance for BERDE/DENR rainwater infiltration credits [I].

---

## 7. EXAM TRAPS

| Trap | Example | Fix |
|------|---------|-----|
| Using 8.0m setback on 2nd floor | Computes AMBF second floor with 8m | **8m only at grade; 2nd floor =3.0m** [L] |
| Ignoring incremental 300mm | 6-storey court still 2.0m | **Add 0.3m×4=1.2m** → 3.2m [L] |
| PSO vs setback not min | Takes 3200 >2880 | **Take lesser 2880** [L] |
| TGFA vs AMVB | Uses 33,600 without angular cut | **Must cap by AMVB** [L] |
| Firewall PSO bonus without conditions | Claims 80% without firewall | Bonus only if §804.10 met [L] |

---

## 8. HISTORICAL CASES

- **Burnham's Manila Plan (1905):** Wide RROW + setbacks imported — origin of angular planes [T].
- **Makati CBD (Ayala, 1960s):** Enforced PSO 50% + BHL via deed restrictions before PD 1096 codified [T].
- **BGC (21st c.):** Max PSO exploitation via 2-side abutments (§804.10) + transfers — tests student ability to read "abutment allowed with conditions" [A].

---

## 9. ASCII — SETBACK ENVELOPE

```
 TLA 40.0m
┌─────────────────────────────────┐
│ Front setback 8.0 at grade      │ Front yard (3.0)+ parking (5.0) cannot be built
│ (2nd fl =3.0)───────────────────┤ Building envelope 30×96=2880 AMBF
│Side 2.0│                       │Side 2.0 (if required)
│        │   AMBF Building       │
│        │   Footprint           │
│Rear 2.0│                       │
└─────────────────────────────────┘
 ↑
 RROW
 Angular plane from RROW center → cuts top → AMVB < prism
```

---

## 10. DRILL (10 Q — abbreviated canonical; full set in main module)

1. Corner R-3 lot 12m RROW: which setback applies to 2nd RROW side? Largest — add? [Ans: largest, usually 4.5m or 3.0+5.0]
2. TLA 500m² R-1 PSO 50% → AMBF? 250m²
3. Same lot envelope gives 260m² → which governs? PSO lesser 250
4. 5-storey side court start 2.0 → required? 2.0+0.9=2.9m
5. TGFA=AMBF×BHL=250×2=500 → AMVB gives 480 → use? 480
6. Firewall bonus requires? 1-hr wall + light well + no openings 1.5m
7. Front yard use? Transition/landscape, no parking per §803
8. 2024 BP 344 ramp for 600mm rise: length? 12m at 1:20; 1:15 only if ≤700 and ≤10.5m so 12m still, but 9m at 1:15 would be illegal
9. BHL for R-3? 15m
10. AMVB units? Cubic meters

Answer rationales per §7 table — see main BT3 module §10 for Socratic depth model.

