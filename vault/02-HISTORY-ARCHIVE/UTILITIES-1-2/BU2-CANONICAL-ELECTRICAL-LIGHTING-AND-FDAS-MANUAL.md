# BU 2 — CANONICAL ELECTRICAL POWER DISTRIBUTION, LIGHTING DESIGN (LUMEN METHOD) & FDAS MANUAL | 10-SECTION CANONICAL MODULE

> **Vault Cluster:** `vault/02-HISTORY-ARCHIVE/UTILITIES-1-2/` + mirrors `vault/04-BUILDING-UTILITIES-SERIES/BU2-ELECTRICAL-AND-MECHANICAL/`  
> **Authority:** Mapúa University Building Utilities Sequence, Philippine Electrical Code (PEC 2017 Part 1), IESNA Lighting Handbook & NFPA 72 National Fire Alarm Code  
> **Status:** CANONICAL 10-SECTION UTILITIES MANUAL — Complete Step-by-Step Mathematical Reference for Branch Circuit Sizing, Illumination Photometry & PRC ALE Board Exams  
> **Citation Rigor:** Cites PEC 2017 Part 1 Articles 2.10, 2.15, 2.20, 2.50, IESNA Zonal Cavity Method, and RA 9514 FDAS Standards [L]

---

## 1. METADATA

| Field | Value |
|---|---|
| **Mapúa Course Alignment** | `BUILDING-UTILITIES-2` (Electrical Systems, Illumination Engineering & Mechanical Protection) [M], `BUILDING-UTILITIES-3` (HVAC, Acoustics & Fire Protection) [M], `ARCH-DESIGN-5/6` Studio [M] |
| **PRC ALE Board Alignment** | **Part II:** Structural Design, Building Materials, Methods of Construction & Utilities (30% Weight — ALE Day 1 Afternoon Session) [U] |
| **High-Yield Exam Rating** | **9.9 / 10.0** — Philippine nominal voltage ($230\text{V} / 60\text{Hz}$), wire gauge minimums ($3.5\text{ mm}^2$ for $20\text{A}$), branch circuit loading ($80\%$ continuous rule), Zonal Cavity Lumen Method calculations, and smoke detector coverage radii appear on **every single** ALE exam |
| **Prerequisite Sequence** | Prerequisite: `BUILDING-UTILITIES-1` (Plumbing & Sanitation); Prerequisite to: `BUILDING-UTILITIES-3` (HVAC & Mechanical) [M] |
| **Terminal Engineering Competency** | Ability to design electrical single-line riser diagrams, size panelboards and circuit breakers, calculate room illuminance using the Lumen Method, and layout fully code-compliant addressable FDAS loops [M] |

---

## 2. EXECUTIVE FOUNDATION: POWER DISTRIBUTION, PHOTOMETRY & LIFE SAFETY SIGNALING

Electrical and illumination systems are the physical circulatory and visual nervous system of the modern building. In the Philippines, electrical power is distributed as alternating current (AC) at a standard frequency of **$60\text{ Hertz}$** [L][A].

```
  ┌───────────────────────────────────────────────────────────────────────────┐
  │                 THE POWER & LIGHTING INFRASTRUCTURE CONTINUUM             │
  └───────────────────────────────────────────────────────────────────────────┘
  
   [MERALCO GRID 13.8kV/34.5kV] ──► [TRANSFORMER 400V/230V] ──► [MDP SWITCHGEAR] ──► [BRANCH PANELS]
   Medium-voltage primary           Step-down oil/dry-type      Main breakers (ACB)   Lighting (15A/20A)
   utility supply.                  substation.                 & ATS Generator.      & Convenience (20A).
```

### The Three Cardinal Architectural Electrical Rules
1. **The $230\text{V}$ Voltage Standard:** The standard nominal single-phase voltage across the Philippines is **$230\text{ Volts}$** ($60\text{ Hz}$), operating with $400\text{V} / 230\text{V}$ 3-phase 4-wire Wye systems.
2. **The $80\%$ Continuous Load Safety Factor:** No electrical branch circuit breaker or conductor may be continuously loaded ($>3\text{ hours}$) beyond **$80\%$ of its nominal ampere rating** ($125\%$ multiplier applied to continuous load).
3. **The Dual Fire Protection Ring:** Fire Detection & Alarm Systems (FDAS) provide early life-safety warning, while Automatic Fire Sprinkler Systems (AFSS) provide active suppression.

---

## 3. MASTER GLOSSARY & ELECTRICAL ACRONYMS

* **PEC:** Philippine Electrical Code (Part 1, 2017 Edition) — the national technical law governing electrical installations in buildings [L].
* **Ampacity:** The maximum current, in amperes, that a conductor can carry continuously under the conditions of use without exceeding its temperature rating [L].
* **THHN / THWN:** Thermoplastic High Heat-resistant Nylon-coated copper wire ($90^\circ\text{C}$ dry) / Thermoplastic Heat and Water-resistant ($75^\circ\text{C}$ wet) — the primary commercial building wiring standard [L].
* **MCB / MCCB:** Miniature Circuit Breaker / Molded Case Circuit Breaker — automatic overcurrent and short-circuit protective devices [L].
* **MDP:** Main Distribution Panel — the central switchboard distributing electrical power to sub-panelboards throughout a building [L].
* **ATS:** Automatic Transfer Switch — an electromechanical switch that automatically transfers emergency electrical loads from the utility grid to the standby diesel generator within **$\le 10\text{ seconds}$** of grid failure [L].
* **Voltage Drop ($V_d$):** The loss of electrical potential along a conductor due to internal resistance; capped by PEC §2.10.1.19 at **$3\%$ on branch circuits** and **$5\%$ overall** (feeder $+$ branch) [L].
* **Luminous Flux ($\Phi$):** The total quantity of visible light emitted by a light source per unit time, measured in **Lumens (lm)** [L].
* **Illuminance ($E$):** The density of luminous flux incident on a surface, measured in **Lux ($\text{lm/m}^2$)** or **Foot-Candles ($1\text{ fc} = 10.76\text{ Lux}$)** [L].
* **Coefficient of Utilization ($CU$):** The fraction of initial lamp lumens that successfully reaches the work plane, accounting for luminaire optical efficiency and room wall/ceiling surface reflectances ($0.50\text{--}0.75$) [L].
* **Light Loss Factor ($LLF$):** Maintenance depreciation factor ($0.70\text{--}0.85$) accounting for lamp lumen depreciation (LLD) and luminaire dirt depreciation (LDD) over time [L].
* **FDAS:** Fire Detection and Alarm System — an integrated life safety network comprising smoke/heat initiating devices, control panels (FACP), and audio-visual notification appliances [L].
* **FACP:** Fire Alarm Control Panel — the central microprocessor brain monitoring all detection zones and initiating evacuation alarms [L].

---

## 4. GOVERNING LAWS, PEC CODE PROVISIONS & ILLUMINATION MATRICES [L]

### A. Philippine Electrical Code (PEC 2017) Branch Circuit Rules

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │                     PEC 2017 CANONICAL BRANCH CIRCUIT MATRIX               │
 └────────────────────────────────────────────────────────────────────────────┘
```

| Branch Circuit Classification | Rating (Amperes) | Minimum Conductor Size (Copper) | Max Allowable Loading ($80\%$) | Standard Usage & Code Limits |
|---|:---:|:---:|:---:|---|
| **General Lighting Circuit** | **$15\text{ A}$** | **$2.0\text{ mm}^2$ ($#14\text{ AWG}$)** | $12\text{ A}$ ($2,760\text{ VA}$ @ $230\text{V}$) | Dedicated ceiling lighting circuits only [L] |
| **Heavy Lighting / General Circuit**| **$20\text{ A}$** | **$3.5\text{ mm}^2$ ($#12\text{ AWG}$)** | $16\text{ A}$ ($3,680\text{ VA}$ @ $230\text{V}$) | **Standard Philippine commercial lighting & power** [L] |
| **General Convenience Outlets** | **$20\text{ A}$** | **$3.5\text{ mm}^2$ ($#12\text{ AWG}$)** | $16\text{ A}$ (Max **$8\text{ to }10\text{ duplex outlets}$**) | $180\text{ VA}$ computed per duplex receptacle ($8 \times 180 = 1,440\text{ VA}$) [L] |
| **Small Appliance Circuits (Kitchen)**| **$20\text{ A}$** | **$3.5\text{ mm}^2$ ($#12\text{ AWG}$)** | $1,500\text{ VA}$ per circuit | **Min 2 dedicated circuits** required in residential kitchens [L] |
| **Laundry Dedicated Circuit** | **$20\text{ A}$** | **$3.5\text{ mm}^2$ ($#12\text{ AWG}$)** | $1,500\text{ VA}$ | Minimum 1 dedicated circuit required for laundry [L] |
| **Individual Air-Con (Window ACU)** | **$20\text{A to }30\text{A}$** | **$3.5\text{ mm}^2\text{ to }5.5\text{ mm}^2$** | $125\%$ of motor full-load current | Dedicated single-outlet circuit with grounded receptacle [L] |
| **Water Heater / Range Circuit** | **$30\text{A to }50\text{A}$** | **$5.5\text{ mm}^2\text{ to }14.0\text{ mm}^2$** | Heavy resistive heating elements | Dedicated home-run circuit directly to panelboard [L] |

*Rule:* Aluminum conductors are strictly prohibited for interior small branch wiring ($<8.0\text{ mm}^2$); only **soft-annealed solid or stranded copper** is standard [L].

---

### B. Architectural Illumination Standards Matrix (PEC / IESNA / CIBSE)

| Space Function / Architectural Room Type | Target Illuminance ($E$) | Recommended CCT (Color Temp) | Minimum CRI | Visual Task Requirements |
|---|:---:|:---:|:---:|---|
| **Architecture Drafting Studios & Art Labs** | **$500\text{ Lux}$** ($50\text{ fc}$) | $4000\text{K}\text{--}5000\text{K}$ (Neutral/Cool) | $\ge 85$ | High-precision linework, color rendering, no shadows [A] |
| **General Classrooms, Lecture Halls & Libraries**| **$300\text{ to }400\text{ Lux}$** | $4000\text{K}$ (Neutral White) | $\ge 80$ | Reading, writing, digital whiteboard visibility [A] |
| **Commercial Offices, Open Workstations & BPO**| **$300\text{ to }400\text{ Lux}$** | $3500\text{K}\text{--}4000\text{K}$ | $\ge 80$ | Computer display screens, low glare ($UGR < 19$) [A] |
| **Executive Boardrooms & Conference Suites** | **$400\text{ to }500\text{ Lux}$** | $3000\text{K}\text{--}4000\text{K}$ (Dimmable) | $\ge 85$ | Presentation lighting, video conferencing [A] |
| **Hotel Lobbies, Living Rooms & Dining Areas** | **$150\text{ to }200\text{ Lux}$** | $2700\text{K}\text{--}3000\text{K}$ (Warm White) | $\ge 90$ | Relaxing ambience, flattering skin tones [A] |
| **Hospital Operating Theaters / Surgery** | **$1,000\text{ to }2,000\text{ Lux}$** | $5000\text{K}$ (Daylight White) | $\ge 95$ | Surgical cavity illumination, zero shadow casting [A] |
| **Corridors, Stairwells & Parking Basements** | **$100\text{ Lux}$** ($10\text{ fc}$) | $4000\text{K}$ | $\ge 70$ | Safe circulation, emergency egress pathway [A] |

---

### C. Fire Detection & Alarm Systems (FDAS / NFPA 72 & RA 9514)

| Initiating Device / Appliance | Coverage Radius ($R$) | Max Coverage Area per Device | Mounting Height & Spacing Limits |
|---|:---:|:---:|---|
| **Photoelectric Smoke Detector** | **$9.00\text{ m}$ ($30\text{ ft}$)** | **$80.00\text{ m}^2$ ($900\text{ sq ft}$)** | Ceiling mounted; max $18.00\text{ m}$ spacing along corridors; $\ge 100\text{ mm}$ from corners [L] |
| **Rate-of-Rise Heat Detector** | **$5.30\text{ m}$ ($17.5\text{ ft}$)** | **$45.00\text{ m}^2$ ($500\text{ sq ft}$)** | Installed in kitchens, boiler rooms, generator vaults; trips at $57^\circ\text{C}$ or $8.3^\circ\text{C}/\text{min}$ rise [L] |
| **Manual Call Point (MCP / Pull Station)**| Within **$1.50\text{ m}$ of Exits** | — | Mounted **$1.10\text{ m to }1.40\text{ m}$** above floor level; travel distance $\le 60.00\text{ m}$ to any MCP [L] |
| **Fire Alarm Horn / Strobe** | Line-of-sight | — | Mounted **$2.00\text{ m to }2.40\text{ m}$** above floor; $\ge 75\text{ dBA}$ sound pressure; $1\text{--}2\text{ Hz}$ flash rate [L] |

---

## 5. FORMULAS & WORKED CALCULATION EXAMPLES [L]

### Canonical Equations

1. **Single-Phase Electrical Load Calculation:**
   $$P = V \cdot I \cdot PF \iff I = \frac{P}{V \cdot PF} \quad (\text{Standard } V = 230\text{V}, PF = 0.85\text{ to }1.0)$$
2. **Three-Phase Electrical Load Calculation:**
   $$P = \sqrt{3} \cdot V_{LL} \cdot I \cdot PF \iff I = \frac{P}{\sqrt{3} \cdot V_{LL} \cdot PF} \quad (V_{LL} = 400\text{V})$$
3. **Zonal Cavity Lumen Method (Number of Luminaires):**
   $$N_{\text{fixtures}} = \left\lceil \frac{E \times A}{\Phi_{\text{fixture}} \times CU \times LLF} \right\rceil$$
   *(where $E = \text{Target Lux}$, $A = \text{Room Area } (\text{m}^2)$, $\Phi_{\text{fixture}} = \text{Total Lumens per Fixture}$, $CU = \text{Coeff. of Utilization}$, $LLF = \text{Light Loss Factor}$).*
4. **Room Cavity Ratio (RCR):**
   $$\text{RCR} = \frac{5 \cdot h_{rc} \cdot (L + W)}{L \cdot W} \quad (\text{where } h_{rc} = \text{Ceiling height} - \text{Work plane height } 0.75\text{m})$$

---

### 🏛️ WORKED CALCULATION 1: Mapúa Architecture Drafting Studio Illumination Design
**Scenario:** An Architecture Design Studio measuring **$12.00\text{ m} \times 8.00\text{ m}$ ($96.00\text{ m}^2$)** has a finished ceiling height of $3.25\text{ m}$ and drafting table work plane height of $0.75\text{ m}$ ($h_{rc} = 2.50\text{ m}$). Design code-compliant lighting for **$500\text{ Lux}$** using 40W 2-tube LED recessed troffers emitting **$4,400\text{ lumens per fixture}$** ($2 \times 2,200\text{ lm}$). Given: $CU = 0.65$, $LLF = 0.80$.

**Step 1: Compute Total Required Luminous Flux ($\Phi_{\text{total}}$)**
$$\Phi_{\text{total}} = \frac{E \times A}{CU \times LLF} = \frac{500\text{ Lux} \times 96.00\text{ m}^2}{0.65 \times 0.80} = \frac{48,000}{0.52} = \mathbf{92,307.69\text{ Lumens}}$$

**Step 2: Calculate Number of Required LED Fixtures ($N$)**
$$N = \frac{\Phi_{\text{total}}}{\Phi_{\text{fixture}}} = \frac{92,307.69\text{ lm}}{4,400\text{ lm/fixture}} = 20.98 \rightarrow \mathbf{21 \text{ Fixtures}}$$

**Step 3: Establish Luminaire Layout Grid**
* Layout in **3 rows of 7 fixtures** ($3 \times 7 = \mathbf{21 \text{ fixtures}}$).
* Longitudinal spacing ($7$ fixtures across $12.00\text{m}$):
  * Spacing between fixtures $= \frac{12.00}{7} = \mathbf{1.71\text{ m}}$
  * Distance to wall $= \frac{1.71}{2} = \mathbf{0.86\text{ m}}$
* Transverse spacing ($3$ rows across $8.00\text{m}$):
  * Spacing between rows $= \frac{8.00}{3} = \mathbf{2.67\text{ m}}$
  * Distance to wall $= \frac{2.67}{2} = \mathbf{1.33\text{ m}}$
* *Spacing-to-Mounting Height Ratio:* $\frac{S}{h_{rc}} = \frac{2.67}{2.50} = 1.068 \le 1.20$. **PERFECT UNIFORM ILLUMINATION with zero dark scalloping!**

---

### 🏛️ WORKED CALCULATION 2: Commercial Branch Circuit Wire & Breaker Sizing
**Scenario:** A commercial kitchen water booster pump has a rated load of **$4,600\text{ Watts}$** at $230\text{V}$, $1\phi$, with power factor $PF = 0.85$.

**Step 1: Calculate Full Load Amperes (FLA)**
$$I_{\text{FLA}} = \frac{P}{V \cdot PF} = \frac{4,600\text{ W}}{230\text{ V} \times 0.85} = \frac{4,600}{195.5} = \mathbf{23.53\text{ Amperes}}$$

**Step 2: Apply Continuous Load Safety Factor ($125\%$)**
$$I_{\text{design}} = 23.53\text{ A} \times 1.25 = \mathbf{29.41\text{ Amperes}}$$

**Step 3: Select Conductor & Circuit Breaker (PEC Table 3.10.2.6)**
* **Circuit Breaker:** Standard **$30\text{ Ampere}$**, 2-Pole, 230V Molded Case Circuit Breaker (MCCB).
* **Conductor Wire:** **$5.5\text{ mm}^2$ ($#10\text{ AWG}$)** THHN/THWN copper wire (allowable ampacity $= 35\text{A} \ge 29.41\text{A}$).
* **Conduit:** **$20\text{ mm}$ ($\frac{3}{4}\text{ in}$)** Intermediate Metal Conduit (IMC).

---

## 6. CONDUITS, PANELBOARDS & EMERGENCY GENERATOR TRANSFER [I][L]

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │               SINGLE-LINE EMERGENCY GENERATOR & ATS SCHEMATIC              │
 └────────────────────────────────────────────────────────────────────────────┘
 
      [NORMAL MERALCO UTILITY GRID]           [STANDBY DIESEL GENERATOR]
      230V / 400V, 3-Phase, 60Hz              Auto-Start within <= 10 seconds
                 │                                        │
                 ▼                                        ▼
      ┌──────────────────────────────────────────────────────────────┐
      │         AUTOMATIC TRANSFER SWITCH (ATS) INTERLOCK            │
      └──────────────────────────────┬───────────────────────────────┘
                                     │
                                     ▼
      ┌──────────────────────────────────────────────────────────────┐
      │             MAIN DISTRIBUTION PANELBOARD (MDP)               │
      ├──────────────────────────────┬───────────────────────────────┤
      │                              │                               │
      ▼                              ▼                               ▼
 [PANEL LP-1]                  [PANEL PP-1]                    [EMERGENCY LIFE-SAFETY]
 Lighting Branch               Power Outlets                   • Exit & Egress Lights
 (20A, 3.5mm² THHN)            (20A, 3.5mm² THHN)              • Fire Pumps & Sprinklers
                                                               • Pressurization Fans
                                                               • Elevators (Service)
```

---

## 7. EXAM TRAPS & UTILITIES COMMON MISTAKES

* **TRAP 1: Standard Philippine Voltage & Frequency ($230\text{V} / 60\text{Hz}$):**
  * Do NOT use US $120\text{V}$ or European $220\text{V}/50\text{Hz}$ in Philippine board exams!
* **TRAP 2: Minimum Conductor Size for 20A Circuits ($3.5\text{ mm}^2$):**
  * $2.0\text{ mm}^2$ ($#14\text{ AWG}$) is strictly capped at $15\text{ Amperes}$.
  * $3.5\text{ mm}^2$ ($#12\text{ AWG}$) is mandatory for all standard $20\text{ Ampere}$ circuits [L].
* **TRAP 3: Maximum Number of Convenience Outlets on a 20A Circuit:**
  * Each duplex outlet $= 180\text{ VA}$.
  * $20\text{A} \times 230\text{V} \times 0.80 = 3,680\text{ VA}$ capacity $\rightarrow$ Max **$8\text{ to }10\text{ duplex outlets}$** per circuit!
* **TRAP 4: Smoke Detector Clearances:**
  * Must be installed $\ge 100\text{ mm}$ ($4\text{ in}$) from sidewall corners (dead air zone).
  * Must be located at least **$1.00\text{ m}$** away from air conditioning supply diffusers to prevent clean air from blowing smoke away from the detector!

---

## 8. HISTORICAL EVOLUTION OF ELECTRICAL & LIGHTING CODES

1. **Thomas Edison & Pearl Street Station (New York, 1882):**
   * First commercial direct current (DC) central generating station; limited to $110\text{V}$ and a $1\text{--mile}$ transmission radius due to massive resistive line losses.
2. **Nikola Tesla & The War of the Currents (1888–1893):**
   * Tesla patented the polyphase alternating current (AC) induction motor and high-voltage transformer, partnering with George Westinghouse to prove AC's superiority over long distances at the 1893 Chicago World's Fair.
3. **Philippine Electrical Code (PEC) Evolution:**
   * Enacted by the Board of Electrical Engineering and PRC, patterned after the NFPA 70 National Electrical Code (NEC), standardizing $230\text{V} / 60\text{Hz}$ power safety.

---

## 9. ASCII ADDRESSABLE FDAS LOOP RISER DIAGRAMS

```text
 ┌───────────────────────────────────────────────────────────────────────────┐
 │               ADDRESSABLE FDAS CLASS A SIGNALING LOOP                     │
 └───────────────────────────────────────────────────────────────────────────┘
 
  ┌────────────────────────────────────────────────────────────────────────┐
  │                 FIRE ALARM CONTROL PANEL (FACP)                        │
  │                 Ground Floor Fire Command Center                       │
  └───────┬────────────────────────────────────────────────────────▲───────┘
          │ (Loop Out)                                             │ (Loop Return)
          ▼                                                        │
   [SMOKE DETECTOR] ──► [HEAT DETECTOR] ──► [MANUAL PULL] ──► [HORN/STROBE]
    Address #001         Address #002        Address #003      Address #004
    (Classroom 301)      (Chemistry Lab)     (Exit Stair A)    (Corridor)
```

---

## 10. 10-QUESTION SOCRATIC DRILL WITH VERIFIED BOARD-STYLE EXPLANATIONS

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │                BU 2 ELECTRICAL & LIGHTING BOARD SIMULATION DRILL           │
 └────────────────────────────────────────────────────────────────────────────┘
```

#### Q1. Under the Philippine Electrical Code (PEC 2017), what is the nominal standard single-phase residential and commercial voltage in the Philippines?
- [ ] A. $110\text{ Volts} / 50\text{ Hz}$
- [ ] B. $120\text{ Volts} / 60\text{ Hz}$
- [ ] C. $220\text{ Volts} / 50\text{ Hz}$
- [x] D. **$230\text{ Volts} / 60\text{ Hz}$**
> **Explanation:** PEC 2017 Part 1 establishes the national standard nominal single-phase voltage as **$230\text{ Volts}$** at a frequency of **$60\text{ Hertz}$** [L].

---

#### Q2. What is the minimum cross-sectional wire size permitted for a standard 20-Ampere branch circuit using copper conductors?
- [ ] A. $1.25\text{ mm}^2$ ($#16\text{ AWG}$)
- [ ] B. $2.0\text{ mm}^2$ ($#14\text{ AWG}$)
- [x] C. **$3.5\text{ mm}^2$ ($#12\text{ AWG}$)**
- [ ] D. $5.5\text{ mm}^2$ ($#10\text{ AWG}$)
> **Explanation:** PEC Table 3.10.2.6 mandates **$3.5\text{ mm}^2$ ($#12\text{ AWG}$)** copper wire for $20\text{A}$ circuits ($2.0\text{ mm}^2$ is restricted to $15\text{A}$) [L].

---

#### Q3. What is the recommended target illumination level for an architectural drafting studio and graphics laboratory?
- [ ] A. $100\text{ Lux}$
- [ ] B. $200\text{ Lux}$
- [x] C. **$500\text{ Lux}$ ($50\text{ Foot-Candles}$)**
- [ ] D. $1,500\text{ Lux}$
> **Explanation:** IESNA and PEC recommend **$500\text{ Lux}$** for architectural drafting and design studios to ensure high visual clarity for linework and model crafting [A].

---

#### Q4. What is the maximum allowable voltage drop on an electrical branch circuit under the Philippine Electrical Code?
- [ ] A. $1\%$
- [x] B. **$3\%$**
- [ ] C. $5\%$
- [ ] D. $10\%$
> **Explanation:** PEC §2.10.1.19 limits branch circuit voltage drop to **$3\%$ maximum**, and total combined voltage drop (feeder $+$ branch) to **$5\%$ maximum** [L].

---

#### Q5. What is the maximum statutory coverage radius for a standard photoelectric smoke detector on a flat ceiling?
- [ ] A. $4.50\text{ m}$
- [ ] B. $6.00\text{ m}$
- [x] C. **$9.00\text{ m}$ ($30\text{ ft}$)**
- [ ] D. $15.00\text{ m}$
> **Explanation:** Under NFPA 72 and RA 9514, a photoelectric smoke detector has a maximum coverage radius of **$9.00\text{ m}$ ($30\text{ ft}$)**, covering an area of approx. $80.00\text{ m}^2$ [L].

---

#### Q6. How many standard convenience duplex receptacle outlets ($180\text{ VA}$ each) are nominally permitted on a standard 20A, 230V general branch circuit?
- [ ] A. 4 outlets
- [ ] B. 6 outlets
- [x] C. **$8\text{ to }10\text{ duplex outlets}$**
- [ ] D. 20 outlets
> **Explanation:** $20\text{A} \times 230\text{V} \times 0.80 = 3,680\text{ VA}$ continuous capacity. $3,680 / 180\text{ VA} = 20.4$ single receptacles $= \mathbf{8\text{ to }10\text{ duplex receptacles}}$ [L].

---

#### Q7. At what mounting height above the finished floor must manual fire alarm call points (pull stations) be installed?
- [ ] A. $0.60\text{ m to }0.90\text{ m}$
- [x] B. **$1.10\text{ m to }1.40\text{ m}$**
- [ ] C. $1.50\text{ m to }1.80\text{ m}$
- [ ] D. $2.00\text{ m to }2.20\text{ m}$
> **Explanation:** NFPA 72 and BP 344 require manual pull stations to be installed between **$1.10\text{ m and }1.40\text{ m}$** for comfortable seated and standing access [L].

---

#### Q8. Within how many seconds must an emergency standby generator start and transfer critical life safety power through an Automatic Transfer Switch (ATS) upon utility grid failure?
- [x] A. **$\le 10\text{ Seconds}$**
- [ ] B. $\le 30\text{ Seconds}$
- [ ] C. $\le 60\text{ Seconds}$
- [ ] D. $\le 5\text{ Minutes}$
> **Explanation:** RA 9514 and NFPA 110 Class 10 emergency systems mandate generator startup and full load transfer within **$10\text{ seconds}$** of primary grid failure [L].

---

#### Q9. In the Zonal Cavity Lumen Method, what does the factor $LLF$ represent?
- [ ] A. Low Load Factor
- [x] B. **Light Loss Factor (maintenance and depreciation factor)**
- [ ] C. Luminaire Lumens Fixed
- [ ] D. Linear Line Feed
> **Explanation:** $LLF$ (Light Loss Factor) accounts for lamp output decay (LLD) and dust accumulation on lenses (LDD) over operating time ($0.70\text{--}0.85$) [L][A].

---

#### Q10. What electrical safety device is mandatory in wet locations (bathrooms, kitchens, outdoor outlets) to protect people from fatal electric shocks by tripping at $4\text{--}6\text{ mA}$ leakage current?
- [ ] A. Air Circuit Breaker (ACB)
- [ ] B. Time-Delay Fuse
- [x] C. **Ground Fault Circuit Interrupter (GFCI / ELCB)**
- [ ] D. Lightning Arrester
> **Explanation:** A **GFCI** (Ground Fault Circuit Interrupter) detects tiny current imbalances ($4\text{--}6\text{ mA}$) between hot and neutral wires, tripping within milliseconds to prevent electrocution in damp zones [L].

---

## 11. CROSS-VAULT LINKAGES & PREREQUISITE NETWORK

* `vault/04-BUILDING-UTILITIES-SERIES/BU3-HVAC-AND-MECHANICAL/BU3-CANONICAL-CENTRAL-HVAC-ELECTRICAL-AND-ACOUSTICS.md` — Central HVAC, Chiller Power & Sabine Acoustics
* `vault/00-CORE-BUILDING-LAWS/RA-9514-FIRE-CODE/RA-9514-CANONICAL-FIRE-CODE-EGRESS-COMPENDIUM.md` — Fire Code Life Safety & Egress Lighting
* `reviewers/flashcards/STRUCTURAL_AND_UTILITIES_DECK.md` — Active Recall Flashcards for Building Utilities
