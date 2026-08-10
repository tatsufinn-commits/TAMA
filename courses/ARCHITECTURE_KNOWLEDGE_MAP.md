# ARCHITECTURE_KNOWLEDGE_MAP — Mapúa BS Architecture Knowledge Graph (Conceptual)

**Compiled:** 2026-08-10 | **Confidence:** HIGH / MEDIUM / LOW / UNKNOWN
**Purpose:** a conceptual map of how Mapúa's BS Architecture courses interrelate, for use by a reviewer-generation AI. Code-level links are evidence-labeled; dashed links are inferred.

---

## 1. The macro map

```
                        ┌────────────────────────────────────────────┐
                        │        GE / MATH / SCIENCE FOUNDATIONS      │
                        │  GED101–117 · MATH12/146 · PHYS101/104-105  │
                        │  ENG-series · FIL · SS · PE · NSTP          │
                        └──────────────┬─────────────────────────────┘
                                       ▼
        ┌──────────────────────────────────────────────────────────────────┐
        │               BASIC ARCHITECTURAL KNOWLEDGE                     │
        │  AR130P Theory of Arch 1 ──► AR132-1 Theory of Arch 2           │
        │  AR120 HoA1 ──► HoA2 ──► AR123 HoA3 ──► AR124-1 HoA4            │
        │  AR101P Graphic Design · AR113S VisCom 3 · AR114S-1 VisCom 4    │
        └───────────────┬──────────────────────────────┬──────────────────┘
                        ▼                              ▼
   ┌────────────────────────────────────┐   ┌──────────────────────────────────────┐
   │      DESIGN STUDIO SPINE (AR)      │   │       TECHNICAL SYSTEMS              │
   │  AR141 AD1 → AR142-1P AD2 → AD3 →  │   │  STRUCTURES: MEC30 → MEC32 → CE131P  │
   │  AD4 → AR145-1S AD5 → AD6 → AD7 → │   │    → CE134P · CE133/191 · (Arch Str)  │
   │  AD8                                │   │  BUILDING TECH: AR161 BT1 → AR162-1P │
   │  (paired with VisCom/CAD/BIM)       │   │    BT2 → BT3 → BT4 → AR165-1P BT5   │
   │  CAD10L/30L · AR117-1P BIM 1        │   │  UTILITIES: AR153P BU1 → BU2 →      │
   └───────────────┬────────────────────┘   │    AR155-1 BU3 · PFC-01 Fire Code    │
                   ▼                        └───────────────┬──────────────────────┘
        ┌────────────────────────────────────────────────────┘
        ▼
   ┌──────────────────────────────────────────────────────────────────────┐
   │                  PLANNING & ENVIRONMENTAL                            │
   │  AR173 Planning 1 (site/landscape) → AR173-1P Planning 2 (urban) →  │
   │  AR176-1 Planning 3 (urban/regional) · Tropical Design · GED110      │
   └───────────────────────────────┬──────────────────────────────────────┘
                                   ▼
   ┌──────────────────────────────────────────────────────────────────────┐
   │                  INTEGRATED DESIGN (senior)                          │
   │  AD6 Site Dev & Landscaping · AD7 Community/Urban ·                  │
   │  AD8 Complex Structures                                              │
   └───────────────────────────────┬──────────────────────────────────────┘
                                   ▼
   ┌──────────────────────────────────────────────────────────────────────┐
   │        RESEARCH & CAPSTONE                                          │
   │  AR134-1 Research Methods → AR135-1 Essays & Reviews                 │
   │  → AR200 Thesis Research Writing → AR200-2 Terminal Design (Thesis) │
   └───────────────────────────────┬──────────────────────────────────────┘
                                   ▼
   ┌──────────────────────────────────────────────────────────────────────┐
   │        PROFESSIONAL PRACTICE & LICENSURE PREP                       │
   │  AR181-1 PP1 (laws) → AR182-1 PP2 (services) → PP3 (global)          │
   │  AR188 Business Management · ALE readiness (all clusters)            │
   └──────────────────────────────────────────────────────────────────────┘
```

## 2. Evidence legend for the map
- **Solid arrows** = CHED-template prerequisites or observed dependencies [CHED/OBS].
- **Dashed relationships** = inferred integration links [INF].
- **Gray text** = courses whose Mapúa codes are UNKNOWN (template equivalents).

## 3. Concept → course index (for reviewer routing)

| Knowledge concept | Primary Mapúa course(s) | Supporting |
|---|---|---|
| Design process & programming | AR141, AR142-1P | AR130P |
| Anthropometrics & ergonomics | AR142-1P | AR132-1 |
| Space planning | AR145-1S, AD4 | AR142-1P |
| Site analysis & planning | AR173, AD6 | CE120 Surveying |
| Landscape architecture | AR173 | AD6 |
| Urban design & community arch | AR173-1P, AD7 | AR176-1 |
| Architectural history | AR120 → AR124-1 | AR135-1 (essays) |
| Architectural theory | AR130P, AR132-1 | AR135-1 |
| Materials & construction | AR161/163-1, AR162-1P | AR164-1, AR165-1P |
| Specs & quantity surveying | BT4 (template) | AR182-1 |
| Plumbing/sanitary | AR153P | PFC-01 |
| Electrical/mechanical | BU2 (template) | AR155-1 |
| Acoustics & lighting | AR155-1 | BU2 |
| Structures (statics→design) | MEC30, MEC32, CE131P, CE134P, CE133/191 | NSCP |
| Tropical/climate design | Tropical Design | GED110, AR153P |
| Laws & ethics | AR181-1 | LAWS_CODES_STANDARDS.md |
| Contracts & services | AR182-1 | AR188 |
| Business & practice | AR188 | PP3/PP4 |
| Research & thesis | AR134-1, AR135-1, AR200, AR200-2 | GED104 STS |
| Representation (graphics→BIM) | AR101P, AR113S, AR114S-1, CAD10L/30L, AR117-1P | studios |

## 4. Verified-vs-inferred summary (honest state)

| Layer | Mapúa code coverage |
|---|---|
| Design studio spine | ~40% codes observed (AD1,2,5,9/thesis); AD3,4,6,7,8 codes UNKNOWN |
| History & theory | ~75% observed (HoA1,3(old),4; TOA1,2); HoA2 UNKNOWN |
| Building technology | ~80% observed (BT1×2 codes, BT2, BT3?, BT5); BT4 UNKNOWN |
| Utilities | ~60% observed (BU1, BU3, Fire Code); BU2 UNKNOWN |
| Structures | ~80% observed (Statics, Strength, Theory of Structures, Steel&Timber, RC×2, Surveying); Architectural Structures UNKNOWN |
| Planning | ~75% observed (PL1–3); Tropical Design & Housing codes UNKNOWN |
| Professional practice | ~50% observed (PP1, PP2); PP3/PP4 UNKNOWN |
| GE/support | Mapúa-wide codes observed (not AR-specific confirmation) |
