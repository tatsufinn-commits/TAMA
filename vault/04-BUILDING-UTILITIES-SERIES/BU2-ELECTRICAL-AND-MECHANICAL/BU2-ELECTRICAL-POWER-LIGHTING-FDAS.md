# AR154-1 / BU2: ELECTRICAL POWER DISTRIBUTION, ARTIFICIAL LIGHTING & FIRE DETECTION ALARM SYSTEMS (FDAS)
**Course:** Building Utilities 2 (Electrical, Illumination Engineering & Mechanical Protection)  
**Academic Unit:** Mapúa BS Architecture 2nd/3rd Year  
**PRC ALE Category:** Part 2: Building Utilities, Electrical Systems, Lighting & Fire Safety (30% Weight)  
**High-Yield Exam Score:** 9.6 / 10  
**Governing Authorities & Standards:** Philippine Electrical Code 2017 (PEC Part 1), IES Lighting Handbook, NFPA 72 (National Fire Alarm and Signaling Code), RA 9514 (Fire Code).

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 First Principles of Alternating Current (AC) Power Systems
Electrical energy in buildings is distributed via alternating current (AC) sinusoidal waveforms operating at $60\text{ Hz}$ in the Philippines:
* **Single-Phase System ($1\phi$, 2-Wire or 3-Wire):** Nominal voltage $230\text{V}$ across Line-to-Neutral or Line-to-Line; standard for residential and small commercial spaces.
* **Three-Phase System ($3\phi$, 4-Wire Wye):** Nominal voltage $400\text{V} / 230\text{V}$ or $480\text{V} / 277\text{V}$; supplies heavy commercial motors, central HVAC chillers, and large elevator drives.
  $$P_{3\phi} = \sqrt{3} \cdot V_{LL} \cdot I \cdot PF$$

```
                         BUILDING POWER DISTRIBUTION HIERARCHY
  ┌──────────────────────────────────────────────────────────────────────────────────┐
  │ 1. UTILITY GRID: Meralco 13.8 kV / 34.5 kV Medium-Voltage Primary Distribution  │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 2. STEP-DOWN TRANSFORMER: Oil-immersed / Dry-Type Transformer ➔ 400V/230V Secondary│
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 3. MAIN DISTRIBUTION PANEL (MDP) / SWITCHGEAR: Air Circuit Breakers (ACB)        │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 4. AUTOMATIC TRANSFER SWITCH (ATS): Emergency Generator Backup Power Transfer    │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 5. LIGHTING & POWER PANELBOARDS: Branch Miniature Circuit Breakers (MCB)         │
  └──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. TECHNICAL MECHANICS, ILLUMINATION & FDAS

### 2.1 Illumination Engineering (The Lumen Method)
The number of luminaires required to achieve target lux levels is determined via the **Zonal Cavity Lumen Method**:
$$E = \frac{N \times \Phi_{lamp} \times CU \times LLF}{A} \implies N = \frac{E \times A}{\Phi_{lamp} \times CU \times LLF}$$
* $E =$ Required illuminance in Lux ($1\text{ Lux} = 1\text{ lumen/m}^2$).
* $N =$ Number of luminaires; $\Phi_{lamp} =$ Initial lumens per lamp.
* $CU =$ Coefficient of Utilization ($0.50–0.75$, accounts for room geometry and wall reflectance).
* $LLF =$ Light Loss Factor ($0.70–0.85$, accounts for lamp lumen depreciation and dirt accumulation).

### 2.2 Recommended Architectural Illuminance Standards (PEC & CIBSE):
* **Classrooms, Drafting Studios & Architecture Labs:** **$500\text{ Lux}$** (High visual acuity, CRI $\ge 80$).
* **General Commercial Offices & Workstations:** **$300 – 400\text{ Lux}$**.
* **Hotel Lobbies & Living Rooms:** **$150 – 200\text{ Lux}$** (Warm correlated color temperature $2700\text{K}–3000\text{K}$).
* **Corridors, Stairwells & Parking Basements:** **$100\text{ Lux}$**.

### 2.3 Fire Alarm & Detection Systems (FDAS / NFPA 72)
* **Smoke Detectors:** Optical photoelectric (detects smoldering fires) or ionization detectors. Maximum coverage radius = **$9.0\text{m}$** (approx. $80\text{ m}^2$ per detector).
* **Heat Detectors:** Rate-of-rise or fixed temperature ($57^\circ\text{C} / 135^\circ\text{F}$); installed in mechanical boiler rooms and commercial kitchens.
* **Manual Pull Stations (MCP):** Installed at every building exit doorway within **$1.50\text{m}$** of the exit path, mounted between **$1.10\text{m} – 1.40\text{m}$** above floor level.

---

## 3. PHILIPPINE STATUTORY & REGULATORY COMPLIANCE MATRIX

| Statutory Code | Section / Article | Mandatory Standard | Architectural Design Impact |
| :--- | :--- | :--- | :--- |
| **Philippine Electrical Code (PEC)** | Article 2.10.11 | Minimum Branch Circuits: Separate dedicated branch circuits mandatory for lighting, small appliances, and laundry. | Electrical plans must separate lighting and outlet circuits. |
| **PEC 2017** | Article 1.10.26 | Working Clearances around Electrical Equipment: Minimum **$1.00\text{m}$ clear workspace depth** and minimum $0.75\text{m}$ width in front of all panelboards. | Cannot block electrical panelboards behind furniture or doors. |
| **RA 9514 (Fire Code)** | Section 10.2.6.4 | Emergency Lighting Duration: Minimum **90 minutes (1.5 hours)** illumination on battery backup along all emergency exit corridors. | Detail emergency twin-spot light packs at every corridor turn. |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & LIGHTING DESIGN

### 4.1 Complete Architectural Drafting Studio Lighting Design
**Problem**: An architectural design drafting studio at Mapúa University measures $12.00\text{m (L)} \times 8.00\text{m (W)}$ ($A = 96.0\text{ m}^2$) with a ceiling height of $3.20\text{m}$.  
- Target illuminance for architectural drafting $E = 500\text{ Lux}$.  
- Selected Luminaire: 2-lamp recessed LED troffer ($2 \times 2,200\text{ lumens} = 4,400\text{ lumens/luminaire}$).  
- Room parameters: $CU = 0.65$, Light Loss Factor $LLF = 0.80$.  
- Calculate: (1) Total luminaires required ($N$), and (2) Physical layout grid in rows and columns.

```
Step 1: Calculate Number of Luminaires (N) via Lumen Formula
N = (E × A) / (Φ_luminaire × CU × LLF)
N = (500 Lux × 96.0 m²) / (4,400 lumens × 0.65 × 0.80)
N = (48,000) / (2,288) = 20.98 luminaires ➔ Adopt N = 20 or 24 for symmetrical grid.

Step 2: Establish Layout Grid (Rows × Columns)
For a 12.0m × 8.0m room:
Adopt 4 rows of 5 luminaires = 20 luminaires (or 4 rows of 6 = 24 luminaires for high lighting):
Let's select 4 rows × 6 fixtures = 24 Luminaires:
Provided Illuminance E_actual = (24 × 4,400 × 0.65 × 0.80) / 96.0 = 572.0 Lux (Exceeds 500 Lux target!).

Step 3: Luminaire Spacing Calculations
- Along 12.0m Length (6 fixtures): Spacing between fixtures = 12.0 / 6 = 2.00 m. End wall spacing = 1.00 m.
- Along 8.0m Width (4 rows): Spacing between rows = 8.0 / 4 = 2.00 m. Side wall spacing = 1.00 m.
➔ Spacing-to-Mounting-Height Ratio S/MH = 2.00m / 2.40m workplane = 0.833 (Well within 1.20 uniform limit!).
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: ELECTRICAL & FDAS RISERS                    │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. SUBSTATION / TRANSFORMER VAULT LOCATION:                                        │
│    • High-rise commercial buildings with private pad-mounted transformers must     │
│      locate the vault on the ground floor or basement perimeter with direct        │
│      heavy roll-up exterior doors for utility crane maintenance access.            │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 2. EMERGENCY GENERATOR PLACEMENT:                                                  │
│    • Standby diesel generators require: (a) Acoustic enclosure (≤ 75 dBA at 1m),   │
│      (b) Fuel day-tank storage, (c) Direct vertical exhaust riser venting at roof. │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Emergency Power Transfer Time under Fire Code):
Under the Revised Fire Code of the Philippines (RA 9514) and NFPA 110, when utility mains power fails, an Automatic Transfer Switch (ATS) must start the emergency generator and restore power to emergency exit lighting and fire pumps within what maximum time limit?
- A) 10 seconds
- B) 30 seconds
- C) 60 seconds
- D) 3 minutes
> **Correct Answer: A**  
> **Distractor Trap Analysis**:
> * Under RA 9514 and NFPA 110 (Emergency and Standby Power Systems, Level 1), emergency systems serving emergency egress illumination, exit signage, and fire alarms must achieve full power transfer within **10 seconds** of primary power interruption.

---

## 7. ACADEMIC REFERENCES & STATUTORY SOURCES
1. Institute of Integrated Electrical Engineers (IIEE). (2017). *Philippine Electrical Code 2017 (PEC Part 1)*. IIEE.
2. Illuminating Engineering Society (IES). (2020). *The Lighting Handbook* (10th ed.). IES.
3. National Fire Protection Association (NFPA). (2019). *NFPA 72: National Fire Alarm and Signaling Code*. NFPA.
