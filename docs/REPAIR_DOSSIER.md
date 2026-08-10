# 📋 ACADEMIC REPAIR DOSSIER & COMMON EXAM TRAPS (`REPAIR_DOSSIER.md`)
## Historical Analysis of Mapúa Departmental & ALE Exam Traps
**Target System:** TAMAintegration (Mapúa BS Architecture Academic Hub)  

---

# 1. THE TOP 5 CALCULATION TRAPS IN MAPÚA ARCHITECTURE EXAMS

### Trap 1: Confusing Total Open Space (TOSL) with Unpaved Open Space (USA)
* **The Error:** Subtracting only the unpaved landscaped area (USA) when computing AMBF, forgetting the impervious open space (ISA).
* **The Law:** $\text{TOSL} = \text{USA} + \text{ISA}$. $\text{AMBF} = \text{TLA} - \text{TOSL}$.

---

### Trap 2: Neglecting the Road Right-of-Way (RROW) Angular Projection
* **The Error:** Calculating maximum building height solely from FLAR without applying the $1:1.75$ angular plane projection from the opposite edge of the RROW per NBCP Section 707.

---

### Trap 3: Mixing Fire Code (RA 9514) and Building Code (PD 1096) Egress Widths
* **The Error:** Using NBCP $1.10\text{m}$ stair minimum when Fire Code Section 10.2.5.4 requires $1.12\text{m}$ (or $0.91\text{m}$ for $<50$ occupants).

---

### Trap 4: Forgetting the 1:12 BP 344 Maximum Ramp Slope
* **The Error:** Specifying $1:10$ or $1:8$ ramps for accessible entrances. BP 344 strictly caps pedestrian accessibility ramps at $1:12$ ($8.33\%$) with a $1.50\text{m}$ level landing every $6.00\text{m}$ of horizontal run.

---

### Trap 5: Factoring Load Combinations in NSCP Singly Reinforced Beams
* **The Error:** Using unfactored dead and live loads ($D + L$) instead of ultimate factored load combination $W_u = 1.2D + 1.6L$ when computing required bending moment $M_u$.
