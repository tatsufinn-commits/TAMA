# AR162-1P / BT2: BUILDING ASSEMBLIES — FOUNDATIONS, FLOORS, WALLS, ROOFS & STAIRS
**Course:** Building Technology 2 (Construction Drawings & Small Building Systems)  
**Academic Unit:** Mapúa BS Architecture 1st/2nd Year  
**PRC ALE Category:** Part 2: Building Assemblies, Stairs, Roofs & Construction Detailing (30% Weight)  
**High-Yield Exam Score:** 9.3 / 10  
**Governing Authorities & Standards:** PD 1096 NBCP 2005 IRR (Rule VII, VIII, XII), RA 9514 (Fire Code), BP 344 (Accessibility), NSCP 2015 Chapter 3 & 4.

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 First Principles of Load Path Continuity
Every building assembly forms a link in the continuous load path transferring gravity, wind, and seismic forces safely from the roof down into the earth:
$$\text{Roof Cladding} \rightarrow \text{Purlins} \rightarrow \text{Trusses/Rafters} \rightarrow \text{Beams/Girders} \rightarrow \text{Columns} \rightarrow \text{Footings} \rightarrow \text{Bearing Stratum}$$

```
                           THE CONTINUOUS LOAD PATH MATRIX
  ┌──────────────────────────────────────────────────────────────────────────────────┐
  │ 1. ROOF ASSEMBLY: Long-span corrugated GI sheet ➔ Purlins ➔ Structural Truss     │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 2. FLOOR ASSEMBLY: Slab-on-Fill / Suspended One-Way RC Slab ➔ Floor Beams        │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 3. VERTICAL FRAME: Reinforced Concrete Columns / Confined Masonry Tie-Columns    │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 4. SUBSTRUCTURE: RC Tie-Beams (Grade Beams) ➔ Isolated Spread Footings / Mat     │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 5. BEARING SOIL: Soil Bearing Capacity (q_allowable ≥ 150 kPa for medium clay)   │
  └──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. TECHNICAL MECHANICS, ASSEMBLY SYSTEMS & STAIR GEOMETRY

### 2.1 Substructure Foundation Typology Matrix
| Foundation Typology | Subsurface Soil Condition | Structural Mechanics | Architectural Application |
| :--- | :--- | :--- | :--- |
| **Isolated Spread Footing** | Firm, cohesive soil ($q_a \ge 150\text{ kPa}$), low water table. | Square/rectangular RC pad carrying a single concentric column load. | Standard 1–3 storey residential and low-rise buildings. |
| **Continuous Wall Footing** | Shallow bedrock or stiff clay. | Strip footing ($B \approx 0.40–0.60\text{m}$) supporting continuous load-bearing CHB. | Perimeter firewall footings, low-cost housing. |
| **Combined / Strap Footing** | Property line constraints preventing concentric footing projection. | Exterior footing tied via a rigid strap (cantilever) beam to an interior column footing. | Columns situated directly on boundary property lines. |
| **Mat / Raft Foundation** | Soft alluvial clays, low bearing capacity ($q_a < 75\text{ kPa}$). | Heavy, thick reinforced concrete slab ($h \approx 0.80–1.50\text{m}$) covering entire footprint. | High-rise buildings, basements below water table (waterproof tubbing). |
| **Deep Driven / Bored Piles** | Marshy reclaimed soil (e.g. Manila Bay reclamation, Pasig delta). | Friction piles or end-bearing piles driven to bedrock ($15–40\text{m}$ depth) tied by pile caps. | Heavy institutional complexes and skyscrapers. |

### 2.2 Stair Assembly Mechanics & Blondel's Proportionality Rule
* **Blondel's Ergonomic Formula (Comfortable Human Gait):**
  $$2 R + T = 600\text{mm to } 650\text{mm} \quad (R = \text{Riser height}, T = \text{Tread run})$$
* **Ideal Architectural Residential/Commercial Stair Proportions:**
  * Riser ($R$): **$150\text{mm} – 175\text{mm}$** ($200\text{mm}$ absolute statutory cap).
  * Tread ($T$): **$280\text{mm} – 300\text{mm}$** ($250\text{mm}$ absolute statutory floor).

---

## 3. PHILIPPINE STATUTORY & REGULATORY COMPLIANCE MATRIX (STAIR CODES)

| Statutory Code | Parameter | Statutory Dimension Limit | Exam Trap & Violation Consequence |
| :--- | :--- | :--- | :--- |
| **PD 1096 NBCP IRR** | Minimum Stair Width | Occupant Load $>50$: $\mathbf{1.10\text{m}}$; $\le 50$: $\mathbf{0.90\text{m}}$; Private $\le 10$: $\mathbf{0.75\text{m}}$. | Drawing stairs narrower than $1.10\text{m}$ for public buildings violates building permit rules. |
| **PD 1096 NBCP IRR** | Max Riser & Min Tread | Maximum Riser = $\mathbf{200\text{mm}}$; Minimum Tread = $\mathbf{250\text{mm}}$. | Riser exceeding $200\text{mm}$ causes severe trip hazards and fails code. |
| **PD 1096 NBCP IRR** | Minimum Headroom | Minimum vertical clear headroom = $\mathbf{2.00\text{m}}$ measured from tread nosing. | Beams projecting below $2.00\text{m}$ over stairs must be relocated. |
| **RA 9514 (Fire Code)** | Maximum Flight Rise | Maximum vertical rise between landings = $\mathbf{3.60\text{m}}$ ($12\text{ ft}$). | Stairs rising $>3.60\text{m}$ must incorporate an intermediate resting landing. |
| **BP 344 (Accessibility)** | Handrail Height & Slopes | Handrails at **$0.70\text{m}$ and $0.90\text{m}$** above tread nosing; $0.30\text{m}$ horizontal extension at landings. | Single handrail is illegal for public accessibility. |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & STAIR DESIGN CALCULATIONS

### 4.1 Complete Multi-Storey Stair Layout Derivation
**Problem**: An architect is designing an exit stairway for a 2-storey commercial building in Manila. Total floor-to-floor height $H = 3.60\text{m} = 3,600\text{mm}$. Occupant load per floor = 120 persons. Design a standard U-shaped (dog-leg) stairway adhering strictly to PD 1096 and RA 9514.

```
Step 1: Determine Minimum Clear Stair Width
Occupant load = 120 persons > 50 persons ➔ Minimum clear width = 1.10 m (1,100 mm).

Step 2: Calculate Number of Risers (N_r) and Riser Height (R)
Target comfortable riser height R_target ≈ 165 mm to 175 mm:
Number of risers N_r = Total Height / R_target = 3600 mm / 170 mm = 21.17 risers.
Adopt N_r = 20 risers (Even number ➔ 10 risers per flight for dog-leg symmetry).
Actual Riser Height R = 3600 mm / 20 = 180.0 mm (Meets ≤ 200 mm code cap!).

Step 3: Calculate Tread Dimension (T) using Blondel's Rule
2R + T = 630 mm  ➔  T = 630 - 2(180) = 630 - 360 = 270 mm.
Check code: T = 270 mm ≥ 250 mm min code requirement ➔ PASSES CODE!

Step 4: Determine Flight Length & Landing Dimensions
- Number of treads per flight = Number of risers per flight - 1 = 10 - 1 = 9 treads.
- Flight Horizontal Run (L_run) = 9 treads × 270 mm = 2,430 mm = 2.43 m.
- Intermediate Landing Depth = Equal to stair width = 1,100 mm = 1.10 m.
- Total Stairwell Length = Landing (1.10m) + Flight Run (2.43m) + Floor Landing (1.10m) = 4.63 m.
- Total Stairwell Width = 2(Flight Width) + Stair Gap = 2(1.10m) + 0.10m = 2.30 m.
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: ROOF & WATERPROOFING DETAILS                │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. ROOF DRAINAGE & PARAPET FLASHING:                                               │
│    • Corrugated Metal Roofing Slope: Minimum 1:12 (8.33%) to 1:4 (25%).            │
│    • Concrete Roof Deck Slope: Minimum 1% to 2% toward roof drains / scuppers.    │
│    • Parapet Flashing: Counter-flashing must be tucked 25mm into masonry reglet   │
│      and sealed with polyurethane sealant.                                         │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 2. DOORWAY CLEAR WIDTH THRESHOLDS:                                                 │
│    • Standard Interior Doors: 0.90m × 2.10m (provides 0.80m clear opening for BP344).│
│    • Bathroom Doors: 0.80m × 2.10m (0.70m clear for residential, 0.80m for PWD).  │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Stair Handrail Code Limits):
Under BP 344 and PD 1096, an accessible public building stairway must have handrails with what horizontal extension at the top and bottom of each stair flight?
- A) Handrails must terminate flush with the last riser nosing.
- B) $0.30\text{m}$ horizontal extension beyond the top and bottom risers.
- C) $0.60\text{m}$ horizontal extension along the landing floor.
- D) $1.00\text{m}$ continuous wraparound guardrail.
> **Correct Answer: B**  
> **Distractor Trap Analysis**:
> * BP 344 Rule II Sec. 2.6 mandates a $0.30\text{m}$ ($300\text{mm}$) horizontal extension of handrails beyond the top and bottom risers to allow visually impaired and mobility-impaired occupants to establish hand balance before stepping onto the stair treads.

---

## 7. ACADEMIC REFERENCES & STATUTORY SOURCES
1. Department of Public Works and Highways (DPWH). (2005). *National Building Code of the Philippines (PD 1096) 2005 IRR*. Manila.
2. Bureau of Fire Protection (BFP). (2019). *Revised Implementing Rules and Regulations of RA 9514 (Fire Code of the Philippines)*. Manila.
3. Ching, F. D. K. (2014). *Building Construction Illustrated* (5th ed.). John Wiley & Sons.
