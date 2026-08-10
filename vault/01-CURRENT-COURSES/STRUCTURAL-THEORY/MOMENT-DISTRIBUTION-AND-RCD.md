# STRUCTURAL THEORY & RCD — MOMENT DISTRIBUTION & BEAM SIZING
**Course:** STRUC3 / RCD (Mapúa BS Architecture 3rd Year)  
**High-Yield Score:** 9.5 / 10  

---

## 1. NSCP 2015 FACTORED ULTIMATE LOAD COMBINATIONS

* **Basic Ultimate Gravity Factored Load ($W_u$):**
  $$W_u = 1.2 D + 1.6 L$$
  * $D =$ Dead Load (Self-weight, finishes, partition walls).
  * $L =$ Live Load (Occupants, movable furniture per occupancy table).

---

## 2. SIMPLY SUPPORTED vs CONTINUOUS BEAM BENDING MOMENTS

* **Simply Supported Uniformly Distributed Load:**
  $$M_u = \frac{W_u \cdot L^2}{8}$$
* **Continuous Beam Intermediate Support Negative Moment (ACI Coefficient):**
  $$M_{u,support} = -\frac{W_u \cdot L_n^2}{10} \quad (\text{or } -wL^2/11 \text{ depending on end restraint})$$

---

## 3. REINFORCED CONCRETE (RCD) SINGLY REINFORCED BEAM DESIGN

* **Nominal Bending Strength ($M_n$):**
  $$M_u \le \phi M_n = \phi A_s f_y \left(d - \frac{a}{2}\right)$$
  * $\phi = 0.90$ (Tension-controlled flexural reduction factor).
  * $A_s =$ Area of tension reinforcement steel ($mm^2$).
  * $f_y =$ Yield strength of steel (Grade 40 = $275\text{ MPa}$; Grade 60 = $414\text{ MPa}$).
  * $d =$ Effective depth (Distance from extreme compression fiber to centroid of tension steel).
  * $a = \frac{A_s f_y}{0.85 f'_c b} =$ Equivalent Whitney stress block depth.
