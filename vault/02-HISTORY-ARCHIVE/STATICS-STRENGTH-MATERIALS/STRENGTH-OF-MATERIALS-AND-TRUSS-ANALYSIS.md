# MEC32 / STRUC2: STRENGTH OF MATERIALS & DETERMINATE TRUSS ANALYSIS
**Course:** Strength of Materials (MEC32) / Structural Mechanics 2  
**Academic Unit:** Mapúa School of Engineering & ARIDBE  
**PRC ALE Category:** Part 2: Mechanics of Deformable Bodies, Trusses & Stress Analysis (30% Weight)  
**High-Yield Exam Score:** 9.4 / 10  
**Governing Authorities & References:** NSCP 2015 Chapter 5 (Steel), Beer & Johnston *Mechanics of Materials* (8th ed.), Gere & Goodno *Mechanics of Materials*.

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 First Principles of Stress, Strain & Hooke's Law
* **Normal Stress ($\sigma$):** $\sigma = \frac{P}{A}$ (Axial tensile or compressive force per unit cross-sectional area in $Pa, MPa$).
* **Normal Strain ($\epsilon$):** $\epsilon = \frac{\delta}{L}$ (Unitless elongation per original length).
* **Hooke's Law (Elastic Modulus $E$):**
  $$\sigma = E \cdot \epsilon \implies \delta = \frac{P L}{A E}$$
  * Structural Steel: $E_s = 200,000\text{ MPa} = 200\text{ GPa}$.
  * Structural Concrete: $E_c = 4700\sqrt{f'_c}\text{ MPa}$.
  * Philippine Hardwood: $E_w \approx 8,000 – 13,000\text{ MPa}$.

### 1.2 The Flexure Formula & Transverse Shear in Beams
* **Flexure Formula (Bending Stress $\sigma_b$):**
  $$\sigma_b = \frac{M \cdot y}{I} = \frac{M}{S} \quad (S = I/c = \text{Section Modulus})$$
* **Horizontal Shear Stress Formula ($\tau$):**
  $$\tau = \frac{V \cdot Q}{I \cdot b}$$
  *(where $Q = A' \cdot \bar{y}' = \text{First moment of area above cut line about Neutral Axis}$)*.
  * For Rectangular Section ($b \times h$): Maximum shear stress at Neutral Axis is **$\tau_{max} = 1.5 \frac{V}{A} = \frac{3 V}{2 b h}$** ($50\%$ higher than average shear!).

```
                          BENDING & SHEAR STRESS PROFILES IN BEAMS
              CROSS SECTION               BENDING STRESS (σ = My/I)        SHEAR STRESS (τ = VQ/Ib)
             ┌─────────────┐                 ◄── (-) Comp. ──►                      
             │             │                 ┌───────────────┐                  ┌──────┐
             │             │                 │\              │                 /        \
           h │- - - N.A. - -│                 │ \    Zero     │                |  τ_max   | (1.5 V/A)
             │             │                 │  \    Stress  │                 \        /
             │             │                 │   \           │                  └──────┘
             └─────────────┘                 └───────────────┘                   Zero at
                    b                        ◄── (+) Tens. ──►                   Extremities
```

---

## 2. TECHNICAL MECHANICS & TRUSS ANALYSIS METHODS

### 2.1 Determinate Planar Truss Analysis Methods
A truss is an assemblage of slender members connected at frictionless pin joints:
* **Statical Determinacy Criterion:** $m + r = 2j$ *(where $m = \text{number of members}$, $r = \text{support reaction components}$, $j = \text{number of joints}$)*.
1. **Method of Joints ($\sum F_x = 0, \sum F_y = 0$):**
   * Isolate joints with no more than 2 unknown member forces.
   * Ideal for determining all member forces across an entire truss.
2. **Method of Sections ($\sum M_O = 0$):**
   * Pass an imaginary cutting plane through no more than 3 unknown truss members.
   * Directly solves individual interior truss members without analyzing intermediate joints.
3. **Zero-Force Member Identification Rules:**
   * **Rule 1 (Two-Member Joint):** If two non-collinear members meet at an unloaded joint, both are **Zero-Force Members**.
   * **Rule 2 (Three-Member Joint):** If three members meet at a joint where two are collinear and no external load is applied, the third non-collinear member is a **Zero-Force Member**.

---

## 3. PHILIPPINE STATUTORY & STRUCTURAL CODE MATRIX

| Code Authority | Section / Provision | Statutory Limit | Engineering Application |
| :--- | :--- | :--- | :--- |
| **NSCP 2015** | Section 504.2 | Allowable Bending Stress for Structural Steel: $F_b = 0.66 F_y$ for compact beams braced against lateral-torsional buckling. | Governs section modulus selection $S_{req} = M_{max} / F_b$. |
| **NSCP 2015** | Section 604.3 | Allowable Bending Stress for Philippine Hardwoods (Group 1 - Yakal/Guijo): $F_b = 16.5\text{ MPa}$; Horizontal Shear $F_v = 1.70\text{ MPa}$. | Sizing timber roof purlins and floor joists. |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & TRUSS ANALYSIS

### 4.1 Method of Sections Analysis for a Pratt Roof Truss
**Problem**: An architectural roof truss spans $12.00\text{m}$ ($4\text{ panels at } 3.00\text{m}$ each) with height $H = 4.00\text{m}$.  
- Vertical point loads of $P = 40.0\text{ kN}$ act at top chord joints $B, C, D$.  
- Support reactions at left pin $A$ and right roller $E$: $R_A = R_E = \frac{3 \times 40.0}{2} = 60.0\text{ kN}$.  
- Pass a section cutting through members $CD$ (top chord), $CJ$ (diagonal web), and $IJ$ (bottom chord).  
- Determine the force in bottom chord member $IJ$ and diagonal web member $CJ$.

```
Step 1: Free-Body Diagram of Left Section Cut
Cut truss vertically between panel 2 (Joints B, I) and panel 3 (Joints C, J).
Consider Left Substructure:
- External Forces: Support Reaction R_A = 60.0 kN (↑ at x = 0), Joint Load P_B = 40.0 kN (↓ at x = 3.0m).
- Internal Exposed Cut Forces: F_CD (acting horizontally at Joint C, y = 4.0m), 
  F_CJ (acting along diagonal at angle θ), F_IJ (acting horizontally along bottom chord, y = 0).
- Angle of diagonal member CJ: tan θ = Height / Panel Width = 4.0 m / 3.0 m = 1.3333 ➔ θ = 53.13°.
  cos θ = 3/5 = 0.60, sin θ = 4/5 = 0.80.

Step 2: Solve for Bottom Chord Member F_IJ via Sum of Moments about Top Joint C (ΣM_C = 0)
Joint C is located at x = 6.00 m, y = 4.00 m.
Forces F_CD and F_CJ pass directly through Joint C (Moment arms = 0):
ΣM_C = 0  (Clockwise positive)
- R_A × (6.00 m) + P_B × (6.00 - 3.00 m) + F_IJ × (4.00 m) = 0
- 60.0 × (6.00) + 40.0 × (3.00) + 4.00 F_IJ = 0
- 360.0 + 120.0 + 4.00 F_IJ = 0  ➔  4.00 F_IJ = 240.0
F_IJ = 240.0 / 4.00 = + 60.00 kN.
➔ Result: F_IJ = 60.00 kN in TENSION (Positive = Tension).

Step 3: Solve for Diagonal Member F_CJ via Sum of Vertical Forces (ΣF_y = 0)
ΣF_y = R_A - P_B - F_CJ · sin θ = 0
60.0 - 40.0 - F_CJ · (0.80) = 0
20.0 = 0.80 F_CJ  ➔  F_CJ = 20.0 / 0.80 = + 25.00 kN.
➔ Result: F_CJ = 25.00 kN in TENSION.
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: TIMBER & STEEL ROOF TRUSSES                 │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. TOP CHORD vs BOTTOM CHORD TENSION/COMPRESSION:                                  │
│    • Under standard gravity roof loads, TOP CHORD is in COMPRESSION (vulnerable to │
│      buckling ➔ braced by continuous roof purlins).                                │
│    • BOTTOM CHORD is in TENSION (hung ceiling drywall attaches here).              │
│    • Under Typhoon Wind Uplift, stress reversals occur (Bottom chord goes into     │
│      compression ➔ requires lateral bottom-chord sway bracing).                    │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Maximum Horizontal Shear Stress in Rectangular Beams):
For a rectangular solid timber beam with cross-sectional dimensions $b \times h$ carrying a vertical shear force $V$, what is the exact magnitude and location of the maximum horizontal shear stress ($\tau_{max}$)?
- A) $\tau_{max} = \frac{V}{b h}$ located at the top compression fiber.
- B) $\tau_{max} = \frac{3 V}{2 b h}$ located at the neutral axis ($y = h/2$).
- C) $\tau_{max} = \frac{2 V}{3 b h}$ located at the bottom tension fiber.
- D) $\tau_{max} = \frac{w L^2}{8}$ located at the beam supports.
> **Correct Answer: B**  
> **Distractor Trap Analysis**:
> * By the transverse shear formula $\tau = \frac{V Q}{I b}$, for a solid rectangular section $Q_{max} = \frac{b h^2}{8}$ at the neutral axis. Substituting $I = \frac{b h^3}{12}$ yields $\tau_{max} = \frac{3 V}{2 b h} = 1.5 \tau_{avg}$.
> * Option A is the simple average shear ($V/A$), which underestimates peak internal shear by $50\%$.

---

## 7. ACADEMIC REFERENCES
1. Beer, F. P., Johnston, E. R., DeWolf, J. T., & Mazurek, D. F. (2020). *Mechanics of Materials* (8th ed.). McGraw-Hill.
2. Gere, J. M., & Goodno, B. J. (2018). *Mechanics of Materials* (9th ed.). Cengage Learning.
3. Hibbeler, R. C. (2018). *Statics and Mechanics of Materials* (5th ed.). Pearson.
