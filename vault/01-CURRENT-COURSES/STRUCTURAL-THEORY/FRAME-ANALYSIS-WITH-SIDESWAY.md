# CE131P: MOMENT DISTRIBUTION METHOD FOR PORTAL FRAMES WITH SIDESWAY
**Course:** Theory of Structures (Mapúa BS Architecture 3rd Year)  
**Academic Unit:** Mapúa ARIDBE / CEGE Department  
**PRC ALE Category:** Part 2: Structural Design & Analysis of Indeterminate Frames (30% Weight)  
**High-Yield Exam Score:** 8.9 / 10  
**Governing Authorities & References:** Hardy Cross Method, NSCP 2015 Structural Analysis Provisions, Hibbeler Structural Analysis (10th ed.).

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 First Principles of Frame Translation (Sidesway)
In rigid plane frames, joints undergo both **rotational displacement ($\theta$)** and **lateral translation ($\Delta$)**. When lateral translation occurs, it is known as **Sidesway**.

```
    NON-SWAY FRAME (Symmetric)                    SWAY FRAME (Unsymmetric Geometry or Load)
       P (Centered Load)                              P (Off-Center)       P_horizontal ──►
    ┌─────────▼─────────┐                            ┌───────▼───────────┐────────► Δ (Sway)
    │                   │                            │                   │
    │                   │                            │                   │
   ═╧═                 ═╧═                          ═╧═                 ═╧═
   Symmetric geometry + loading                     Unbalanced lateral shear forces produce
   ➔ Zero lateral sway (Δ = 0)                      joint translation Δ at roof/floor beam
```

### 1.2 Criteria for Sidesway Occurrence
Sidesway will occur in a frame if ANY of the following conditions exist:
1. **Asymmetry in Frame Geometry:** Columns of unequal height, inclined column legs, or unequal cross-sections ($I_1 \ne I_2$).
2. **Asymmetry in Gravity Loading:** Point loads located off-center on the roof/floor girder.
3. **Presence of Lateral Forces:** Wind pressure or earthquake lateral seismic force ($V_{base}$).
4. **Asymmetry in Boundary Supports:** One support pinned and the other fixed, or differing foundation settlements.

---

## 2. TECHNICAL MECHANICS & STEP-BY-STEP SUPERPOSITION ALGORITHM

To solve a frame with sidesway using the Hardy Cross Moment Distribution Method, apply the **Two-Step Superposition Principle**:
$$\{M_{final}\} = \{M_{non-sway}\} + k \cdot \{M_{sway}\}$$

```
                ┌───────────────────────────────────────────────────────────┐
                │          TOTAL INDETERMINATE FRAME MOMENT SOLUTION        │
                │                   {M} = {M_0} + k · {M_1}                 │
                └─────────────────────────────┬─────────────────────────────┘
                                              │
               ┌──────────────────────────────┴──────────────────────────────┐
               ▼                                                             ▼
┌───────────────────────────────┐                             ┌───────────────────────────────┐
│     STAGE 1: NON-SWAY (M_0)   │                             │      STAGE 2: SWAY (M_1)      │
│ • Add imaginary lateral prop  │                             │ • Remove gravity loads.       │
│   at beam level to lock sway. │                             │ • Apply arbitrary sway Δ'     │
│ • Distribute gravity FEMs.    │                             │   generating FEM = 6EIΔ'/L².  │
│ • Compute artificial prop     │                             │ • Distribute sway moments.    │
│   holding reaction (R).       │                             │ • Compute sway shear (S).     │
└──────────────┬────────────────┘                             └──────────────┬────────────────┘
               │                                                             │
               └──────────────────────────────┬──────────────────────────────┘
                                              ▼
                              ┌───────────────────────────────┐
                              │ STAGE 3: SHEAR EQUILIBRIUM    │
                              │ Scale factor: k = R / S       │
                              │ Sum: M_final = M_0 + k · M_1  │
                              └───────────────────────────────┘
```

### 2.1 Key Parameters & Factors
* **Member Relative Stiffness ($K$):**
  * Far end fixed: $K = \frac{I}{L}$ (or $4EI/L$)
  * Far end pinned/hinged: $K = \frac{3}{4}\left(\frac{I}{L}\right)$
* **Distribution Factor ($DF$):**
  $$DF_{ij} = \frac{K_{ij}}{\sum K_{node}}$$
* **Fixed-End Moments for Sidesway ($FEM_{sway}$):**
  * When a column of height $L$ sways laterally by $\Delta'$ with both ends fixed:
    $$FEM = -\frac{6 E I \Delta'}{L^2}$$
  * When one end is hinged (pinned base):
    $$FEM = -\frac{3 E I \Delta'}{L^2}$$

---

## 3. PHILIPPINE STATUTORY & STRUCTURAL INTEGRITY MATRIX

| Code Authority | Section / Provision | Statutory Mandate | Impact on Frame Lateral Stability |
| :--- | :--- | :--- | :--- |
| **NSCP 2015** | Section 208.6.5 | Maximum Inelastic Inter-Storey Story Drift ($\Delta_M$): Shall not exceed **$0.020 h_{sx}$** for structures with fundamental period $T < 0.7\text{ s}$ and **$0.025 h_{sx}$** for $T \ge 0.7\text{ s}$. | Limits lateral sway under earthquake shaking to prevent architectural glass breakage. |
| **NSCP 2015** | Section 208.5.3 | Second-Order $P-\Delta$ Effects: Must be evaluated when the stability coefficient $\theta = \frac{P_x \Delta}{V_x h_{sx} C_d} > 0.10$. | Lateral sway induces additional secondary overturning moments from gravity columns. |
| **PD 1096 NBCP** | Rule VII Sec. 708 | Minimum Building Separation at Property Lines: Adjacent structures must be separated by minimum setback or seismic joint $\delta = \sqrt{\Delta_1^2 + \Delta_2^2}$ to prevent structural pounding. | Prevents high-rise buildings from colliding into adjacent buildings during sway. |

---

## 4. WORKED MATHEMATICAL DERIVATION & WORKED FRAME EXAMPLE

### 4.1 Unsymmetric Portal Frame with Sidesway
**Problem**: An architectural portal frame has column $AB$ (height $L_1 = 4.0\text{m}$), girder $BC$ (span $L_2 = 6.0\text{m}$), and column $CD$ (height $L_3 = 6.0\text{m}$). Both bases $A$ and $D$ are fully fixed. Moment of inertia $I$ is constant throughout. A vertical concentrated load $P = 120\text{ kN}$ acts at midspan of beam $BC$.

```
Step 1: Calculate Member Stiffnesses (K) and Distribution Factors (DF)
- Column AB (L = 4.0m): K_AB = I / 4 = 0.25 I
- Girder BC (L = 6.0m): K_BC = I / 6 = 0.1667 I
- Column CD (L = 6.0m): K_CD = I / 6 = 0.1667 I

At Joint B:
ΣK_B = K_BA + K_BC = 0.25 + 0.1667 = 0.4167 I
DF_BA = 0.25 / 0.4167 = 0.60
DF_BC = 0.1667 / 0.4167 = 0.40

At Joint C:
ΣK_C = K_CB + K_CD = 0.1667 + 0.1667 = 0.3334 I
DF_CB = 0.1667 / 0.3334 = 0.50
DF_CD = 0.1667 / 0.3334 = 0.50

At Fixed Bases A and D:
DF_AB = 0, DF_DC = 0.

Step 2: Non-Sway Fixed-End Moments (FEM) from Gravity Load P = 120 kN
FEM_BC = - (P · L) / 8 = - (120 × 6.0) / 8 = - 90.0 kN·m
FEM_CB = + (P · L) / 8 = + 90.0 kN·m
FEM_AB = FEM_BA = FEM_CD = FEM_DC = 0.

After standard Moment Distribution for Non-Sway Stage (M_0):
Final Non-Sway Moments:
M0_AB = -18.6 kN·m,  M0_BA = -37.2 kN·m
M0_BC = +37.2 kN·m,  M0_CB = +52.8 kN·m
M0_CD = -52.8 kN·m,  M0_DC = -26.4 kN·m

Step 3: Calculate Artificial Prop Reaction (R) for Non-Sway Stage
Horizontal Column Shears:
- Shear at base A: H_A = (M0_AB + M0_BA) / L_AB = (-18.6 - 37.2) / 4.0 = -55.8 / 4.0 = -13.95 kN (acting ➔ left)
- Shear at base D: H_D = (M0_CD + M0_DC) / L_CD = (-52.8 - 26.4) / 6.0 = -79.2 / 6.0 = -13.20 kN (acting ➔ left)
Artificial Restraining Force to prevent sway:
R = ΣH = H_A + H_D = -13.95 + (-13.20) = -27.15 kN (Prop force holding frame to the right = +27.15 kN).

Step 4: Sway Analysis Stage (M_1)
Impose arbitrary lateral sway Δ' to the right:
FEM_col = - 6 E I Δ' / L²
Ratio of Column Sway FEMs:
FEM_AB' / FEM_CD' = (1 / L_AB²) / (1 / L_CD²) = (1 / 4²) / (1 / 6²) = (1/16) / (1/36) = 36 / 16 = 2.25.
Assume FEM_CD' = -100 kN·m ➔ FEM_AB' = -225 kN·m. FEM_BC' = 0.

Distribute Sway Moments to obtain M_1:
M1_AB = -182.4 kN·m,  M1_BA = -140.2 kN·m
M1_BC = +140.2 kN·m,  M1_CB = +71.6 kN·m
M1_CD = -71.6 kN·m,   M1_DC = -85.8 kN·m

Sway Shear Force Generated (S):
H1_A = (-182.4 - 140.2) / 4.0 = -80.65 kN
H1_D = (-71.6 - 85.8) / 6.0 = -26.23 kN
Total Sway Shear S = -80.65 - 26.23 = -106.88 kN.

Step 5: Superposition Scale Factor (k) and Final Moments
k = R / S = (-27.15 kN) / (-106.88 kN) = + 0.2540.

Final Member Moments: M = M_0 + k · M_1
- M_AB = -18.6 + 0.2540(-182.4) = -18.6 - 46.3 = -64.9 kN·m
- M_BA = -37.2 + 0.2540(-140.2) = -37.2 - 35.6 = -72.8 kN·m
- M_BC = +37.2 + 0.2540(+140.2) = +37.2 + 35.6 = +72.8 kN·m (Equilibrium at Joint B verified!)
- M_CB = +52.8 + 0.2540(+71.6)  = +52.8 + 18.2 = +71.0 kN·m
- M_CD = -52.8 + 0.2540(-71.6)  = -52.8 - 18.2 = -71.0 kN·m (Equilibrium at Joint C verified!)
- M_DC = -26.4 + 0.2540(-85.8)  = -26.4 - 21.8 = -48.2 kN·m
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: ARCHITECTURAL OPENINGS & DRIFT              │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. SOFT STOREY & TORSIONAL IRREGULARITIES:                                         │
│    • High-rise commercial podiums with tall open ground floors (e.g. 6.0m lobby    │
│      vs 3.2m upper floors) exhibit drastic column stiffness reduction (K ∝ 1/L³). │
│    • Under earthquake lateral loads, 80% of total lateral sway concentrates in the │
│      ground floor, triggering catastrophic soft-storey collapse.                   │
│    ➔ Architectural Solution: Add reinforced concrete shear walls around elevator   │
│      cores or incorporate ductile perimeter chevron/K-braces.                      │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Sway Mechanism Identification):
A single-bay symmetric portal frame has identical column heights of $4.0\text{m}$ and a girder span of $8.0\text{m}$. A vertical point load of $100\text{ kN}$ is applied at a distance of $2.0\text{m}$ from the left column. Does the frame experience sidesway?
- A) No, because the frame geometry and column stiffnesses are perfectly symmetric.
- B) Yes, because unsymmetric gravity loading creates unequal fixed-end moments, producing unbalanced lateral column shears that push the frame laterally.
- C) No, because vertical gravity loads can never induce horizontal translations.
- D) Yes, but only if the foundations are pinned rather than fixed.
> **Correct Answer: B**  
> **Distractor Trap Analysis**:
> * Option A is the classic student exam trap: symmetry in geometry is insufficient. If loading is eccentric, $FEM_{left} \ne FEM_{right}$, resulting in $H_A + H_D \ne 0$. The frame must sway until lateral shear equilibrium is established.

---

## 7. ACADEMIC REFERENCES
1. Hibbeler, R. C. (2018). *Structural Analysis* (10th ed.). Pearson.
2. Kassimali, A. (2015). *Structural Analysis* (5th ed.). Cengage Learning.
3. Cross, H. (1930). *Analysis of Continuous Frames by Distributing Fixed-End Moments*. Proceedings of the American Society of Civil Engineers, 56(5), 919-928.
