# MEC30 / STRUC1: STATICS OF RIGID BODIES — FORCE VECTORS, EQUILIBRIUM & CENTROIDS
**Course:** Statics of Rigid Bodies (MEC30) / Structural Mechanics 1  
**Academic Unit:** Mapúa School of Engineering & ARIDBE  
**PRC ALE Category:** Part 2: Engineering Mechanics, Statics & Force Equilibrium (30% Weight)  
**High-Yield Exam Score:** 9.3 / 10  
**Governing Authorities & References:** NSCP 2015, Hibbeler *Engineering Mechanics: Statics*, Meriam & Kraige *Engineering Mechanics: Statics*.

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 First Principles of Vector Mechanics & Static Equilibrium
A body is in static equilibrium when the resultant external force vector and the resultant moment vector about any point are identically zero:
$$\sum \vec{F} = \vec{0}, \quad \sum \vec{M}_O = \vec{0}$$
In 2D coplanar systems:
$$\sum F_x = 0, \quad \sum F_y = 0, \quad \sum M_O = 0$$

```
                         2D SUPPORT REACTION FORCE MECHANICS
  ┌──────────────────────────────────────────────────────────────────────────────────┐
  │ 1. ROLLER SUPPORT (1 Unknown): Reaction force strictly normal to surface (R_y)   │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 2. PIN / HINGED SUPPORT (2 Unknowns): Horizontal (R_x) and Vertical (R_y) forces │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 3. FIXED SUPPORT (3 Unknowns): Horizontal (R_x), Vertical (R_y), and Moment (M)  │
  └──────────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Centroid ($\bar{x}, \bar{y}$) & Moment of Inertia ($I_x, I_y$) Derivations
* **Centroid of Composite Area:**
  $$\bar{x} = \frac{\sum (A_i \cdot \bar{x}_i)}{\sum A_i}, \quad \bar{y} = \frac{\sum (A_i \cdot \bar{y}_i)}{\sum A_i}$$
* **Parallel Axis Theorem (Steiner's Theorem):**
  $$I = \bar{I} + A \cdot d^2$$
  *(where $\bar{I} = \text{moment of inertia about centroidal axis}$, $d = \text{perpendicular distance between axes}$)*.
  * For Rectangle ($b \times h$): $\bar{I}_x = \frac{b h^3}{12}$
  * For Triangle ($b \times h$): $\bar{I}_x = \frac{b h^3}{36}$ (about centroidal axis at $h/3$)

---

## 2. TECHNICAL MECHANICS, FREE-BODY DIAGRAMS & RESOLUTION

### 2.1 Free-Body Diagram (FBD) Protocol
1. Isolate the body completely from all physical contacts and ground supports.
2. Replace all supports with their corresponding reaction vectors ($R_x, R_y, M$).
3. Represent all applied external loads and distributed weights with their resultant point forces acting through their respective geometric centroids:
   * **Uniform Load ($w$ over length $L$):** Single resultant force $W = w L$ acting at $L/2$.
   * **Triangular Load ($w_{max}$ over length $L$):** Single resultant force $W = \frac{1}{2} w_{max} L$ acting at $L/3$ from the heavy base ($2L/3$ from apex).

---

## 3. PHILIPPINE STATUTORY & STRUCTURAL CODE MATRIX

| Authority / Standard | Section | Statutory Principle | Structural Design Impact |
| :--- | :--- | :--- | :--- |
| **NSCP 2015** | Section 206 | Overturning Stability: The ratio of resisting moment to overturning moment ($\frac{M_{resist}}{M_{overturn}}$) shall not be less than **$1.50$** for gravity/wind and **$1.50$** for earthquake. | Prevents foundation uplift and cantilever overturning. |
| **NSCP 2015** | Section 204 | Tributary Area Loading: Load on a structural member is the area bounded by lines midway to adjacent parallel members. | Converts floor area load ($kPa$) to linear beam load ($kN/m$). |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & CENTROID CALCULATION

### 4.1 Centroid & Moment of Inertia of an Asymmetric Architectural T-Beam
**Problem**: An architectural concrete T-beam has a flange width $b_f = 600\text{mm}$, flange thickness $t_f = 100\text{mm}$, web width $b_w = 200\text{mm}$, and web height $h_w = 400\text{mm}$ (Total height $H = 500\text{mm}$).  
Determine: (1) Location of Centroid ($\bar{y}$) from the bottom soffit, and (2) Total Centroidal Moment of Inertia ($I_{NA}$).

```
Step 1: Partition Cross-Section into Standard Rectangular Sub-Areas
• Area 1 (Flange):
  A₁ = 600 mm × 100 mm = 60,000 mm²
  y₁ (centroid from bottom) = 400 mm + (100 / 2) = 450 mm
  A₁ · y₁ = 60,000 × 450 = 27,000,000 mm³

• Area 2 (Web):
  A₂ = 200 mm × 400 mm = 80,000 mm²
  y₂ (centroid from bottom) = 400 / 2 = 200 mm
  A₂ · y₂ = 80,000 × 200 = 16,000,000 mm³

Step 2: Calculate Neutral Axis Centroid (y_bar)
Total Area ΣA = 60,000 + 80,000 = 140,000 mm².
Total Moment of Area Σ(A·y) = 27,000,000 + 16,000,000 = 43,000,000 mm³.
y_bar = Σ(A·y) / ΣA = 43,000,000 / 140,000 = 307.14 mm from bottom soffit.

Step 3: Calculate Moment of Inertia via Parallel Axis Theorem (I_NA = Σ[ I_centroid + A · d² ])
1. For Flange (Area 1):
   I_1 = (b₁ · h₁³) / 12 = [ 600 × (100)³ ] / 12 = 50,000,000 mm⁴
   d₁ = |y₁ - y_bar| = |450 - 307.14| = 142.86 mm
   A₁ · d₁² = 60,000 × (142.86)² = 60,000 × 20,409 = 1,224,540,000 mm⁴
   I_flange = 50,000,000 + 1,224,540,000 = 1,274,540,000 mm⁴

2. For Web (Area 2):
   I_2 = (b₂ · h₂³) / 12 = [ 200 × (400)³ ] / 12 = 1,066,666,667 mm⁴
   d₂ = |y₂ - y_bar| = |200 - 307.14| = 107.14 mm
   A₂ · d₂² = 80,000 × (107.14)² = 80,000 × 11,479 = 918,320,000 mm⁴
   I_web = 1,066,666,667 + 918,320,000 = 1,984,986,667 mm⁴

Step 4: Sum Total Moment of Inertia
I_NA = I_flange + I_web = 1,274,540,000 + 1,984,986,667 = 3,259,526,667 mm⁴
I_NA = 3.26 × 10⁹ mm⁴ = 3,260,000 cm⁴.
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: SECTION MODULUS & BEAM ORIENTATION          │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. STRONG AXIS VS WEAK AXIS ORIENTATION:                                           │
│    • Bending resistance is proportional to section depth cubed: I_x = bh³/12.      │
│    • Orienting a 50mm × 100mm timber beam vertically yields:                       │
│      I_strong = (50 × 100³)/12 = 4,166,667 mm⁴.                                    │
│    • Orienting it flat on its side yields:                                         │
│      I_weak = (100 × 50³)/12 = 1,041,667 mm⁴ (4× WEAKER in bending!).              │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Centroid of Triangular Distributed Loads):
Where does the resultant point force of a right-triangular distributed load (with maximum intensity $w$ at the left support and zero at the right apex) act along a span of length $L$?
- A) Exactly at $L/2$ from the left support.
- B) At $L/3$ from the left support (the heavy base).
- C) At $2L/3$ from the left support.
- D) At $L/4$ from the left support.
> **Correct Answer: B**  
> **Distractor Trap Analysis**:
> * The centroid of a triangle is located at $1/3$ the base length measured from the right angle (heavy load base). Measuring from the left base gives $L/3$. Measuring from the sharp tip gives $2L/3$ (Option C).

---

## 7. ACADEMIC REFERENCES
1. Hibbeler, R. C. (2017). *Engineering Mechanics: Statics* (14th ed.). Pearson.
2. Meriam, J. L., Kraige, L. G., & Bolton, J. N. (2018). *Engineering Mechanics: Statics* (9th ed.). John Wiley & Sons.
