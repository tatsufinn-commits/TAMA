# AR162-1P / BT2: SMALL BUILDING WORKING DRAWINGS, SUBSTRUCTURES & TIMBER-STEEL FRAMING
**Course:** Building Technology 2 (Construction Drawings & Small Building Construction)  
**Academic Unit:** Mapúa University ARIDBE (1st/2nd Year)  
**PRC ALE Category:** Part 2: Building Materials, Working Drawings, Assemblies & Substructures (30% Weight)  
**High-Yield Exam Score:** 9.5 / 10  
**Governing Authorities & Standards:** PD 1096 NBCP 2005 IRR (Rule III & XII), RA 9266 (The Architecture Act), NSCP 2015 Chapter 3 & 4, ACI 318, ASTM C90.

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 The Anatomy of an Architectural Working Drawing Package
An architectural working drawing package is a legal instrument of service communicating the geometric configuration, spatial dimensions, material assemblies, and coordination requirements between architectural, structural, and MEPFS trades:
* **The Drawing Hierarchy (Standard Sheet Progression):**
  1. **Sheet A-1 (General / Title Sheet):** Site Development Plan ($1:200$), Vicinity Map, Perspective, Table of Contents, Architectural General Notes.
  2. **Sheet A-2 (Floor Plans):** Ground Floor Plan, Upper Floor Plans ($1:100$), Dimension Strings (3 tiers: Overall, Grid-to-Grid, Wall/Opening).
  3. **Sheet A-3 (Elevations):** Front, Rear, Left, Right Elevations ($1:100$) showing Natural Ground Line (NGL), Finished Floor Lines (FFL), Top of Beam (TOB), and Top of Ridge (TOR).
  4. **Sheet A-4 (Cross Sections):** Longitudinal and Transverse Cross-Sections ($1:100$) cutting through stairwells and restrooms.
  5. **Sheet A-5 (Reflected Ceiling Plans - RCP):** Ceiling grid layout, fixture symbology, recessed luminaire circuiting.
  6. **Sheet A-6 (Schedules):** Door & Window Schedules, Room Finish Schedules, Hardware Schedules.
  7. **Sheet A-7 to A-10 (Architectural Details):** Stair details ($1:20$), Bathroom blow-ups ($1:20$), Parapet flashing details ($1:10$).

```
                       THE 3-TIER EXTERIOR DIMENSION STRING PROTOCOL
  [ BUILDING FACE / PROPERTY LINE ]
  ├───────────────────────────────────────────────────────────────────────────┤
  │ TIER 1 (Outermost):  OVERALL PROPERTY & BUILDING LENGTH (e.g. 18.00m)     │
  ├───────────────────────────────────────────────────────────────────────────┤
  │ TIER 2 (Middle):     COLUMN GRID-TO-GRID DISTANCES (e.g. 6.00m - 6.00m)   │
  ├───────────────────────────────────────────────────────────────────────────┤
  │ TIER 3 (Innermost):  WALL SEGMENTS & OPENING WIDTHS (e.g. 1.2m - 1.5m)    │
  └───────────────────────────────────────────────────────────────────────────┘
```

---

## 2. TECHNICAL MECHANICS, ASSEMBLIES & SUBSTRUCTURE FRAMING

### 2.1 Shallow Foundation Substructure Mechanics
* **Isolated Spread Footing Mechanics:** Transmits concentrated column load ($P$) to the bearing soil layer at allowable bearing pressure $q_a$:
  $$A_{footing} = \frac{P_{unfactored}}{q_a} \implies B = \sqrt{\frac{P}{q_a}}$$
* **Tie-Beams (Grade Beams):** Continuous reinforced concrete beams connecting column footings at grade level:
  * Resists differential settlement across footings during seismic shaking.
  * Carries ground-floor masonry walls ($150\text{mm}$ CHB), preventing wall settlement cracks.
* **Slab-on-Grade vs Suspended Ground Slab:**
  * *Slab-on-Grade (SOG):* Cast over compacted gravel fill ($100\text{mm}$ base) with $0.15\text{mm}$ polyethylene vapor barrier; reinforced with $10\text{mm}\phi$ @ $300\text{mm}$ O.C. welded wire fabric.
  * *Suspended Ground Slab:* Cast integrally with grade beams over collapsible/marshy soils, spanning between tie beams.

---

## 3. PHILIPPINE STATUTORY & REGULATORY COMPLIANCE MATRIX

| Statutory Authority | Provision / Rule | Mandatory Statutory Metric | Architectural Drawing Consequence |
| :--- | :--- | :--- | :--- |
| **PD 1096 NBCP** | Rule III Sec. 302 | Drawing Sheet Size: Standard size for building permit submission is **$508\text{mm} \times 762\text{mm}$ ($20" \times 30"$)** with standard $20\text{mm}$ margins. | Drawing submissions on non-standard paper sizes will be rejected by the Building Official. |
| **RA 9266** | Section 32 | Official Title Block & Seal: Must contain the RLA's Stamp, PRC License Number, PTR Number, IAPOA Number, TIN, and 15-year civil liability notice. | All architectural working drawings must be signed and sealed exclusively by an RLA. |
| **NSCP 2015** | Section 420.6 | Clear Cover for Substructures: **$75\text{mm}$** for concrete cast permanently against earth; **$50\text{mm}$** for formed concrete exposed to earth. | Footing rebar must be elevated on precast concrete mortar spacer blocks. |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & FOOTING SIZING

### 4.1 Sizing an Isolated Column Footing & Punching Shear Check
**Problem**: An architectural 2-storey residence has an interior column carrying Unfactored Axial Dead Load $D = 240\text{ kN}$ and Live Load $L = 160\text{ kN}$ (Total Unfactored Load $P = 400\text{ kN}$).  
- Soil Geotechnical Report confirms Allowable Soil Bearing Capacity $q_a = 160\text{ kPa} = 160\text{ kN/m}^2$.  
- Column size: $300\text{mm} \times 300\text{mm}$. Material strengths: $f'_c = 21\text{ MPa}$, $f_y = 275\text{ MPa}$.  
- Determine: (1) Required square footing dimension ($B$), (2) Factored Ultimate Soil Pressure ($q_u$), and (3) Footing thickness ($h$) based on wide-beam shear and punching shear.

```
Step 1: Compute Required Footing Base Area (A_req)
A_req = P_unfactored / q_a = 400.0 kN / 160.0 kN/m² = 2.50 m².
For a Square Footing (B × B):
B = √2.50 m² = 1.581 m ➔ Adopt standard dimension B = 1.60 m (1,600 mm).
Provided Base Area A_actual = 1.60 m × 1.60 m = 2.56 m².

Step 2: Calculate Factored Ultimate Soil Pressure (q_u)
Factored Ultimate Load P_u = 1.2(240) + 1.6(160) = 288 + 256 = 544.0 kN.
q_u = P_u / A_actual = 544.0 kN / 2.56 m² = 212.50 kPa = 0.2125 N/mm².

Step 3: Two-Way (Punching) Shear Check to Determine Footing Effective Depth (d)
Critical shear perimeter (b_0) is located at distance d/2 from column faces:
b_0 = 4 × (c + d) = 4 × (300 + d).
Punching Shear Force V_u2 = q_u × [ B² - (c + d)² ] = 0.2125 × [ 1600² - (300 + d)² ].
Concrete Punching Shear Capacity (NSCP 2015 §422.6.5):
φ V_c = 0.75 × 0.33 × √f'c × b_0 × d = 0.75 × 0.33 × √21 × [ 4(300 + d) ] × d
φ V_c = 1.1342 × [ 1200 d + 4 d² ].

Trial Depth: Assume effective depth d = 300 mm:
- b_0 = 4(300 + 300) = 2,400 mm.
- V_u2 = 0.2125 × [ 2,560,000 - 600² ] = 0.2125 × [ 2,200,000 ] = 467,500 N = 467.5 kN.
- φ V_c = 0.75 × 0.33 × √21 × 2400 × 300 = 816,650 N = 816.65 kN.
Since φ V_c (816.65 kN) >> V_u2 (467.5 kN) ➔ Extremely SAFE against punching shear!

Step 4: Total Footing Thickness (h) with Protective Earth Cover (75mm)
Total Thickness h = d + cover + d_bar = 300 mm + 75 mm + 16 mm = 391 mm ➔ Adopt h = 400 mm.
➔ Architectural Substructure Schedule: Provide 1.60m × 1.60m × 0.40m RC Footing with 75mm clear cover.
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: WORKING DRAWING COORDINATION                │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. CROSS-DISCIPLINARY GRID MISALIGNMENT RED FLAGS:                                 │
│    • Structural column centers on Sheet S-1 must match Architectural grid centers  │
│      on Sheet A-2 to within 0.0mm tolerance.                                       │
│    • Never dimension to the centerline of an exterior firewall; dimension to the   │
│      outer face of wall aligned with the property boundary line.                   │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 2. DOOR/WINDOW SCHEDULE ANNOTATION:                                                │
│    • Every schedule entry must specify: (a) Mark (e.g. D-1), (b) Width × Height,   │
│      (c) Material & Glass Type, (d) Hardware Set, (e) Fire Rating, (f) Quantity.   │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Working Drawing Dimensioning Rules):
When drafting standard architectural floor plans for building permit approval under Philippine standard practice, what is the mandatory sequence of the 3 exterior dimension strings reading from the building face outward to the property line?
- A) Overall Length $\rightarrow$ Room Openings $\rightarrow$ Column Grids
- B) Wall Openings/Piers (Innermost) $\rightarrow$ Column Grid-to-Grid (Middle) $\rightarrow$ Overall Building Dimension (Outermost)
- C) Column Grids $\rightarrow$ Overall Length $\rightarrow$ Property Line Boundaries
- D) Interior Partitions $\rightarrow$ Setback Offsets $\rightarrow$ Road Centerlines
> **Correct Answer: B**  
> **Distractor Trap Analysis**:
> * Standard architectural drafting conventions mandate a 3-tier exterior string hierarchy: Tier 1 (Innermost) dimensions individual window/door openings and wall piers; Tier 2 (Middle) dimensions structural column grid lines; Tier 3 (Outermost) provides the total overall building and property envelope length.

---

## 7. ACADEMIC REFERENCES & STATUTORY SOURCES
1. Department of Public Works and Highways (DPWH). (2005). *Implementing Rules and Regulations of PD 1096 (National Building Code)*. Manila.
2. Association of Structural Engineers of the Philippines (ASEP). (2015). *National Structural Code of the Philippines (NSCP 2015)*. Manila.
3. Ching, F. D. K. (2014). *Building Construction Illustrated* (5th ed.). John Wiley & Sons.
