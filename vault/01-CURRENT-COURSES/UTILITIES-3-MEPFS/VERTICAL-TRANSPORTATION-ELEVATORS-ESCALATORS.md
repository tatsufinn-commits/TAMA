# AR155-1 / BU3: VERTICAL TRANSPORTATION — ELEVATOR CORE SIZING & ESCALATOR TRAFFIC DYNAMICS
**Course:** Building Utilities 3 (MEPFS Systems)  
**Academic Level:** Mapúa BS Architecture 3rd Year (ARIDBE)  
**PRC ALE Category:** Part 2: Building Utilities, Vertical Transportation & Conveying Equipment (30% Weight)  
**High-Yield Exam Score:** 8.8 / 10  
**Governing Authorities & Standards:** ASME A17.1 / CSA B44 (Safety Code for Elevators and Escalators), PD 1096 NBCP 2005 IRR Rule XX, BP 344 (Accessibility Law), RA 9514 (Fire Code).

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 First Principles of Vertical Transport Planning
Vertical circulation cores determine the structural efficiency, rentable floor plate efficiency, and emergency egress safety of multi-storey buildings.
* **Round-Trip Time ($RTT$):** The average time (in seconds) required for an elevator to complete a single circuit from the main lobby, deliver passengers to upper floors, and return to the ground floor lobby.
* **5-Minute Handling Capacity ($HC_{5min}\%$):** The percentage of total building population that the elevator bank can transport within a 5-minute peak traffic rush (typically morning up-peak):
  $$HC_{5min}\% = \frac{300 \cdot P \cdot N}{Pop_{bldg} \cdot RTT} \times 100\%$$
  *(where $P = \text{passenger capacity per car}$, $N = \text{number of elevator cars in bank}$, $Pop_{bldg} = \text{total building population}$, $RTT = \text{round trip time in seconds}$)*.

### 1.2 Target Performance Benchmarks:
| Building Occupancy Type | Minimum 5-Min Handling Capacity ($HC_{5min}\%$) | Target Average Waiting Time ($AWT$) |
| :--- | :---: | :---: |
| **Commercial BPO / Office Towers** | **$12\% – 15\%$** of total population | **$\le 25 – 30\text{ seconds}$** |
| **High-Rise Residential Condominiums** | **$6\% – 8\%$** of total population | **$\le 45 – 60\text{ seconds}$** |
| **Luxury Hotels** | **$10\% – 12\%$** of total population | **$\le 30 – 40\text{ seconds}$** |
| **Tertiary General Hospitals** | **$10\% – 12\%$** (Bed lifts + staff cars) | **$\le 35 – 40\text{ seconds}$** |

---

## 2. TECHNICAL MECHANICS, ELEVATOR TYPOLOGY & SHAFT ASSEMBLIES

| Elevator Typology | Operating Mechanics & Drive | Speed & Travel Limits | Spatial & Structural Requirements |
| :--- | :--- | :--- | :--- |
| **Direct Hydraulic Elevator** | Hydraulic fluid pumped into steel piston cylinder under car. | Speed: $0.25 – 0.75\text{ m/s}$.<br>Max rise: $2 – 5\text{ storeys}$ ($15\text{m}$). | Requires deep in-ground cylinder borehole equal to travel height; adjacent basement machine room. |
| **Machine-Room-Less (MRL) Traction** | Compact permanent-magnet synchronous motor mounted directly on hoistway guide rails at top of shaft. | Speed: $1.0 – 2.5\text{ m/s}$.<br>Max rise: Up to $25\text{ storeys}$ ($80\text{m}$). | **Zero rooftop penthouse machine room required**; saves roof profile and structural dead load. |
| **Geared Traction Elevator** | AC/DC motor connected to worm gear reduction unit and drive sheave. | Speed: $1.0 – 2.5\text{ m/s}$.<br>Max rise: $15 – 30\text{ storeys}$ ($100\text{m}$). | Overhead machine room required ($2\times$ shaft footprint) directly above hoistway. |
| **Gearless High-Speed Traction** | Slow-speed, high-torque motor with drive sheave directly attached to rotor shaft. | Speed: $2.5 – 10.0\text{ m/s}$ ($500 – 2,000\text{ FPM}$).<br>Rise: High-Rise Skyscrapers ($>30\text{ storeys}$). | Heavy overhead structural slab; double-wrap drive traction; large bottom pit buffer ($2.5–3.5\text{m}$). |

---

## 3. PHILIPPINE STATUTORY & REGULATORY COMPLIANCE MATRIX

| Authority / Code | Section / Provision | Statutory Mandate | Architectural Core Dimension Rule |
| :--- | :--- | :--- | :--- |
| **BP 344 (Accessibility Law)** | Rule II Sec. 2.1 | Minimum Accessible Elevator Dimensions: Clear door opening $\ge \mathbf{0.80\text{m}}$; Car interior $\ge \mathbf{1.10\text{m (W)} \times 1.40\text{m (D)}}$; Call button height at $\mathbf{0.90\text{m} – 1.20\text{m}}$ above floor with Braille and raised tactile numbering. | Every multi-storey public building must provide at least 1 accessible elevator reaching all floor levels. |
| **PD 1096 NBCP** | Rule XX Sec. 2003 | Elevator Hoistway Fire Rating: **2-Hour Fire Resistance** for shafts serving 4 or more storeys; 1-hour for shafts under 4 storeys. Automatic smoke vents at shaft top ($3.5\%$ of shaft area). | Structural core walls must be minimum $200\text{mm}$ thick reinforced concrete. |
| **RA 9514 (Fire Code)** | Section 10.2.13.1 | Firefighter Emergency Operations (Phase I & Phase II): Automated Phase I recall to ground lobby upon smoke alarm trigger; Phase II in-car key switch for BFP firefighter control. | Elevators cannot be used as a required means of egress unless designated as an Evacuation Elevator. |
| **ASME A17.1 / PMEC** | Table 6 | Escalator Incline Angle: Maximum allowable incline is **$30^\circ$** (or $35^\circ$ for rises $\le 6.0\text{m}$ at speed $\le 0.5\text{ m/s}$). | Governs horizontal run floor opening length ($L_{run} = \frac{H}{\tan 30^\circ} + \text{landings}$). |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & TRAFFIC CALCULATIONS

### 4.1 Elevator Bank Sizing & 5-Minute Handling Capacity
**Problem**: A 20-storey commercial office building in Ortigas has a total net leasable area of $18,000\text{ m}^2$.  
- Population density = $10\text{ m}^2/\text{person} \implies Pop_{bldg} = 1,800\text{ persons}$.  
- Selected elevator car capacity $P = 1600\text{ kg} \approx 20\text{ passengers}$.  
- Calculated Round-Trip Time ($RTT$) during peak up-peak rush = $150\text{ seconds}$.  
- Determine the number of elevator cars ($N$) required to achieve a target handling capacity $HC_{5min} = 13\%$.

```
Step 1: Express Handling Capacity Formula
HC₅min% = [ (300 × P × N) / (Pop_bldg × RTT) ] × 100%

Step 2: Solve for Number of Elevators (N)
N = (HC₅min% × Pop_bldg × RTT) / (300 × P × 100)
N = (13 × 1,800 × 150) / (300 × 20 × 100)
N = (3,510,000) / (600,000) = 5.85 cars ➔ Round up to 6 Elevator Cars.

Step 3: Check Resulting Handling Capacity & Waiting Time
Actual HC₅min% = [ (300 × 20 × 6) / (1,800 × 150) ] × 100% = (36,000 / 270,000) × 100% = 13.33% (Passes 13% target!).
Average Interval / Waiting Time (AWT) = RTT / N = 150 s / 6 cars = 25.0 seconds.
➔ Performance Rating: EXCELLENT (Meets high-rise Grade-A office benchmark of ≤ 30s).

Step 4: Architectural Bank Configuration
Arrange 6 cars as a Bank of 3 opposite 3 with a common elevator lobby width W_lobby = 3.60m 
(Lobby width ≥ 1.5 × car depth = 1.5 × 2.0m = 3.0m min).
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: CORE LAYOUTS & STRUCTURAL SHEAR WALLS       │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. ELEVATOR BANK CORE PLACEMENT:                                                   │
│    • Central Core: Maximizes structural torsional rigidity (shear wall tube).      │
│    • Walking Distance: Maximum walking distance from any office suite to the       │
│      elevator lobby should not exceed 45.0m.                                       │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 2. HOISTWAY PIT & OVERHEAD CLEARANCES:                                             │
│    • Top Floor Overhead Clearance: Minimum 4.80m to 5.50m clear above top floor.   │
│    • Bottom Elevator Pit Depth: Minimum 1.50m to 2.50m below lowest finished slab. │
│    • Never locate occupied habitable rooms directly beneath an elevator hoistway   │
│      unless counterweight safeties are provided per Rule XX.                       │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Accessibility Law BP 344 Elevator Controls):
Under Batas Pambansa Blg. 344 (Accessibility Law IRR), what is the mandatory height range from finished floor line for elevator call buttons and control panel keypads in commercial buildings?
- A) Between $0.60\text{m}$ and $0.90\text{m}$
- B) Between $0.90\text{m}$ and $1.20\text{m}$
- C) Between $1.20\text{m}$ and $1.50\text{m}$
- D) Exactly at $1.40\text{m}$
> **Correct Answer: B**  
> **Distractor Trap Analysis**:
> * BP 344 specifies that all accessible operating controls, elevator buttons, and emergency alarm switches must be located within comfortable reach of a wheelchair user, which is $0.90\text{m}$ to $1.20\text{m}$ above the finished floor line. Controls above $1.20\text{m}$ (Option C) fail universal accessibility audits.

---

## 7. ACADEMIC REFERENCES & STATUTORY SOURCES
1. American Society of Mechanical Engineers (ASME). (2019). *Safety Code for Elevators and Escalators (ASME A17.1-2019/CSA B44-19)*. ASME.
2. National Council on Disability Affairs (NCDA). (2000). *Implementing Rules and Regulations of Batas Pambansa Blg. 344 (An Act to Enhance the Mobility of Disabled Persons)*. Manila, Philippines.
3. Barney, G., & Al-Sharif, L. (2015). *Elevator Traffic Handbook: Theory and Practice* (2nd ed.). Routledge.
4. Department of Public Works and Highways (DPWH). (2005). *National Building Code of the Philippines (PD 1096) Rule XX: Electrical and Mechanical Regulations*. Manila.
