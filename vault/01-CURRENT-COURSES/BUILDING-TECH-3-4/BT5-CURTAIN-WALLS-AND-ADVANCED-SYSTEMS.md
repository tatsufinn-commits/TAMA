# AR165-1P / BT5: CURTAIN WALL SYSTEMS & ADVANCED ENVELOPE ENGINEERING
**Course:** Building Technology 5 (Alternative Building Construction Systems)  
**Academic Level:** Mapúa BS Architecture 3rd/4th Year  
**PRC ALE Category:** Part 2: Building Technology, Materials & Building Envelopes (30% Weight)  
**High-Yield Exam Score:** 9.0 / 10  
**Governing Authorities & Standards:** AAMA / FGIA Standards, ASTM E283 (Air Leakage), ASTM E330 (Structural Wind Performance), ASTM E331 (Water Penetration), NSCP 2015 Chapter 2 (Wind Loads), Philippine Green Building Code (PGBC).

---

## 1. THEORETICAL & METHODOLOGICAL FOUNDATIONS

### 1.1 First Principles of Curtain Wall Systems
A **Curtain Wall** is a non-load-bearing exterior building envelope hung from the structural frame (slabs, columns, and spandrel beams). It carries **only its own dead weight and environmental forces (wind, seismic, thermal)**, which it transfers back to the primary structural skeleton via engineered anchors.

**Fundamental Architectural Rule:** A curtain wall NEVER supports vertical gravity loads from floors, roofs, or transfer structures.

```
                         HIGH-RISE CURTAIN WALL ENVELOPE MECHANICS
                     ┌───────────────────────────────────────────────┐
                     │           PRIMARY REINFORCED CONCRETE         │
                     │                 FLOOR SLAB                    │
                     └───────────────────────┬───────────────────────┘
                                             │
                                     [ SLAB EDGE ANCHOR ] ◄── Dead Load + Wind Reactions
                                             │
                     ┌───────────────────────┴───────────────────────┐
                     │ SPANDREL ZONE: Insulated Backpan (Firestop)   │ ◄── 2-Hour Mineral Wool Smoke Seal
                     ├───────────────────────────────────────────────┤
                     │ VISION ZONE: Double Glazed Unit (DGU / IGU)   │ ◄── Low-E Solar Control Glass
                     ├───────────────────────────────────────────────┤
                     │ TRANSOM (Horizontal) & MULLION (Vertical)     │ ◄── Extruded Aluminum (6063-T6)
                     └───────────────────────────────────────────────┘
```

### 1.2 Thermal & Environmental Envelope Dynamics in Philippine Climate
* **Solar Heat Gain Coefficient (SHGC):** The fraction of incident solar radiation admitted through glass. In Philippine tropical architecture, PGBC mandates $SHGC \le 0.45$ for commercial envelopes.
* **U-Value (Thermal Transmittance):** Rate of heat transfer through the assembly ($W/m^2\cdot K$). Double Glazed Insulated Glass Units (IGU) with argon gas fill achieve $U \le 1.8\text{ W/m}^2\cdot\text{K}$ compared to single clear glass ($5.8\text{ W/m}^2\cdot\text{K}$).
* **Thermal Break:** A low-conductivity polyamide bar inserted between exterior and interior aluminum extrusion profiles to eliminate thermal bridging and condensation.

---

## 2. TECHNICAL MECHANICS, ASSEMBLIES & TYPOLOGY MATRIX

| Curtain Wall System | Assembly & Installation Method | Structural & Architectural Characteristics | Optimal Application |
| :--- | :--- | :--- | :--- |
| **Stick-Built System** | Vertical mullions and horizontal transoms are delivered as individual extrusions, assembled on-site piece-by-piece, and glazed in-place. | • Lower initial fabrication tooling cost.<br>• Highly reliant on site labor workmanship.<br>• Slow installation speed; requires external staging/scaffolding. | Low-to-mid rise buildings ($<6$ storeys), ground-floor retail podiums, complex irregular geometries. |
| **Unitized System** | Factory-assembled, pre-glazed, sealed panels (typically 1-floor high $\times$ 1-module wide, e.g. $1.5\text{m} \times 3.6\text{m}$) hoisted via crane or monorail. | • High factory quality control and automated silicone bonding.<br>• Rapid installation ($>20$ panels/day/crane) from inside the floor slab without exterior scaffolding.<br>• Interlocking male/female split mullions accommodate thermal and seismic inter-storey drift. | High-rise commercial office towers, BPO towers in BGC / Makati / Ortigas ($>10$ storeys). |
| **Semi-Unitized System** | Primary vertical mullions are installed as sticks, while pre-assembled, factory-glazed cassette panels are clipped into place. | • Balances factory glazing quality with shipping size limits.<br>• Faster than stick-built; cheaper freight than fully unitized panels. | Mid-rise commercial buildings, institutional hospitals. |
| **Structural Silicone Glazing (SSG)** | Glass panes are chemically bonded to aluminum frames using high-modulus structural silicone sealant (ASTM C1184) without exterior mechanical retention caps. | • 2-Sided SSG: Vertical or horizontal flush joints with mechanical retention on the opposite axis.<br>• 4-Sided SSG: 100% flush, all-glass uninterrupted exterior aesthetic.<br>• Requires strict factory degreasing and peel-adhesion testing. | High-end corporate headquarters, iconic architectural towers. |
| **Point-Supported / Spider Glass** | Tempered laminated glass panels connected at corners via stainless steel articulated spider fittings (cast 316-grade) to tension cable trusses or glass fins. | • Maximum architectural transparency.<br>• Requires specialized prestressed stainless-steel cable truss analysis. | Grand atrium facades, airport terminal concourses, luxury hotel lobbies. |

---

## 3. PHILIPPINE STATUTORY & REGULATORY COMPLIANCE MATRIX

| Authority / Code | Section / Provision | Statutory Mandate | Engineering / Architectural Impact |
| :--- | :--- | :--- | :--- |
| **NSCP 2015** | Section 207 (Wind Loads) | Velocity pressure $q_z = 0.613 K_z K_{zt} K_d V^2 I_w$. Basic design wind speeds: $V = 250–300\text{ km/h}$ for Metro Manila (Typhoon Zone II). | Curtain wall mullions must be sized for positive windward pressure and high corner suction negative pressures (up to $-3.5\text{ kPa}$). |
| **RA 9514 (Fire Code)** | Section 10.2.5.4 | Perimeter Fire Barrier (Spandrel Protection): Minimum **2-Hour Fire Resistance** for spandrel zone with continuous safing mineral wool smoke seal at slab-edge joint. | Void between edge of concrete slab and curtain wall must be packed with $4\text{ pcf}$ mineral wool and coated with elastomeric firestop sealant. |
| **Philippine Green Building Code (PGBC)** | Section 9 (Envelope) | Window-to-Wall Ratio (WWR) baseline $40\%$. Envelopes exceeding 40% WWR must use glass with $SHGC \le 0.40$ and $VLT \ge 45\%$. | Studio plate facade specifications must incorporate Low-E coating on Surface #2 (inside of outer glass pane). |
| **BP 344 (Accessibility)** | Rule II Sec. 2.4 | Glazed curtain wall doors at building entrances must have visible contrasting manifest markings between $0.90\text{m}$ and $1.50\text{m}$ height. | Prevents visually impaired and general occupants from walking into clear frameless glass. |

---

## 4. WORKED MATHEMATICAL DERIVATIONS & ENGINEERING CALCULATIONS

### 4.1 Wind Load & Aluminum Mullion Sizing Derivation
**Problem**: An office tower curtain wall in BGC has a typical floor-to-floor height $L = 3.60\text{m}$ and mullion module width $W = 1.50\text{m}$.  
- Ultimate Design Wind Pressure (NSCP 2015) $p = 2.40\text{ kPa} = 2.40\text{ kN/m}^2$.  
- Allowable deflection limit for glazed curtain walls per AAMA: $\Delta_{allow} = \frac{L}{175}$ (for $L \le 4.1\text{m}$) or $19\text{mm}$ max.  
- Modulus of Elasticity of Aluminum 6063-T6: $E = 70,000\text{ MPa} = 70\times 10^6\text{ kN/m}^2$.

```
Step 1: Calculate Uniform Line Load on Vertical Mullion (w)
Tributary width supported by one mullion = 1.50 m.
w = p × W = 2.40 kN/m² × 1.50 m = 3.60 kN/m = 3.60 N/mm.

Step 2: Calculate Allowable Deflection (Δ_allow)
Δ_allow = L / 175 = 3600 mm / 175 = 20.57 mm ➔ Max allowable = 19.0 mm (AAMA cap).

Step 3: Derive Required Moment of Inertia (I_xx) using Beam Deflection Formula
For a simply supported mullion under uniform wind loading:
Δ_max = (5 · w · L⁴) / (384 · E · I_xx)  ➔  I_xx = (5 · w · L⁴) / (384 · E · Δ_allow)

Substitute values in metric (N and mm):
w = 3.60 N/mm
L = 3600 mm
E = 70,000 N/mm² (MPa)
Δ_allow = 19.0 mm

I_xx = [ 5 × 3.60 × (3600)⁴ ] / [ 384 × 70,000 × 19.0 ]
I_xx = [ 18.0 × (1.6796 × 10¹⁴) ] / [ 5.1072 × 10⁸ ]
I_xx = [ 3.0233 × 10¹⁵ ] / [ 5.1072 × 10⁸ ]
I_xx = 5,919,682 mm⁴ = 5.92 × 10⁶ mm⁴ (592 cm⁴).

➔ Architectural Selection: Specify extruded aluminum 6063-T6 tubular mullion profile with 
   minimum dimensions 65mm (width) × 175mm (depth) having I_xx ≥ 600 cm⁴.
```

---

## 5. STUDIO DESIGN PLATE INTEGRATION & DEFENSE RUBRICS

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│                    STUDIO INTEGRATION: HIGH-RISE FACADE DETAILS                    │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 1. SPANDREL vs VISION SECTION COORDINATION:                                        │
│    • Ensure spandrel height (typically 900mm–1200mm) completely conceals:          │
│      (a) Concrete edge beam / PT slab edge (200-300mm),                            │
│      (b) Suspended ceiling plenum & recessed lights (400-500mm),                   │
│      (c) Perimeter HVAC fan coil unit or chilled beam ductwork.                    │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 2. SEISMIC DRIFT ACCOMMODATION:                                                    │
│    • Under NSCP 2015 earthquake loading, high-rise frames sway laterally.         │
│    • Unitized mullion split joints must have ±25mm slotted sliding anchors to      │
│      absorb inter-storey drift without shattering brittle glass panels.            │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SOCRATIC EXAM SIMULATION (BOARD-STYLE SCENARIOS)

#### Question 1 (Envelope Failure & Life Safety):
In a 25-storey high-rise condominium, smoke and fire from an 8th-floor unit spread rapidly to the 9th floor through the exterior facade despite all interior fire doors remaining closed. Forensic investigation will most likely find a failure in which curtain wall component?
- A) The structural silicone adhesion on the 4-sided SSG vision glass.
- B) The perimeter slab-edge firestop safing insulation and elastomeric smoke seal.
- C) The thermal break polyamide strut inside the aluminum split mullion.
- D) The weep-hole drainage system in the bottom transom.
> **Correct Answer: B**  
> **Distractor Trap Analysis**:
> * Under RA 9514 and ASTM E2307, the perimeter void between the structural floor slab and the curtain wall must be sealed with high-density mineral wool safing to prevent the "chimney effect" (leapfrog flame propagation). Failure to install rated slab-edge firestopping allows fire to bypass 2-hour floor slabs within minutes.

---

## 7. ACADEMIC REFERENCES & STATUTORY SOURCES
1. Fenestration & Glazing Industry Alliance (FGIA) / AAMA. (2020). *AAMA Curtain Wall Manual (AAMA CW-DG-1)*. FGIA.
2. Association of Structural Engineers of the Philippines (ASEP). (2015). *National Structural Code of the Philippines (NSCP 2015, Vol. 1)*. ASEP.
3. Department of Public Works and Highways (DPWH). (2015). *Philippine Green Building Code (A Referral Code of the NBCP)*. DPWH.
4. American Society for Testing and Materials (ASTM). (2021). *ASTM E330/E330M-14(2021): Standard Test Method for Structural Performance of Exterior Windows and Curtain Walls*. ASTM International.
