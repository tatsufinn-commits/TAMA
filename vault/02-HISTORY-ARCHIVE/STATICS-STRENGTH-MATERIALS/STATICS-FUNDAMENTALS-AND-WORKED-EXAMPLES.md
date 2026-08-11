# STATICS FUNDAMENTALS — FORCES, EQUILIBRIUM, FREE-BODY DIAGRAMS & WORKED EXAMPLES
**Course:** STRUC1 / Statics (MEC30) — foundation for Theory of Structures, Steel/Timber, RCD
**Depth Level:** 3 (Functional — concepts + procedures + worked examples)
**High-Yield Score:** 9.0 / 10 (prerequisite for every structures calculation)
**Knowledge Value Score:** 88/100

---

## Source Information

- **Primary open academic sources (free, legitimately accessible):**
  - MIT OpenCourseWare — *Mechanics & Materials I* (2.001, Fall 2006), Part 1 "Statics – Elements of Equilibrium" lecture notes: https://ocw.mit.edu/courses/2-001-mechanics-materials-i-fall-2006/pages/lecture-notes/
  - MIT OCW — *Solid Mechanics* (1.050, Fall 2004), Ch. 2 "Static Equilibrium Force and Moment": https://ocw.mit.edu/courses/1-050-solid-mechanics-fall-2004/
  - MIT OCW — *Classical Mechanics* (8.01SC), Ch. 18 "Static Equilibrium": https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter18.pdf
- **Standard textbooks (registry):** Hibbeler, *Engineering Mechanics: Statics* (Pearson); Beer & Johnston, *Vector Mechanics for Statics* — used as conventions reference; not reproduced.
- **Related vault files:** `SHEAR-AND-MOMENT-EQUATIONS.md` (beam formulas), `MOMENT-DISTRIBUTION-AND-RCD.md` (advances from this foundation).
- **Confidence:** HIGH — standard, textbook-universal engineering fundamentals corroborated by multiple open academic sources (triangulation).

---

## 1. Core Definitions (Layer 2 — Fundamentals)

| Term | Definition | Notes |
|---|---|---|
| **Force** | A vector quantity: magnitude, direction, sense, line of action | Units: N, kN, kgf (1 kgf ≈ 9.81 N) |
| **Moment** | Tendency of a force to rotate a body about a point/axis | M = F × d (perpendicular distance); units N·m, kN·m |
| **Couple** | Two equal, opposite, parallel forces → pure rotation, no translation | Moment of couple is independent of reference point |
| **Free-Body Diagram (FBD)** | Isolate the body; draw ALL external forces acting on it | The single most important problem-solving tool |
| **Equilibrium** | Body at rest or constant velocity → net force = 0, net moment = 0 | ΣFx = 0, ΣFy = 0, ΣM = 0 (2D) |
| **Support reactions** | Forces/moments from supports: roller (1), pin/hinge (2), fixed (3) | Roller: normal only; Pin: 2 components; Fixed: 2 components + moment |
| **Resultant** | Single force equivalent to a system of forces | Vector sum |
| **Distributed load** | Load spread over length/area; replaced by equivalent point load at centroid | w (kN/m) → W = w·L at L/2 |
| **Statically determinate** | Reactions solvable from equilibrium equations alone | #unknowns ≤ #equations |
| **Statically indeterminate** | Requires compatibility/deformation equations | e.g., continuous beams |

## 2. The Equilibrium Equations (2D)

```
ΣFx = 0        (horizontal force balance)
ΣFy = 0        (vertical force balance)
ΣMA = 0        (moment balance about any point A)
```

**Method (the universal procedure):**
1. **Draw the FBD** — isolate the body; show all forces with correct sense; show dimensions.
2. **Choose a reference frame** (x-y axes).
3. **Resolve inclined forces** into components: Fx = F·cosθ, Fy = F·sinθ.
4. **Take moments about a point** that eliminates the most unknowns (usually a support) → solve one unknown.
5. **Apply ΣFx, ΣFy** → solve remaining reactions.
6. **Check** by taking moments about a second point (verification step — always do it).

**Common sign convention:** clockwise moments negative / counterclockwise positive (or the reverse — pick one and stay consistent; state it in your solution).

## 3. Worked Example 1 — Simply Supported Beam with UDL

**Problem:** Beam 6.0 m span, simply supported (pin at A, roller at B), carries UDL w = 4.0 kN/m. Find reactions.

**Step 1 — FBD:** Beam isolated; reactions: A (vertical + horizontal — horizontal = 0 since no horizontal loads), B (vertical). Total load W = w·L = 4.0 × 6.0 = **24 kN**, acting at midspan (3.0 m from either support).

**Step 2 — ΣFx = 0:** Ax = 0.

**Step 3 — Moments about A (eliminates Ay):**
ΣMA = 0: (24 kN)(3.0 m) − By(6.0 m) = 0 → By = 72/6 = **12 kN** ↑

**Step 4 — ΣFy = 0:** Ay + By − 24 = 0 → Ay = 24 − 12 = **12 kN** ↑

**Step 5 — Check:** moments about B: Ay(6.0) − 24(3.0) = 72 − 72 = 0 ✓

**Cross-check with vault formulas:** R = wL/2 = 4×6/2 = 12 kN ✓ (matches `SHEAR-AND-MOMENT-EQUATIONS.md`)

## 4. Worked Example 2 — Simply Supported Beam with Point Load (not at center)

**Problem:** Span 5.0 m; point load P = 30 kN at 2.0 m from left support A. Find reactions and maximum moment.

**FBD → ΣMA = 0:** (30)(2.0) − By(5.0) = 0 → By = **12 kN**
**ΣFy = 0:** Ay = 30 − 12 = **18 kN**
**Check (ΣMB):** Ay(5.0) − 30(3.0) = 90 − 90 = 0 ✓

**Maximum moment** occurs under the load (x = 2.0 m from A):
Mmax = Ay × 2.0 = 18 × 2.0 = **36 kN·m**
*(Note: NOT PL/4 = 37.5 — that formula is only for center load. Classic trap.)*

## 5. Worked Example 3 — Beam with Combined Loads (the "accumulate" problem)

**Problem:** Span 8.0 m; UDL 3.0 kN/m over entire span; point load 20 kN at 6.0 m from A.

**Total UDL:** W = 3.0 × 8.0 = 24 kN at 4.0 m from A.

**ΣMA = 0:** 24(4.0) + 20(6.0) − By(8.0) = 0 → 96 + 120 = 8By → By = **27 kN**
**ΣFy = 0:** Ay = 24 + 20 − 27 = **17 kN**
**Check (ΣMB):** 17(8) − 24(4) − 20(2) = 136 − 96 − 40 = 0 ✓

**Lesson:** treat each load separately — equivalent point loads at their own centroids; never combine positions.

## 6. Free-Body Diagram Rules (the #1 grading/ exam item)

1. **Isolate** — draw the body alone, no surroundings.
2. **All forces** — every force touching the body: applied loads, reactions, weights (at centroids), friction.
3. **Correct sense** — assume a direction; if answer is negative, the actual sense is opposite (this is NOT an error — state it).
4. **Dimensions** — needed for moment arms.
5. **No internal forces** — FBD shows external forces only.
6. **Include angle/location data** for inclined forces.

## 7. Common Mistakes (Layer 12 — exam traps)

| Mistake | Consequence | Fix |
|---|---|---|
| Forgetting to convert distributed load to point load at **centroid** | Wrong reactions | W = wL at L/2 (uniform) |
| Using PL/4 for an off-center load | Wrong Mmax (Example 2: 37.5 vs 36) | Mmax = reaction × distance to load; verify load position |
| Sign convention flip mid-solution | Inconsistent results | State convention; keep it throughout |
| Moment arm measured along the member instead of **perpendicular** | Wrong moments | d = perpendicular distance |
| Summing forces without resolving inclined loads | Wrong components | Fx = Fcosθ, Fy = Fsinθ |
| Skipping the equilibrium check | Undetected arithmetic error | Always re-moment about a 2nd point |
| kN vs N / m vs mm mixing | Factor-of-1000 errors | Convert everything to consistent units first |
| Confusing roller (1 reaction) with pin (2) | Too few/many unknowns | Know support types |

## 8. Course Connections (Layer 13)

```
STATICS (MEC30) → STRENGTH OF MATERIALS (MEC32: σ=P/A, τ=VQ/Ib)
   → THEORY OF STRUCTURES (CE131P: determinate/indeterminate, methods)
   → STEEL & TIMBER (CE134P) · RCD (CE133/191) · ARCHITECTURAL STRUCTURES
   → Studio structural integration (AD4–AD8) · Thesis structural concept
```

## 9. Prerequisite Chain (Layer 25)

```
BASIC MATH (algebra, trig) → VECTORS (resolution, addition)
   → FORCES & MOMENTS → EQUILIBRIUM & FBD → BEAM ANALYSIS → STRUCTURAL DESIGN
```
If a student struggles with beam analysis, drill vector resolution first — it is the hidden prerequisite.

## 10. Suggested Practice (Layer 10 — for future @examiner sets)

1. Reaction calculations: UDL only · point loads · combined · overhanging beams.
2. FBD drawing exercises (label every force).
3. Determine statical determinacy: classify beams/trusses (3m = r, etc.).
4. Convert: UDL → equivalent point load → reactions → check.
5. Inclined-load resolution: cable/strut problems.

## Provenance

- Compiled 2026-08-10 by the TAMA Knowledge Agent from standard statics fundamentals, triangulated against MIT OCW (2.001, 1.050, 8.01SC — links above). Worked examples are original standard textbook-type problems with full step-by-step solutions; formulas cross-checked against existing vault file `SHEAR-AND-MOMENT-EQUATIONS.md`. Confidence: HIGH.
