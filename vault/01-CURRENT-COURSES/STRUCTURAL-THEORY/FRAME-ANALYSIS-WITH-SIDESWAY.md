# FRAME ANALYSIS WITH SIDESWAY — MOMENT DISTRIBUTION FOR RIGID FRAMES (Level 3)
**Course:** CE131P Theory of Structures (advanced) · STRUCTURAL-THEORY · @mentor jurisdiction
**Depth Level:** 3 (Functional — procedure + worked framework)
**High-Yield Score:** 8.0 / 10 (extends moment distribution; appears in advanced deptals)
**Knowledge Value Score:** 84/100

---

## Source Information

- **Sources (open academic lecture notes, labeled Tier 2–3):**
  - Vemu Institute — *Structural Analysis-II* lecture notes (PDF): moment distribution for frames with sidesway — non-sway analysis → sway correction procedure with proportioning.
  - IARE — *Structural Analysis II* lecture notes: same method, two worked frames.
  - NPTEL/CE IIT Kharagpur — *Module 3: Analysis of Statically Indeterminate Structures* (m3l21): the theory of sidesway — why unsymmetric frames/loading translate laterally; the two-step superposition (non-sway + k×sway).
- **Vault links:** `MOMENT-DISTRIBUTION-WORKED-EXAMPLE.md` (prerequisite — the beam version), `STRENGTH-OF-MATERIALS-AND-TRUSS-ANALYSIS.md`, `COMMON-MISTAKES-AND-EXAM-TRAPS.md`.
- **Confidence:** HIGH — standard structural-analysis methodology, corroborated across three independent academic sources.

---

## 1. WHY SIDESWAY HAPPENS (the concept — examinable)

A rigid frame **translates laterally (sways)** when it is:
- **Geometrically unsymmetric** (columns of different lengths/I), or
- **Loaded unsymmetrically** (horizontal loads, or asymmetric vertical loads), or
- **Supported unsymmetrically**.

**Detection rule:** if the frame is symmetric in geometry AND loading, no sidesway. Otherwise, sidesway must be considered (the joints translate by Δ; member rotation ψ enters the analysis).

**Key idea:** for a sway frame there are TWO unknowns per joint: rotation θ AND translation Δ (member rotation ψ). Moment distribution handles this by **superposition**:
```
FINAL = (NON-SWAY analysis) + k × (SWAY analysis for an arbitrary Δ')
```
where k is a proportioning factor found from horizontal force equilibrium of the columns (the "shear equation").

## 2. THE PROCEDURE (5 steps — memorize)

**Step 1 — Non-sway analysis:**
- Add a **fictitious horizontal restraint** (roller) preventing translation.
- Compute FEMs from loads; run standard moment distribution (joints rotate, frame cannot sway).
- From the column free-body diagrams, compute the **restraint force R** required to hold the frame (ΣFx on column FBDs — the shear at column bases summed).

**Step 2 — Sway analysis (arbitrary Δ′):**
- Remove the restraint; apply an **arbitrary horizontal force R′** that causes a chosen sidesway Δ′.
- For columns fixed at both ends: **FEM due to sidesway = 6EI·Δ′/L²** (both ends fixed) or **3EI·Δ′/L²** (one end pinned). (Verify sign conventions per source.)
- Distribute these sway FEMs (standard distribution) → get sway moments.

**Step 3 — Proportion (the shear equation):**
- Compute the base shears in the sway analysis; find the force R′ they represent.
- The true sway corresponds to R (from Step 1): **k = R / R′**.
- Multiply all sway moments by k.

**Step 4 — Superpose:**
```
Final moments = non-sway moments + k × (sway moments)
```

**Step 5 — Verify:**
- Joint equilibrium (ΣM = 0 at each joint) ✓
- Whole-frame horizontal equilibrium (ΣFx = 0 — the shear equation closes) ✓
- Sketch the deflected shape (columns in double curvature — good exam practice).

## 3. WORKED EXAMPLE (framework — two-bay/one-storey rigid frame)

**Problem:** Single-storey frame ABCD (columns AB, CD; beam BC). Column heights L, constant EI; **unsymmetric horizontal load** → frame sways.

**Non-sway stage:**
- Hold at C with a roller; FEMs from the horizontal load case (columns in single curvature under restraint → FEM = PL/8 style values or 0 depending on load).
- Distribute → balanced moments M′_AB, M′_BA, M′_BC, M′_CB, M′_CD, M′_DC.
- Column FBDs → base shears → **R = (sum of column shears)** (e.g., R = 1.73 − 0.82 = 0.91 kN in the Vemu example).

**Sway stage:**
- Assume Δ′ such that FEM_column = 6EIΔ′/L² (both ends fixed).
- Distribute sway moments → find base shears → **R′ = 56 kN** (Vemu example value, illustrative).
- **k = R/R′ = 0.91/56 ≈ 0.0163.**

**Final:** M_final = M_non-sway + 0.0163 × M_sway (per member end). Add → BMD.

*Note: values are illustrative from the cited lecture example; always re-derive per problem.*

## 4. COMMON MISTAKES

| Trap | Fix |
|---|---|
| Forgetting to check whether the frame sways | Symmetric + symmetric loading = no sway; test first |
| Sway FEM wrong (6EIΔ/L² vs 3EIΔ/L²) | Both-ends-fixed: 6; one-end-pinned: 3 |
| Applying k to non-sway moments | k scales ONLY the sway moments |
| Sign convention drift in the shear equation | State convention; ΣFx across all column bases must close |
| Using beam CO factors in frames | Same ½ carry-over, but stiffness 4EI/L vs 3EI/L depends on far-end support — check each member |
| Skipping the verification | Always joint + whole-frame equilibrium checks |

## 5. COURSE CONNECTIONS

```
MOMENT DISTRIBUTION (beams) → FRAMES WITH SIDESWAY (this file)
   → STEEL/TIMBER design (moment frames = lateral systems)
   → SEISMIC design context (PH: NSCP lateral loads — frames resist earthquakes)
   → Studio: moment-frame vs shear-wall selection (lateral stability)
```
**PH relevance:** sidesway ≈ lateral drift under wind/earthquake — the NSCP seismic design story. Understanding sway = understanding why moment frames need stiffness (drift control) in PH high-seismicity design.

## 6. SUGGESTED PRACTICE

1. Identify sway/no-sway for 4 frame sketches (symmetry tests).
2. One-storey frame, unsymmetric load — full non-sway distribution.
3. Sway stage with 6EIΔ/L² FEMs — full distribution.
4. Proportion + superpose + verify (equilibrium + deflected shape).
5. Compare: braced (no-sway) vs unbraced (sway) frame — which carries lateral load better? (conceptual essay)

## Provenance
- Compiled 2026-08-10 from standard structural-analysis methodology triangulated across Vemu Institute, IARE, and NPTEL/IIT Kharagpur lecture notes (open academic, labeled). Worked values are illustrative from the cited examples. Confidence: HIGH (method), MEDIUM (numerical values — re-derive per problem).
