# AR153P / BU1 & BU2: PLUMBING, SANITARY DRAINAGE & ELECTRICAL BRANCH CIRCUITS
**Course:** Building Utilities 1 & 2 (Plumbing, Drainage, Water Supply & Electrical Systems)  
**Academic Unit:** Mapúa BS Architecture 2nd Year  
**PRC ALE Category:** Part 2: Building Utilities, Plumbing & Electrical Services (30% Weight)  
**High-Yield Exam Score:** 9.5 / 10  
**Governing Authorities & Standards:** Revised National Plumbing Code of the Philippines (PNPC 2018 / RA 1378), Philippine Electrical Code 2017 (PEC 1 / NFPA 70), PD 1096 NBCP 2005 IRR Rule XIX.

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 First Principles of Gravity Drainage, Waste & Vent (DWV) Mechanics
Sanitary drainage systems operate strictly under **gravity flow**:
1. **Hydraulic Slope & Velocity:** Flow velocity must maintain self-scouring action ($0.60\text{ m/s to } 3.00\text{ m/s}$ or $2\text{ fps to }10\text{ fps}$). Slower velocity causes solids to settle and clog; excessive velocity causes liquid to outrun solids.
2. **Atmospheric Venting:** Drainage pipes flow partially filled (typically $1/2$ to $2/3$ full of liquid). Continuous atmospheric venting prevents siphoning of the liquid trap seal:
   * **Trap Seal Depth:** Minimum **$51\text{mm} – 102\text{mm}$ ($2" – 4"$)** water column.
   * **Siphonage Failure Modes:** Direct siphonage (induced suction), back-pressure (positive air compression), and capillary evaporation.

```
                           SANITARY DRAINAGE TRAP SEAL DYNAMICS
             ┌─────────────────────────┐
             │       VENT STACK        │ ◄── Equalizes Atmospheric Pressure (Prevents Siphon)
             └────────────┬────────────┘
                          │
  [ FIXTURE DRAIN ] ──────┼───────┐
                          │       │
                          │   ┌───┴───┐
                          │   │ P-TRAP│ ◄── 51mm to 102mm Water Trap Seal
                          │   └───┬───┘     (Blocks Sewer Gas Entry)
                          │       │
             ┌────────────▼───────┴────┐
             │    SOIL / WASTE STACK   │ ◄── Discharges at 2% Slope to Sewer
             └─────────────────────────┘
```

### 1.2 Electrical Power Fundamentals (Ohm's Law & Single-Phase Power)
* **Ohm's Law:** $V = I \cdot R$
* **Apparent Power ($VA$), Real Power ($W$), and Power Factor ($PF$):**
  $$P (Watts) = V \cdot I \cdot \cos\theta = V \cdot I \cdot PF$$
  *(where in the Philippines: Standard nominal voltage $V = 230\text{V}$, single-phase, $60\text{ Hz}$)*.

---

## 2. TECHNICAL MECHANICS, DWV SIZING & ELECTRICAL CIRCUITS

### 2.1 Drainage Fixture Units (DFU) & Minimum Pipe Sizing Matrix (PNPC)
| Plumbing Fixture | Drainage Fixture Unit (DFU) | Minimum Trap / Fixture Drain Size | Mandatory Invert Slope |
| :--- | :---: | :---: | :---: |
| **Water Closet (Flush Tank)** | **$3 – 4\text{ DFU}$** | **$75\text{mm} – 100\text{mm}$ ($3" – 4"$)** | $2\%$ ($20\text{mm/m}$) |
| **Water Closet (Flushometer Valve)**| **$6 – 8\text{ DFU}$** | **$100\text{mm}$ ($4"$)** | $2\%$ |
| **Lavatory (Washbasin)** | **$1\text{ DFU}$** | **$32\text{mm} – 38\text{mm}$ ($1-1/4" – 1-1/2"$)** | $2\%$ |
| **Kitchen Sink (Domestic)** | **$2\text{ DFU}$** | **$50\text{mm}$ ($2"$)** | $2\%$ |
| **Floor Drain / Shower Stall** | **$2\text{ DFU}$** | **$50\text{mm}$ ($2"$)** | $2\%$ |
| **Urinal (Wall Hung Flushometer)** | **$4\text{ DFU}$** | **$50\text{mm}$ ($2"$)** | $2\%$ |

### 2.2 Electrical Branch Circuit Sizing & Ampacity (PEC 2017)
* **Lighting Branch Circuit:**
  * Circuit Breaker: **$15\text{ Amperes}$** (Trip rating).
  * Wire Size: **$2.0\text{ mm}^2$ (#14 AWG) THHN/THWN Copper Wire**.
  * Maximum Connected Load: $15\text{A} \times 230\text{V} \times 80\% \text{ continuous cap} = 2,760\text{ VA}$ ($1,200\text{ VA}$ practical ceiling).
* **Convenience Receptacle (Outlet) Branch Circuit:**
  * Circuit Breaker: **$20\text{ Amperes}$**.
  * Wire Size: **$3.5\text{ mm}^2$ (#12 AWG) THHN/THWN Copper Wire**.
  * Maximum Duplex Outlets per Circuit: Maximum **$8 \text{ to } 10\text{ duplex outlets}$** ($180\text{ VA}$ per outlet).
* **Air Conditioner Dedicated Outlet (Window Type / Split Unit):**
  * Wire Size: **$5.5\text{ mm}^2$ (#10 AWG) Copper Wire** with **$30\text{A}$ Breaker**.

---

## 3. PHILIPPINE STATUTORY & REGULATORY COMPLIANCE MATRIX

| Authority / Code | Section / Provision | Statutory Mandate | Architectural Layout Rule |
| :--- | :--- | :--- | :--- |
| **Revised National Plumbing Code** | Section 705 | Horizontal Drainage Slope: Pipes $\le 100\text{mm}\phi$ must maintain minimum **$2\%$ slope ($1:50$)**; pipes $\ge 150\text{mm}\phi$ may maintain **$1\%$ slope ($1:100$)**. | Ceiling plenum drop must accommodate $20\text{mm}$ fall per linear meter of pipe run. |
| **Revised National Plumbing Code** | Section 708 | Cleanout Spacing: Cleanouts mandatory at every change of direction $>45^\circ$, at the base of every waste stack, and every **$15.0\text{m}$ ($50\text{ ft}$)** in horizontal runs. | Detail accessible access panels in walls/floors. |
| **Philippine Electrical Code (PEC)** | Article 2.10 | GFCI (Ground-Fault Circuit-Interrupter) Protection: Mandatory for all convenience outlets in bathrooms, kitchens (within $1.8\text{m}$ of sink), garages, and outdoor decks. | Architectural electrical plans must mark "GFCI" for wet area outlets. |
| **PD 1096 NBCP** | Rule XIX Sec. 1903 | Septic Tank Clearances: Digestion chamber $\ge 2/3$ volume; leaching chamber $\le 1/3$; minimum $1.5\text{m}$ from property line, $15.0\text{m}$ from potable water well. | Septic tanks cannot be placed inside building footprints. |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & SIZING CALCULATIONS

### 4.1 Septic Tank Sizing for a Residential Complex
**Problem**: An architect is designing a private 2-storey residential townhouse complex for 24 occupants.  
- Daily sewage generation rate = $190\text{ Liters/person/day} = 0.190\text{ m}^3/\text{person/day}$.  
- Hydraulic retention time = $24\text{ hours}$ ($1\text{ day}$).  
- Sludge and scum accumulation allowance = $50\%$ additional volume.  
- Calculate: (1) Total required volume, (2) Liquid dimensions assuming depth $d = 1.50\text{m}$ and width $W = 1.60\text{m}$, and (3) Digestion vs Leaching chamber lengths.

```
Step 1: Compute Daily Sewage Flow (Q_daily) & Total Required Volume (V_total)
Q_daily = 24 persons × 0.190 m³/person/day = 4.56 m³/day.
Total Volume (including 50% sludge buffer) V_total = 4.56 m³ × 1.50 = 6.84 m³.

Step 2: Determine Overall Septic Tank Surface Area & Length
Given Liquid Depth d = 1.50 m:
Required Floor Area A_floor = V_total / d = 6.84 m³ / 1.50 m = 4.56 m².
Given Tank Width W = 1.60 m:
Total Internal Length L_total = A_floor / W = 4.56 m² / 1.60 m = 2.85 m ➔ Adopt L = 3.00 m.

Step 3: Partition into Digestion Chamber (2/3) and Leaching Chamber (1/3)
1. Digestion Chamber Length L_dig = (2/3) × 3.00 m = 2.00 m (Volume = 2.0 × 1.6 × 1.5 = 4.80 m³).
2. Leaching Chamber Length L_leach = (1/3) × 3.00 m = 1.00 m (Volume = 1.0 × 1.6 × 1.5 = 2.40 m³).

Step 4: Air Space & Total Physical Depth
Per PNPC: Provide minimum 0.30m clear air space clearance above liquid level.
Total Physical Tank Depth H_total = 1.50 m (liquid) + 0.30 m (freeboard) = 1.80 m.
➔ Specify reinforced concrete 3-chamber septic tank: 3.00m (L) × 1.60m (W) × 1.80m (H).
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: PLUMBING RISERS & ELECTRICAL LAYOUTS        │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. PLUMBING WET WALL COORDINATION:                                                 │
│    • Back-to-back bathroom layouts share a single 200mm plumbing chase.            │
│    • Never embed horizontal 100mm PVC soil pipes directly inside structural beams.│
│    • Route drainage pipes through dropped ceiling plenums with acoustic insulation.│
├────────────────────────────────────────────────────────────────────────────────────┤
│ 2. ELECTRICAL PANEL BOARD LOCATION:                                                │
│    • Main Distribution Panel (MDP): Locate near center of electrical load          │
│      (e.g., utility/service area) with 1.0m clear workspace in front.              │
│    • Panelboards are strictly prohibited inside clothes closets or bathrooms.      │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Plumbing Code Soil Pipe Gradient):
Under the Revised National Plumbing Code of the Philippines, what is the mandatory minimum slope for a $100\text{mm}$ ($4"$) horizontal sanitary drainage soil pipe serving a bank of 4 water closets?
- A) $0.5\%$ ($5\text{mm per meter}$)
- B) $1.0\%$ ($10\text{mm per meter}$)
- C) $2.0\%$ ($20\text{mm per meter}$ or $1/4\text{" per foot}$)
- D) $4.0\%$ ($40\text{mm per meter}$)
> **Correct Answer: C**  
> **Distractor Trap Analysis**:
> * For pipes $100\text{mm}$ ($4"$) or smaller, the plumbing code strictly mandates a minimum **$2\%$ slope** ($20\text{mm/m}$) to maintain the scouring velocity ($0.6\text{ m/s}$) needed to carry suspended solids.
> * Option B ($1.0\%$) is only permitted for large trunk pipes $\ge 150\text{mm}$ ($6"$) where liquid volume is substantial.

---

## 7. ACADEMIC REFERENCES & STATUTORY SOURCES
1. National Master Plumbers Association of the Philippines (NAMPAP). (2018). *Revised National Plumbing Code of the Philippines*. NAMPAP.
2. Institute of Integrated Electrical Engineers of the Philippines (IIEE). (2017). *Philippine Electrical Code (PEC Part 1, 2017 Edition)*. IIEE.
3. Fajardo, M. B. (2001). *Plumbing Design and Estimate*. 5138 Merchandising.
4. Fajardo, M. B. (2000). *Electrical Layout and Estimate*. 5138 Merchandising.
