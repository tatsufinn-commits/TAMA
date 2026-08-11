# STRUC 3 — CANONICAL INDETERMINATE STRUCTURES, MOMENT DISTRIBUTION (HARDY CROSS) & CONTINUOUS BEAMS MANUAL | 10-SECTION CANONICAL MODULE

> **Vault Cluster:** `vault/01-CURRENT-COURSES/STRUCTURAL-THEORY/` + mirrors `vault/05-STRUCTURAL-STUDIES-SERIES/STRUC3-THEORY-OF-STRUCTURES/`  
> **Authority:** Mapúa University Structural Engineering Sequence, NSCP 2015 (National Structural Code of the Philippines), Hibbeler *Structural Analysis* & Hardy Cross *Moment Distribution Method* (1930)  
> **Status:** CANONICAL 10-SECTION ENGINEERING MANUAL — Complete Step-by-Step Mathematical Reference for Indeterminate Continuous Beams, Frames & PRC ALE Board Exams  
> **Citation Rigor:** Cites NSCP 2015 Chapter 4, ACI Continuous Beam Coefficients, Fixed-End Moments (FEM), and Hardy Cross Moment Relaxation [L]

---

## 1. METADATA

| Field | Value |
|---|---|
| **Mapúa Course Alignment** | `STRUC-3` (Theory of Structures / Indeterminate Analysis) [M], `BUILDING-TECH-3` (Reinforced Concrete Design & Steel Framing) [M], `ARCH-DESIGN-5/6` Structural Integration [M] |
| **PRC ALE Board Alignment** | **Part II:** Structural Design, Building Materials, Methods of Construction & Utilities (30% Weight — ALE Day 1 Afternoon Session) [U] |
| **High-Yield Exam Rating** | **9.9 / 10.0** — Fixed-End Moments ($\pm wL^2/12$, $\pm PL/8$), Distribution Factors ($DF$), Carry-Over Factors ($COF = +0.5$), and continuous beam support negative moments appear on **every single** ALE exam |
| **Prerequisite Sequence** | Prerequisite: `STRUC-1` (Statics) & `STRUC-2` (Strength of Materials); Prerequisite to: `ARCH-DESIGN-9/10` Terminal Architectural Thesis [M] |
| **Terminal Engineering Competency** | Ability to analyze multi-span continuous indeterminate beams and non-sway frames using the Hardy Cross Moment Distribution Method, compute exact support negative moments, and locate critical span positive moments [M] |

---

## 2. EXECUTIVE FOUNDATION: THE MOMENT DISTRIBUTION METHOD (HARDY CROSS, 1930)

Unlike simply supported determinate beams where each span acts independently, **continuous multi-span beams and rigid monolithic reinforced concrete frames are statically indeterminate**. Monolithic continuous joints transfer bending moments across supports, creating rotational restraint that significantly reduces midspan deflection and positive bending moments [L][A].

```
  ┌───────────────────────────────────────────────────────────────────────────┐
  │                 THE MOMENT DISTRIBUTION ITERATION CYCLE                   │
  └───────────────────────────────────────────────────────────────────────────┘
  
   [1] IMAGINE JOINTS LOCKED ────► [2] COMPUTE UNBALANCED ──► [3] DISTRIBUTE & CARRY
       Calculate initial Fixed-End     MOMENT AT EACH JOINT       OVER MOMENT (+0.5)
       Moments (FEM) for each          Σ M_joint = FEM_L + FEM_R. Balance joint by
       span independently.             Apply Distribution Factor  multiplying by DF,
                                       DF = K / ΣK.               carry over 50% to far end.
```

### The Three Cardinal Moment Distribution Principles
1. **Flexural Stiffness ($K$):** The resistance of a structural member to rotational deformation when a moment is applied at one end.
2. **Distribution Factor ($DF$):** The proportion of the unbalanced joint moment distributed to each connecting member based on relative flexural stiffness.
3. **Carry-Over Factor ($COF$):** The fraction of the distributed moment induced at the opposite far end of a member ($+0.50$ for a rigid/fixed far end; $0.00$ for a pinned far end).

---

## 3. MASTER GLOSSARY & ACRONYMS

* **Fixed-End Moment (FEM):** The reactive clamping moment developed at the ends of a beam whose end rotations are completely restrained (locked against rotation) [L].
* **Flexural Stiffness ($K$):** The internal resistance of a beam to rotational curvature: $K = \frac{4EI}{L}$ for a fixed far end, and modified stiffness $K' = \frac{3EI}{L} = \frac{3}{4} K$ for a pinned/roller far end [L].
* **Distribution Factor ($DF$):** The fraction of unbalanced joint moment allocated to a member meeting at that joint ($DF = \frac{K}{\sum K}$).
* **Carry-Over Factor ($COF$):** The transfer multiplier ($+0.50$) sending half of the balancing moment to the opposite fixed support.
* **Hogging Moment (Negative Moment):** Bending moment that causes tension on the **top fibers** of a beam (convex curvature upwards), occurring universally over interior continuous supports [L].
* **Sagging Moment (Positive Moment):** Bending moment that causes tension on the **bottom fibers** of a beam (concave curvature downwards), occurring at interior midspans [L].
* **Statically Indeterminate:** A structural system where the number of unknown support reactions and internal forces exceeds the available equations of static equilibrium ($m + r > 2j$) [L].
* **Plastic Hinge:** A localized zone of yielding in a beam where the section can rotate at constant plastic moment capacity, redistributing moments across continuous spans [L].

---

## 4. GOVERNING EQUATIONS, FEM TABLES & STIFFNESS FORMULAS [L]

### A. Canonical Fixed-End Moment (FEM) Equations Matrix

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │                  CANONICAL FIXED-END MOMENT (FEM) EQUATIONS                │
 └────────────────────────────────────────────────────────────────────────────┘
```

| Span Loading Configuration | Left Fixed-End Moment ($\text{FEM}_{AB}$) | Right Fixed-End Moment ($\text{FEM}_{BA}$) |
|---|:---:|:---:|
| **Uniformly Distributed Load ($w$) on Span $L$** | $\mathbf{-\frac{wL^2}{12}}$ | $\mathbf{+\frac{wL^2}{12}}$ [L] |
| **Concentrated Point Load ($P$) at Center ($L/2$)** | $\mathbf{-\frac{PL}{8}}$ | $\mathbf{+\frac{PL}{8}}$ [L] |
| **Point Load ($P$) at Distance $a$ from $A$, $b$ from $B$** | $\mathbf{-\frac{P a b^2}{L^2}}$ | $\mathbf{+\frac{P a^2 b}{L^2}}$ [L] |
| **Two Equal Point Loads ($P$) at Third-Points ($L/3$)** | $\mathbf{-\frac{2PL}{9}}$ | $\mathbf{+\frac{2PL}{9}}$ [L] |
| **Triangular Load ($0$ at $A$ to $w$ at $B$)** | $\mathbf{-\frac{wL^2}{30}}$ | $\mathbf{+\frac{wL^2}{20}}$ [L] |
| **Symmetrical Triangular Load (Peak $w$ at center)** | $\mathbf{-\frac{5wL^2}{48}}$ | $\mathbf{+\frac{5wL^2}{48}}$ [L] |

*Sign Convention:* Counter-Clockwise moments are **Negative ($-$)**; Clockwise moments are **Positive ($+$)** [L].

---

### B. Member Flexural Stiffness ($K$) & Boundary Distribution Factors ($DF$)

1. **Member Flexural Stiffness ($K$):**
   * **Far End Fixed / Continuous:**
     $$K = \frac{4EI}{L} \iff \text{Relative } K = \frac{I}{L}$$
   * **Far End Pinned or Roller (Modified Stiffness):**
     $$K' = \frac{3EI}{L} = \frac{3}{4} \left(\frac{4EI}{L}\right) \iff \text{Relative } K' = \frac{3}{4} \left(\frac{I}{L}\right)$$

2. **Joint Distribution Factor ($DF$):**
   $$DF_i = \frac{K_i}{\sum K_{\text{joint}}}$$

3. **Boundary Support Distribution Factors ($DF$):**
   $$\begin{aligned}
   \mathbf{\text{Fixed Support}} &\implies \mathbf{DF = 0.00} \quad (\text{Infinitely stiff; absorbs all moment without rotating}) \\
   \mathbf{\text{Exterior Pinned / Roller Support}} &\implies \mathbf{DF = 1.00} \quad (\text{Zero rotational restraint; releases all moment}) \\
   \mathbf{\text{Overhanging Cantilever End}} &\implies \mathbf{DF = 0.00} \quad (\text{Determinate cantilever moment is fixed and non-distributable})
   \end{aligned}$$

---

## 5. FORMULAS & WORKED CALCULATION EXAMPLES [L]

### 🏛️ WORKED CALCULATION: 2-Span Continuous Indeterminate Beam Analysis
**Scenario:** A two-span continuous reinforced concrete beam $A\text{-}B\text{-}C$ has a constant cross-section ($EI = \text{constant}$).
* **Span $AB$:** Length $L_1 = 6.00\text{ m}$, supported by a **Fixed Support at $A$**, carrying a Uniform Load $w = 30.00\text{ kN/m}$.
* **Span $BC$:** Length $L_2 = 4.00\text{ m}$, supported by an **Exterior Roller at $C$**, carrying a Concentrated Point Load $P = 60.00\text{ kN}$ at midspan ($2.00\text{ m}$ from $B$).
* Interior continuous support at $B$ is a roller.

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │               2-SPAN CONTINUOUS BEAM LOADING SCHEMATIC                     │
 └────────────────────────────────────────────────────────────────────────────┘
 
       w = 30 kN/m                        P = 60 kN
  ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼                     ▼
  ═════════════════════════════════════════════════════════════
  ▓ (Fixed A)                 ▲ (Roller B)                ▲ (Roller C)
  ◄──────── 6.00 m ──────────►◄──────── 4.00 m ──────────►
```

---

#### Step 1: Calculate Relative Member Stiffness ($K$)
* **Span $AB$ (Far end $A$ is fixed):**
  $$K_{BA} = \frac{I}{L_1} = \frac{I}{6.00} = \mathbf{0.1667 I}$$
* **Span $BC$ (Far end $C$ is a pin/roller $\rightarrow$ use Modified Stiffness $K'$):**
  $$K'_{BC} = \frac{3}{4} \left(\frac{I}{L_2}\right) = \frac{3}{4} \left(\frac{I}{4.00}\right) = \frac{3}{16} I = \mathbf{0.1875 I}$$

---

#### Step 2: Compute Distribution Factors ($DF$) at Each Joint
* **Joint $A$ (Fixed Support):**
  $$DF_{AB} = \mathbf{0.00}$$
* **Joint $B$ (Continuous Interior Support):**
  $$\sum K_B = K_{BA} + K'_{BC} = 0.1667 I + 0.1875 I = 0.3542 I$$
  $$DF_{BA} = \frac{0.1667 I}{0.3542 I} = \mathbf{0.4706 \approx 0.471}$$
  $$DF_{BC} = \frac{0.1875 I}{0.3542 I} = \mathbf{0.5294 \approx 0.529}$$
  *Check:* $DF_{BA} + DF_{BC} = 0.471 + 0.529 = 1.000$. **CORRECT.**
* **Joint $C$ (Exterior Roller Support — already modified, locked at 0 after initialization):**
  $$DF_{CB} = \mathbf{1.00} \quad (\text{or } 0 \text{ in modified table})$$

---

#### Step 3: Compute Initial Fixed-End Moments (FEM)
* **Span $AB$ (Uniform load $w = 30\text{ kN/m}$):**
  $$\text{FEM}_{AB} = -\frac{w L_1^2}{12} = -\frac{30 \times 6.00^2}{12} = -\frac{30 \times 36}{12} = \mathbf{-90.00\text{ kN}\cdot\text{m}}$$
  $$\text{FEM}_{BA} = +\frac{w L_1^2}{12} = +\frac{30 \times 6.00^2}{12} = \mathbf{+90.00\text{ kN}\cdot\text{m}}$$
* **Span $BC$ (Center load $P = 60\text{ kN}$):**
  $$\text{FEM}_{BC} = -\frac{P L_2}{8} = -\frac{60 \times 4.00}{8} = \mathbf{-30.00\text{ kN}\cdot\text{m}}$$
  $$\text{FEM}_{CB} = +\frac{P L_2}{8} = +\frac{60 \times 4.00}{8} = \mathbf{+30.00\text{ kN}\cdot\text{m}}$$
* **Modify Span $BC$ for Pinned End at $C$:**
  * Release Joint $C$ by adding $-30.00\text{ kN}\cdot\text{m}$ ($M_C \rightarrow 0$) and carry over $50\%$ to $B$ ($-15.00\text{ kN}\cdot\text{m}$):
  $$\text{Modified FEM}'_{BC} = \text{FEM}_{BC} - \frac{1}{2} \text{FEM}_{CB} = -30.00 - 15.00 = \mathbf{-45.00\text{ kN}\cdot\text{m}}$$
  $$\text{Modified FEM}'_{CB} = \mathbf{0.00\text{ kN}\cdot\text{m}}$$

---

#### Step 4: Execute Hardy Cross Moment Distribution Table

```text
 ┌───────────────────────────────────────────────────────────────────────────┐
 │               HARDY CROSS MOMENT DISTRIBUTION TABLE (kN·m)                │
 └───────────────────────────────────────────────────────────────────────────┘
 
  JOINT                 A            │            B            │      C
  MEMBER                AB           │     BA           BC     │     CB
 ────────────────────────────────────┼─────────────────────────┼─────────────
  DF                   0.000         │    0.471        0.529   │    0.000
 ────────────────────────────────────┼─────────────────────────┼─────────────
  FEM                 -90.00         │   +90.00       -45.00   │     0.00
 ────────────────────────────────────┼─────────────────────────┼─────────────
  Unbalanced Moment at B = (+90.00 - 45.00) = +45.00 kN·m
  Balance Moment at B = -45.00 kN·m
 ────────────────────────────────────┼─────────────────────────┼─────────────
  Distribution (Dist)   0.00         │   -21.19       -23.81   │     0.00
  Carry-Over (CO)     -10.60         │     0.00         0.00   │     0.00
 ────────────────────────────────────┼─────────────────────────┼─────────────
  FINAL MOMENTS       -100.60 kN·m   │   +68.81 kN·m  -68.81 kN·m │  0.00 kN·m
```

*Verification at Joint $B$:* $\sum M_B = +68.81 - 68.81 = \mathbf{0.00\text{ kN}\cdot\text{m}}$. **PERFECT EQUILIBRIUM CONVERGENCE!**

---

#### Step 5: Solve Final Beam End Moments & Support Reactions
* **Moment at Fixed Support $A$:** $M_A = \mathbf{-100.60\text{ kN}\cdot\text{m}}$
* **Moment at Interior Support $B$:** $M_B = \mathbf{-68.81\text{ kN}\cdot\text{m}}$ (Hogging / Tension on top)
* **Moment at Exterior Roller $C$:** $M_C = \mathbf{0.00\text{ kN}\cdot\text{m}}$

**Isolate Span $AB$ to solve Reactions $R_A, R_{B1}$:**
$$\sum M_B = 0 \implies (R_A \times 6.00) - (30 \times 6.00 \times 3.00) - 100.60 + 68.81 = 0$$
$$6.00 R_A - 540.00 - 31.79 = 0 \implies \mathbf{R_A = 95.30\text{ kN}}$$
$$R_{B1} = (30 \times 6.00) - 95.30 = \mathbf{84.70\text{ kN}}$$

**Isolate Span $BC$ to solve Reactions $R_{B2}, R_C$:**
$$\sum M_B = 0 \implies (R_C \times 4.00) - (60 \times 2.00) - 68.81 = 0$$
$$4.00 R_C - 120.00 - 68.81 = 0 \implies \mathbf{R_C = 12.80\text{ kN}}$$
$$R_{B2} = 60.00 - 12.80 = \mathbf{47.20\text{ kN}}$$

* **Total Interior Support Reaction at $B$:**
  $$R_B = R_{B1} + R_{B2} = 84.70 + 47.20 = \mathbf{131.90\text{ kN}}$$
* *Total Equilibrium Check:* $R_A + R_B + R_C = 95.30 + 131.90 + 12.80 = 240.00\text{ kN} = \text{Total Load } (180 + 60)$. **EXACT MATCH.**

---

## 6. ACI COEFFICIENT METHOD & CONTINUOUS BEAM SIZING [I][L]

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │               CONTINUOUS BEAM REBAR PLACEMENT PROFILE                      │
 └────────────────────────────────────────────────────────────────────────────┘
 
      Top Tension Rebar over Support B (Hogging Moment: -68.81 kN·m)
             ┌─────────────────────────┐
             │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
  ═══════════╧═════════════════════════╧═══════════════════════════
  ▲ Support A                 ▲ Support B                 ▲ Support C
  ════════════════════════════════════════════════════════════════
             │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │       │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
             └─────────────────┘       └─────────────────┘
      Bottom Tension Rebar at Span AB   Bottom Tension Rebar at Span BC
      (Positive Sagging Moment: +50.9kNm)(Positive Sagging Moment: +25.6kNm)
```

* **NSCP 2015 Section 406.5 Simplified ACI Coefficients:**
  * Exterior Support (Discontinuous end unrestrained): $M_u = 0$
  * Midspan of End Span: $M_u = +\frac{W_u L_n^2}{14}$
  * First Interior Support (Negative Moment): $M_u = -\frac{W_u L_n^2}{10}$ (for 2 spans) or $-\frac{W_u L_n^2}{11}$ (for $>2$ spans)
  * Midspan of Interior Spans: $M_u = +\frac{W_u L_n^2}{16}$

---

## 7. EXAM TRAPS & STRUCTURAL BOARD PITFALLS

* **TRAP 1: Forgetting Modified Stiffness ($K' = \frac{3}{4} K$) for Pinned Exterior Spans:**
  * If a span terminates at an exterior pin or roller, you can save multiple iteration cycles by multiplying its relative stiffness by **$0.75$** and zeroing out its initial FEM carry-over!
* **TRAP 2: Carry-Over Sign Convention:**
  * When balancing a joint, the distributed moment is multiplied by **$+0.50$**; it retains the **SAME SIGN** as the balancing distributed moment!
* **TRAP 3: Fixed Support Distribution Factor ($DF = 0$):**
  * Never distribute moment into an immovable fixed wall ($DF = 0$). Only interior continuous joints rotate and distribute.
* **TRAP 4: Misplacing Rebar in Continuous Concrete Beams:**
  * Over interior columns/supports, the moment is **negative (hogging)** $\rightarrow$ primary flexural steel must be at the **TOP** of the beam!
  * At midspan, the moment is **positive (sagging)** $\rightarrow$ primary flexural steel must be at the **BOTTOM** of the beam!

---

## 8. HISTORICAL EVOLUTION OF INDETERMINATE ANALYSIS

1. **Hardy Cross (1885–1959, University of Illinois):**
   * Published his groundbreaking paper *"Analysis of Continuous Frames by Distributing Fixed-End Moments"* in the May 1930 ASCE Proceedings. His moment distribution method was hailed as the greatest contribution to structural engineering in the 20th century, enabling the rapid construction of skyscrapers, bridges, and wartime concrete hangars without solving massive simultaneous matrix equations.
2. **Comparison of Indeterminate Analysis Methods:**
   * **Slope-Deflection Method (George Maney, 1915):** Exact classical method solving simultaneous slope/deflection equations.
   * **Moment Distribution Method (Hardy Cross, 1930):** Iterative numerical relaxation converging to exact solution within 2–3 cycles.
   * **Direct Stiffness / Finite Element Method (1960s–Present):** Computerized matrix formulation ($[K]\{u\} = \{F\}$).

---

## 9. ASCII CONTINUOUS MOMENT ENVELOPE DIAGRAMS

```text
 ┌───────────────────────────────────────────────────────────────────────────┐
 │               2-SPAN CONTINUOUS BENDING MOMENT ENVELOPE                   │
 └───────────────────────────────────────────────────────────────────────────┘
 
  -100.60 kN·m (Fixed A)
  │\                                      -68.81 kN·m (Interior Support B)
  │ \                                         /\
  │  \                                       /  \
  └───\───Inflection Pt─────────────────────/────\────Inflection Pt── 0 kN·m
       \        /\                         /      \        /\
        \      /  \                       /        \      /  \
         \────/    \─────────────────────/          \────/    \ (Roller C = 0)
         +50.88 kN·m (Span AB Max Positive)         +25.60 kN·m (Span BC Max)
```

---

## 10. 10-QUESTION SOCRATIC DRILL WITH VERIFIED BOARD-STYLE EXPLANATIONS

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │                STRUC 3 INDETERMINATE THEORY BOARD SIMULATION DRILL         │
 └────────────────────────────────────────────────────────────────────────────┘
```

#### Q1. What is the Fixed-End Moment (FEM) at the supports of a fully fixed beam of span $L = 6.00\text{ m}$ carrying a uniformly distributed load of $w = 24.00\text{ kN/m}$?
- [ ] A. $\pm 36.00\text{ kN}\cdot\text{m}$
- [ ] B. $\pm 54.00\text{ kN}\cdot\text{m}$
- [x] C. **$\pm 72.00\text{ kN}\cdot\text{m}$**
- [ ] D. $\pm 108.00\text{ kN}\cdot\text{m}$
> **Explanation:** $\text{FEM} = \pm \frac{wL^2}{12} = \pm \frac{24 \times 6^2}{12} = \pm \frac{24 \times 36}{12} = \pm (24 \times 3) = \mathbf{\pm 72.00\text{ kN}\cdot\text{m}}$ [L].

---

#### Q2. In the Hardy Cross Moment Distribution Method, what is the Distribution Factor ($DF$) for a perfectly rigid fixed support?
- [x] A. **$0.00$**
- [ ] B. $0.50$
- [ ] C. $0.75$
- [ ] D. $1.00$
> **Explanation:** A fixed support has infinite rotational stiffness ($\theta = 0$), so its distribution factor is **$DF = 0.00$** (it absorbs moment but never rotates to distribute) [L].

---

#### Q3. What is the standard Carry-Over Factor ($COF$) from a rotated joint to an opposite fixed far end?
- [ ] A. $-1.00$
- [ ] B. $-0.50$
- [x] C. **$+0.50$**
- [ ] D. $+1.00$
> **Explanation:** The standard carry-over factor to a fixed far end in prismatic members is **$+0.50$** (carrying the same mathematical sign as the balancing moment) [L].

---

#### Q4. What is the modified flexural stiffness ($K'$) for a prismatic beam member whose far end is supported by a frictionless pin or roller?
- [ ] A. $K' = \frac{1}{2} K$
- [x] B. **$K' = \frac{3}{4} K = \frac{3EI}{L}$**
- [ ] C. $K' = \frac{4}{3} K$
- [ ] D. $K' = 2 K$
> **Explanation:** For a member with a pinned far end, the rotational stiffness is reduced by one-fourth to **$K' = \frac{3EI}{L} = \frac{3}{4} \left(\frac{4EI}{L}\right)$** [L].

---

#### Q5. Over an interior continuous column support in a multi-span concrete beam, what type of bending moment develops and where must main rebar be placed?
- [x] A. **Negative (Hogging) Moment $\rightarrow$ Main tensile steel must be placed at the TOP of the beam**
- [ ] B. Positive (Sagging) Moment $\rightarrow$ Main steel at the bottom
- [ ] C. Zero moment $\rightarrow$ No steel required
- [ ] D. Torsional moment only $\rightarrow$ Diagonal stirrups
> **Explanation:** Continuous joints develop **negative (hogging) moments** over supports where top fibers stretch in tension, requiring main longitudinal reinforcement at the **top** [L].

---

#### Q6. What is the Fixed-End Moment for a fixed-ended beam of span $L = 8.00\text{ m}$ carrying a concentrated load $P = 40.00\text{ kN}$ at its exact midspan?
- [ ] A. $\pm 20.00\text{ kN}\cdot\text{m}$
- [x] B. **$\pm 40.00\text{ kN}\cdot\text{m}$**
- [ ] C. $\pm 80.00\text{ kN}\cdot\text{m}$
- [ ] D. $\pm 160.00\text{ kN}\cdot\text{m}$
> **Explanation:** $\text{FEM} = \pm \frac{PL}{8} = \pm \frac{40 \times 8.00}{8} = \mathbf{\pm 40.00\text{ kN}\cdot\text{m}}$ [L].

---

#### Q7. Under the NSCP 2015 / ACI simplified moment coefficients, what is the design negative moment at the face of the first interior support for a 2-span continuous beam?
- [ ] A. $-\frac{W_u L_n^2}{8}$
- [x] B. **$-\frac{W_u L_n^2}{10}$**
- [ ] C. $-\frac{W_u L_n^2}{12}$
- [ ] D. $-\frac{W_u L_n^2}{16}$
> **Explanation:** NSCP 2015 Table 406.5.2 sets the negative moment at the first interior support for a two-span continuous beam at **$-\frac{W_u L_n^2}{10}$** [L].

---

#### Q8. Who invented the Moment Distribution Method in 1930, revolutionizing 20th-century structural engineering?
- [ ] A. Stephen Timoshenko
- [x] B. **Hardy Cross**
- [ ] C. George Maney
- [ ] D. Christian Otto Mohr
> **Explanation:** **Hardy Cross** developed and published the Moment Distribution Method at the University of Illinois in 1930 [L].

---

#### Q9. At a rigid continuous joint $B$, member $BA$ has stiffness $K = 4$ and member $BC$ has stiffness $K = 6$. What is the Distribution Factor for member $BA$?
- [x] A. **$0.40$ ($40\%$)**
- [ ] B. $0.60$ ($60\%$)
- [ ] C. $0.67$
- [ ] D. $1.50$
> **Explanation:** $\sum K = 4 + 6 = 10$. $DF_{BA} = \frac{4}{10} = \mathbf{0.40}$ [L].

---

#### Q10. What is the fundamental advantage of continuous multi-span beams compared to an equivalent series of simply supported spans?
- [x] A. **Reduced midspan positive moments and smaller deflections, allowing shallower beam depths and material savings**
- [ ] B. Eliminates all foundation settlement
- [ ] C. Complete independence between spans
- [ ] D. Eliminates all shear forces
> **Explanation:** Continuity transfers moment into the supports, significantly reducing peak span moments from $\frac{wL^2}{8}$ down to $\approx \frac{wL^2}{14\text{--}16}$, permitting **shallower beams, lighter sections, and smaller deflections** [L][A].

---

## 11. CROSS-VAULT LINKAGES & PREREQUISITE NETWORK

* `vault/05-STRUCTURAL-STUDIES-SERIES/STRUC1-STATICS-AND-EQUILIBRIUM/STRUC1-CANONICAL-STATICS-SHEAR-MOMENT-AND-TRUSS-MANUAL.md` — Determinate Statics & Basic Shear-Moment
* `vault/03-BUILDING-TECHNOLOGY-SERIES/BT3-HEAVY-RCD-AND-PRESTRESS/BT3-CANONICAL-RCD-PRESTRESS-AND-STEEL.md` — RCD Singly/Doubly Reinforced Beam Sizing
