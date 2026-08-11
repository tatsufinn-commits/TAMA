# STATICS & STRENGTH OF MATERIALS — EQUILIBRIUM, SHEAR & MOMENT FORMULAS
**Course:** STRUC1 / STATICS (Foundation Archive)  
**High-Yield Score:** 9.2 / 10  

---

## 1. STATIC EQUILIBRIUM EQUATIONS

For any 2D planar structural system in static equilibrium:
$$\sum F_x = 0, \quad \sum F_y = 0, \quad \sum M_A = 0$$

---

## 2. STANDARD BEAM SHEAR & MOMENT FORMULAS

### Simply Supported Beam with Uniformly Distributed Load ($w$):
* **Support Reactions:**
  $$R_A = R_B = \frac{w L}{2}$$
* **Maximum Shear Force ($V_{max}$):**
  $$V_{max} = \frac{w L}{2} \quad (\text{at supports } x = 0, x = L)$$
* **Maximum Bending Moment ($M_{max}$):**
  $$M_{max} = \frac{w L^2}{8} \quad (\text{at midspan } x = L/2)$$

### Simply Supported Beam with Concentrated Point Load ($P$ at center):
* **Support Reactions:**
  $$R_A = R_B = \frac{P}{2}$$
* **Maximum Bending Moment ($M_{max}$):**
  $$M_{max} = \frac{P L}{4} \quad (\text{at center } x = L/2)$$

---

## 3. SECTION PROPERTIES & FLEXURAL STRESS FORMULA

* **Flexural Bending Stress ($\sigma$):**
  $$\sigma = \frac{M \cdot c}{I} = \frac{M}{S}$$
  * $M =$ Bending moment.
  * $c =$ Distance from neutral axis to extreme fiber ($h/2$ for rectangle).
  * $I =$ Moment of inertia about neutral axis ($I = \frac{b h^3}{12}$ for rectangle).
  * $S =$ Section Modulus ($S = \frac{I}{c} = \frac{b h^2}{6}$ for rectangle).
