# BUILDING UTILITIES 3 — VERTICAL TRANSPORTATION (ELEVATORS & ESCALATORS) (BU3 DEPTH)
**Course:** AR155-1 Building Utilities 3 (MEPFS) · UTILITIES-3-MEPFS cluster
**Depth Level:** 3 (Functional — types, selection logic, components, PH code flags)
**High-Yield Score:** 7.8 / 10 (vertical transportation is a recurring deptal/ALE utilities item)
**Knowledge Value Score:** 84/100
**Status:** VERIFIED (standard practice, multi-source) / PH code values flagged

---

## Source Information
- **Sources (labeled):**
  - PDHonline Course M376 — *Overview of Building Elevator Systems* (A. Bhatia, open PDF, Tier 2): elevator types, travel/speed ranges, selection economics.
  - Young Architect academy — *Types of Elevators* (Tier 3): hydraulic/traction/MRL selection matrix (1–4 stories hydraulic; 5–20 geared/MRL; 20+ gearless).
  - AFAA elevator–fire-alarm interface presentation (IBC 2018/ASME A17.1/NFPA 72/13 — Tier 2): hoistway/machine-room sprinkler & detection rules, shunt trip.
  - Oliver FPS — fire sprinkler requirements for shafts/machine rooms (Tier 3).
  - DHVSU Engineering Utilities 2 notes (Studocu, Tier 3-4 labeled): parts, escalator types, travel limits (gearless to 500 m @ 20 m/s — verify; geared 75 m @ 2 m/s; MRL 165 m @ 3 m/s; hydraulic ~14–15 m rise).
- **Vault links:** `CENTRAL-HVAC-AND-ACOUSTICS.md` (BU3 sibling), `PLUMBING-AND-ELECTRICAL-DESIGN-DEPTH.md` (electrical tie-in), `COMMON-MISTAKES-AND-EXAM-TRAPS.md`, SOURCE-REGISTRY (PH codes).
- **Confidence:** MEDIUM–HIGH — type/selection logic is standard; travel/speed numbers vary by source (flagged); PH code specifics UNVERIFIED.

---

## 1. WHY VERTICAL TRANSPORTATION MATTERS (architect's role)
The architect sizes shafts, machine rooms, pits, and lobbies; selects the system type; coordinates fire/safety requirements — before the elevator consultant takes over. Wrong early decisions = expensive retrofits.

## 2. ELEVATOR TYPES (the selection core)

| Type | How it works | Travel/speed (representative) | Best for |
|---|---|---|---|
| **Hydraulic** | Fluid-driven piston (in-ground, telescopic, holeless, roped variants) | Up to ~14–15 m rise; 0.25–0.75 m/s | Low-rise (1–5 storeys); economical; slower/noisy; machine room adjacent at base |
| **Geared traction** | Motor + gearbox + ropes + counterweight | Up to ~30–75 m; 0.5–2.0 m/s | Mid-rise (5–20 storeys) |
| **Gearless traction** | Direct-drive motor + ropes + counterweight | No practical height limit; 2.5 m/s+ (up to ~10–20 m/s for super-tall) | High-rise (20+ storeys); efficient; faster |
| **Machine Room-Less (MRL)** | Traction drive mounted in hoistway | Up to ~165 m; ~3 m/s | Space-saving (no machine room); mid-rise; maintenance access constraints |

**Selection memory rule:** *Hydraulic for low, traction for high* (Young Architect ARE rule). Building-height decision matrix: 1–4 → hydraulic; 5–20 → geared traction/MRL; 20+ → gearless.

**Components (architect-relevant):** cab, car sling, guide rails, hoistway (fire-rated shaft), counterweight (traction), machine room/MRL drive, pit (with buffers), speed governor, controller, landing doors, hoistway ventilation/lighting.

## 3. TRAFFIC & SIZING CONCEPTS
- **Handling capacity:** % of building population moved in 5 minutes (typical target 5–12% for offices).
- **Interval:** average waiting time (targets vary; ~30 s good office service).
- **Grouping:** cars grouped by zone (low/mid/high) in tall buildings.
- **Shaft economy:** group cars in common hoistways; align shafts vertically through the plan.

## 4. ESCALATORS & MOVING WALKS
- **Escalator (moving stairs):** ~30° inclination typical; parallel, crisscross (space-saving), or multiple-parallel arrangements; truss (steel structure) + balustrade + steps.
- **Travelator (moving ramp):** inclined conveyor — wheelchair-friendly (no steps).
- **Walkalator (moving walk):** horizontal people-mover (airports, malls).
- **Architect's role:** structural support (truss), fire separation of openings (escalator openings need fire protection/draft curtains in some codes — verify), clearances, capacity (persons/hour).

## 5. FIRE & LIFE-SAFETY INTERFACE (VERIFIED — IBC/NFPA/ASME-based; verify PH Fire Code IRR)
- **Hoistway/machine room sprinklers:** traction hoistways may be exempt IF non-combustible + smoke detection + rated construction + no storage + non-hydraulic; **hydraulic** machine rooms/pits generally require sprinklers (combustible fluid).
- **Pit protection:** sidewall sprinklers ≤ 2 ft above pit floor when required.
- **Detection/shunt trip:** heat detectors within 2 ft of sprinklers, more sensitive than the head → **shunt trip** cuts elevator power before sprinkler discharge (cab stops in place); smoke detection initiates **elevator recall** (firefighters' emergency operation).
- **Firefighters' service:** Phase I recall (lobby) + Phase II in-car operation; fire-rated lobby separation (verify code).
- **PH note:** governed by Fire Code IRR + NBCP (PD 1096 IRR Rule XIII electrical/mechanical area) — **verify current PH requirements** (Fire Code IRR not held).

## 6. COMMON MISTAKES
| Trap | Fix |
|---|---|
| Hydraulic in a high-rise | Selection matrix (hydraulic ≤ ~5 storeys) |
| Forgetting pit/machine-room space | Reserve pit depth + overhead machine room early |
| Shaft as an afterthought | Plan shafts from the first schematic |
| No fire-rated hoistway | Hoistway enclosure per code |
| Ignoring elevator–fire-alarm interface | Recall + shunt trip coordination |
| Escalator opening unprotected | Fire separation/draft control (verify) |
| PH code numbers from memory | Verify Fire Code IRR + PD 1096 IRR Rule XIII |

## 7. CROSS-COURSE CONNECTIONS
```
BU3 ↔ STRUCTURES (shafts, machine-room loads) ↔ PLANNING (lobby/circulation)
↔ FIRE SAFETY (RA 9514/IRR — recall, sprinklers) ↔ ELECTRICAL (BU2 — power, emergency)
↔ STUDIO (vertical circulation in design) ↔ PP (code compliance)
```

## 8. SUGGESTED STUDY
- Selection drill: given building height → choose elevator type (10 cases).
- Component identification: label an elevator section (cab, hoistway, machine room, pit, counterweight).
- Fire-interface scenario: why does a heat detector trip elevator power before the sprinkler? (essay)
- Escalator arrangement comparison: parallel vs crisscross (space/cost).

## Provenance
Compiled 2026-08-10 from standard vertical-transportation practice (PDHonline M376 open course; Young Architect ARE guide; AFAA IBC/NFPA interface; DHVSU notes — Tier 2-4, labeled). Travel/speed figures flagged as representative (sources vary). PH code specifics UNVERIFIED until Fire Code IRR/PD 1096 IRR Rule XIII held. Status: VERIFIED (types/selection) / UNVERIFIED (PH specifics).
