# AR161 / BT1: PHILIPPINE CONSTRUCTION MATERIALS & CONFINED MASONRY SYSTEMS
**Course:** Building Technology 1 & 2 (Materials Science & Construction Detailing)  
**Academic Unit:** Mapúa BS Architecture 1st/2nd Year  
**PRC ALE Category:** Part 2: Building Materials & Methods of Construction (30% Weight)  
**High-Yield Exam Score:** 9.1 / 10  
**Governing Authorities & Standards:** PNS 06:2020 (Concrete Masonry Units), PNS 49:2020 (Rebar), ASTM C150 (Portland Cement), ASTM C33 (Concrete Aggregates), DPWH Blue Book Standard Specifications.

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 First Principles of Concrete Mixture Design (Water-Cement Ratio)
Concrete strength, durability, and porosity are primarily governed by **Abrams' Law of Water-Cement Ratio ($w/c$)**:
$$f'_c = \frac{A}{B^{(w/c)}}$$
* Lower $w/c$ ratio ($0.40–0.45$) produces dense, high-strength concrete with low permeability (ideal for basements and coastal foundations).
* Higher $w/c$ ratio ($>0.60$) results in excess bleed water, capillary voids, and drastic compressive strength loss ($>30\%$).

```
                    STANDARD PHILIPPINE NOMINAL CONCRETE PROPORTIONS
  ┌──────────────────────────────────────────────────────────────────────────────────┐
  │                                CLASS "AA" (1 : 1.5 : 3)                          │
  │     28-Day Strength: 27.6 MPa (4,000 psi) ➔ Pre-stressed, Underwater, High-Rise  │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │                                CLASS "A"  (1 : 2 : 4)                            │
  │     28-Day Strength: 20.7 MPa (3,000 psi) ➔ Beams, Columns, Slabs, Footings      │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │                                CLASS "B"  (1 : 2.5 : 5)                          │
  │     28-Day Strength: 17.2 MPa (2,500 psi) ➔ Non-structural slabs, CHB core-fill  │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │                                CLASS "C"  (1 : 3 : 6)                            │
  │     28-Day Strength: 13.8 MPa (2,000 psi) ➔ Lean concrete blinding, plant beds   │
  └──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. TECHNICAL MECHANICS, CONFINED MASONRY & STEEL REBAR

### 2.1 Confined Masonry vs. Unreinforced Masonry (URM)
In Philippine seismic Zone 4, unreinforced masonry experiences sudden brittle shear collapse under lateral earthquake shaking. **Confined Masonry** encloses load-bearing CHB panels within cast-in-place reinforced concrete **tie-columns** and **ring-beams (bond beams)**:
* Toothing / dowels ($10\text{mm}\phi$ bars every 2 layers of CHB, extending $300\text{mm}$ into tie columns) mechanically lock the masonry panel to the concrete framing.
* The masonry carries gravity loads and acts as an in-plane shear wall, while confining tie-columns prevent out-of-plane buckling.

### 2.2 Standard Deformed Steel Bar Specifications (PNS 49)
* **Standard Stock Lengths:** $6.0\text{m}$, $7.5\text{m}$, $9.0\text{m}$, $10.5\text{m}$, $12.0\text{m}$.
* **Unit Weight Formula per Linear Meter:**
  $$\text{Unit Weight } (kg/m) = \frac{d^2}{162} \quad (d = \text{nominal diameter in mm})$$
* **Standard Diameters & Unit Weights:**
  * $10\text{mm}\phi = 0.617\text{ kg/m}$ (Standard ties, stirrups, CHB rebar).
  * $12\text{mm}\phi = 0.888\text{ kg/m}$ (Secondary beam rebar, slab distribution bars).
  * $16\text{mm}\phi = 1.578\text{ kg/m}$ (Standard residential beam/column main longitudinal steel).
  * $20\text{mm}\phi = 2.466\text{ kg/m}$ (Medium commercial beam flexural steel).
  * $25\text{mm}\phi = 3.853\text{ kg/m}$ (Heavy girder and column reinforcement).

---

## 3. PHILIPPINE STATUTORY & REGULATORY COMPLIANCE MATRIX

| Code Authority | Section / Provision | Statutory Mandate | Architectural Compliance Rule |
| :--- | :--- | :--- | :--- |
| **DPWH Standard Specifications** | Item 405 (Concrete) | Slump Test Limits: $50\text{mm}–100\text{mm}$ ($2"–4"$) for standard beams and slabs; $75\text{mm}–150\text{mm}$ for columns and thin walls. | Excessively watery mix must be rejected on-site before discharge. |
| **PNS 49:2020** | Section 7 | Color-Coded Bar Markings: Grade 230 = White; Grade 275 = Yellow; Grade 415 = Green. | On-site inspections must verify yellow/green ends for structural members. |
| **PD 1096 NBCP** | Rule XII Sec. 1205 | Concrete Aggregates Maximum Size: Shall not exceed $1/5$ of narrowest dimension between forms, $1/3$ of slab depth, or $3/4$ of minimum clear rebar spacing. | Prevents aggregate honeycombing and voids around congested rebar. |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & ESTIMATING CALCULATIONS

### 4.1 Concrete Volume & Batching Take-Off (Class "A" Mix)
**Problem**: An architectural foundation layout requires 6 isolated footings ($1.50\text{m} \times 1.50\text{m} \times 0.40\text{m}$) and 6 tied columns ($0.30\text{m} \times 0.30\text{m} \times 3.50\text{m}$). Calculate total volume and number of $40\text{kg}$ Portland Cement bags, sand ($m^3$), and gravel ($m^3$) using Class "A" mix ($1:2:4$).

```
Step 1: Compute Total Concrete Volume (V_total)
1. Footings Volume = 6 pcs × (1.50 m × 1.50 m × 0.40 m) = 6 × 0.90 m³ = 5.40 m³.
2. Columns Volume = 6 pcs × (0.30 m × 0.30 m × 3.50 m) = 6 × 0.315 m³ = 1.89 m³.
Total Net Volume = 5.40 + 1.89 = 7.29 m³.
Add 5% concrete wastage allowance = 7.29 × 1.05 = 7.65 m³.

Step 2: Apply Class "A" Batching Constants (per 1 m³ of concrete)
Standard Philippine Estimating Factors (Class "A" 40kg bag):
- Cement = 9.0 bags / m³
- Sand = 0.50 m³ / m³
- Gravel = 1.00 m³ / m³

Step 3: Calculate Total Materials Required
- Cement Required = 7.65 m³ × 9.0 bags/m³ = 68.85 ➔ Order 69 bags Portland Cement (Type I).
- Sand Required = 7.65 m³ × 0.50 m³/m³ = 3.825 ➔ Order 4.0 m³ Screened Sand.
- Gravel Required = 7.65 m³ × 1.00 m³/m³ = 7.65 ➔ Order 8.0 m³ Crushed Gravel (3/4").
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: WORKING DRAWING DETAILS                     │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. REBAR LAP SPLICE SCHEDULE ON SCHEDULE OF BEAMS:                                 │
│    • Tension Lap Splice (Class B): Minimum 40 · db to 48 · db (e.g., for 16mm bar, │
│      lap length = 48 × 16mm = 768mm ➔ specify 800mm lap).                          │
│    • Top flexural bars must be spliced at midspan (where moment is positive/zero). │
│    • Bottom tension bars must be spliced at supports (where moment is negative).   │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 2. CHB CONTROL JOINTS:                                                             │
│    • Provide continuous vertical control joints (filled with elastomeric sealant)  │
│      every 6.0m in long unbroken walls to control drying shrinkage cracking.       │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Rebar Weight Calculation Trap):
What is the theoretical weight of a single $12\text{mm}\phi$ PNS 49 deformed steel bar with a commercial length of $9.00\text{m}$?
- A) $5.55\text{ kg}$
- B) $7.99\text{ kg}$
- C) $10.80\text{ kg}$
- D) $14.20\text{ kg}$
> **Correct Answer: B**  
> **Distractor Trap Analysis**:
> * Using the standard unit weight formula: $\text{Unit Weight} = \frac{d^2}{162} = \frac{12^2}{162} = \frac{144}{162} = 0.8888\text{ kg/m}$.
> * Total weight for $9.0\text{m} = 0.8888\text{ kg/m} \times 9.00\text{m} = 7.999\text{ kg} \approx 8.00\text{ kg}$.
> * Option A ($5.55\text{ kg}$) is the weight of a $6.0\text{m}$ bar (a common exam trap forgetting the specified $9.0\text{m}$ length).

---

## 7. ACADEMIC REFERENCES & STATUTORY SOURCES
1. Bureau of Philippine Standards (BPS). (2020). *PNS 49:2020 — Steel Bars for Concrete Reinforcement*. Department of Trade and Industry.
2. Department of Public Works and Highways (DPWH). (2013). *Standard Specifications for Public Works and Highways (Blue Book)*. Manila.
3. Fajardo, M. B. (2002). *Simplified Construction Estimate*. 5138 Merchandising.
