# AR155-1 / BU3: CENTRAL HVAC SYSTEMS, REFRIGERATION & ARCHITECTURAL ACOUSTICS
**Course:** Building Utilities 3 (Mechanical, Electrical, Plumbing & Fire Protection Systems - MEPFS)  
**Academic Level:** Mapúa BS Architecture 3rd Year (ARIDBE)  
**PRC ALE Category:** Part 2: Building Utilities, Acoustics & Mechanical Systems (30% Weight)  
**High-Yield Exam Score:** 9.4 / 10  
**Governing Authorities & Standards:** Philippine Mechanical Engineering Code (PMEC), ASHRAE Fundamentals 2021, ASHRAE Standard 62.1 (Ventilation), PD 1096 NBCP 2005 IRR Rule XIX, ISO 3382 (Acoustics), ANSI S12.2 (Noise Criteria).

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 Thermodynamic Vapor Compression Refrigeration Cycle
Refrigeration is the transfer of heat from a lower-temperature reservoir to a higher-temperature reservoir using mechanical work:
1. **Evaporator (Heat Absorption):** Low-pressure liquid refrigerant absorbs latent heat from chilled water or air, evaporating into low-pressure vapor ($4^\circ\text{C}–7^\circ\text{C}$).
2. **Compressor (Work Input):** Compresses low-pressure refrigerant vapor into high-pressure, superheated gas ($60^\circ\text{C}–80^\circ\text{C}$).
3. **Condenser (Heat Rejection):** Rejects total absorbed heat + work of compression to outdoor air (Air-Cooled) or cooling tower water (Water-Cooled), condensing refrigerant back to liquid ($35^\circ\text{C}–45^\circ\text{C}$).
4. **Thermal Expansion Valve - TXV (Pressure Drop):** Throttles high-pressure liquid to low pressure, causing rapid flash evaporation and temperature drop.

```
                            CENTRAL CHILLED WATER HVAC CYCLE
  ┌──────────────────────────────────────────────────────────────────────────────────┐
  │                           OUTDOOR COOLING TOWER                                  │
  │                         (Rejects Heat to Atmosphere)                             │
  └───────────────────────────────▲──────────────────────────────────────────────────┘
                                  │ Condenser Water Loop (30°C Supply / 35°C Return)
  ┌───────────────────────────────▼──────────────────────────────────────────────────┐
  │                            CENTRAL CHILLER PLANT                                 │
  │       [ Evaporator ] ◄── Compressor ◄── [ Condenser ] ◄── Expansion Valve        │
  └───────────────────────────────┬──────────────────────────────────────────────────┘
                                  │ Chilled Water Loop (7°C Supply / 12°C Return)
  ┌───────────────────────────────▼──────────────────────────────────────────────────┐
  │                         AIR HANDLING UNIT (AHU) ROOM                             │
  │   • Cooling Coil • Blower Fan • MERV 13 Air Filter • Fresh Air Intake (ASHRAE)  │
  └───────────────────────────────┬──────────────────────────────────────────────────┘
                                  │ Supply Air Ducts (14°C conditioned air)
  ┌───────────────────────────────▼──────────────────────────────────────────────────┐
  │                     CONDITIONED ARCHITECTURAL SPACES                             │
  │      Ceiling Diffusers ──► Room Air (24°C, 50% RH) ──► Return Air Plenums        │
  └──────────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Architectural Acoustics First Principles
* **Sound Power Level ($L_w$), Sound Pressure Level ($L_p$), and Decibels ($dB$):**
  $$L_p = 20 \log_{10}\left(\frac{p}{p_0}\right) \quad (p_0 = 20\,\mu\text{Pa threshold of hearing})$$
* **Reverberation Time ($RT_{60}$):** Time required for sound energy density to decay by $60\text{ dB}$ (one-millionth of original intensity) after sound source stops.
* **Sabine Equation (Metric Units):**
  $$RT_{60} = \frac{0.161 \cdot V}{A} = \frac{0.161 \cdot V}{\sum (S_i \cdot \alpha_i)}$$
  *(where $V = \text{room volume in } m^3$, $S_i = \text{surface area in } m^2$, $\alpha_i = \text{sound absorption coefficient at } 500\text{ Hz}–1000\text{ Hz}$)*.

---

## 2. TECHNICAL MECHANICS, EQUIPMENT & DUCT SYSTEMS

### 2.1 Central HVAC System Typology Comparison
| HVAC Typology | Components & Mechanism | Architectural Space Impact | Best Building Type |
| :--- | :--- | :--- | :--- |
| **Water-Cooled Chiller + VAV AHU** | Centrifugal chillers, rooftop cooling towers, dedicated AHU room per floor, Variable Air Volume (VAV) terminal boxes. | • Requires large basement plant ($0.5–1.0\text{ m}^2/\text{TR}$).<br>• Floor AHU rooms ($15–25\text{ m}^2/\text{floor}$).<br>• Large ceiling plenum ($600–900\text{mm}$). | High-rise commercial offices, shopping malls, tertiary hospitals ($>10,000\text{ m}^2$). |
| **Air-Cooled Chiller System** | Packaged air-cooled chillers located on open roof deck; eliminates cooling towers and condenser water pumps. | • Heavy roof structural load ($15–20\text{ kN/m}^2$).<br>• Acoustic isolation pads needed on roof slab. | Mid-rise commercial buildings, institutional university buildings. |
| **Variable Refrigerant Flow (VRF)** | Modular outdoor units connected via small refrigerant copper pipes to multiple indoor fan coil units (FCU). | • Small vertical risers ($100\text{mm}$ chase).<br>• Low ceiling plenum requirement ($300–400\text{mm}$).<br>• Individual room temperature billing. | Condominiums, hotels, low-to-mid rise boutique offices. |

### 2.2 Noise Criterion (NC) & Room Acoustics Standards
| Architectural Space Type | Target NC Curve | Target $RT_{60}$ (at 500 Hz) | Acoustic Isolation Goal |
| :--- | :---: | :---: | :--- |
| **Broadcast Studios / Recording** | **NC 15 – 20** | $0.3 – 0.5\text{ s}$ | STC 60+ (Double drywall + decoupled resilient channel) |
| **Concert Halls (Symphonic Music)** | **NC 20 – 25** | **$1.8 – 2.2\text{ s}$** | High reverberance, diffusion clouds, warm acoustics |
| **University Lecture Halls / Classrooms**| **NC 25 – 30** | **$0.6 – 0.8\text{ s}$** | High speech intelligibility, rear-wall absorption |
| **General Open-Plan Offices** | **NC 35 – 40** | $0.5 – 0.7\text{ s}$ | Speech privacy, acoustic ceiling tiles ($NRC \ge 0.70$) |

---

## 3. PHILIPPINE STATUTORY & REGULATORY COMPLIANCE MATRIX

| Authority / Standard | Provision / Table | Statutory Metric | Architectural Consequence |
| :--- | :--- | :--- | :--- |
| **PD 1096 NBCP** | Rule XIX Sec. 1901 | Minimum Air Supply for Habitable Rooms: Not less than **$0.85\text{ m}^3/\text{min}$** ($30\text{ CFM}$) per person for spaces without natural ventilation. | Mechanical fresh air ducting mandatory in enclosed spaces. |
| **Philippine Mechanical Code** | Chapter 6 | Refrigerant Machine Room Safety: Self-contained breathing apparatus, continuous mechanical exhaust, emergency shutdown switches outside entrance. | Chiller plant room must have dedicated direct exit to exterior or 2-hour fire rated corridor. |
| **ASHRAE 62.1 / PGBC** | Table 6-1 | Minimum Outdoor Fresh Air Rate: Commercial Office = $2.5\text{ L/s}\cdot\text{person} + 0.3\text{ L/s}\cdot\text{m}^2$. | Governs fresh air louver surface area on building facade. |
| **RA 9514 (Fire Code)** | Section 10.2.18.2 | Fire Dampers & Smoke Detectors: Automated fire dampers (1.5-hour rated) mandatory where HVAC ducts penetrate fire-rated walls and floor slabs. | Mechanical duct coordination must detail access doors for annual fire damper testing. |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & ENGINEERING CALCULATIONS

### 4.1 HVAC Cooling Load & Chiller Sizing
**Problem**: An architectural open-plan BPO office floor in Makati spans $1,200\text{ m}^2$ with $3.00\text{m}$ clear ceiling height ($V = 3,600\text{ m}^3$). Occupancy = $120\text{ workstations}$ ($10\text{ m}^2/\text{person}$). Lighting density = $10\text{ W/m}^2$. Equipment (computers) = $15\text{ W/m}^2$. Envelope heat gain (solar + conduction) = $80\text{ W/m}^2$. Fresh air ventilation = $10\text{ L/s/person}$.

```
Step 1: Calculate Internal & Envelope Sensible/Latent Heat Gains
1. Envelope Heat Gain = 1,200 m² × 80 W/m² = 96,000 W = 96.0 kW
2. Lighting Heat Gain = 1,200 m² × 10 W/m² = 12,000 W = 12.0 kW
3. Equipment Load (PCs) = 1,200 m² × 15 W/m² = 18,000 W = 18.0 kW
4. Occupant Metabolic Heat (Sensible 75W + Latent 55W = 130W/person per ASHRAE):
   Occupant Heat = 120 persons × 130 W = 15,600 W = 15.6 kW
5. Ventilation Fresh Air Load:
   Q_fresh = 120 persons × 10 L/s = 1,200 L/s = 1.2 m³/s
   Ventilation Load ≈ 1.2 × 1.2 kg/m³ × 1.0 kJ/kg·K × (34°C outdoor - 24°C indoor) + Latent
   Ventilation Load ≈ 28.8 kW

Step 2: Total Building Cooling Load & Tonnage (TR)
Total Thermal Load = 96.0 + 12.0 + 18.0 + 15.6 + 28.8 = 170.4 kW
Add 10% safety factor / duct heat gain:
Design Load = 170.4 kW × 1.10 = 187.44 kW

Convert to Tons of Refrigeration (1 TR = 3.517 kW = 12,000 BTU/hr):
Required Cooling Capacity = 187.44 kW / 3.517 kW/TR = 53.3 TR.
➔ Architectural Selection: Provide 1 Dedicated AHU (60 TR capacity) with 24,000 CFM blower fan.
```

### 4.2 Architectural Acoustics Reverberation Time ($RT_{60}$) Calculation
**Problem**: A university lecture hall at Mapúa measures $15.0\text{m (L)} \times 10.0\text{m (W)} \times 4.0\text{m (H)}$.  
- Volume $V = 15 \times 10 \times 4 = 600\text{ m}^3$.  
- Target $RT_{60}$ for high speech clarity = $0.70\text{ seconds}$.  
- Determine existing $RT_{60}$ and the required acoustic wall treatment area.

```
Step 1: Compute Surface Areas & Existing Unoccupied Absorption at 1000 Hz
1. Floor (15 × 10 = 150 m² Vinyl Tile, α = 0.03): S₁·α₁ = 150 × 0.03 = 4.5 Sabins
2. Ceiling (15 × 10 = 150 m² Acoustic Tile, α = 0.70): S₂·α₂ = 150 × 0.70 = 105.0 Sabins
3. Side/Front Walls (2(15×4) + 10×4 = 160 m² Painted Concrete, α = 0.02): S₃·α₃ = 160 × 0.02 = 3.2 Sabins
4. Rear Wall (10 × 4 = 40 m² Painted Concrete, α = 0.02): S₄·α₄ = 40 × 0.02 = 0.8 Sabins
Total Existing Room Absorption (A_exist) = 4.5 + 105.0 + 3.2 + 0.8 = 113.5 metric Sabins (m²).

Step 2: Calculate Existing Reverberation Time using Sabine's Formula
RT₆₀_exist = (0.161 · V) / A_exist = (0.161 × 600) / 113.5 = 96.6 / 113.5 = 0.851 seconds.

Step 3: Calculate Required Total Absorption (A_target) for RT₆₀ = 0.70s
A_target = (0.161 · V) / RT₆₀_target = (0.161 × 600) / 0.70 = 96.6 / 0.70 = 138.0 metric Sabins.
Absorption Deficit ΔA = 138.0 - 113.5 = 24.5 Sabins.

Step 4: Determine Acoustic Fabric Wall Panel Area (α_panel = 0.85) on Rear Wall
Net absorption added per m² = α_panel - α_concrete = 0.85 - 0.02 = 0.83 Sabins/m².
Required Panel Area = ΔA / 0.83 = 24.5 / 0.83 = 29.52 m².
➔ Architectural Treatment: Install 30.0 m² of fabric-wrapped fiberglass acoustic wall panels 
   (50mm thick, NRC 0.85) across the upper rear wall to eliminate flutter echo and achieve RT₆₀ = 0.70s.
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: MEPFS SHAFT & PLENUM RULES                  │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. VERTICAL DUCT SHAFT SIZING HEURISTIC:                                           │
│    • Plan for 0.015 to 0.025 m² of vertical shaft area per 10 m² of floor area.   │
│    • Supply & Return Air Shafts must be acoustically lined with sound attenuators  │
│      to prevent AHU fan noise transmission into executive rooms.                   │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 2. CEILING PLENUM SECTION BREAKDOWN (MINIMUM 600mm CLEAR):                         │
│    • Concrete Slab Soffit ➔ 0 to 100mm: Recessed fire sprinkler pipes & conduits. │
│    • 100mm to 400mm: Main supply air duct (e.g. 600mm × 300mm rectangular duct).  │
│    • 400mm to 500mm: Flex duct drop & VAV terminal box.                           │
│    • 500mm to 600mm: Ceiling suspension grid, recessed LED troffer fixtures.      │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Acoustic Flutter Echo & Spatial Geometry):
An architect observes severe flutter echo (a rapid buzzing ringing sound) in a newly constructed university jury presentation room. What architectural defect is the direct cause, and what is the proper corrective intervention?
- A) Low ceiling height; lower the air conditioning blower speed.
- B) Two parallel, highly reflective hard surfaces; install acoustic absorption or splay one wall by at least $5^\circ$ ($1:10$ slope).
- C) Excessive room volume; add interior gypsum partition walls.
- D) Inadequate mechanical ventilation; increase fresh air CFM.
> **Correct Answer: B**  
> **Distractor Trap Analysis**:
> * Flutter echo occurs when sound waves bounce repeatedly between smooth, parallel reflective surfaces (walls or floor-ceiling). Splaying walls by $\ge 5^\circ$ or adding porous acoustic absorbers eliminates the parallel standing wave path.

---

## 7. ACADEMIC REFERENCES & STATUTORY SOURCES
1. American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE). (2021). *ASHRAE Handbook — Fundamentals*. ASHRAE.
2. Egan, M. D. (2007). *Architectural Acoustics*. J. Ross Publishing.
3. Department of Public Works and Highways (DPWH). (2005). *National Building Code of the Philippines (PD 1096) 2005 IRR*. Manila.
4. Philippine Society of Mechanical Engineers (PSME). (2012). *Philippine Mechanical Code*. PSME.
