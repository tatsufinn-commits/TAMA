# AR173 / PLAN1: SITE DEVELOPMENT — CONTOUR GRADING, CUT-AND-FILL & STORMWATER HYDROLOGY
**Course:** Planning 1 (Site Planning, Landscape Architecture & Urban Ecology)  
**Academic Unit:** Mapúa BS Architecture 2nd/3rd Year  
**PRC ALE Category:** Part 3: Architectural Design & Site Planning (40% Weight)  
**High-Yield Exam Score:** 9.3 / 10  
**Governing Authorities & Standards:** PD 1096 NBCP 2005 IRR (Rule VII, VIII), DPWH Highway Drainage Manual, Rational Method Stormwater Runoff, Kevin Lynch *Site Planning*.

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 First Principles of Topographical Grading & Slope Mechanics
* **Slope / Gradient ($S$):**
  $$S = \frac{\text{Vertical Rise } (\Delta H)}{\text{Horizontal Run } (L)} \times 100\%$$
* **Slope Classification & Land Suitability Matrix:**
  * **$0\% – 3\%$ (Flat to Gently Undulating):** Highly buildable; requires engineered stormwater slope ($>1\%$) to prevent ponding.
  * **$3\% – 8\%$ (Gently Sloping):** Optimal for residential and campus master planning; excellent natural drainage with minimal earthworks.
  * **$8\% – 18\%$ (Moderately Sloping):** Rolling terrain; requires stepped terrace foundations and retaining walls ($>10\%$).
  * **$> 18\%$ (Steep / Unbuildable per Forestry Reform Code PD 705):** Statutory threshold for non-alienable protection forest; severe landslide risk under seismic/typhoon saturation.

```
                    TOPOGRAPHICAL SLOPE SUITABILITY SPECTRUM
  0% ──────── 3% ──────────────── 8% ──────────────── 18% ───────────────► Steep
  [ Flat Land ]  [ Optimal Building ]   [ Moderate Slope ]   [ STRICTLY PROTECTED ]
  Requires min.  Ideal for Campus/      Terraced Foundations  PD 705: Forest Reserve /
  1% drainage    Residential Layouts    & Retaining Walls     Landslide Hazard Zone
```

---

## 2. TECHNICAL MECHANICS, CUT-AND-FILL BALANCE & EARTHWORKS

### 2.1 The Cut-and-Fill Balance Principle
Sustainable site development minimizes carbon footprint and cost by balancing cut volume with fill volume:
$$V_{cut} \approx V_{fill} \times (1 + S_{shrinkage})$$
* **Grid Method (Borrow-Pit Method):**
  $$V = \frac{A_{grid}}{4} \sum (h_1 + 2 h_2 + 3 h_3 + 4 h_4)$$
* **End-Area Method (Cross-Sectional Stations):**
  $$V = \frac{A_1 + A_2}{2} \times L$$

### 2.2 Stormwater Runoff (The Rational Formula)
To prevent downstream urban flooding, site stormwater runoff is computed via the **Rational Method**:
$$Q = \frac{C \cdot I \cdot A}{360} \quad (\text{Metric: } Q \text{ in } m^3/s, I \text{ in } mm/hr, A \text{ in } hectares)$$
* **Runoff Coefficient ($C$):**
  * Concrete Pavements / Roof Decks: $C = 0.85 – 0.95$ (Impervious).
  * Asphalt Roads: $C = 0.70 – 0.85$.
  * Lawns / Grass Meadows: $C = 0.10 – 0.25$ (High percolation).

---

## 3. PHILIPPINE STATUTORY & REGULATORY COMPLIANCE MATRIX

| Code Authority | Section / Provision | Statutory Mandate | Site Planning Consequence |
| :--- | :--- | :--- | :--- |
| **PD 1096 NBCP** | Rule VIII Sec. 804 | Minimum Slope of Paved Driveways and Walkways: Minimum **$1.0\%$ to $2.0\%$** cross-slope toward site swales/drains. | Flat paved plazas without slope develop stagnant water puddles. |
| **PD 1096 NBCP** | Rule VIII Table VIII.1 | Minimum Unpaved Surface Area ($USA$): Minimum **$10\%$ to $20\%$** of Total Lot Area must remain unpaved natural soil for storm recharge. | Enforces permeable open spaces in site development plates. |
| **Water Code (PD 1067)** | Article 51 | Compulsory Bank Easements: $3.0\text{m}$ along urban rivers; $20.0\text{m}$ along agricultural rivers. | No permanent building structure may encroach within the easement. |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & DRAINAGE CALCULATIONS

### 4.1 Stormwater Peak Runoff & Detention Basin Sizing
**Problem**: An architectural institutional campus covers a site area $A = 4.0\text{ hectares}$ ($40,000\text{ m}^2$) in Pasig City.  
- Surface Cover: $50\%$ Roofs & Pavements ($C_1 = 0.90$, $A_1 = 2.0\text{ ha}$); $50\%$ Landscaped Lawns ($C_2 = 0.20$, $A_2 = 2.0\text{ ha}$).  
- 25-Year Design Rainfall Intensity (PAGASA Isohyetal Chart) $I = 120\text{ mm/hr}$.  
- Calculate: (1) Composite Runoff Coefficient ($C_{comp}$), (2) Peak Storm Discharge ($Q_{peak}$ in $m^3/s$), and (3) Required On-Site Storm Detention Pond Volume for a $30\text{-minute}$ cloudburst storm ($t = 1,800\text{ s}$).

```
Step 1: Calculate Composite Runoff Coefficient (C_comp)
C_comp = [ (C₁ · A₁) + (C₂ · A₂) ] / Total Area
C_comp = [ (0.90 × 2.0 ha) + (0.20 × 2.0 ha) ] / 4.0 ha
C_comp = (1.80 + 0.40) / 4.0 = 2.20 / 4.0 = 0.55.

Step 2: Calculate Peak Stormwater Runoff (Q_peak) via Rational Formula
Q = (C_comp · I · A) / 360
Q = (0.55 × 120 mm/hr × 4.0 ha) / 360
Q = 264.0 / 360 = 0.7333 m³/s (733.3 Liters per second).

Step 3: Calculate Required Storm Detention Basin Volume (V_detention)
Assuming 60% of total 30-minute cloudburst volume must be temporarily detained on-site:
Total Storm Volume = Q_peak × Time = 0.7333 m³/s × 1,800 s = 1,320.0 m³.
Detention Volume V_detention = 1,320.0 m³ × 0.60 = 792.0 m³.

➔ Landscape Architectural Sizing: Design a multi-functional landscaped retention wet pond / sunken 
   amphitheater measuring 30.0m (L) × 18.0m (W) × 1.50m (effective water depth) providing 810 m³ capacity.
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: CONTOUR INTERVALS & GRADING                 │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. CONTOUR LINE PROPERTIES (TOPOGRAPHICAL MAPS):                                   │
│    • Closely spaced contours = STEEP slope; Widely spaced contours = GENTLE slope.│
│    • Contours pointing UPHILL (V-shape) = Natural Drainage Valley / Stream Bed.   │
│    • Contours pointing DOWNHILL (U-shape) = Ridge Line.                            │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 2. CUT-AND-FILL RETAINING WALLS:                                                   │
│    • Retaining wall height > 1.50m requires weep holes (50mmØ @ 1.5m O.C.) with    │
│      gravel backfill to relieve hydrostatic water pressure behind wall.            │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Unbuildable Slope Threshold under Philippine Forestry Law):
Under Presidential Decree No. 705 (Revised Forestry Code of the Philippines), lands with a slope exceeding what threshold are legally classified as protection forest reserves and are generally unbuildable for commercial subdivision development?
- A) $8\%$ slope
- B) $12\%$ slope
- C) $18\%$ slope
- D) $25\%$ slope
> **Correct Answer: C**  
> **Distractor Trap Analysis**:
> * Under PD 705 Section 15, all public lands with slopes of **$18\%$ and above** are retained for permanent forest protection and cannot be classified as alienable and disposable (A&D) for private residential or commercial building construction.

---

## 7. ACADEMIC REFERENCES
1. Lynch, K., & Hack, G. (1984). *Site Planning* (3rd ed.). MIT Press.
2. Department of Public Works and Highways (DPWH). (2015). *Highway Safety and Drainage Manual*. Manila.
3. Marsh, W. M. (2010). *Landscape Planning: Environmental Applications* (5th ed.). John Wiley & Sons.
