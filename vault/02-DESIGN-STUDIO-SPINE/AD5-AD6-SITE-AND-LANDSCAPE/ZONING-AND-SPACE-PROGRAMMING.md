# AR145-1S / AD5: ADVANCED SPACE PROGRAMMING, ZONING & SITE DEVELOPMENT
**Course:** Architectural Design 5 (Space Planning 2 & Site Planning)  
**Academic Unit:** Mapúa University ARIDBE (3rd Year 2nd Trimester)  
**PRC ALE Category:** Part 3: Architectural Design & Site Planning (40% Weight - The Largest Licensure Component)  
**High-Yield Exam Score:** 9.9 / 10  
**Governing Authorities & Standards:** PD 1096 NBCP 2005 IRR (Rules VII & VIII), BP 344 (Accessibility), RA 9514 (Fire Code), HLURB / DHSUD Guidelines, Kevin Lynch *Site Planning*.

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 First Principles of Space Programming & Behavioral Mapping
Architectural programming is the systematic process of defining the functional, quantitative, and spatial requirements of a project prior to schematic form-making (William Peña's *Problem Seeking* framework):
1. **Net Floor Area (NFA):** The assignable usable area directly occupied by core activities (e.g. workstations, surgical suites, dining tables).
2. **Gross Floor Area (GFA per NBCP Rule VII):** Total floor space enclosed within external building envelope, including interior circulation corridors, structural column footprints, interior partition thicknesses, washrooms, and utility shafts.
3. **Total Gross Floor Area (TGFA):** Total building floor area encompassing all covered above-ground and below-ground levels, including parking basements, roof decks, balconies, and arcade projections.

```
                      SPACE PROGRAMMING MATHEMATICAL CONVERSION ENGINE
  ┌──────────────────────────────────────────────────────────────────────────────────┐
  │                           NET FLOOR AREA (NFA)                                   │
  │                     Assignable Workspaces & Primary Functions                    │
  └───────────────────────────────────────┬──────────────────────────────────────────┘
                                          │
                        + Circulation Multiplier (15% to 40%)
                                          │
  ┌───────────────────────────────────────▼──────────────────────────────────────────┐
  │                          GROSS FLOOR AREA (GFA)                                  │
  │     Includes Corridors, Toilets, Partition Footprints, Mechanical Closets        │
  └───────────────────────────────────────┬──────────────────────────────────────────┘
                                          │
                   + Basements, Parking, Mezzanines, Balconies, Roof Decks
                                          │
  ┌───────────────────────────────────────▼──────────────────────────────────────────┐
  │                       TOTAL GROSS FLOOR AREA (TGFA)                              │
  │                  Governed by FLAR: TGFA ≤ Total Lot Area × FLAR                  │
  └──────────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Program Space Efficiency Factors ($K_{eff} = NFA / GFA$):
* **Commercial Office / Corporate Headquarters:** $K_{eff} \approx 0.75 – 0.80$ ($20\%–25\%$ circulation).
* **Tertiary General Hospitals & Medical Centers:** $K_{eff} \approx 0.60 – 0.65$ ($35\%–40\%$ circulation for sterile corridors, gurney paths).
* **Multi-Family High-Rise Condominiums:** $K_{eff} \approx 0.80 – 0.85$ ($15\%–20\%$ circulation).
* **University Educational Facilities:** $K_{eff} \approx 0.70 – 0.75$ ($25\%–30\%$ circulation for wide corridors and stair landings).

---

## 2. TECHNICAL MECHANICS, ADJACENCY MATRICES & SITE PLANNING

### 2.1 Spatial Adjacency Matrix & Functional Relationship Topology
Every architectural space programming submission requires a formal matrix analyzing functional relationships:
* **Direct Adjacency (●):** Immediate physical connection (door-to-door, uninterrupted visual sightline).
* **Secondary Adjacency (◐):** Connected via a shared public circulation corridor.
* **Separation Mandatory (⊗):** Acoustic, olfactory, or sterile contamination isolation (e.g. Loading dock ⊗ Main lobby; Kitchen trash ⊗ Dining hall).

### 2.2 Site Zoning & Microclimatic Envelope Controls (Philippine Context)
1. **Solar Orientation Dynamics:**
   * Align the building's **long axis along the East-West axis**, orienting major glazed facades toward **True North and True South** (minimizes direct solar radiation exposure).
   * Place non-habitable buffer zones (stairwells, elevator shear cores, utility closets, restrooms) along the **West Façade** to shield habitable spaces from afternoon thermal solar gain ($300–500\text{ W/m}^2$).
2. **Monsoon Wind Channeling:**
   * **Amihan (Northeast Monsoon - Nov to Feb):** Cool, dry breezes.
   * **Habagat (Southwest Monsoon - June to Oct):** Warm, moisture-laden typhoon winds.
   * Orient operable openings at $45^\circ–90^\circ$ relative to incoming wind direction to maximize internal cross-ventilation through positive windward pressure and leeward suction.

---

## 3. PHILIPPINE STATUTORY & REGULATORY COMPLIANCE MATRIX (NBCP RULE VII & VIII)

| Statutory Parameter | NBCP 2005 IRR Citation | Mathematical Governing Formula | Mandatory Standard |
| :--- | :--- | :--- | :--- |
| **Total Lot Area (TLA)** | Rule VII Sec. 701 | $TLA = \text{Lot Width} \times \text{Lot Depth}$ | Base site parcel dimension. |
| **Total Open Space within Lot (TOSL)** | Rule VII Table VIII.1 | $TOSL = USA + ISA$ | Minimum open space required on lot. |
| **Allowable Maximum Building Footprint (AMBF)** | Rule VII Table VII.1 | $AMBF = TLA - TOSL = TLA \times PSO$ | Maximum ground level building footprint. |
| **Percentage of Site Occupancy (PSO)** | Rule VIII Table VIII.1 | $PSO = \frac{AMBF}{TLA} \times 100\%$ | R-1 = 50-60%; R-2 Basic = 55-60%; C-2 = 75-85%. |
| **Impervious Surface Area (ISA)** | Rule VIII Table VIII.1 | Paved driveways, carports, concrete walkways | Maximum 20% to 30% of TLA. |
| **Unpaved Surface Area (USA)** | Rule VIII Table VIII.1 | Natural soil, grass lawns, softscape landscaping | Minimum 10% to 20% of TLA. |
| **Floor-to-Lot Area Ratio (FLAR)** | Rule VII Table VII.G.1 | $TGFA \le TLA \times FLAR$ | R-2 Basic FLAR = 1.30–1.50; C-2 FLAR = 3.60–9.00; C-3 FLAR = 9.00–14.00. |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & ZONING CALCULATIONS

### 4.1 Comprehensive Lot Zoning & Development Potential Analysis
**Problem**: An architect is commissioned to design a 5-storey Commercial Building (C-2 Commercial Zone) on an **Inside Lot** located in Quezon City.  
- Lot Dimensions: Frontage width = $25.00\text{m}$, Depth = $40.00\text{m}$.  
- Road Right-of-Way (RROW) width = $14.00\text{m}$.  
- Target Zoning Designation: **Commercial 2 (C-2, Medium Commercial)**.  
- Calculate: (1) Total Lot Area ($TLA$), (2) Allowable Maximum Building Footprint ($AMBF$), (3) Open Space requirements ($TOSL, USA, ISA$), and (4) Maximum Allowable Total Gross Floor Area ($TGFA$) based on FLAR.

```
Step 1: Compute Total Lot Area (TLA)
TLA = Width × Depth = 25.00 m × 40.00 m = 1,000.00 m².

Step 2: Determine Table VIII.1 Maximum Allowable PSO, ISA, and Minimum USA for C-2 Inside Lot
From NBCP 2005 IRR Table VIII.1 (C-2 Inside Lot without Firewall):
- Maximum Allowable PSO = 75% of TLA
- Maximum Allowable ISA = 20% of TLA
- Minimum Required USA = 5% of TLA
- Total Open Space (TOSL) = ISA + USA = 20% + 5% = 25% of TLA

Step 3: Calculate Footprint & Open Space Areas
1. AMBF (via PSO) = TLA × PSO% = 1,000.00 m² × 0.75 = 750.00 m².
2. Maximum ISA = 1,000.00 m² × 0.20 = 200.00 m² (Paved parking & driveways).
3. Minimum USA = 1,000.00 m² × 0.05 = 50.00 m² (Percolation softscape lawn).
4. Total Open Space TOSL = 200.00 + 50.00 = 250.00 m².
Check Equilibrium: AMBF (750 m²) + TOSL (250 m²) = TLA (1,000 m²) ➔ 100% Verified!

Step 4: Check Table VIII.2 Setback Constraints (Front, Rear, Sides)
For C-2 Zone on 14.0m RROW:
- Front Setback = 5.00 m
- Rear Setback = 2.00 m
- Left Side Setback = 2.00 m
- Right Side Setback = 2.00 m

Check Physical Building Footprint (AMBF_setback):
Buildable Width = 25.00 m - (2.00 m + 2.00 m) = 21.00 m.
Buildable Depth = 40.00 m - (5.00 m front + 2.00 m rear) = 33.00 m.
AMBF_setback = 21.00 m × 33.00 m = 693.00 m².

➔ Governing Rule: The actual allowable footprint is the LESSER of AMBF_PSO (750 m²) and AMBF_setback (693 m²).
➔ Governed AMBF = 693.00 m² (Actual PSO = 69.3%).

Step 5: Determine Maximum TGFA via Table VII.G.1 FLAR
For C-2 Zone (Inside Lot):
FLAR designation ranges from 3.60 to 9.00 (Adopt FLAR = 5.00 for 5-storey development):
Maximum Allowable TGFA = TLA × FLAR = 1,000.00 m² × 5.00 = 5,000.00 m².
Average Gross Area per Floor (5 storeys) = 5,000.00 / 5 = 1,000.00 m² 
(With ground floor at 693 m² AMBF, upper floors can utilize cantilevers up to allowed building lines).
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: JURY PLATE DEFENSE RUBRIC                   │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. VEHICULAR / PEDESTRIAN CONFLICT RED FLAGS:                                      │
│    • Never locate pedestrian primary entry crossing the main vehicular drop-off    │
│      driveway at a 90° blind corner.                                              │
│    • Provide minimum 6.00m two-way driveway for basement parking ramps.            │
│    • Basement ramp slope: Maximum 1:7 (14.28%) with 1:10 transition landings.     │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 2. BP 344 ACCESSIBILITY INTEGRATION:                                               │
│    • Main entrance must be at zero grade or accessed via an accessible ramp        │
│      with maximum slope 1:12, minimum width 1.20m, and handrails at 0.70m & 0.90m. │
│    • Provide at least 1 Accessible PWD Parking Slot (3.70m × 5.00m) located within  │
│      30.0m of the main accessible entrance.                                        │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Zoning Computations & Setback Governance):
An architect computes an AMBF of $800\text{ m}^2$ using Table VIII.1 PSO percentages for an R-2 lot. However, after applying mandatory front, side, and rear setbacks from Table VIII.2, the buildable bounding box yields only $720\text{ m}^2$. What is the legally permissible ground building footprint?
- A) $800\text{ m}^2$, because Table VIII.1 PSO percentages overrule setback minimums.
- B) $720\text{ m}^2$, because setbacks represent absolute building lines that cannot be encroached upon.
- C) $760\text{ m}^2$, by taking the mathematical average of the two figures.
- D) $800\text{ m}^2$, provided a firewall is constructed on both side property lines.
> **Correct Answer: B**  
> **Distractor Trap Analysis**:
> * Under PD 1096 Rule VII & VIII, the permissible building footprint is strictly governed by the smaller bounding area between the statutory PSO formula and the physical setback envelope. Setbacks are absolute physical boundaries; you cannot violate setbacks simply because your mathematical PSO percentage allows a larger footprint.

---

## 7. ACADEMIC REFERENCES & STATUTORY SOURCES
1. Department of Public Works and Highways (DPWH). (2005). *Implementing Rules and Regulations of the National Building Code of the Philippines (PD 1096)*. Manila, Philippines.
2. Peña, W. M., & Parshall, S. A. (2012). *Problem Seeking: An Architectural Programming Primer* (5th ed.). John Wiley & Sons.
3. Lynch, K., & Hack, G. (1984). *Site Planning* (3rd ed.). MIT Press.
4. National Council on Disability Affairs (NCDA). (2000). *Batas Pambansa Blg. 344 (Accessibility Law IRR)*. Manila.
