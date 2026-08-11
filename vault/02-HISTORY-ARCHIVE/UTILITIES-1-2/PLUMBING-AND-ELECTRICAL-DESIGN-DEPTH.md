# AR153P / BU1 & BU2: ADVANCED PLUMBING HYDRAULICS & ELECTRICAL LOAD COMPUTATION
**Course:** Building Utilities 1 & 2 (MEPFS Engineering Sequence)  
**Academic Unit:** Mapúa BS Architecture 2nd/3rd Year  
**PRC ALE Category:** Part 2: Building Utilities, Hydraulics & Electrical Systems (30% Weight)  
**High-Yield Exam Score:** 9.2 / 10  
**Governing Authorities & Standards:** Revised National Plumbing Code of the Philippines (PNPC), Philippine Electrical Code 2017 (PEC), Hunter's Curve Probability Theory, IES Lighting Handbook.

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 Water Supply Fixture Unit (WSFU) & Hunter's Curve
In multi-storey buildings, not all plumbing fixtures are operated simultaneously. Roy B. Hunter formulated the **Fixture Unit Method**, applying binomial probability to convert individual fixture flow demands into an estimated **Probable Maximum Demand (Peak Flow in GPM / L/s)**:
* As total WSFU increases, the probability of simultaneous use decreases, producing a non-linear demand curve.
* Flushometer valve fixtures exhibit high instantaneous demand curves compared to flush tank fixtures.

```
                      HUNTER'S PROBABILITY PEAK DEMAND CONVERSION
  ┌──────────────────────────────────────────────────────────────────────────────────┐
  │ 1. SYSTEM FIXTURE INVENTORY: Count all WCs, Lavatories, Showers, Urinals         │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 2. ASSIGN WSFU: Flush Tank WC (3.0 WSFU) vs Flushometer WC (5.0–10.0 WSFU)       │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 3. CONVERT VIA HUNTER'S CURVE: Total WSFU ➔ Peak Design Flow (GPM or L/s)        │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 4. ADD CONTINUOUS DEMAND: + Cooling Tower Makeup + Garden Hose Bibs (in GPM)     │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 5. HYDRAULIC SIZING: Hazen-Williams Equation ➔ Friction Loss & Pipe Diameter     │
  └──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. TECHNICAL MECHANICS, WSFU SIZING & ELECTRICAL LOAD BALANCING

### 2.1 Water Supply Fixture Units (WSFU) Matrix
| Fixture Type | Private Residential (WSFU) | Public Commercial (WSFU) | Minimum Water Supply Pipe |
| :--- | :---: | :---: | :---: |
| **Water Closet (Flush Tank)** | **$2.5 – 3.0$** | **$5.0$** | $12.7\text{mm}$ ($1/2"$) |
| **Water Closet (Flushometer Valve)**| **$6.0$** | **$10.0$** | $25.4\text{mm}$ ($1"$) |
| **Lavatory (Washbasin)** | **$1.0$** | **$2.0$** | $12.7\text{mm}$ ($1/2"$) |
| **Shower Head (Domestic)** | **$2.0$** | **$4.0$** | $12.7\text{mm}$ ($1/2"$) |
| **Kitchen Sink** | **$1.5$** | **$4.0$** | $12.7\text{mm}$ ($1/2"$) |
| **Urinal (Wall-Hung Flushometer)** | — | **$5.0$** | $19.0\text{mm}$ ($3/4"$) |

### 2.2 Electrical Demand Factors (PEC 2017 Table 2.20.42)
To prevent over-sizing transformers and main service entrance cables, demand factors are applied to total connected general lighting loads:
* First $3,000\text{ VA}$ or less: **$100\%$ Demand Factor**.
* From $3,001\text{ VA}$ to $120,000\text{ VA}$: **$35\%$ Demand Factor**.
* Remainder over $120,000\text{ VA}$: **$25\%$ Demand Factor**.

---

## 3. PHILIPPINE STATUTORY & REGULATORY COMPLIANCE MATRIX

| Authority / Code | Section / Provision | Statutory Mandate | Architectural Layout Rule |
| :--- | :--- | :--- | :--- |
| **Revised National Plumbing Code** | Section 604 | Minimum Water Pressure: Minimum **$103\text{ kPa}$ ($15\text{ psi}$)** at highest fixture outlet; maximum **$551\text{ kPa}$ ($80\text{ psi}$)** to prevent water hammer. | Buildings $>4$ storeys require booster pumps or overhead gravity roof tanks. |
| **Philippine Electrical Code (PEC)** | Article 2.15 | Maximum Voltage Drop: Feeder conductor voltage drop shall not exceed **$3\%$**; total overall drop (feeder + branch circuit) $\le \mathbf{5\%}$. | Dictates transformer room proximity to heavy mechanical chiller loads. |
| **PD 1096 NBCP** | Rule XIX Sec. 1902 | Potable Water Supply Storage: Minimum 1-day storage reserve for high-occupancy commercial and residential complexes. | Basements must allocate $0.5\text{ m}^3$ to $1.0\text{ m}^3$ per occupant for domestic cisterns. |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & SIZING CALCULATIONS

### 4.1 Electrical Load Schedule & Service Entrance Feeder Sizing
**Problem**: An architect is designing a 2-storey luxury residence with a Total Gross Floor Area $GFA = 300\text{ m}^2$.  
- General Lighting Load (PEC baseline) = $24\text{ VA/m}^2 \times 300\text{ m}^2 = 7,200\text{ VA}$.  
- Small Appliance Circuits = 3 circuits $\times 1,500\text{ VA} = 4,500\text{ VA}$.  
- Laundry Circuit = $1,500\text{ VA}$.  
- Special Equipment Loads: Electric Range ($8,000\text{ VA}$), Water Heater ($3,000\text{ VA}$), 3 Air Conditioners ($3 \times 1,800\text{ VA} = 5,400\text{ VA}$).  
- System: $230\text{V}$, single-phase, $60\text{ Hz}$.

```
Step 1: Compute General Lighting & Small Appliance Demand Load
Total Basic Load = 7,200 (Lighting) + 4,500 (Small Appliance) + 1,500 (Laundry) = 13,200 VA.
Apply PEC Demand Factors:
- First 3,000 VA @ 100% = 3,000 VA
- Remaining (13,200 - 3,000 = 10,200 VA) @ 35% = 3,570 VA
Net Lighting & Appliance Demand = 3,000 + 3,570 = 6,570 VA.

Step 2: Add Special Equipment Demand Loads (PEC Demand Factors)
1. Electric Range (8,000 VA) @ 80% demand = 6,400 VA
2. Water Heater (3,000 VA) @ 100% demand = 3,000 VA
3. Air Conditioners (5,400 VA) @ 100% demand = 5,400 VA
Total Net Calculated Load (VA_total) = 6,570 + 6,400 + 3,000 + 5,400 = 21,370 VA.

Step 3: Calculate Total Design Current (I_total)
I_total = VA_total / V = 21,370 VA / 230 V = 92.91 Amperes.
Add 25% continuous load safety factor for largest motor load (ACU):
Design Current = 92.91 A × 1.25 = 116.14 Amperes.

Step 4: Select Service Conductor & Main Circuit Breaker (PEC Table 3.10.2.6)
- Main Circuit Breaker: Provide 125A 2-Pole Molded Case Circuit Breaker (MCCB).
- Service Entrance Conductor: Provide 2 - 50 mm² (1/0 AWG) THHN Copper Conductor in 50mmØ PVC Conduit.
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: RISER DIAGRAM COORDINATION                  │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. PLUMBING DOWNFEED VS UPFEED SYSTEM:                                             │
│    • Low-Rise (1–3 Storeys): Direct municipal upfeed pressure (20–40 psi).         │
│    • High-Rise (>4 Storeys): Basement Cistern ➔ Transfer Pumps ➔ Overhead Roof    │
│      Gravity Tank (PRV pressure reducing valves every 5 floors to cap ≤ 80 psi).   │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 2. ELECTRICAL METER CENTER / TRANSFORMER VAULT:                                    │
│    • Multi-unit commercial/residential projects require a ground-floor Meter Room  │
│      accessible directly by Meralco meter readers from the exterior property line. │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Water Hammer & Pressure Surges):
A banging metallic pipe knock occurs whenever quick-closing flushometer valves are shut in a commercial restroom. What mechanical device must the architect specify in the plumbing working drawings to solve this problem?
- A) Backflow preventer valve at the water meter.
- B) An air chamber or water hammer arrester installed near the rapid-closing fixture.
- C) A floor drain trap primer.
- D) An automatic grease interceptor.
> **Correct Answer: B**  
> **Distractor Trap Analysis**:
> * Rapid valve closure abruptly halts flowing water momentum, converting kinetic energy into high-pressure shockwaves (water hammer). Air chambers or sealed stainless-steel water hammer arresters provide a compressible air cushion that absorbs pressure spikes.

---

## 7. ACADEMIC REFERENCES & STATUTORY SOURCES
1. National Master Plumbers Association of the Philippines (NAMPAP). (2018). *Revised National Plumbing Code of the Philippines*. NAMPAP.
2. Institute of Integrated Electrical Engineers (IIEE). (2017). *Philippine Electrical Code (PEC Part 1)*. IIEE.
3. Hunter, R. B. (1940). *Methods of Estimating Loads in Plumbing Systems*. National Bureau of Standards (NBS BMS65).
