# PLAN 1 — CANONICAL SITE PLANNING, TOPOGRAPHICAL GRADING, CUT-AND-FILL & HYDROLOGY MANUAL | 10-SECTION CANONICAL MODULE

> **Vault Cluster:** `vault/07-PLANNING-AND-ENVIRONMENTAL/PLAN1-SITE-PLANNING-AND-ECOLOGY/` + mirrors `vault/07-PLANNING-AND-ENVIRONMENTAL/`  
> **Authority:** Mapúa University ARIDBE Planning Sequence, Kevin Lynch *Site Planning*, DPWH Highway Drainage Guidelines, PD 1067 Water Code & PD 705 Forestry Code  
> **Status:** CANONICAL 10-SECTION PLANNING MANUAL — Comprehensive Engineering & Mathematical Reference for Site Grading, Stormwater Calculations & PRC ALE Board Exams  
> **Citation Rigor:** Cites PD 1096 NBCP (Rule VIII), PD 1067 (Water Code Art. 51), PD 705 (Forestry Code §15), and Rational Method Hydrology [L]

---

## 1. METADATA

| Field | Value |
|---|---|
| **Mapúa Course Alignment** | `PLAN-1` (Site Planning & Landscape Architecture) [M], `PLAN-2` (Urban Design & Housing) [M], `ARCH-DESIGN-6` (Site Development Planning) [M] |
| **PRC ALE Board Alignment** | **Part III:** Architectural Design & Site Planning (40% Weight); **Part I:** History, Theory & Principles of Planning (30% Weight) [U] |
| **High-Yield Exam Rating** | **9.8 / 10.0** — Slope percentage calculations, contour interpolation, cut-and-fill balancing, Water Code easements, and stormwater runoff formulas are tested heavily |
| **Enforcing Regulatory Authorities** | **Department of Environment and Natural Resources (DENR)**, **National Water Resources Board (NWRB)**, **DPWH**, and **Local Zoning Boards** [L] |
| **Terminal Competency** | Ability to analyze raw terrain, interpolate spot elevations, grade building pads, balance earthworks, design swales, and resolve tropical microclimates [M] |

---

## 2. EXECUTIVE FOUNDATION: TOPOGRAPHICAL GRADING & HYDROLOGICAL INTEGRATION

Site planning is the art and science of **arranging structures on the land and shaping the spaces between them to fit human activities while harmonizing with natural ecological systems** (Kevin Lynch) [A].

```
  ┌───────────────────────────────────────────────────────────────────────────┐
  │                   THE HIERARCHY OF SITE PLANNING ANALYSIS                 │
  └───────────────────────────────────────────────────────────────────────────┘
  
   [1] TOPOGRAPHY & SLOPE ────► [2] HYDROLOGY & DRAINAGE ──► [3] MICROCLIMATE & SUN
   • Contours, ridge lines,     • Watershed catchment,       • Solar angles, wind
     valleys, cut-and-fill        stormwater runoff Q,         regimes, thermal mass,
     earthwork balancing.         water table, easements.      vegetation buffers.
```

### The Law of Slope Suitability & Structural Hazard
Topographical slope dictating structural design feasibility:
1. **$0\% – 3\%$ (Flat / Gentle):** Highly buildable; requires minimum $1.0\%\text{ to }2.0\%$ engineered slope to prevent water ponding.
2. **$3\% – 8\%$ (Optimal Building Terrain):** Ideal for residential subdivisions and institutional campuses; excellent natural gravity drainage with minimal earthworks.
3. **$8\% – 18\%$ (Rolling / Moderate Slope):** Requires terraced building pads, stepped strip footings, and structural retaining walls ($>10\%$).
4. **$> 18\%$ (Steep / Non-Alienable Forest):** Statutory threshold under **Section 15 of Presidential Decree No. 705 (Revised Forestry Code)**; classified as non-buildable public forest reserve due to extreme landslide risk [L].

---

## 3. MASTER GLOSSARY & ACRONYMS

* **Contour Line:** An imaginary line on a map connecting continuous points of equal elevation above a standard reference datum (Mean Sea Level / MSL) [L].
* **Contour Interval (CI):** The vertical distance in elevation between two adjacent contour lines (typically $1.00\text{ m}$, $2.00\text{ m}$, or $5.00\text{ m}$) [L].
* **Index Contour:** Every fifth contour line drawn in a heavier, bold line weight, labelled with its numerical elevation [L].
* **Spot Elevation:** The exact surveyed vertical height of a specific topographical point (e.g. building corners, road crowns, invert elevations) [L].
* **Swale:** A shallow, vegetated drainage depression with gently sloping sides designed to slow, filter, and convey stormwater runoff [L].
* **Crown:** The raised center of a paved road or walkway sloping downward toward the shoulders ($1.5\%\text{--}2.0\%$) to shed surface water [L].
* **Cut-and-Fill:** The earthwork process of excavating soil from high areas ("cut") and depositing it into lower areas ("fill") to create level building pads [L].
* **Rational Formula:** The fundamental hydrological equation ($Q = \frac{CIA}{360}$) used to calculate peak stormwater runoff discharge from a given drainage basin [L].
* **Runoff Coefficient ($C$):** An empirical dimensionless factor ($0.05\text{ to }0.95$) representing the fraction of rainfall that turns into surface runoff based on ground permeability [L].
* **Invert Elevation (IE):** The lowest interior surface point of a drain pipe or culvert channel [L].

---

## 4. GOVERNING LAWS, SLOPE MATRICES & TECHNICAL THRESHOLDS [L]

### A. Statutory Slope Suitability Matrix

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │                     TOPOGRAPHICAL SLOPE SUITABILITY MATRIX                 │
 └────────────────────────────────────────────────────────────────────────────┘
```

| Slope Gradient ($S\%$) | Slope Ratio | Terrain Description | Suitability & Engineering Requirements |
|---|:---:|---|---|
| **$0\% \text{ to } 3\%$** | $\le 1:33$ | **Flat to Gentle** | Ideal for high-density commercial, sports plazas, parking. Must engineer min **$1.0\%$ cross-slope** to avoid standing water [L]. |
| **$3\% \text{ to } 8\%$** | $1:33 \text{ to } 1:12.5$ | **Gently Sloping** | **Optimal Building Zone.** Natural gravity storm drainage; roads and sewer lines follow natural contours without heavy pumps [L]. |
| **$8\% \text{ to } 18\%$** | $1:12.5 \text{ to } 1:5.5$ | **Moderately Rolling** | Stepped building pads, split-level floor plans, and concrete retaining walls required. Heavy vehicular roads should curve along contours [L]. |
| **$> 18\%$** | $> 1:5.5$ | **Steep / Mountainous** | **Non-Buildable under PD 705 §15.** Severe soil erosion and mass-wasting landslide hazards during Philippine typhoon monsoon seasons [L]. |

---

### B. Water Code of the Philippines (Presidential Decree No. 1067 Article 51)
All natural water bodies in the Philippines are protected by **compulsory public riverbank easements** measured landward from the normal high watermark:

$$\begin{aligned}
\mathbf{\text{Urban Areas (Cities & Municipal Centers)}} &\implies \mathbf{3.00\text{ Meters}} \text{ Mandatory Easement} \\
\mathbf{\text{Agricultural / Rural Areas}} &\implies \mathbf{20.00\text{ Meters}} \text{ Mandatory Easement} \\
\mathbf{\text{Forestry / Mountainous Areas}} &\implies \mathbf{40.00\text{ Meters}} \text{ Mandatory Easement}
\end{aligned}$$

*Rule:* No permanent building, retaining wall, fence, or private enclosure may encroach within this statutory easement zone. It must remain open for public recreation, navigation, and floodway control [L].

---

### C. Standard Site Surface Slopes & Drainage Cross-Gradients

| Site Element | Minimum Slope | Maximum Slope | Standard Design Value |
|---|:---:|:---:|:---:|
| **Paved Parking Lots** | $1.0\%$ ($1:100$) | $5.0\%$ ($1:20$) | **$1.5\%\text{ to }2.0\%$** |
| **Paved Driveways & Roads** | $1.0\%$ ($1:100$) | $12.0\%$ ($1:8.3$) | **$1.5\%\text{ to }6.0\%$** |
| **Pedestrian Walkways (BP 344)**| $1.0\%$ ($1:100$) | $5.0\%$ ($1:20$) | **$1.0\%\text{ to }2.0\%$** |
| **Accessible Ramps (BP 344)** | $5.0\%$ ($1:20$) | $8.33\%$ ($1:12$) | **$8.33\%$ ($1:12$)** |
| **Grassed Swales & Turf Drainage**| $2.0\%$ ($1:50$) | $8.0\%$ ($1:12.5$) | **$2.0\%\text{ to }3.0\%$** |
| **Natural Unretained Earth Slopes**| — | $50.0\%$ ($1:2$) | Max **$1:2$ ($50\%$)** to prevent erosion |

---

## 5. FORMULAS & WORKED CALCULATION EXAMPLES [L]

### Canonical Equations

1. **Topographical Slope ($S$):**
   $$S = \frac{\Delta H}{L} \times 100\% \iff L = \frac{\Delta H}{S}$$
   *(where $\Delta H = \text{Vertical Elevation Difference (Rise)}$, $L = \text{Horizontal Distance (Run)}$).*

2. **Linear Contour Spot Elevation Interpolation:**
   $$E_x = E_1 + \left( \frac{D_x}{D_{\text{total}}} \times (E_2 - E_1) \right)$$

3. **Earthwork Volume by End-Area Method:**
   $$V = \left( \frac{A_1 + A_2}{2} \right) \times L$$

4. **Earthwork Volume by Grid / Borrow-Pit Method:**
   $$V = \frac{A_{\text{cell}}}{4} \sum (h_1 + 2h_2 + 3h_3 + 4h_4)$$
   *(where $h_n = \text{depth of cut/fill at a grid corner shared by } n \text{ adjacent cells}$).*

5. **Stormwater Peak Runoff (The Rational Method):**
   $$Q = \frac{C \cdot I \cdot A}{360}$$
   $$\text{Composite } C_{\text{avg}} = \frac{\sum (C_i \cdot A_i)}{\sum A_i}$$
   *(where $Q = \text{Peak Runoff } (\text{m}^3/\text{s})$, $C = \text{Runoff coefficient}$, $I = \text{Rainfall intensity } (\text{mm/hr})$, $A = \text{Drainage area in hectares}$).*

---

### 🏛️ WORKED CALCULATION 1: Hillside Terraced Building Pad & Balanced Earthworks
**Scenario:** A site rises uniformly from elevation $+100.00\text{ m}$ to $+105.00\text{ m}$ across a horizontal distance of **$50.00\text{ m}$** ($\text{Slope } S = 10\%$). An architect must design a level **$20.00\text{ m} \times 30.00\text{ m}$ ($600.00\text{ m}^2$) building pad** oriented perpendicular to the slope, with its center situated at horizontal distance $25.00\text{ m}$ from the bottom (natural grade $+102.50\text{ m}$).

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │               BALANCED CUT-AND-FILL ELEVATION SECTION                      │
 └────────────────────────────────────────────────────────────────────────────┘
 
  Elev. (+m)
  +105.00m ───────────────────────────────────┐ (High Ground)
                                             /│
                                 [CUT ZONE] / │  Depth of Cut: +1.00m
  +103.50m ────────────────────────────────/  │  at uphill edge
                         ▲                /   │
  +102.50m ══════════════┼═══════════════╧════╧═════════════════════ (PAD LEVEL)
                         │               │
  +101.50m ──────────────│───────────────│ (FILL ZONE)
                         │ Height of     │ Height of Fill: +1.00m
                         ▼ Fill: 1.00m   │ at downhill edge
  +100.00m ──────────────────────────────┘ (Low Ground)
           ◄────── 10.0m ─────►◄───── 10.0m ─────►
           ◄────────── Total Pad Width: 20.0m ──────────►
```

**Step 1: Calculate Natural Elevations at Pad Boundaries**
* Pad extends $10.00\text{ m}$ uphill and $10.00\text{ m}$ downhill from the centerline ($x = 25.00\text{ m}$).
* Centerline elevation $= 100.00 + (25.00 \times 0.10) = \mathbf{+102.50\text{ m}}$
* Uphill edge ($x = 35.00\text{ m}$) natural elevation $= 100.00 + (35.00 \times 0.10) = \mathbf{+103.50\text{ m}}$
* Downhill edge ($x = 15.00\text{ m}$) natural elevation $= 100.00 + (15.00 \times 0.10) = \mathbf{+101.50\text{ m}}$

**Step 2: Determine Cut Depth and Fill Height for Finished Floor Level (FFL) = $+102.50\text{ m}$**
* Maximum Cut at Uphill Edge $= 103.50 - 102.50 = \mathbf{+1.00\text{ m cut}}$
* Maximum Fill at Downhill Edge $= 102.50 - 101.50 = \mathbf{+1.00\text{ m fill}}$

**Step 3: Calculate Triangular Cut and Fill Volumes**
* Cross-sectional cut area:
$$A_{\text{cut}} = \frac{1}{2} \times \text{Base } (10.00\text{ m}) \times \text{Height } (1.00\text{ m}) = 5.00\text{ m}^2$$
* Cross-sectional fill area:
$$A_{\text{fill}} = \frac{1}{2} \times \text{Base } (10.00\text{ m}) \times \text{Height } (1.00\text{ m}) = 5.00\text{ m}^2$$
* Multiply by pad length ($30.00\text{ m}$ along contour):
$$\begin{aligned}
V_{\text{cut}} &= 5.00\text{ m}^2 \times 30.00\text{ m} = \mathbf{150.00\text{ m}^3} \\
V_{\text{fill}} &= 5.00\text{ m}^2 \times 30.00\text{ m} = \mathbf{150.00\text{ m}^3}
\end{aligned}$$
* *Result:* **$V_{\text{cut}} = V_{\text{fill}} = 150.00\text{ m}^3$ — Perfectly Balanced Earthworks with zero net soil hauling costs!**

---

### 🏛️ WORKED CALCULATION 2: Stormwater Runoff (The Rational Method)
**Scenario:** A $2.50\text{--hectare}$ institutional campus in Quezon City has a 10-year design storm intensity of **$I = 120\text{ mm/hr}$**. The site surface breakdown is:
* Building Roofs (Impervious): $A_1 = 1.00\text{ ha}$, $C_1 = 0.90$
* Asphalt Parking & Roads: $A_2 = 0.80\text{ ha}$, $C_2 = 0.80$
* Turf & Landscaped Parks: $A_3 = 0.70\text{ ha}$, $C_3 = 0.20$

**Step 1: Calculate Composite Runoff Coefficient ($C_{\text{avg}}$)**
$$\begin{aligned}
C_{\text{avg}} &= \frac{(1.00 \times 0.90) + (0.80 \times 0.80) + (0.70 \times 0.20)}{1.00 + 0.80 + 0.70} \\
&= \frac{0.90 + 0.64 + 0.14}{2.50} = \frac{1.68}{2.50} = \mathbf{0.672}
\end{aligned}$$

**Step 2: Compute Peak Storm Discharge ($Q$)**
$$Q = \frac{C_{\text{avg}} \cdot I \cdot A}{360} = \frac{0.672 \times 120 \times 2.50}{360} = \frac{201.6}{360} = \mathbf{0.56\text{ m}^3/\text{s (or } 560\text{ Liters/sec)}}$$

---

## 6. RETAINING WALLS, DRAINAGE SWALES & VEGETATIVE STABILIZATION [I][L]

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │               STRUCTURAL RETAINING WALL & DRAINAGE SECTION                 │
 └────────────────────────────────────────────────────────────────────────────┘
 
                         Retained Soil Surface (Upper Grade)
                 ┌────────────────────────────────────────────────
                 │ :::: Granular Gravel Filter Backfill
                 │ :::: (Relieves hydrostatic water pressure)
                 │ ┌──┐
                 │ │  │ Reinforced Concrete Cantilever Stem
                 │ │  │
                 │ │  │
                 │ │  │  ◄── Earth Pressure P
                 │ │  │
                 │ │  │
  Lower Grade    │ │  │
  ───────────────┼─┴──┤
                 │ █O │  ◄── Perforated Weep Hole (Ø 75mm @ 1.50m O.C.)
                 │    │      with Geotextile Filter Fabric
                 └──┬─┴───────────────────────────────────┐
                    │      Reinforced Concrete Footing    │
                    └─────────────────────────────────────┘
```

1. **Hydrostatic Relief:** Retaining walls fail primarily from un-drained hydrostatic water pressure during typhoons. Always install **$\varnothing 75\text{ mm}$ ($3\text{ in}$) PVC weep holes** spaced every **$1.50\text{ m}$** with crushed gravel filter packs.
2. **Bio-Swales & Vegetative Buffers:** Vetiver grass (*Chrysopogon zizanioides*) planted on embankments up to $45^\circ$ provides deep root tensile reinforcement ($2\text{--}3\text{m}$ deep roots) preventing slope washouts.

---

## 7. EXAM TRAPS & SITE DESIGN COMMON MISTAKES

* **TRAP 1: Water Code Easement Measurement Point:**
  * *Mistake:* Measuring the $3.0\text{m}$ urban easement from the centerline of the river.
  * *Law:* Must be measured landward starting from the **normal high watermark (highest flood level)** [L].
* **TRAP 2: Confusing Slope Percentage ($S\%$) with Angle ($\theta$ in degrees):**
  * $100\%$ slope $= 1:1 = 45^\circ$.
  * $10\%$ slope $= 1:10 = \arctan(0.10) \approx 5.71^\circ$.
  * *Trap:* A $10\%$ slope is NOT $10^\circ$!
* **TRAP 3: Civil Code Article 637 (Natural Drainage Servitude):**
  * *Law:* Lower estates are obliged to receive waters naturally descending from higher estates. However, the owner of the higher estate cannot construct works that increase or divert the natural burden onto neighbors [L].
* **TRAP 4: Maximum Road Grade for Heavy Vehicles:**
  * Capped at **$12.0\%$ ($1:8.3$)** maximum for short stretches ($<100\text{m}$); standard access roads should not exceed **$6.0\text{--}8.0\%$**.

---

## 8. HISTORICAL SITE PLANNING PHILOSOPHIES

1. **Ian McHarg (*Design with Nature*, 1969):**
   * *Contribution:* Pioneered the **layer-cake overlay method** (overlaying geology, hydrology, slope, and vegetation maps), creating the theoretical foundation for modern GIS site suitability modeling.
2. **Kevin Lynch (*Site Planning* & *The Image of the City*, 1960):**
   * *Contribution:* Defined the five elements of environmental perception: **Paths, Edges, Districts, Nodes, and Landmarks**.
3. **Ildefonso P. Santos Jr. (Father of Philippine Landscape Architecture):**
   * *Contribution:* Pioneered tropical contextual grading, integrating native flora, volcanic boulders, and microclimatic passive cooling (e.g. Paco Park, Cultural Center of the Philippines grounds).

---

## 9. ASCII SITE CONTOUR SECTIONS & CUT-FILL DIAGRAMS

```text
 ┌───────────────────────────────────────────────────────────────────────────┐
 │               CONTOUR LINE READING & INTERPOLATION SCHEMATIC              │
 └───────────────────────────────────────────────────────────────────────────┘
 
  INDEX CONTOUR (+100.0m) ───────────────────────────────────────────────────
                                        ▲
                                        │ Horizontal Distance D = 20.0 m
  INTERMEDIATE (+101.0m) ─ ─ ─ ─ ─ ─ ─ ─┼─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
                                        │ Contour Interval (CI) = 1.0 m
  INTERMEDIATE (+102.0m) ─ ─ ─ ─ ─ ─ ─ ─┼─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
                                        │
  INTERMEDIATE (+103.0m) ─ ─ ─ ─ ─ ─ ─ ─┼─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
                                        │
  INDEX CONTOUR (+105.0m) ───────────────────────────────────────────────────
  
   • CALCULATED SLOPE: S = (105.0 - 100.0) / 20.0 = 5.0 / 20.0 = 25.0%
   • CLOSELY SPACED CONTOURS = Steep Terrain
   • WIDELY SPACED CONTOURS = Flat / Gentle Terrain
```

---

## 10. 10-QUESTION SOCRATIC DRILL WITH VERIFIED BOARD-STYLE EXPLANATIONS

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │                PLAN 1 SITE PLANNING BOARD SIMULATION DRILL                 │
 └────────────────────────────────────────────────────────────────────────────┘
```

#### Q1. Under Section 15 of Presidential Decree No. 705 (Revised Forestry Code), what is the statutory slope percentage threshold above which lands are classified as non-alienable, non-disposable public forest reserves?
- [ ] A. $12\%$
- [ ] B. $15\%$
- [x] C. **$18\%$**
- [ ] D. $25\%$
> **Explanation:** PD 705 §15 strictly classifies all lands with a slope of **eighteen percent ($18\%$) or steeper** as permanent forest reserves incapable of private alienable ownership [L].

---

#### Q2. Under Article 51 of the Water Code of the Philippines (PD 1067), what is the mandatory continuous public easement width along riverbanks in urban areas?
- [x] A. **$3.00\text{ Meters}$**
- [ ] B. $5.00\text{ Meters}$
- [ ] C. $20.00\text{ Meters}$
- [ ] D. $40.00\text{ Meters}$
> **Explanation:** PD 1067 Art. 51 establishes a **$3.00\text{ m}$** riverbank easement in urban areas, $20.00\text{ m}$ in agricultural areas, and $40.00\text{ m}$ in forest zones [L].

---

#### Q3. What is the topographical slope percentage of a terrain that rises $3.50\text{ m}$ vertically across a horizontal distance of $70.00\text{ m}$?
- [ ] A. $2.0\%$
- [x] B. **$5.0\%$**
- [ ] C. $7.0\%$
- [ ] D. $10.0\%$
> **Explanation:** $\text{Slope } S = \frac{\Delta H}{L} \times 100\% = \frac{3.50}{70.00} \times 100\% = \mathbf{5.0\%}$ [L].

---

#### Q4. In the Rational Method formula ($Q = \frac{CIA}{360}$), what does the coefficient "$C$" represent?
- [ ] A. Centerline of drainage pipe
- [ ] B. Rainfall intensity in inches
- [x] C. **Runoff coefficient representing ground impermeability**
- [ ] D. Catchment capacity in cubic meters
> **Explanation:** $C$ is the dimensionless **runoff coefficient** reflecting the percentage of rainfall converted to surface runoff ($0.90$ for roofs, $0.20$ for turf) [L].

---

#### Q5. What is the standard minimum cross-slope required for paved parking plazas and asphalt roadways to prevent standing water ponding?
- [ ] A. $0.2\%$
- [ ] B. $0.5\%$
- [x] C. **$1.5\%\text{ to }2.0\%$**
- [ ] D. $6.0\%$
> **Explanation:** Paved surfaces require a minimum crown/cross-slope of **$1.5\%\text{ to }2.0\%$** to ensure positive gravity shedding toward perimeter drains and swales [L].

---

#### Q6. What is the primary purpose of weep holes installed in structural concrete retaining walls?
- [ ] A. Allow tree roots to penetrate
- [ ] B. Reduce weight of concrete
- [x] C. **Drain water to relieve hydrostatic pressure behind the wall**
- [ ] D. Provide electrical conduit routing
> **Explanation:** Weep holes allow trapped groundwater to drain freely, preventing the buildup of **destructive hydrostatic pressure** which causes retaining wall overturning [L].

---

#### Q7. Which famous urban planner and theorist defined the 5 city elements: Paths, Edges, Districts, Nodes, and Landmarks?
- [ ] A. Le Corbusier
- [x] B. **Kevin Lynch**
- [ ] C. Ebenezer Howard
- [ ] D. Jane Jacobs
> **Explanation:** **Kevin Lynch** introduced these 5 mental mapping elements in his seminal 1960 work *The Image of the City* and *Site Planning* [A].

---

#### Q8. When reading a topographic map, what does a set of contour lines forming closed loops with tick marks (hachures) pointing inward indicate?
- [ ] A. Mountain peak
- [ ] B. Saddle
- [x] C. **Depression or crater without natural outlet**
- [ ] D. Ridge line
> **Explanation:** Hachured closed contours represent **topographical depressions or craters** below surrounding grades [L].

---

#### Q9. What is the earthwork volume calculated by the End-Area method for a trench of length $40.00\text{ m}$ having cross-sectional areas $A_1 = 12.00\text{ m}^2$ and $A_2 = 18.00\text{ m}^2$?
- [ ] A. $480.00\text{ m}^3$
- [x] B. **$600.00\text{ m}^3$**
- [ ] C. $720.00\text{ m}^3$
- [ ] D. $1,200.00\text{ m}^3$
> **Explanation:** $V = \frac{A_1 + A_2}{2} \times L = \frac{12 + 18}{2} \times 40 = 15 \times 40 = \mathbf{600.00\text{ m}^3}$ [L].

---

#### Q10. Why is the "cut-and-fill balance" considered a core principle of sustainable site grading?
- [x] A. **It eliminates the carbon footprint, truck traffic, and financial cost of importing or hauling away soil**
- [ ] B. It removes all natural topsoil
- [ ] C. It increases the slope to $>18\%$
- [ ] D. It replaces concrete foundations with wood
> **Explanation:** Balancing cut and fill on-site ensures all excavated earth is reused on the same property, **minimizing earthwork costs and soil transport emissions** [A].

---

## 11. CROSS-VAULT LINKAGES & PREREQUISITE NETWORK

* `vault/02-DESIGN-STUDIO-SPINE/AD5-AD6-SITE-AND-LANDSCAPE/AD5-CANONICAL-SPACE-PROGRAMMING-AND-ZONING-MANUAL.md` — Building Massing & Spatial Zoning
* `vault/00-CORE-BUILDING-LAWS/PD-1096-NBCP/PD-1096-RULE-VII-VIII-CANONICAL-SETBACKS-AMBF-COMPENDIUM.md` — Setbacks, TOSL, and USA Permeable Open Space
* `vault/04-BUILDING-UTILITIES-SERIES/BU1-PLUMBING-AND-SANITARY/PLUMBING-AND-ELECTRICAL-SYSTEMS.md` — Site Storm Drainage & Catch Basins
