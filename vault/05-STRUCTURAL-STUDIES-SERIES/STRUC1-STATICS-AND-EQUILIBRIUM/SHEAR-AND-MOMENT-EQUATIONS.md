# MEC30 / STRUC1: STATICS & SHEAR-MOMENT EQUATIONS FOR BEAMS
**Course:** Statics of Rigid Bodies (MEC30) / Structural Mechanics  
**Academic Unit:** Mapúa School of Engineering & ARIDBE  
**PRC ALE Category:** Part 2: Structural Design & Engineering Mechanics (30% Weight)  
**High-Yield Exam Score:** 9.6 / 10 (Fundamental math engine for all architectural structures)  
**Governing Authorities & References:** NSCP 2015 Chapter 2 (Loads), Hibbeler *Engineering Mechanics: Statics* (14th ed.), Beer & Johnston *Vector Mechanics for Engineers*.

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 First Principles of Differential Relationships in Beams
For any transversely loaded structural beam in static equilibrium, the load intensity ($w$), shear force ($V$), and bending moment ($M$) are interrelated by fundamental differential calculus:
1. **Slope of Shear Diagram = Negative Load Intensity:**
   $$\frac{dV}{dx} = -w(x) \implies \Delta V = -\int w(x)\,dx$$
2. **Slope of Moment Diagram = Shear Force:**
   $$\frac{dM}{dx} = V(x) \implies \Delta M = \int V(x)\,dx$$
3. **Location of Maximum Bending Moment ($M_{max}$):**
   * Occurs where the shear force crosses zero ($V = 0$) or changes sign.
   * Total change in bending moment between points $A$ and $B$ equals the **area under the shear force diagram** between those two points.

```
                    DIFFERENTIAL RELATIONSHIPS IN STRUCTURAL BEAMS
  ┌──────────────────────────────────────────────────────────────────────────────────┐
  │ LOAD INTENSITY: w(x)  (Uniform load = degree 0)                                  │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ SHEAR FORCE: V(x) = ∫ -w(x) dx  (Linear slope = degree 1)                        │
  │ Points where V = 0 ➔ Critical Extremum (Maximum / Minimum Bending Moment)        │
  ├──────────────────────────────────────────────────────────────────────────────────┤
  │ BENDING MOMENT: M(x) = ∫ V(x) dx  (Parabolic curve = degree 2)                   │
  │ Maximum Moment M_max = Area under Shear Diagram from support to V = 0 point      │
  └──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. TECHNICAL MECHANICS & CANONICAL BEAM FORMULAS MATRIX

| Beam & Loading Condition | Support Reactions | Maximum Shear Force ($V_{max}$) | Maximum Bending Moment ($M_{max}$) | Midspan Deflection ($\Delta_{max}$) |
| :--- | :---: | :---: | :---: | :---: |
| **Simply Supported Beam (SSB) — Uniform Load $w$** | $R_A = R_B = \frac{wL}{2}$ | $V_{max} = \frac{wL}{2}$ (at supports) | $M_{max} = \mathbf{\frac{wL^2}{8}}$ (at $x = L/2$) | $\Delta = \frac{5 w L^4}{384 E I}$ |
| **Simply Supported Beam — Point Load $P$ at Midspan** | $R_A = R_B = \frac{P}{2}$ | $V_{max} = \frac{P}{2}$ | $M_{max} = \mathbf{\frac{PL}{4}}$ (at $x = L/2$) | $\Delta = \frac{P L^3}{48 E I}$ |
| **Simply Supported Beam — Off-Center Load $P$ ($a, b$)** | $R_A = \frac{Pb}{L}, R_B = \frac{Pa}{L}$ | $V_{max} = \max\left(\frac{Pb}{L}, \frac{Pa}{L}\right)$ | $M_{max} = \mathbf{\frac{P a b}{L}}$ (at load point) | $\Delta = \frac{P b (L^2 - b^2)^{3/2}}{9\sqrt{3} E I L}$ |
| **Cantilever Beam — Uniform Load $w$** | $R_A = wL, M_A = \frac{wL^2}{2}$ | $V_{max} = wL$ (at fixed end) | $M_{max} = \mathbf{-\frac{wL^2}{2}}$ (at fixed support) | $\Delta = \frac{w L^4}{8 E I}$ (at free tip) |
| **Cantilever Beam — Concentrated Tip Load $P$** | $R_A = P, M_A = PL$ | $V_{max} = P$ (constant throughout) | $M_{max} = \mathbf{-PL}$ (at fixed support) | $\Delta = \frac{P L^3}{3 E I}$ (at free tip) |
| **Fixed-Fixed Beam — Uniform Load $w$** | $R_A = R_B = \frac{wL}{2}$ | $V_{max} = \frac{wL}{2}$ | $M_{support} = \mathbf{-\frac{wL^2}{12}}$, $M_{mid} = \mathbf{+\frac{wL^2}{24}}$ | $\Delta = \frac{w L^4}{384 E I}$ |

---

## 3. PHILIPPINE STATUTORY & STRUCTURAL CODE MATRIX (NSCP 2015)

| Code Authority | Section / Provision | Statutory Mandate | Architectural Structural Rule |
| :--- | :--- | :--- | :--- |
| **NSCP 2015** | Section 204.2 | Dead Load Allowances: Reinforced Concrete = $24.0\text{ kN/m}^3$; Structural Steel = $77.0\text{ kN/m}^3$; $150\text{mm}$ CHB plastered = $3.25\text{ kPa}$. | Beam self-weight must be included in dead load calculation before computing $M_{max}$. |
| **NSCP 2015** | Table 205-1 | Minimum Uniform Live Loads: Residential = $1.9\text{ kPa}$; Office = $2.4\text{ kPa}$; Classroom = $1.9\text{ kPa}$; Corridors/Exit Stairs = $4.8\text{ kPa}$. | Governs design live load intensity $L$ for beam moments. |
| **NSCP 2015** | Section 424.2.2 | Maximum Permissible Deflection: Floors not supporting partitions $\le \mathbf{L/360}$; Roofs supporting non-structural elements $\le \mathbf{L/240}$. | Prevents architectural ceiling cracking and door jamming. |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & FULL SHEAR-MOMENT EXAMPLE

### 4.1 Shear and Moment Equations for Beam with Combined Loading
**Problem**: A simply supported beam spans $L = 8.00\text{m}$. It carries a uniformly distributed dead load $w = 20.0\text{ kN/m}$ across its entire span, plus a concentrated live point load $P = 60.0\text{ kN}$ located at $x = 2.00\text{m}$ from the left support $A$.  
Determine: (1) Support reactions $R_A$ and $R_B$, (2) Shear equations $V(x)$, (3) Point of zero shear, and (4) Absolute Maximum Bending Moment ($M_{max}$).

```
Step 1: Calculate Support Reactions via Static Equilibrium
1. Sum of Moments about B (ΣM_B = 0, Clockwise positive):
   R_A × (8.00 m) - P × (8.00 - 2.00 m) - (w × 8.00 m) × (8.00 / 2) = 0
   8.00 R_A - 60.0 × (6.00) - (20.0 × 8.00) × (4.00) = 0
   8.00 R_A - 360.0 - 640.0 = 0  ➔  8.00 R_A = 1,000.0 kN·m
   R_A = 1,000.0 / 8.00 = 125.00 kN (↑).

2. Sum of Vertical Forces (ΣF_y = 0):
   R_A + R_B - P - (w × 8.00) = 0
   125.00 + R_B - 60.0 - 160.0 = 0  ➔  R_B = 220.0 - 125.00 = 95.00 kN (↑).
   Check: 125.00 + 95.00 = 220.0 kN (Verified!).

Step 2: Formulate Piecewise Shear & Moment Equations
• Segment 1 (0 ≤ x < 2.00 m):
  V₁(x) = R_A - w · x = 125.00 - 20.0 x
  At x = 0: V = +125.00 kN
  At x = 2.00m (just left of load): V = 125.00 - 20(2.00) = +85.00 kN
  M₁(x) = R_A · x - (w · x²) / 2 = 125.00 x - 10.0 x²
  At x = 2.00m: M = 125.00(2.00) - 10(2.00)² = 250.0 - 40.0 = 210.00 kN·m.

• Segment 2 (2.00 m < x ≤ 8.00 m):
  V₂(x) = R_A - P - w · x = 125.00 - 60.0 - 20.0 x = 65.00 - 20.0 x
  At x = 2.00m (just right of load): V = 65.00 - 20(2.00) = +25.00 kN
  At x = 8.00m (right support): V = 65.00 - 20(8.00) = -95.00 kN (= -R_B).

Step 3: Locate Exact Point of Zero Shear (V = 0)
Set V₂(x) = 0:
65.00 - 20.0 x = 0  ➔  20.0 x = 65.00  ➔  x_critical = 3.25 meters from support A.

Step 4: Compute Absolute Maximum Bending Moment (M_max)
Using the Area-Under-Shear Diagram Method:
M_max = M(x = 2.0m) + Area of Trapezoid under Shear from x = 2.0m to x = 3.25m
Trapezoid base = 3.25 - 2.00 = 1.25 m. Heights = 25.00 kN to 0 kN (Triangle).
Area = 1/2 × (1.25 m) × (25.00 kN) = 15.625 kN·m.
M_max = 210.00 kN·m + 15.625 kN·m = 225.625 kN·m.

➔ Resulting Governing Moments:
   Maximum Shear V_max = 125.00 kN (at Left Support A).
   Maximum Bending Moment M_max = 225.63 kN·m (at x = 3.25m from Left Support).
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: CANTILEVER BALCONY DEFECTS                  │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. CANTILEVER NEGATIVE MOMENT REVERSAL:                                            │
│    • Cantilever balcony slabs have M_max = -wL²/2 (Top fiber in TENSION).          │
│    • Main structural rebar must be placed at the TOP of the slab with 20mm cover.  │
│    • Putting rebar at the bottom of a cantilever causes immediate collapse upon    │
│      formwork removal! (The #1 forensic failure in residential balcony plates).    │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Maximum Bending Moment Location):
In a beam supported at both ends carrying arbitrary downward gravity loads, at what mathematical point does the maximum positive bending moment always occur?
- A) Exactly at the geometric center ($L/2$) regardless of loading.
- B) At the point where the shear force diagram crosses zero ($V = 0$) or changes sign.
- C) Directly beneath the largest point load.
- D) At the support with the largest vertical reaction force.
> **Correct Answer: B**  
> **Distractor Trap Analysis**:
> * By calculus, $dM/dx = V(x)$. Therefore, the extremum (maximum/minimum) of the moment curve occurs where the first derivative equals zero ($V = 0$). If loading is unsymmetric, the maximum moment shifts away from the midspan center.

---

## 7. ACADEMIC REFERENCES
1. Hibbeler, R. C. (2017). *Engineering Mechanics: Statics* (14th ed.). Pearson.
2. Beer, F. P., Johnston, E. R., Mazurek, D. F., & Eisenberg, E. R. (2019). *Vector Mechanics for Engineers: Statics* (12th ed.). McGraw-Hill.
3. Association of Structural Engineers of the Philippines (ASEP). (2015). *National Structural Code of the Philippines (NSCP 2015)*. Manila.
