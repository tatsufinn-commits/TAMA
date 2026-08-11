# REINFORCED CONCRETE DESIGN — SINGLY REINFORCED BEAM: PROCEDURE + WORKED EXAMPLES
**Course:** CE133/CE191 RC Design (structural cluster) · STRUCTURAL-THEORY · @mentor jurisdiction
**Depth Level:** 3 (Functional — procedure + 2 fully worked examples + traps)
**High-Yield Score:** 8.8 / 10 (RC beam design is the flagship calculation topic)
**Knowledge Value Score:** 88/100
**Status:** VERIFIED (standard NSCP/ACI strength-design method, multi-source)

---

## Source Information
- **Sources (labeled):**
  - RHC Engineering — "Concrete Beam Analysis and Design per ACI 318-19M" worked example (Tier 3): load combos, Mu, As steps.
  - Jonathan Ochshorn — *Structural Elements* open textbook, Ch.5 beams (jonochshorn.com, Tier 2): Mn = ρfybd²[1−0.59ρfy/fc'], φ=0.9 bending.
  - RCD lecture notes (Scribd mirrors, Tier 3-4 labeled): NSCP/ACI assumptions, strain limits, worked φMn values.
  - accisnet worked example (Tier 3): wu = 1.2D + 1.6L → Mu = wL²/8 → As.
- **Vault links:** `MOMENT-DISTRIBUTION-AND-RCD.md` (existing — load combos, ACI coefficients), `STRENGTH-OF-MATERIALS-AND-TRUSS-ANALYSIS.md` (stress foundations), `FRAME-ANALYSIS-WITH-SIDESWAY.md`, `COMMON-MISTAKES-AND-EXAM-TRAPS.md`.
- **Confidence:** HIGH — the strength-design method is universal (NSCP follows ACI 318); numeric examples are self-consistent.

---

## 1. THE STRENGTH-DESIGN METHOD (NSCP/ACI 318 — the design philosophy)

**Design strength ≥ Required strength:** φMn ≥ Mu

**Load combinations (factored):**
- Gravity: **Wu = 1.2D + 1.6L** (NSCP/ACI basic; verify other combos for wind/seismic)
- Mu from structural analysis: SSB-UDL → Mu = wu·L²/8; continuous → ACI coefficients (−wuLn²/10, −/11, +/16 etc. — existing vault file).

**Section assumptions (VERIFIED — NSCP/ACI):**
- Strain in concrete at failure: εcu = 0.003 (extreme compression fiber).
- Equivalent rectangular stress block: a = β1·c; 0.85fc' intensity; β1 = 0.85 for fc' ≤ 28 MPa, reduced 0.05 per 7 MPa above (min 0.65).
- Steel yields (tension-controlled): net tensile strain εt ≥ 0.005 → **φ = 0.90** (bending); compression-controlled φ = 0.65; transition zone interpolates.
- Tension steel assumed to yield (fs = fy) for under-reinforced design.

**Core equations:**
```
C = 0.85·fc'·a·b          (compression resultant)
T = As·fy                 (tension resultant)
a = As·fy / (0.85·fc'·b)  (equilibrium: C = T)
Mn = As·fy·(d − a/2)      (nominal moment)
Mu = φ·Mn = φ·As·fy·(d − a/2)
```
Alternative compact form: **Mn = ρ·fy·b·d²·[1 − 0.59·ρ·fy/fc']** where ρ = As/(b·d).

**Steel ratio limits (VERIFIED — ACI):**
- ρmax ≈ 0.75·ρb (balanced) historically; modern ACI: εt ≥ 0.005 (tension-controlled) governs; ρmin = 0.25·√fc'/fy (≥ 1.4/fy) for beams.

## 2. WORKED EXAMPLE 1 — ANALYSIS (compute φMn of a given section)

**Given:** b = 300 mm, d = 510 mm, As = 3-25 mm bars (As = 3 × 491 = 1473 mm²), fc' = 28 MPa, fy = 420 MPa.

**Step 1 — a:**
a = As·fy/(0.85·fc'·b) = 1473(420)/(0.85·28·300) = 618,660 / 7,140 = **86.6 mm**

**Step 2 — Mn:**
Mn = As·fy·(d − a/2) = 1473(420)(510 − 43.3) = 618,660 × 466.7 = 288.7×10⁶ N·mm = **288.7 kN·m**

**Step 3 — φMn:**
Check tension-controlled: c = a/β1 = 86.6/0.85 = 101.9 mm; εt = 0.003(d−c)/c = 0.003(510−101.9)/101.9 = 0.012 ≥ 0.005 ✓ → φ = 0.90
φMn = 0.90 × 288.7 = **259.8 kN·m**

**Answer:** The section's design moment capacity is 259.8 kN·m.

## 3. WORKED EXAMPLE 2 — DESIGN (size steel for a given Mu)

**Given:** SSB span 6.0 m, wD = 10 kN/m (incl. self-weight), wL = 15 kN/m. Beam b = 300 mm, d = 500 mm, fc' = 28 MPa, fy = 420 MPa. Find As.

**Step 1 — Factored load:**
wu = 1.2(10) + 1.6(15) = 12 + 24 = **36 kN/m**

**Step 2 — Ultimate moment:**
Mu = wu·L²/8 = 36(36)/8 = **162 kN·m**

**Step 3 — Required steel (iterate):**
Assume φ = 0.90; use Mu = φ·As·fy·(d − a/2) with a = As·fy/(0.85·fc'·b):
- Try As = 900 mm²: a = 900(420)/(0.85·28·300) = 378,000/7,140 = 52.9 mm; φMn = 0.90(900)(420)(500 − 26.5) = 340,200 × 473.5 = 161.1×10⁶ N·mm = **161.1 kN·m** — just short of 162.
- Try As = 950 mm²: a = 950(420)/7,140 = 55.9 mm; φMn = 0.90(950)(420)(500 − 27.9) = 359,100 × 472.1 = 169.5 kN·m ✓ **OK**

**Step 4 — Check limits:**
ρ = 950/(300·500) = 0.00633; ρmin = 0.25√28/420 = 0.00315 (OK); tension-controlled: c = 55.9/0.85 = 65.8; εt = 0.003(500−65.8)/65.8 = 0.0198 ≥ 0.005 ✓ (φ = 0.90 valid)

**Step 5 — Select bars:** 3-20 mm (As = 942 mm², close) or 2-25 mm (982 mm²) → use **3-20 mm (As = 942 mm² ≈ required)**.

**Answer:** Provide ~950 mm² (e.g., 3-20 mm bars); check spacing/cover per code.

## 4. COMMON MISTAKES (Layer 12)
| Trap | Fix |
|---|---|
| Using wu = D + L (unfactored) | Always factor: 1.2D + 1.6L |
| a = β1·c confusion | a is the stress-block depth; β1 relates it to c |
| φ = 1.0 | 0.90 bending (tension-controlled); lower for compression |
| kN·m vs N·mm (10⁶ factor) | Convert before substituting |
| Skipping the εt/φ check | Verify tension-controlled before using 0.90 |
| As below ρmin | ρmin = 0.25√fc'/fy (≥1.4/fy) |
| Using Mn as design capacity | Design uses φMn |
| Forgetting d = effective depth (to bar centroid), not total h | d = h − cover − stirrup − bar/2 |

## 5. CROSS-COURSE CONNECTIONS
```
STATICS (reactions) → STRENGTH (stress) → THEORY OF STRUCTURES (moments) → RCD (this file)
→ BT3-4 (concrete construction) → STUDIO (beam sizing in design) → THESIS (structural concept)
```
**PH relevance:** NSCP (verify current edition) governs; seismic detailing (confinement, ties) is beyond this basic flexure file — label advanced.

## 6. SUGGESTED PRACTICE
1. Analysis: 3 given sections → compute φMn (vary fc', fy, As).
2. Design: 3 SSB cases → As (vary spans/loads).
3. Check ρmin/ρmax and εt for each.
4. Continuous beam: use ACI coefficients (existing vault file) → design midspan & support steel.

## Provenance
Compiled 2026-08-10 from standard NSCP/ACI 318 strength-design methodology, triangulated with open sources (Ochshorn open textbook; RHC ACI-318-19M example; RCD lecture notes — labeled). Numeric examples self-consistent and cross-checked. Confidence: HIGH (method), MEDIUM (specific code edition details — verify current NSCP).
