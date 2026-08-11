# CE131P / CE133: STRUCTURAL THEORY & REINFORCED CONCRETE DESIGN (RCD)
**Course:** Theory of Structures & Reinforced Concrete Design (Mapúa BS Architecture 3rd Year)  
**Academic Unit:** Mapúa School of Civil, Environmental & Geological Engineering / ARIDBE  
**PRC ALE Category:** Part 2: Building Technology, Structural Design & Engineering Mechanics (30% Weight)  
**High-Yield Exam Score:** 9.8 / 10 (Highest calculation weight in comprehensive exit exams)  
**Governing Authorities & Standards:** NSCP 2015 (Section 400 Concrete / Section 200 Loads), ACI 318-19, ACI 314R-16, ASTM A615 / PNS 49.

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 Ultimate Strength Design (USD) Philosophy
The design of reinforced concrete structures is governed by the **Strength Design Method** (formerly Ultimate Strength Design):
$$\text{Factored Nominal Strength } (\phi R_n) \ge \text{Factored Required Strength } (U \text{ or } R_u)$$
* Concrete is inherently weak in tension ($\approx 10\%$ of compressive strength).
* Reinforcing steel bars (rebar) are embedded in the tension zone to resist tensile flexure and shear.
* At the ultimate limit state, concrete crushes in the extreme compression fiber at a maximum usable strain $\epsilon_{cu} = 0.003$ while tension steel reaches plastic yield $\epsilon_s \ge \epsilon_y = f_y / E_s$.

```
                    CROSS SECTION                 STRAIN DIAGRAM               WHITNEY STRESS BLOCK
                 ┌─────────────────┐             ┌───────────────┐              ┌────────────────┐
                 │◄─────── b ──────►│             │               │              │◄── 0.85 f'c ──►│
                 │ ┌─────────────┐ │             │ εcu = 0.003   │              ┌────────────────┐ ▲
                 │ │             │ │             │\              │              │////////////////│ │ a = β1·c
                 │ │             │ │   c (N.A.)  │ \             │              └────────────────┘ ▼
                 │ │- - - - - - -│ │- - - - - - -│ - \ - - - - - ┼ - - - - - - - - - - - - - - - - 
                 │ │             │ │             │    \          │              │     (Tension   │
               d │ │             │ │             │     \         │              │      Cracked)  │
                 │ │   ●  ●  ●   │ │             │      \        │              │                │
                 │ └─────────────┘ │             │       \ εs    │              │  T = As·fy     │
                 └─────────────────┘             └───────────────┘              └───────►────────┘
                    As (Steel Area)                (Tensile Strain)               Internal Couple
```

### 1.2 Equivalent Rectangular Stress Block (Whitney Stress Block)
Rather than calculating complex non-linear parabolic concrete stresses, Charles S. Whitney formulated an equivalent rectangular block with uniform intensity $0.85 f'_c$ acting over depth $a = \beta_1 c$:
* **Stress Block Depth ($a$):** $a = \beta_1 \cdot c$
* **$\beta_1$ Factor per NSCP 2015 §422.2.2.4:**
  * For $17\text{ MPa} \le f'_c \le 28\text{ MPa}$: $\beta_1 = 0.85$
  * For $f'_c > 28\text{ MPa}$: $\beta_1 = 0.85 - 0.05 \left(\frac{f'_c - 28}{7}\right)$, with an absolute lower bound $\beta_1 \ge 0.65$.

---

## 2. TECHNICAL MECHANICS, ASSEMBLIES & DESIGN FORMULAS

### 2.1 Ultimate Gravity & Lateral Load Combinations (NSCP 2015 §203)
1. **Dead & Live Load Only (Basic Gravity):**
   $$U = 1.2 D + 1.6 L + 0.5 (L_r \text{ or } R)$$
2. **Wind Load Combinations:**
   $$U = 1.2 D + 1.0 W + 1.0 L + 0.5 (L_r \text{ or } R)$$
   $$U = 0.9 D + 1.0 W \quad (\text{Governs foundation overturning and roof uplift})$$
3. **Earthquake (Seismic) Combinations:**
   $$U = 1.2 D + 1.0 E + 1.0 L$$
   $$U = 0.9 D + 1.0 E \quad (\text{Seismic uplift check})$$

### 2.2 Singly Reinforced Beam Flexural Equations
* **Internal Compression Force in Concrete ($C$):** $C = 0.85 f'_c \cdot a \cdot b$
* **Internal Tension Force in Steel ($T$):** $T = A_s f_y$
* **Equilibrium of Internal Forces ($C = T$):**
  $$0.85 f'_c a b = A_s f_y \implies a = \frac{A_s f_y}{0.85 f'_c b}$$
* **Nominal Flexural Moment Capacity ($M_n$):**
  $$M_n = T \left(d - \frac{a}{2}\right) = A_s f_y \left(d - \frac{a}{2}\right)$$
* **Design Moment Capacity ($\phi M_n \ge M_u$):**
  $$M_u \le \phi M_n = \phi A_s f_y \left(d - \frac{a}{2}\right)$$
  *(where $\phi = 0.90$ for tension-controlled sections where $\epsilon_s \ge 0.005$)*.

### 2.3 Reinforcement Ratio ($\rho$) Limits (NSCP 2015 §409.6.1)
* **Actual Reinforcement Ratio:** $\rho = \frac{A_s}{b \cdot d}$
* **Minimum Steel Ratio ($\rho_{min}$):**
  $$\rho_{min} = \max\left( \frac{0.25\sqrt{f'_c}}{f_y}, \frac{1.4}{f_y} \right)$$
* **Maximum Steel Ratio ($\rho_{max}$ for ductile tension failure $\epsilon_t \ge 0.004$):**
  $$\rho_{max} = \frac{0.85 f'_c \beta_1}{f_y} \left( \frac{3}{7} \right) \quad (\text{Ensures ductile under-reinforced behavior})$$

---

## 3. PHILIPPINE STATUTORY & REGULATORY COMPLIANCE MATRIX

| Code Authority | Section / Provision | Statutory Mandate | Architectural & Structural Rule |
| :--- | :--- | :--- | :--- |
| **NSCP 2015** | Section 420.6.1.3 | Minimum clear concrete protective cover for non-prestressed cast-in-place beams/columns: **$40\text{ mm}$** (not exposed to weather); **$50\text{ mm}$** (exposed to earth/weather for $\le \phi 16$ bars); **$75\text{ mm}$** (cast directly against earth). | Governs effective depth $d = h - \text{cover} - d_{stirrup} - d_b/2$. |
| **NSCP 2015** | Section 425.2.1 | Minimum clear spacing between parallel rebar in a horizontal layer: $\max(25\text{ mm}, d_b, \frac{4}{3}d_{agg})$. | Prohibits cramming too many rebar in narrow beam widths ($b$). |
| **NSCP 2015** | Section 409.7.6 | Maximum Stirrup Spacing for Shear: $s_{max} = \min(d/2, 600\text{ mm})$ when $V_s \le 0.33\sqrt{f'_c}b_w d$. | Confines core concrete and prevents diagonal shear failure. |
| **PD 1096 NBCP** | Rule XII Sec. 1207 | All structural reinforced concrete members must maintain minimum 2-hour to 4-hour fire ratings per occupancy type. | Governs minimum web thickness $b_w \ge 200\text{ mm}$. |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & ENGINEERING CALCULATIONS

### 4.1 Complete Design of Singly Reinforced RCD Rectangular Beam
**Problem**: An architectural classroom floor beam spans $L = 6.00\text{m}$ (simply supported).  
- Dead Load ($D$) = $15.0\text{ kN/m}$ (including estimated beam self-weight).  
- Live Load ($L$) = $12.0\text{ kN/m}$ (Classroom occupancy per NSCP Table 205-1).  
- Material Strengths: $f'_c = 28\text{ MPa}$ ($\beta_1 = 0.85$), Grade 60 Rebar $f_y = 414\text{ MPa}$.  
- Beam cross-section dimensions: Width $b = 300\text{ mm}$, Total Height $h = 500\text{ mm}$. Clear cover = $40\text{ mm}$, stirrup = $10\text{mm}\phi$, main rebar = $20\text{mm}\phi$.

```
Step 1: Compute Factored Ultimate Load (w_u) & Factored Moment (M_u)
w_u = 1.2 D + 1.6 L = 1.2(15.0) + 1.6(12.0) = 18.0 + 19.2 = 37.2 kN/m.
M_u = (w_u · L²) / 8 = (37.2 × 6.0²) / 8 = (37.2 × 36.0) / 8 = 167.4 kN·m = 167.4 × 10⁶ N·mm.

Step 2: Compute Effective Depth (d)
d = h - cover - d_stirrup - (d_bar / 2)
d = 500 mm - 40 mm - 10 mm - (20 mm / 2) = 500 - 60 = 440 mm.

Step 3: Check Minimum & Maximum Reinforcement Ratios
ρ_min = max[ (0.25√28 / 414), (1.4 / 414) ]
      = max[ (0.25 × 5.2915 / 414), (0.00338) ]
      = max[ 0.00319, 0.00338 ] = 0.00338.

ρ_max = (0.85 × 28 × 0.85 / 414) × (3 / 7) = (20.23 / 414) × 0.42857 = 0.04886 × 0.42857 = 0.02094.

Step 4: Calculate Required Steel Area (A_s)
Using the Design Flexure Formula:
M_u = φ · A_s · f_y · [ d - (A_s · f_y) / (2 × 0.85 · f'_c · b) ]
With φ = 0.90:
167.4 × 10⁶ = 0.90 × A_s × 414 × [ 440 - (414 A_s) / (1.7 × 28 × 300) ]
167.4 × 10⁶ = 372.6 A_s × [ 440 - (414 A_s / 14,280) ]
167.4 × 10⁶ = 163,944 A_s - 10.801 (A_s)²

Rearranging into standard quadratic form: 10.801 (A_s)² - 163,944 A_s + 167,400,000 = 0
Divide by 10.801: (A_s)² - 15,178.6 A_s + 15,498,565 = 0

Solving via Quadratic Equation:
A_s = [ 15,178.6 - √( (15,178.6)² - 4(1)(15,498,565) ) ] / 2
A_s = [ 15,178.6 - √( 230,389,900 - 61,994,260 ) ] / 2
A_s = [ 15,178.6 - √( 168,395,640 ) ] / 2
A_s = [ 15,178.6 - 12,976.7 ] / 2 = 2,201.9 / 2 = 1,100.95 mm².

Step 5: Check Reinforcement Ratio
ρ_actual = A_s / (b · d) = 1100.95 / (300 × 440) = 1100.95 / 132,000 = 0.00834.
Check limits: ρ_min (0.00338) < ρ_actual (0.00834) < ρ_max (0.02094) ➔ OK! Ductile Tension Failure.

Step 6: Select Rebar Count (20mmØ PNS 49 Bars, A_bar = π/4 × 20² = 314.16 mm²)
Number of bars N = A_s / A_bar = 1100.95 / 314.16 = 3.50 bars ➔ Provide 4 - 20mmØ Bars in single layer!
Provided A_s = 4 × 314.16 = 1,256.6 mm².

Step 7: Check Beam Width Clearance for 4 - 20mmØ Bars
Required Width = 2(cover) + 2(stirrup) + 4(d_bar) + 3(clear spacing s_min ≥ 25mm)
Required b_min = 2(40) + 2(10) + 4(20) + 3(25) = 80 + 20 + 80 + 75 = 255 mm.
Since actual b = 300 mm > 255 mm ➔ 4 bars fit comfortably in 1 horizontal layer!
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: STRUCTURAL GRID SCHEMATICS                  │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. PRELIMINARY SIZING HEURISTICS FOR ARCHITECTURAL PLATES:                         │
│    • Beam Depth (h): h ≈ L / 12 to L / 16 (e.g. 6.0m span ➔ 400mm to 500mm depth).│
│    • Beam Width (b): b ≈ 0.5h to 0.65h (e.g. 500mm depth ➔ 250mm to 300mm width). │
│    • Girder Depth (Primary Load Path): h ≈ L / 10 to L / 12 (Heavier than beams). │
│    • Column Dimension (Low-Rise 1-3 Storeys): Minimum 300mm × 300mm or 400mmØ.     │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 2. MEPFS CEILING DUCT COORDINATION TRAPS:                                          │
│    • Never route a 300mm HVAC supply duct THROUGH a structural beam without        │
│      sleeved web openings positioned in the middle third of span (M ≈ 0, V ≈ low). │
│    • Beam drops reduce clear ceiling height: 3.0m floor-to-floor − 0.5m beam drop   │
│      − 0.3m ceiling space = 2.20m clear ceiling (Violates 2.40m min ceiling rule!).│
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Flexural Failure Mode & Over-Reinforcement):
Why does NSCP 2015 Section 409.6.1 enforce a maximum reinforcement limit ($\rho_{max}$) on reinforced concrete beams?
- A) To prevent economic waste of expensive steel rebar.
- B) To ensure the steel yields in tension before the concrete crushes, providing visible warning of impending failure.
- C) To prevent concrete from cracking under standard service loads.
- D) To reduce the diagonal tension shear forces at the beam supports.
> **Correct Answer: B**  
> **Distractor Trap Analysis**:
> * If a beam is over-reinforced ($\rho > \rho_{max}$), the concrete reaches its crushing strain ($\epsilon_{cu} = 0.003$) while the steel is still elastic. This results in **brittle, sudden, catastrophic compression failure** with zero warning (no cracks or deflections). Under-reinforced beams guarantee ductile yielding (yielding rebar produces wide visible cracks and large deflections, warning occupants to evacuate).

---

## 7. ACADEMIC REFERENCES & STATUTORY SOURCES
1. Association of Structural Engineers of the Philippines (ASEP). (2015). *National Structural Code of the Philippines (NSCP 2015, Vol. 1: Buildings and Vertical Structures)* (7th ed.). ASEP.
2. American Concrete Institute (ACI). (2019). *Building Code Requirements for Structural Concrete (ACI 318-19)*. ACI Committee 318.
3. Nilson, A. H., Darwin, D., & Dolan, C. W. (2010). *Design of Concrete Structures* (14th ed.). McGraw-Hill.
4. McCormac, J. C., & Brown, R. H. (2015). *Design of Reinforced Concrete* (10th ed.). John Wiley & Sons.
