# STRUC 1 & 2 — CANONICAL STATICS, SHEAR & MOMENT DIAGRAMS, TRUSS ANALYSIS & SECTION PROPERTIES MANUAL | 10-SECTION CANONICAL MODULE

> **Vault Cluster:** `vault/02-HISTORY-ARCHIVE/STATICS-STRENGTH-MATERIALS/` + mirrors `vault/05-STRUCTURAL-STUDIES-SERIES/STRUC1-STATICS-AND-EQUILIBRIUM/`  
> **Authority:** Mapúa University Structural Engineering Sequence, NSCP 2015 (National Structural Code of the Philippines), Hibbeler *Structural Analysis* & Singer *Strength of Materials*  
> **Status:** CANONICAL 10-SECTION ENGINEERING MANUAL — Complete Step-by-Step Mathematical Reference for Beam Sizing, Shear-Moment Diagrams, Truss Mechanics & PRC ALE Board Exams  
> **Citation Rigor:** Cites NSCP 2015 Chapter 4, Static Equilibrium Equations, Flexure Formula $\sigma = \frac{My}{I}$, and AISC Steel Section Modulus [L]

---

## 1. METADATA

| Field | Value |
|---|---|
| **Mapúa Course Alignment** | `STRUC-1` (Statics of Rigid Bodies) [M], `STRUC-2` (Strength of Materials) [M], `STRUC-3` (Theory of Structures) [M], `ARCH-DESIGN-5/6` Structural Integration [M] |
| **PRC ALE Board Alignment** | **Part II:** Structural Design, Building Materials, Methods of Construction & Utilities (30% Weight — Tested heavily on ALE Day 1 Afternoon Session) [U] |
| **High-Yield Exam Rating** | **9.9 / 10.0** — Maximum bending moment formulas ($wL^2/8$, $PL/4$), zero-shear inflection points, zero-force truss member identification, and flexural stress calculations appear on **every single** ALE exam |
| **Prerequisite Sequence** | Prerequisite to: `STRUC-3` (Indeterminate Structures & RCD), `BUILDING-TECH-3` (Heavy Concrete & Steel) [M] |
| **Terminal Engineering Competency** | Ability to construct shear-moment diagrams ($V\text{-}M$), identify truss zero-force members, calculate member internal axial forces, and size structural beam cross-sections [M] |

---

## 2. EXECUTIVE FOUNDATION: STATIC EQUILIBRIUM & LOAD PATH DYNAMICS

Every stable planar structural assembly in the built environment must satisfy the **Three Fundamental Equations of Static Equilibrium**:

$$\sum F_x = 0, \quad \sum F_y = 0, \quad \sum M_A = 0$$

```
  ┌───────────────────────────────────────────────────────────────────────────┐
  │                     THE GRAVITY LOAD PATH CONTINUUM                       │
  └───────────────────────────────────────────────────────────────────────────┘
  
   [SLAB LOAD (kPa)] ────► [BEAMS & GIRDERS] ────► [COLUMNS] ────► [FOOTINGS] ────► [SOIL BED]
   Tributary area          Bending moments (M)     Axial load P    Bearing stress  Soil bearing
   one-way (wL/2) vs       and shear forces (V).   & buckling.     q = P/A + M/S   capacity (qa).
   two-way 45° trapezoid.
```

### Static Determinacy & Stability Criterion
For 2D Planar Pin-Jointed Trusses:
* Let $m = \text{number of members}$, $r = \text{number of support reaction components}$, $j = \text{number of joints}$:
$$\begin{aligned}
m + r < 2j &\implies \mathbf{\text{Unstable Structure (Mechanism - will collapse under load)}} \\
m + r = 2j &\implies \mathbf{\text{Statically Determinate (Solvable via basic statics equilibrium)}} \\
m + r > 2j &\implies \mathbf{\text{Statically Indeterminate to degree } (m + r - 2j)}
\end{aligned}$$

---

## 3. MASTER GLOSSARY & ACRONYMS

* **Shear Force ($V$):** The algebraic sum of all vertical external forces acting on one side of a cut beam cross-section, tending to slide one transverse section past the other [L].
* **Bending Moment ($M$):** The algebraic sum of the moments of all forces acting to the left or right of a cut section, causing rotational curvature and internal flexural stress [L].
* **Inflection Point / Point of Contraflexure:** The point along a beam where the bending moment changes sign ($M = 0$), transitioning from positive moment (tension at bottom) to negative moment (tension at top) [L].
* **Zero-Shear Location ($V = 0$):** The exact longitudinal station along a beam where the shear curve crosses the zero axis. **The bending moment reaches its mathematical local maximum or minimum where $V = 0$** ($\frac{dM}{dx} = V = 0$) [L].
* **Zero-Force Member:** A truss member that carries no internal axial force under a specific given loading condition, serving primarily as lateral bracing or buckling restraint [L].
* **Method of Joints:** A structural method analyzing one truss joint at a time via $\sum F_x = 0$ and $\sum F_y = 0$ [L].
* **Method of Sections:** A structural method cutting through a maximum of three non-concurrent unknown truss members, applying all three equilibrium equations ($\sum F_x = 0, \sum F_y = 0, \sum M = 0$) to solve internal forces in a single step [L].
* **Moment of Inertia ($I$):** The second moment of area of a cross-section about its neutral axis ($I = \int y^2 dA$), measuring structural resistance to bending [L].
* **Section Modulus ($S$):** The geometric property $S = \frac{I}{c}$, measuring bending strength capacity ($M = S \cdot F_b$) [L].
* **Neutral Axis (NA):** The longitudinal plane in a bent beam where longitudinal normal flexural stress is exactly zero ($\sigma = 0$) [L].

---

## 4. GOVERNING EQUATIONS, BEAM FORMULAS & TRUSS RULES [L]

### A. Standard Beam Shear & Bending Moment Formulas Matrix

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │                  CANONICAL BEAM SHEAR & MOMENT FORMULAS                    │
 └────────────────────────────────────────────────────────────────────────────┘
```

| Beam Loading Configuration | Support Reactions ($R_A, R_B$) | Max Shear Force ($V_{\text{max}}$) | Max Bending Moment ($M_{\text{max}}$) & Location |
|---|:---:|:---:|---|
| **Simply Supported — Uniform Load ($w$)** | $R_A = R_B = \frac{wL}{2}$ | $V = \frac{wL}{2}$ (at supports) | $\mathbf{M_{\text{max}} = +\frac{wL^2}{8}}$ (at center $x = L/2$) [L] |
| **Simply Supported — Center Point Load ($P$)** | $R_A = R_B = \frac{P}{2}$ | $V = \frac{P}{2}$ | $\mathbf{M_{\text{max}} = +\frac{PL}{4}}$ (at center $x = L/2$) [L] |
| **Simply Supported — Off-Center Point Load ($P$)** | $R_A = \frac{Pb}{L}, R_B = \frac{Pa}{L}$ | $V_A = \frac{Pb}{L}, V_B = -\frac{Pa}{L}$ | $\mathbf{M_{\text{max}} = +\frac{Pab}{L}}$ (under the load $x = a$) [L] |
| **Cantilever — Point Load at Free End ($P$)** | $R_A = P, M_A = -PL$ | $V = P$ | $\mathbf{M_{\text{max}} = -PL}$ (at fixed support $x = 0$) [L] |
| **Cantilever — Uniform Load ($w$)** | $R_A = wL, M_A = -\frac{wL^2}{2}$ | $V = wL$ | $\mathbf{M_{\text{max}} = -\frac{wL^2}{2}}$ (at fixed support $x = 0$) [L] |
| **Fixed-Ended Beam — Uniform Load ($w$)** | $R_A = R_B = \frac{wL}{2}$ | $V = \frac{wL}{2}$ | Supports: $\mathbf{-\frac{wL^2}{12}}$; Center: $\mathbf{+\frac{wL^2}{24}}$ [L] |
| **Propped Cantilever — Uniform Load ($w$)** | $R_{\text{pin}} = \frac{3wL}{8}, R_{\text{fix}} = \frac{5wL}{8}$ | $V = \frac{5wL}{8}$ | Fixed End: $\mathbf{-\frac{wL^2}{8}}$; Span: $\mathbf{+\frac{9wL^2}{128}}$ [L] |

---

### B. Three Fundamental Rules for Truss Zero-Force Members

1. **RULE 1 (2 Non-Collinear Members at Unloaded Joint):**
   * If only two non-collinear members meet at an unloaded joint with no support reactions, **both members carry ZERO force** ($F_1 = 0, F_2 = 0$).
2. **RULE 2 (3 Members with 2 Collinear at Unloaded Joint):**
   * If three members meet at an unloaded joint and two members lie along the same straight line (collinear), the **third non-collinear member is a ZERO-FORCE member**, and the two collinear members carry equal forces ($F_1 = F_2, F_3 = 0$).
3. **RULE 3 (2 Collinear Members with Applied Force aligned with 3rd Member):**
   * If two collinear members meet at a joint where an external load $P$ is applied directly parallel to the third member, the **third member carries the full load ($F_3 = P$)**, and the collinear members remain in equilibrium.

---

## 5. FORMULAS & WORKED CALCULATION EXAMPLES [L]

### 🏛️ WORKED CALCULATION 1: Overhanging Beam Shear & Moment Analysis
**Scenario:** A beam has a simply supported span of **$L = 6.00\text{ m}$** between supports $A$ and $B$, with a **$2.00\text{ m}$ cantilever overhang** to the right of support $B$ (Total length $= 8.00\text{ m}$). It carries a uniformly distributed load of **$w = 20.00\text{ kN/m}$** over its entire $8.00\text{ m}$ length.

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │               OVERHANGING BEAM LOADING & REACTIONS                         │
 └────────────────────────────────────────────────────────────────────────────┘
 
       w = 20 kN/m uniformly distributed along entire 8.00 m
  ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼
  ═════════════════════════════════════════════════════════════
  ▲ (Support A)                           ▲ (Support B)
  │                                       │
  ◄────────────── 6.00 m ────────────────►◄────── 2.00 m ─────►
```

**Step 1: Calculate Support Reactions ($R_A, R_B$)**
* Total load $W = 20\text{ kN/m} \times 8.00\text{ m} = 160.00\text{ kN}$, acting at centroid $x = 4.00\text{ m}$ from $A$.
* Take moment about support $A$ ($\sum M_A = 0$):
$$\begin{aligned}
(160.00\text{ kN} \times 4.00\text{ m}) - (R_B \times 6.00\text{ m}) &= 0 \\
640.00 - 6.00 R_B &= 0 \implies \mathbf{R_B = 106.67\text{ kN}}
\end{aligned}$$
* Sum vertical forces ($\sum F_y = 0$):
$$R_A + R_B - 160.00 = 0 \implies R_A = 160.00 - 106.67 = \mathbf{53.33\text{ kN}}$$

**Step 2: Construct Shear Diagram ($V$) & Locate Zero Shear ($x_0$)**
* At $x = 0^+$ (just right of $A$): $V_A = +53.33\text{ kN}$.
* Zero shear occurs where shear drops to zero:
$$V(x) = R_A - w \cdot x = 53.33 - 20 x = 0 \implies x_0 = \frac{53.33}{20} = \mathbf{2.667\text{ m from } A}$$
* Just left of support $B$ ($x = 6.00^-$):
$$V(6.00^-) = 53.33 - (20 \times 6.00) = 53.33 - 120.00 = \mathbf{-66.67\text{ kN}}$$
* Just right of support $B$ ($x = 6.00^+$):
$$V(6.00^+) = -66.67 + R_B = -66.67 + 106.67 = \mathbf{+40.00\text{ kN}}$$
* At free end ($x = 8.00\text{ m}$):
$$V(8.00) = +40.00 - (20 \times 2.00) = \mathbf{0.00\text{ kN}}$$

**Step 3: Calculate Maximum Positive and Negative Bending Moments**
* **Maximum Positive Moment ($M_{\text{max}}^+$) at $x_0 = 2.667\text{ m}$:**
  $$M_{\text{max}}^+ = \text{Area of positive shear triangle} = \frac{1}{2} \times 53.33\text{ kN} \times 2.667\text{ m} = \mathbf{+71.11\text{ kN}\cdot\text{m}}$$
* **Maximum Negative Moment ($M_{\text{supp}}^-$) over Support $B$ ($x = 6.00\text{ m}$):**
  $$M_B^- = -\frac{w \cdot a^2}{2} = -\frac{20 \times 2.00^2}{2} = -\frac{20 \times 4}{2} = \mathbf{-40.00\text{ kN}\cdot\text{m}}$$

**Step 4: Locate Inflection Point ($M = 0$)**
$$M(x) = R_A x - \frac{w x^2}{2} = 53.33 x - 10 x^2 = 0 \implies x (53.33 - 10 x) = 0 \implies x = \mathbf{5.333\text{ m from } A}$$

---

### 🏛️ WORKED CALCULATION 2: 6-Panel Pratt Roof Truss Analysis (Method of Sections)
**Scenario:** A symmetrical Pratt roof truss spans **$L = 12.00\text{ m}$** with height **$H = 3.00\text{ m}$** (divided into four $3.00\text{ m}$ panels). Downward vertical loads of **$P = 30.00\text{ kN}$** act at upper joints $U_1, U_2, U_3$. Support reactions at left pin $L_0$ and right roller $L_4$ are $R_1 = R_2 = 45.00\text{ kN}$.

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │               PRATT TRUSS GEOMETRY & CUT SECTION a-a                       │
 └────────────────────────────────────────────────────────────────────────────┘
 
                30 kN (U2)
                 ▼
                 U2
               / │ \ 
       30 kN  /  │  \  30 kN
        ▼    /   │   \  ▼
        U1  /────┼────\  U3
       / │ /     │     \ │ \   Height H = 3.00 m
      /  │/      │      \│  \
    L0───L1──────L2──────L3───L4
    ▲ (R1=45kN)   │      ▲ (R2=45kN)
    ◄── 3.0m ──►◄──3.0m─►◄──3.0m─►◄──3.0m──►
           Cut line [a-a] through U1-U2, U1-L2, L1-L2
```

**Step 1: Apply Method of Sections through members $U_1 U_2$, $U_1 L_2$, and $L_1 L_2$**
* Isolate the left portion of the cut truss (Joints $L_0, L_1, U_1$).

**Step 2: Solve Top Chord Force ($F_{U1U2}$) by taking moment about joint $L_2$ ($\sum M_{L2} = 0$)**
$$\begin{aligned}
(R_1 \times 6.00\text{ m}) - (30.00\text{ kN} \times 3.00\text{ m}) + (F_{U1U2} \times 3.00\text{ m}) &= 0 \\
(45.00 \times 6.00) - (90.00) + 3.00 F_{U1U2} &= 0 \\
270.00 - 90.00 + 3.00 F_{U1U2} = 0 \implies F_{U1U2} &= -\frac{180.00}{3.00} = \mathbf{-60.00\text{ kN (60 kN COMPRESSION)}}
\end{aligned}$$

**Step 3: Solve Bottom Chord Force ($F_{L1L2}$) by taking moment about joint $U_1$ ($\sum M_{U1} = 0$)**
* Joint $U_1$ is at $x = 3.00\text{ m}, y = 3.00\text{ m}$:
$$\begin{aligned}
(R_1 \times 3.00\text{ m}) - (F_{L1L2} \times 3.00\text{ m}) &= 0 \\
(45.00 \times 3.00) - 3.00 F_{L1L2} &= 0 \implies \mathbf{F_{L1L2} = +45.00\text{ kN (45 kN TENSION)}}
\end{aligned}$$

**Step 4: Solve Diagonal Web Member Force ($F_{U1L2}$) by vertical equilibrium ($\sum F_y = 0$)**
* Member $U_1 L_2$ runs from $(3, 3)$ to $(6, 0)$ $\rightarrow$ angle $\theta = 45^\circ$ ($\sin 45^\circ = 0.7071$):
$$\begin{aligned}
R_1 - 30.00\text{ kN} - F_{U1L2} \sin 45^\circ &= 0 \\
45.00 - 30.00 - 0.7071 F_{U1L2} &= 0 \implies F_{U1L2} = \frac{15.00}{0.7071} = \mathbf{+21.21\text{ kN (21.21 kN TENSION)}}
\end{aligned}$$

---

## 6. SECTION PROPERTIES, MOMENT OF INERTIA & BEAM SIZING [I][L]

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │               RECTANGULAR BEAM CROSS-SECTION & STRESS PROFILE              │
 └────────────────────────────────────────────────────────────────────────────┘
 
                         ◄────── Width b ──────►
                   ┌───────────────────────────────┐ ▲
                   │  Top Fiber: Max Compression   │ │
                   │  -σ = -M·c / I               │ │
                   │                               │ │ Depth h
                   ├ - - - - Neutral Axis - - - - -┤ │ (c = h/2)
                   │                               │ │
                   │  Bottom Fiber: Max Tension    │ │
                   │  +σ = +M·c / I = +M / S       │ │
                   └───────────────────────────────┘ ▼
 
   • MOMENT OF INERTIA:  I = (b · h³) / 12
   • SECTION MODULUS:    S = I / c = (b · h²) / 6
   • FLEXURAL STRESS:    σ = M / S  ≤  Fb (Allowable Bending Stress)
```

---

## 7. EXAM TRAPS & STRUCTURAL BOARD PITFALLS

* **TRAP 1: Units Mismatch in Bending Stress Calculations ($\sigma = M/S$):**
  * $M$ is typically in $\text{kN}\cdot\text{m}$.
  * $S$ is in $\text{mm}^3$.
  * *Rule:* You MUST multiply $M$ by **$10^6$** to convert $\text{kN}\cdot\text{m}$ to $\text{N}\cdot\text{mm}$ before dividing by $S$ in $\text{mm}^3$ to get stress $\sigma$ in $\text{MPa}$ ($\text{N/mm}^2$)!
* **TRAP 2: Negative Moment in Cantilevers & Overhangs:**
  * In cantilever beams, the top fibers are in **tension** and bottom fibers are in **compression**.
  * *Reinforced Concrete Trap:* Steel tension bars must be placed at the **TOP** of the cantilever beam, not the bottom!
* **TRAP 3: Identifying Zero-Force Members:**
  * When two non-collinear members meet at a joint, they are zero-force members **ONLY if there is no external load or support reaction at that joint**!
* **TRAP 4: Determinacy Equation Check ($m + r = 2j$):**
  * Always count support reaction components ($r = 2$ for pin, $r = 1$ for roller, $r = 3$ for fixed).

---

## 8. HISTORICAL STRUCTURAL MECHANICS CASE STUDIES

1. **Galileo Galilei (*Two New Sciences*, 1638):**
   * *Significance:* First treatise to mathematically analyze beam fracture under cantilever loading, laying the foundation for modern strength of materials.
2. **Gustave Eiffel (Eiffel Tower, Paris — 1889):**
   * *Significance:* The profile curvature of the 300-meter puddle-iron lattice tower was engineered to directly match the mathematical bending moment curve produced by horizontal wind shear loads.
3. **Firth of Forth Bridge (Scotland — Benjamin Baker & John Fowler, 1890):**
   * *Significance:* Masterpiece of monumental cantilever truss engineering, clearly demonstrating balanced tension chords (top) and massive tubular compression struts (bottom).

---

## 9. ASCII STRUCTURAL DIAGRAMS & SHEAR/MOMENT CURVES

### Diagram 1: Shear ($V$) and Moment ($M$) Curves for Overhanging Beam

```text
 ┌───────────────────────────────────────────────────────────────────────────┐
 │               SHEAR FORCE & BENDING MOMENT DIAGRAMS (V-M)                 │
 └───────────────────────────────────────────────────────────────────────────┘
 
  LOAD DIAGRAM:  w = 20 kN/m across 8.00 m
  ═══════════════════════════════════════════════════════════
  ▲ RA = 53.33 kN                        ▲ RB = 106.67 kN
 
  SHEAR DIAGRAM (V):
  +53.33 kN ┌──────────┐
            │(+)       │\
  ──────────┴──────────┴─\────x0=2.667m──────┬─────────────── 0 kN
                          \                  │  /(+)
                           \                 │ /
                            \───────────┬────┘/
                            -66.67 kN   │(-) /
                                        └────┘ -40 kN
 
  MOMENT DIAGRAM (M):
             +71.11 kN·m (M_max+)
                 /\
                /  \
  ─────────────/────\──────Inflection Pt (x=5.333m)─────────── 0 kN·m
              /      \                       /\
             /        \                     /  \
                       \                   /    \
                        \─────────────────/      \
                        -40.00 kN·m (M_supp-)     \ (Free end)
```

---

## 10. 10-QUESTION SOCRATIC DRILL WITH VERIFIED BOARD-STYLE EXPLANATIONS

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │                STRUC 1 & 2 BOARD SIMULATION DRILL                          │
 └────────────────────────────────────────────────────────────────────────────┘
```

#### Q1. What is the maximum bending moment for a simply supported beam of span $L = 8.00\text{ m}$ carrying a uniformly distributed load of $w = 15.00\text{ kN/m}$?
- [ ] A. $60.00\text{ kN}\cdot\text{m}$
- [ ] B. $90.00\text{ kN}\cdot\text{m}$
- [x] C. **$120.00\text{ kN}\cdot\text{m}$**
- [ ] D. $240.00\text{ kN}\cdot\text{m}$
> **Explanation:** $M_{\text{max}} = \frac{wL^2}{8} = \frac{15 \times 8^2}{8} = \frac{15 \times 64}{8} = 15 \times 8 = \mathbf{120.00\text{ kN}\cdot\text{m}}$ at midspan [L].

---

#### Q2. At what point along a loaded beam does the bending moment ($M$) reach its maximum or minimum mathematical value?
- [ ] A. At the supports
- [ ] B. Where shear force is maximum
- [x] C. **Where shear force is zero ($V = 0$)**
- [ ] D. At the inflection point
> **Explanation:** By calculus, the derivative of moment is shear ($\frac{dM}{dx} = V$). Setting $\frac{dM}{dx} = 0$ proves that maximum and minimum bending moments occur where **$V = 0$** [L].

---

#### Q3. What is the Section Modulus ($S$) of a rectangular timber beam with width $b = 150\text{ mm}$ and total depth $h = 300\text{ mm}$?
- [ ] A. $1.125 \times 10^6\text{ mm}^3$
- [x] B. **$2.25 \times 10^6\text{ mm}^3$**
- [ ] C. $4.50 \times 10^6\text{ mm}^3$
- [ ] D. $6.75 \times 10^6\text{ mm}^3$
> **Explanation:** For a rectangular section, $S = \frac{b h^2}{6} = \frac{150 \times 300^2}{6} = \frac{150 \times 90,000}{6} = \mathbf{2,250,000\text{ mm}^3 = 2.25 \times 10^6\text{ mm}^3}$ [L].

---

#### Q4. If three members meet at an unloaded truss joint where two of the members are collinear, what is the internal force in the third non-collinear member?
- [x] A. **Zero ($0.00\text{ kN}$)**
- [ ] B. Equal to the sum of the collinear members
- [ ] C. Tension equal to half the span load
- [ ] D. Indeterminate
> **Explanation:** By Rule 2 of Zero-Force Members, summing forces perpendicular to the collinear line proves the third member must carry **zero force** [L].

---

#### Q5. A cantilever beam of span $L = 3.00\text{ m}$ carries a point load of $P = 25.00\text{ kN}$ at its free end. What is the maximum bending moment and where does it occur?
- [ ] A. $+37.50\text{ kN}\cdot\text{m}$ at free end
- [ ] B. $-37.50\text{ kN}\cdot\text{m}$ at midspan
- [x] C. **$-75.00\text{ kN}\cdot\text{m}$ at the fixed support**
- [ ] D. $+75.00\text{ kN}\cdot\text{m}$ at the fixed support
> **Explanation:** $M_{\text{max}} = -PL = -25 \times 3.00 = \mathbf{-75.00\text{ kN}\cdot\text{m}}$ acting at the **fixed support** (creating tension on top fibers) [L].

---

#### Q6. What is the point of inflection (point of contraflexure) in a beam?
- [ ] A. Where shear force is zero
- [x] B. **Where the bending moment changes sign ($M = 0$)**
- [ ] C. Where deflection is maximum
- [ ] D. At the fixed support
> **Explanation:** The inflection point is where curvature reverses and the bending moment passes through **zero ($M = 0$)** [L].

---

#### Q7. A 2D planar truss has $m = 11$ members, $r = 3$ support reactions, and $j = 7$ joints. What is the static determinacy of this truss?
- [ ] A. Unstable ($m + r < 2j$)
- [x] B. **Statically Determinate ($m + r = 2j$)**
- [ ] C. Indeterminate to 1st degree
- [ ] D. Indeterminate to 2nd degree
> **Explanation:** $m + r = 11 + 3 = 14$. $2j = 2(7) = 14$. Since $m + r = 2j$, the truss is **statically determinate** [L].

---

#### Q8. A steel beam section with $S = 500 \times 10^3\text{ mm}^3$ resists a maximum bending moment of $M = 100.00\text{ kN}\cdot\text{m}$. What is the maximum flexural bending stress?
- [ ] A. $50.00\text{ MPa}$
- [ ] B. $100.00\text{ MPa}$
- [x] C. **$200.00\text{ MPa}$**
- [ ] D. $500.00\text{ MPa}$
> **Explanation:** Convert $M$ to $\text{N}\cdot\text{mm}$: $M = 100 \times 10^6\text{ N}\cdot\text{mm}$. Then $\sigma = \frac{M}{S} = \frac{100 \times 10^6}{500 \times 10^3} = \mathbf{200.00\text{ MPa}}$ [L].

---

#### Q9. Why must steel reinforcement in a reinforced concrete cantilever beam be positioned near the TOP of the beam cross-section?
- [x] A. **Cantilever bending produces tension on the top fibers and compression at the bottom**
- [ ] B. To protect the bars from rainwater
- [ ] C. Concrete is stronger in tension than compression
- [ ] D. To reduce the dead weight of the beam
> **Explanation:** Cantilever curvature causes hogging bending where **top fibers stretch in tension**; since concrete has negligible tensile strength, steel rebar must be placed at the top [L].

---

#### Q10. What is the primary difference between the Method of Joints and the Method of Sections in truss analysis?
- [ ] A. Method of Joints only works on wooden trusses
- [x] B. **Method of Sections can solve specific internal member forces directly by cutting through the truss without solving all prior joints**
- [ ] C. Method of Sections cannot solve diagonal members
- [ ] D. Method of Joints applies moment equilibrium to joints
> **Explanation:** The **Method of Sections** cuts through up to 3 unknown members and applies $\sum M = 0$, allowing direct solution of interior chord or diagonal forces without resolving sequential joints from the supports [L].

---

## 11. CROSS-VAULT LINKAGES & PREREQUISITE NETWORK

* `vault/03-BUILDING-TECHNOLOGY-SERIES/BT3-HEAVY-RCD-AND-PRESTRESS/BT3-CANONICAL-RCD-PRESTRESS-AND-STEEL.md` — Reinforced Concrete Design & Steel Framing
* `vault/05-STRUCTURAL-STUDIES-SERIES/STRUC3-THEORY-OF-STRUCTURES/MOMENT-DISTRIBUTION-AND-RCD.md` — Moment Distribution & Frame Sidesway
* `reviewers/flashcards/STRUCTURAL_AND_UTILITIES_DECK.md` — Active Recall Flashcards for Structural Mechanics
