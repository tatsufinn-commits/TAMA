# MEC32 / STRUC2: STRENGTH OF MATERIALS — FLEXURE, TRANSVERSE SHEAR, DEFLECTIONS & EULER COLUMN BUCKLING
**Course:** Strength of Materials (MEC32) / Structural Mechanics 2  
**Academic Unit:** Mapúa School of Engineering & ARIDBE  
**PRC ALE Category:** Part 2: Mechanics of Deformable Bodies, Bending Stresses & Column Design (30% Weight)  
**High-Yield Exam Score:** 9.6 / 10  
**Governing Authorities & References:** NSCP 2015 Chapter 4 & 5, Beer & Johnston *Mechanics of Materials*, Gere & Goodno *Mechanics of Materials*.

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 First Principles of Pure Bending & The Flexure Formula
When a straight prismatic beam is subjected to transverse bending moments, longitudinal fibers above the **Neutral Axis (NA)** undergo compressive strain, while fibers below undergo tensile strain:
* **The Flexure Formula:**
  $$\sigma_b = \frac{M \cdot y}{I} = \frac{M}{S}$$
  *(where $M = \text{internal bending moment}$, $y = \text{distance from neutral axis}$, $I = \text{moment of inertia}$, $S = I/c = \text{Section Modulus}$)*.
* **Beam Section Modulus Efficiency ($S = I/c$):**
  * Sizing a beam is a direct search for minimum required Section Modulus: $S_{req} = \frac{M_{max}}{F_b}$.

```
                      BENDING, SHEAR & DEFLECTION INTEGRATION
  ┌──────────────────────────────────────────────────────────────────────────────────┐
  │ 1. FLEXURAL STRESS:  σ = My / I  (Linear profile; maximum at extreme fibers)     │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 2. SHEAR STRESS:     τ = VQ / Ib (Parabolic profile; maximum at Neutral Axis)    │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 3. BEAM DEFLECTION:  EI (d²v/dx²) = M(x)  (Governs serviceability limit states)  │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ 4. COLUMN BUCKLING:  P_cr = π²EI / (KL)²  (Governs slender structural columns)   │
  └──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. TECHNICAL MECHANICS & EULER COLUMN BUCKLING

### 2.1 Euler's Critical Buckling Load & Slenderness Ratio ($KL/r$)
Long slender compression columns fail by lateral elastic instability (**buckling**) rather than material crushing:
* **Euler's Buckling Formula:**
  $$P_{cr} = \frac{\pi^2 E I}{(K L)^2} = \frac{\pi^2 E A}{\left(\frac{K L}{r}\right)^2}$$
  *(where $r = \sqrt{I/A} = \text{Radius of Gyration}$, $\frac{KL}{r} = \text{Slenderness Ratio}$, $K = \text{Effective Length Factor}$)*.

### 2.2 Effective Length Factor ($K$) Matrix:
| Boundary End Conditions | Theoretical $K$-Value | Recommended Design $K$-Value (AISC/NSCP) | Physical Buckling Shape |
| :--- | :---: | :---: | :--- |
| **Pinned-Pinned (Both ends hinged)** | **$1.00$** | **$1.00$** | Single half-sine wave spanning full height $L$. |
| **Fixed-Fixed (Both ends clamped)** | **$0.50$** | **$0.65$** | Double curvature with inflection points at $L/4$. |
| **Fixed-Pinned (One fixed, one hinged)** | **$0.70$** | **$0.80$** | Inflection point at $0.7L$ from pinned end. |
| **Fixed-Free (Cantilever flagpole column)**| **$2.00$** | **$2.10$** | Quarter-sine wave; **4× weaker than pinned-pinned!** |

---

## 3. PHILIPPINE STATUTORY & STRUCTURAL CODE MATRIX (NSCP 2015)

| Code Authority | Section / Provision | Statutory Mandate | Architectural Structural Consequence |
| :--- | :--- | :--- | :--- |
| **NSCP 2015** | Section 504.2 | Maximum Slenderness Ratio for Compression Members: $\mathbf{\frac{KL}{r} \le 200}$. | Columns exceeding $KL/r = 200$ are prohibited. |
| **NSCP 2015** | Section 424.2 | Beam Deflection Limits: Floor beams supporting drywall partitions: $\Delta_{max} \le \mathbf{L/360}$; Roofs: $\Delta_{max} \le \mathbf{L/240}$. | Prevents architectural ceiling cracking and partition jamming. |
| **NSCP 2015** | Section 604.2 | Timber Horizontal Shear: Allowable horizontal shear for Philippine Group 1 timber $F_v = 1.70\text{ MPa}$. | Sizing timber beams governed by horizontal shear failure at supports. |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & COLUMN BUCKLING

### 4.1 Structural Steel Wide-Flange Column Euler Buckling Analysis
**Problem**: An architectural atrium column is a structural steel $W 8 \times 31$ profile ($A = 5,890\text{ mm}^2$, $I_x = 45.8 \times 10^6\text{ mm}^4$, $I_y = 15.4 \times 10^6\text{ mm}^4$, $r_y = 51.1\text{ mm}$).  
- Column height $L = 5.00\text{m} = 5,000\text{mm}$.  
- Modulus of Elasticity of Structural Steel $E = 200,000\text{ MPa} = 200\text{ GPa}$. Yield Strength $F_y = 248\text{ MPa}$ (A36 Steel).  
- End conditions: Pinned at both ends ($K = 1.0$).  
- Determine: (1) Slenderness Ratio about weak axis, (2) Euler Critical Buckling Load ($P_{cr}$), and (3) Critical Buckling Stress ($\sigma_{cr}$).

```
Step 1: Check Weak-Axis Slenderness Ratio (KL/r_y)
Weak-axis governs buckling because I_y < I_x:
Slenderness Ratio = (K · L) / r_y = (1.0 × 5,000 mm) / 51.1 mm = 97.85.
Check NSCP 2015 Limit: 97.85 ≤ 200 ➔ PASSES CODE!

Step 2: Calculate Euler Critical Buckling Load (P_cr)
P_cr = (π² · E · I_y) / (K · L)²
P_cr = [ (3.14159)² × 200,000 N/mm² × 15.4 × 10⁶ mm⁴ ] / (5,000 mm)²
P_cr = [ 9.8696 × 200,000 × 15,400,000 ] / 25,000,000
P_cr = [ 3.0398 × 10¹³ ] / 25,000,000 = 1,215,935 N = 1,215.94 kN.

Step 3: Calculate Critical Buckling Stress (σ_cr)
σ_cr = P_cr / A = 1,215,935 N / 5,890 mm² = 206.44 MPa.
Check Yield Limit: σ_cr (206.44 MPa) < F_y (248.0 MPa) ➔ Column buckles elastically before yielding!

➔ Structural Assessment: The column will buckle about its minor y-axis at P_cr = 1,215.9 kN.
   Applying a safety factor FS = 1.67 yields Allowable Axial Capacity P_allow = 728.1 kN.
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: COLUMN BRACING & WEAK-AXIS DESIGN           │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. WEAK-AXIS INTERMEDIATE BRACING:                                                 │
│    • A wide-flange column has I_x >> I_y (Buckles about minor y-axis).             │
│    • Adding a mid-height architectural girt or mezzanine beam bracing the minor   │
│      axis cuts unbraced length in half (L_y = L/2), increasing P_cr by 400%!       │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 2. CANTILEVER DEFLECTION WARNING (BALCONIES):                                      │
│    • Cantilever deflection Δ_max = wL⁴ / (8EI) grows with the FOURTH POWER of span!│
│    • Doubling a balcony cantilever span (from 1.5m to 3.0m) increases deflection   │
│      by 16× (causing visible sagging and water ponding toward the interior!).      │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Effective Column Length Factor K):
An architect specifies a free-standing cantilever flagpole column of height $L$ anchored firmly into a massive concrete base with no bracing at the top. Under Euler's buckling theory, what effective length factor $K$ must be used to calculate its critical buckling load?
- A) $K = 0.50$
- B) $K = 0.70$
- C) $K = 1.00$
- D) $K = 2.00$
> **Correct Answer: D**  
> **Distractor Trap Analysis**:
> * For a fixed-free cantilever column, the effective buckling length is **$K = 2.00$**. Because $P_{cr} \propto 1/(KL)^2$, setting $K = 2.0$ makes the cantilever column **4 times weaker** than a pinned-pinned column ($K = 1.0$) of the same height.

---

## 7. ACADEMIC REFERENCES
1. Beer, F. P., Johnston, E. R., DeWolf, J. T., & Mazurek, D. F. (2020). *Mechanics of Materials* (8th ed.). McGraw-Hill.
2. Gere, J. M., & Goodno, B. J. (2018). *Mechanics of Materials* (9th ed.). Cengage Learning.
3. Association of Structural Engineers of the Philippines (ASEP). (2015). *National Structural Code of the Philippines (NSCP 2015)*. Manila.
