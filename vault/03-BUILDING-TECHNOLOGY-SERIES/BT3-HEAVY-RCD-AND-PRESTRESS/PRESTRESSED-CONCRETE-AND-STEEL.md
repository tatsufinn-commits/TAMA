# AR164-1 / BT3: PRESTRESSED CONCRETE SYSTEMS & HEAVY STRUCTURAL STEEL
**Course:** Building Technology 3 & 4 (Mapúa BS Architecture 3rd Year)  
**Curriculum Alignment:** Mapúa ARIDBE 14-Week Trimester System · Program Outcomes A, B, E, J  
**PRC ALE Category:** Part 2: Building Technology, Materials, Construction & Utilities (30% Weight)  
**High-Yield Exam Score:** 9.6 / 10  
**Governing Authorities & Standards:** NSCP 2015 (Section 418 Prestressing / Section 500 Structural Steel), ACI 318-19, AISC 360-16, ASTM A416 (7-Wire Strand), ASTM A36 / A992, PD 1096 NBCP 2005 IRR.

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 First Principles of Prestressing Mechanics
In standard reinforced concrete (RC), concrete carries compression while internal steel bars carry tension after cracking. However, tension cracks reduce the effective section to only the compression zone. **Prestressed Concrete** eliminates or controls cracking by introducing deliberate, high-magnitude internal pre-compression before or during service load application.

Under external gravity loading:
- **Bottom fiber stress:** $\sigma_{bottom} = -\frac{P}{A} + \frac{P \cdot e}{S} - \frac{M_D + M_L}{S}$
- **Top fiber stress:** $\sigma_{top} = -\frac{P}{A} - \frac{P \cdot e}{S} + \frac{M_D + M_L}{S}$
*(where $P = \text{effective prestress force}$, $e = \text{eccentricity of tendon from neutral axis}$, $S = \text{section modulus} = I/y$, $M_D = \text{dead load moment}$, $M_L = \text{live load moment}$, compression is negative / tension is positive)*.

```
       CONVENTIONAL RC BEAM                           PRESTRESSED CONCRETE BEAM
┌───────────────────────────────────┐           ┌───────────────────────────────────┐
│ Compression Zone (Solid Concrete) │           │ Full Cross-Section in Compression │
├ - - - - - - - - - - - - - - - - - ┤           ├ - - - - - - - - - - - - - - - - - ┤
│ Tension Zone (Cracked, Inactive)  │           │ Internal Upward Balanced Force     │
│   === Rebar carrying Tension ===  │           │   ~~~~ Draped Tendon Parabola ~~~~│
└───────────────────────────────────┘           └───────────────────────────────────┘
   Cracks under service load                       Zero tension cracks / controlled deflection
   Span-to-Depth Ratio: L/16 – L/20                Span-to-Depth Ratio: L/35 – L/45
```

### 1.2 Load Balancing Method (T.Y. Lin Framework)
By draping high-strength tendons in a parabolic curve, the tendon exerts a continuous, uniform upward radial force ($w_{bal}$) that directly opposes gravity loads:
$$w_{bal} = \frac{8 P e_c}{L^2}$$
*When $w_{bal} = w_{Dead}$, the beam behaves as a pure axially compressed column under permanent dead loads, with zero midspan deflection and zero internal flexural bending stress.*

---

## 2. TECHNICAL MECHANICS, ASSEMBLIES & CONSTRUCTION DETAILING

### 2.1 Pre-Tensioning vs. Post-Tensioning Systems
| Technical Parameter | Pre-Tensioning (Plant / Precast Fabricated) | Post-Tensioning (Cast-in-Place / CIP Site) |
| :--- | :--- | :--- |
| **Manufacturing Environment** | Factory casting beds (stressing abutments withstand tens of thousands of kN) | Poured on-site within architectural formwork |
| **Tendon Type** | Uncoated 7-wire stress-relieved or low-relaxation steel strands (ASTM A416, $f_{pu} = 1860\text{ MPa} / 270\text{ ksi}$) | High-strength 7-wire strands enclosed in corrugated plastic/galvanized steel ducts |
| **Bonding Mechanism** | Direct bond along strand transmission length ($l_t \approx 50 d_b$) | **Bonded System:** Duct filled with non-shrink cementitious grout post-stressing.<br>**Unbonded System:** Strands coated with lithium-based corrosion inhibitor inside extruded HDPE sheath. |
| **Stressing Operation** | Strands tensioned *before* concrete placement; released after concrete reaches $f'_{ci}$ | Strands hydraulic-jacked *after* concrete achieves compressive strength ($f'_{ci} \ge 20.5\text{ MPa}$) |
| **Primary Architectural Uses** | Double-Tee parking slabs, hollow-core planks, bridge girders, precast stadium risers | Two-way high-rise flat plates, long-span transfer girders, podium post-tensioned beams |

### 2.2 Prestress Losses ($Total \approx 15\% – 22\%$)
1. **Immediate Losses at Transfer**:
   - *Elastic Shortening of Concrete ($\Delta f_{pES}$)*: As tendon force compresses concrete, member shortens elastically.
   - *Anchorage Slip ($\Delta f_{pA}$)*: Wedge seating movement ($3\text{ mm}–6\text{ mm}$) into anchorage barrel.
   - *Friction and Wobble ($\Delta f_{pF}$ - Post-Tensioning only)*: $\Delta f_{sF} = f_{pj} \cdot (1 - e^{-(Kx + \mu\alpha)})$ per NSCP 2015 §418.
2. **Time-Dependent Long-Term Losses**:
   - *Creep of Concrete ($\Delta f_{pCR}$)*: Sustained compressive strain over time.
   - *Shrinkage of Concrete ($\Delta f_{pSH}$)*: Moisture loss during hydration.
   - *Relaxation of Steel Tendons ($\Delta f_{pRE}$)*: Gradual loss of steel stress under high constant strain.

### 2.3 Heavy Structural Steel Assemblies & Profiles
* **Wide-Flange Shapes ($W$-Beams)**: Designated as $W\text{ Depth (in)} \times \text{Weight (lbs/ft)}$ (e.g., $W14 \times 90$: $14\text{"}$ nominal depth, $90\text{ lbs/ft} = 133.9\text{ kg/m}$).
* **Connection Typologies**:
  1. **Shear Connections (Framed / Simple)**: Connects web only via double clip angles or shear tabs. Transfers shear force $V_u$; permits end rotation (assumed $M_u = 0$). Fasteners: ASTM A325/A490 high-strength bolts.
  2. **Moment Connections (Rigid / Fully Restrained - FR)**: Flanges welded directly to column flanges via Complete Joint Penetration (CJP) groove welds; web bolted or welded with shear tab. Transfers $M_u + V_u$. Requires continuity plates (stiffeners) inside column web.

---

## 3. PHILIPPINE STATUTORY & REGULATORY COMPLIANCE MATRIX

| Code Authority | Article / Section | Exact Mandatory Standard | Architectural Design Consequence |
| :--- | :--- | :--- | :--- |
| **NSCP 2015** | Section 418.5.1 | Minimum Concrete Strength at Transfer: $f'_{ci} \ge 20.5\text{ MPa}$ ($3,000\text{ psi}$). Minimum 28-day strength $f'_c \ge 27.6\text{ MPa}$ ($4,000\text{ psi}$). | Formwork and shoring cannot be stripped until field-cured cylinders confirm $f'_{ci}$ threshold. |
| **NSCP 2015** | Section 418.3.3 | Permissible Extreme Fiber Tensile Stress at Service Loads (Class U - Uncracked): $f_t \le 0.62\sqrt{f'_c}\text{ MPa}$. | Enforces crack-free concrete for roof decks and water-retaining structures. |
| **PD 1096 NBCP** | Rule XII Sec. 1207 | Clear Concrete Protective Cover for Tendons: Minimum $40\text{ mm}$ for non-exposed interior slabs; $50\text{ mm}$ for exterior exposure; $75\text{ mm}$ cast against earth. | Controls soffit fire resistance (2-hour to 4-hour ratings per NBCP Table XII.1). |
| **NSCP 2015 / AISC** | Section 500 / 510 | Maximum Slenderness Ratio for Compression Steel Members: $KL/r \le 200$. Tension members: $L/r \le 300$. | Governs brace, column, and truss member unbraced length in structural grid layouts. |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & ENGINEERING CALCULATIONS

### 4.1 Post-Tensioned Two-Way Flat Plate Sizing & Load Balancing
**Problem**: An architectural office floor bay in Mapúa AD8 High-Rise Design Studio spans $8.50\text{m} \times 8.50\text{m}$ ($L = 8.5\text{m}$).  
- Superimposed Dead Load ($SDL$) = $1.80\text{ kPa}$ (floor tiles, ceiling, MEPFS ducting).  
- Live Load ($LL$) = $2.40\text{ kPa}$ (Office occupancy per NSCP Table 205-1).  
- Concrete Unit Weight $\gamma_c = 24.0\text{ kN/m}^3$. $f'_c = 35\text{ MPa}$.

```
Step 1: Estimate Slab Thickness (h)
Two-Way PT Flat Plate Rule-of-Thumb Span-to-Depth Ratio = L/42 to L/45:
h = 8500 mm / 42 = 202.4 mm ➔ Adopt standard thickness h = 200 mm (0.20 m).
(Compare with conventional RC flat plate requiring L/30 = 283 mm ➔ 83 mm thickness savings).

Step 2: Calculate Gravity Loads
- Self-Weight (SW) = 0.20 m × 24.0 kN/m³ = 4.80 kPa.
- Total Unfactored Dead Load (w_D) = SW + SDL = 4.80 + 1.80 = 6.60 kPa.
- Factored Ultimate Load (w_u) = 1.2(6.60) + 1.6(2.40) = 7.92 + 3.84 = 11.76 kPa.

Step 3: Determine Target Balanced Load (w_bal)
Adopt standard practice: Balance 75% of Total Dead Load:
w_bal = 0.75 × w_D = 0.75 × 6.60 kPa = 4.95 kPa.

Step 4: Compute Required Effective Prestress Force (P) per meter strip
Given slab thickness h = 200 mm, top/bottom clear cover = 25 mm, strand diameter = 12.7 mm:
Maximum tendon drape eccentricity at midspan a = (h/2 - cover - strand_dia/2) = (100 - 25 - 6.35) = 68.65 mm = 0.06865 m.
Using T.Y. Lin's Load Balancing Equation:
w_bal = (8 · P · a) / L²  ➔  P = (w_bal · L²) / (8 · a)
P = (4.95 kN/m² × (8.50 m)²) / (8 × 0.06865 m)
P = (4.95 × 72.25) / 0.5492 = 357.64 / 0.5492 = 651.2 kN per meter width of slab.

Step 5: Number of 12.7mm (0.5") Tendons Required (ASTM A416 Grade 270)
Area of 0.5" strand A_ps = 98.7 mm².
Ultimate strength f_pu = 1860 MPa. Effective final prestress f_se ≈ 0.60 f_pu = 1116 MPa.
Effective force per strand P_strand = A_ps · f_se = 98.7 mm² × 1.116 kN/mm² = 110.15 kN/strand.
Strands required per meter = 651.2 kN / 110.15 kN = 5.91 strands/m ➔ Space 1 strand every 165 mm across column strips.
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: HIGH-RISE PODIUM & TOWER                    │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. FLOOR-TO-FLOOR HEIGHT OPTIMIZATION:                                             │
│    Conventional RC: 300mm slab + 400mm drop beam + 600mm MEP plenum = 3.60m F-to-F.│
│    Post-Tensioned Flat Plate: 200mm slab (no drop beams) + 600mm plenum = 3.10m.   │
│    ➔ Savings of 0.50m per storey! On a 40-storey tower = 20.0m total height saved.  │
│    ➔ Drastically reduces wind drag, seismic base shear (V = Cs·W), and facade cost. │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 2. CORE PENETRATION & DRYWALL FASTENING JURY DEFENSE WARNING:                      │
│    • Never allow core-drilling for MEPFS risers within 1.0m of column capitals.    │
│    • Ground Penetrating Radar (GPR) scan mandatory prior to any aftermarket coring.│
│    • Severing an unbonded tendon releases 110 kN explosively out of the anchorage. │
└────────────────────────────────────────────────────────────────────────────────────┘
```

### Plate Defense Evaluation Matrix (Juror Red Flags):
* **Red Flag 1 (Drop Beams under Flat Plates):** If you specify a PT two-way flat plate system, do not draw interior drop beams unless it is a designated seismic moment frame or perimeter wind frame.
* **Red Flag 2 (Tendon Anchorage Encroachment):** Post-tensioning stressing pockets require minimum $1.20\text{m}$ clearance from property lines/adjoining walls for hydraulic jack access during construction.
* **Red Flag 3 (Transfer Plate Structural Depth):** If columns do not align from tower to podium parking, a PT Transfer Girder requires depth $d \approx L/10 \text{ to } L/12$ (e.g. $12\text{m}$ span requires $1.0\text{m}–1.2\text{m}$ beam depth).

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Situational - Structural System Selection):
An architect is designing a 32-storey commercial office tower in Ortigas Center, Pasig City with an $8.40\text{m} \times 8.40\text{m}$ column grid. To maximize ceiling height and minimize structural dead weight under NSCP 2015 seismic Zone 4, which structural floor system is most appropriate?
- A) Conventional cast-in-place one-way solid slab with intermediate secondary beams.
- B) Unbonded post-tensioned two-way flat plate with perimeter moment frames.
- C) Pre-tensioned hollow-core precast planks resting on load-bearing masonry.
- D) Two-way conventional reinforced concrete waffle slab with $150\text{mm}$ ribs.
> **Correct Answer: B**  
> **Distractor Trap Analysis**:
> * Option A adds significant dead weight and drops beams into the ceiling plenum ($0.5\text{m}$ wasted per floor).
> * Option C is forbidden for high-rise seismic Zone 4 systems due to progressive collapse risk and diaphragm flexibility limits.
> * Option D is heavy and requires expensive formwork, whereas PT flat plate (Option B) achieves $L/42$ thickness ($200\text{mm}$) with zero interior beams.

#### Question 2 (Statutory Compliance - Concrete Transfer Strength):
Under NSCP 2015 Section 418.5.1, what is the absolute minimum compressive strength of concrete ($f'_{ci}$) required before post-tensioning tendons can be stressed by hydraulic jacks?
- A) $15.0\text{ MPa}$ ($2,175\text{ psi}$)
- B) $20.5\text{ MPa}$ ($3,000\text{ psi}$)
- C) $27.6\text{ MPa}$ ($4,000\text{ psi}$)
- D) $35.0\text{ MPa}$ ($5,075\text{ psi}$)
> **Correct Answer: B**  
> **Distractor Trap Analysis**:
> * $27.6\text{ MPa}$ (Option C) is the standard 28-day compressive strength ($f'_c$), not the transfer strength ($f'_{ci}$).
> * Straining concrete below $20.5\text{ MPa}$ (Option A) causes explosive anchorage zone crushing and wedge blowouts.

---

## 7. ACADEMIC REFERENCES & STATUTORY SOURCES
1. Association of Structural Engineers of the Philippines (ASEP). (2015). *National Structural Code of the Philippines (NSCP C101-15, Vol. 1: Buildings, Towers, and Other Vertical Structures)* (7th ed.). ASEP.
2. American Concrete Institute (ACI). (2019). *Building Code Requirements for Structural Concrete and Commentary (ACI 318-19)*. ACI Committee 318.
3. Lin, T. Y., & Burns, N. H. (1981). *Design of Prestressed Concrete Structures* (3rd ed.). John Wiley & Sons.
4. American Institute of Steel Construction (AISC). (2016). *Specification for Structural Steel Buildings (AISC 360-16)*. AISC.
5. Department of Public Works and Highways (DPWH). (2005). *Implementing Rules and Regulations of the National Building Code of the Philippines (PD 1096)*. Manila, Philippines.
