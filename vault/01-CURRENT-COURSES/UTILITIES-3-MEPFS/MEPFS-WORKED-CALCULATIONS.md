# MEPFS WORKED CALCULATIONS — LIGHTING, ACOUSTICS, PLUMBING, ELECTRICAL (Level 3 push)
**Course:** AR155-1 BU3 (Acoustics & Lighting) · AR153P BU1 (Plumbing) · BU2 (Electrical) · UTILITIES-3-MEPFS
**Depth Level:** 3 (Functional — formulas + worked examples + traps)
**High-Yield Score:** 8.8 / 10 (calculation items appear in deptals/ALE utilities cluster)
**Knowledge Value Score:** 85/100

---

## Source Information

- **Open/standard references (free, legitimate):**
  - Lighting: lumen method per standard IES practice; open lecture decks (e.g., "Electrical lighting design and calculations," Slideshare — Tier 3) and elecalculator lighting guide (Tier 3) corroborate formulas: N = (E × A) / (lumens/lamp × CU × LLF)
  - Acoustics: Sabine RT = 0.161 V/A (SI) — standard, in every acoustics text (Egan; Long; vault file `CENTRAL-HVAC-AND-ACOUSTICS.md`)
  - Plumbing: fixture-unit method per the Revised National Plumbing Code (registry — code itself is paid; the method is standard practice)
  - Electrical: PEC branch-circuit/load computation basics (registry — code paid; fundamentals standard)
- **Vault files:** `CENTRAL-HVAC-AND-ACOUSTICS.md`, `PLUMBING-AND-ELECTRICAL-SYSTEMS.md`, `COMMON-MISTAKES-AND-EXAM-TRAPS.md` (U-series).
- **Confidence:** HIGH for standard formulas/units (triangulated across sources); MEDIUM for any PH-code-specific factors (verify against current code editions).

---

## 1. LIGHTING — Lumen Method (Worked Example)

**Standard formulas:**
```
E = Φ / A            (illuminance lux = lumens ÷ area m²)
N = (E × A) / (Φ_lamp × CU × LLF)     (number of luminaires)
   E  = required illuminance (lux)
   A  = room area (m²)
   Φ_lamp = lumens per lamp
   CU = coefficient of utilization (0.5–0.8 typical; room-dependent)
   LLF = light loss factor (0.7–0.8 typical)
1 fc = 10.76 lux ; 1 lux = 0.0929 fc
```

**Worked example:** Office 9 m × 8 m (= 72 m²) requires 550 lux at bench level. Fixture: 4× fluorescent lamps at 2,500 lumens each (10,000 lm/fixture). CU = 0.6, LLF = 0.7.

```
N = (550 × 72) / (10,000 × 0.6 × 0.7)
  = 39,600 / 4,200
  = 9.43  →  round UP to 10 luminaires
```
**Trap:** rounding DOWN to 9 under-illuminates (never below code minimum); forgetting LLF/CU overestimates performance; mixing lux (m²) with footcandles (ft²).

**Quick sanity:** 10 fixtures × 10,000 lm = 100,000 lm ÷ 72 m² = 1,389 lm/m² raw → × CU×LLF (0.42) = 583 lux ✓ (checks)

## 2. ACOUSTICS — Sabine Reverberation Time (Worked Example)

**Standard formula (SI):**
```
RT60 = 0.161 × V / A
   V = room volume (m³)
   A = total absorption = Σ (α_i × S_i)  (m² sabins)
   α = absorption coefficient of surface i; S = area (m²)
```

**Worked example:** Classroom 12 m × 8 m × 3 m (V = 288 m³). Walls 120 m² total (α=0.15 plaster), ceiling 96 m² (α=0.05 painted concrete), floor 96 m² (α=0.10 vinyl), plus 20 m² of acoustic panels (α=0.80).

```
A = (120×0.15) + (96×0.05) + (96×0.10) + (20×0.80)
  = 18.0 + 4.8 + 9.6 + 16.0 = 48.4 sabins
RT60 = 0.161 × 288 / 48.4 = 0.96 s   → good for speech (~0.8–1.2 s)
```
**Trap:** using feet (0.05 V/A) with m³ (0.161 V/A); forgetting that α is unitless and A is in sabins; missing large absorbing surfaces (audience, panels).

## 3. PLUMBING — Water Demand via Fixture Units (Concept + Worked Example)

**Standard method (per Plumbing Code fixture-unit tables — verify current edition):**
- Each fixture (WC, lavatory, shower, sink) carries a **fixture unit (FU)** value from the code table.
- Total FU → convert via table/curve to **demand flow** (L/s or gpm) (Hunter's curve concept).
- Storage tank sizing: typical rule — tank capacity ≈ 1–2 days of demand for intermittent supply; downfeed systems sized by roof-tank gravity.

**Worked example (sizing concept):** Small office: 6 WCs (6 FU each = 36), 6 lavatories (2 FU each = 12), 2 slop sinks (3 FU each = 6) → **total ≈ 54 FU** → per standard conversion ≈ 25–30 gpm ≈ 1.6–1.9 L/s peak demand (verify against current code table).
- Main pipe sized so velocity ≤ 1.2–2.4 m/s (typical practice) → Q = A·v solves required diameter.

**Trap:** adding FU without the conversion step; sizing for average instead of peak; forgetting simultaneous-use factors in large systems.

## 4. ELECTRICAL — Simple Load Computation (Worked Example)

**Concept (PEC-based, verify current edition):**
- Branch circuits: lighting/power loads per area or per outlet; demand factors for groups.
- **Watts = VA × power factor** (approx. W = VA for lighting); **I = P / (V × pf)** for single phase; 3-phase: I = P / (√3 × V × pf).

**Worked example:** Single-phase 230 V panel feeding 4,600 W of lighting load (pf ≈ 1.0):
```
I = 4,600 / (230 × 1.0) = 20 A  →  needs a 20 A branch circuit minimum (25 A breaker typical margin)
```
**Trap:** using line-to-line vs line-to-neutral voltage; forgetting demand factors (over-sizing); ampacity vs breaker rating confusion.

## 5. Common Mistakes Quick Table (ties to `COMMON-MISTAKES-AND-EXAM-TRAPS.md` U-series)

| # | Trap | Fix |
|---|---|---|
| U1 | Lux vs lumens vs candela | lux = lm/m²; lumen = flux; candela = intensity |
| U2 | Sabine units (m vs ft) | 0.161 for meters; 0.05 for feet |
| U3 | Rounding fixtures DOWN | Always round UP for illumination |
| U4 | FU without conversion | FU → demand via code table/curve |
| U5 | Feeder vs branch circuit | Feeder = panel feed; branch = outlet circuits |
| U6 | Single-phase vs 3-phase current | I = P/(V·pf) vs P/(√3·V·pf) |

## 6. Course Connections

```
AR153P BU1 (plumbing) ↔ AR155-1 BU3 (lighting/acoustics) ↔ BU2 (electrical/mech)
   ↔ studio technical integration (AD4–AD8) ↔ thesis systems coordination
   ↔ PH codes: Plumbing Code, PEC, PMC (registry — verify current editions)
```

## 7. Suggested Practice (Layer 10 — future @examiner sets)

1. Lighting: 3 lumen-method problems (office, classroom, gym — different lux targets).
2. Acoustics: 3 Sabine problems (speech room, music hall — target RT ranges).
3. Plumbing: 3 FU→demand conversions + pipe-size concept checks.
4. Electrical: 3 load/current computations (single & 3-phase).

## Provenance

- Compiled 2026-08-10 by the TAMA Knowledge Agent from standard MEPFS engineering practice, triangulated against open lighting guides/lecture decks (Tier 3, labeled), standard acoustics texts, and Plumbing/PEC practice (codes paid — registry only). Worked examples are original standard problems with full solutions. Confidence: HIGH (formulas/units), MEDIUM (PH-code-specific factors — verify editions).
