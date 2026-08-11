#!/usr/bin/env node
/**
 * TAMA Master Architectural Calculation & Engineering Wizard (Build T25 Master Edition)
 * Comprehensive Socratic Mathematical Engine for Mapúa University ARIDBE & PRC ALE Licensure
 *
 * Supported Solvers:
 * 1. PD 1096 NBCP Table VII.1 & VIII.1 Zoning, AMBF, TOSL, USA, ISA, FLAR & TGFA Calculator
 * 2. NSCP 2015 Factored Gravity Load & Continuous/Simple Beam Moment Solver
 * 3. RCD Singly Reinforced Beam Capacity & Required Tension Steel Quadratic Solver
 * 4. Post-Tensioned (PT) Two-Way Flat Plate Thickness & T.Y. Lin Load Balancing Solver
 * 5. Sabine Architectural Acoustics Reverberation Time (RT60) & Absorption Deficit Solver
 * 6. Central HVAC Cooling Load, Tonnage (TR) & Air Handling Unit (CFM) Sizing Solver
 * 7. Stormwater Hydrology (Rational Method Q = CIA/360) & Detention Basin Sizing
 * 8. BP 220 vs PD 957 Subdivision Master Planning Lot Yield & Density Calculator
 */

const readline = require('readline');

let rl;

function getRL() {
  if (!rl) {
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  return rl;
}

function ask(query) {
  return new Promise(resolve => {
    getRL().question(query, answer => resolve(answer));
  });
}

// 1. PD 1096 NBCP AMBF & ZONING SOLVER
async function solveAMBF(args = []) {
  console.log('\n🏛️  --- [1] PD 1096 NBCP AMBF, TOSL, FLAR & TGFA ZONING CALCULATOR ---');
  const tla = parseFloat(args[0] || await ask('Enter Total Lot Area (TLA in sqm, e.g. 1000): ')) || 1000;
  let zoneChoice = args[1];
  if (!zoneChoice) {
    console.log('Select Zoning Classification:');
    console.log('  [1] R-1 (Low-Density Single-Family Residential)');
    console.log('  [2] R-2 Basic (Medium-Density Residential)');
    console.log('  [3] C-2 (Medium-Density Commercial)');
    console.log('  [4] C-3 (High-Density Commercial)');
    zoneChoice = (await ask('Choice (1-4, default 3): ')).trim() || '3';
  }

  let lotChoice = args[2];
  if (!lotChoice) {
    console.log('Select Lot Type:');
    console.log('  [1] Inside Lot');
    console.log('  [2] Corner Lot');
    console.log('  [3] Through Lot');
    lotChoice = (await ask('Choice (1-3, default 1): ')).trim() || '1';
  }

  let pso = 0.75, maxIsa = 0.20, minUsa = 0.05, flar = 5.0, zoneName = 'C-2 (Commercial 2)', lotName = 'Inside Lot';

  if (zoneChoice === '1') {
    zoneName = 'R-1 (Residential 1)';
    pso = lotChoice === '2' ? 0.60 : 0.50;
    maxIsa = 0.20; minUsa = 0.30; flar = 1.50;
  } else if (zoneChoice === '2') {
    zoneName = 'R-2 Basic (Residential 2)';
    pso = lotChoice === '2' ? 0.60 : 0.55;
    maxIsa = 0.30; minUsa = 0.15; flar = 1.50;
  } else if (zoneChoice === '4') {
    zoneName = 'C-3 (High Commercial)';
    pso = lotChoice === '2' ? 0.90 : 0.85;
    maxIsa = 0.10; minUsa = 0.05; flar = 9.00;
  } else {
    pso = lotChoice === '2' ? 0.85 : 0.75;
    maxIsa = 0.20; minUsa = 0.05; flar = 5.00;
  }

  if (lotChoice === '2') lotName = 'Corner Lot';
  else if (lotChoice === '3') lotName = 'Through Lot';

  const ambf = tla * pso;
  const tosl = tla - ambf;
  const isa = tla * maxIsa;
  const usa = tla * minUsa;
  const macr = ambf + isa;
  const tgfa = tla * flar;

  console.log('\n📐 ================= STEP-BY-STEP ZONING COMPUTATION =================');
  console.log(`ZONING DESIGNATION:       ${zoneName} | LOT TYPE: ${lotName}`);
  console.log(`TOTAL LOT AREA (TLA):     ${tla.toFixed(2)} sqm`);
  console.log(`MAX ALLOWABLE PSO:        ${(pso * 100).toFixed(0)}% (PD 1096 Table VIII.1)`);
  console.log(`--------------------------------------------------------------------`);
  console.log(`ALLOWABLE MAX FOOTPRINT (AMBF): ${ambf.toFixed(2)} sqm  [TLA x PSO]`);
  console.log(`MIN TOTAL OPEN SPACE (TOSL):    ${tosl.toFixed(2)} sqm  [TLA - AMBF]`);
  console.log(`  • Unpaved Surface Area (USA): ${usa.toFixed(2)} sqm  (Min ${(minUsa*100).toFixed(0)}% of TLA)`);
  console.log(`  • Impervious Paved Area (ISA):${isa.toFixed(2)} sqm  (Max ${(maxIsa*100).toFixed(0)}% of TLA)`);
  console.log(`MAX CONSTRUCTION AREA (MACA):   ${macr.toFixed(2)} sqm  [AMBF + ISA]`);
  console.log(`FLOOR-TO-LOT AREA RATIO (FLAR): ${flar.toFixed(2)} (Table VII.G.1)`);
  console.log(`MAX ALLOWABLE TGFA:             ${tgfa.toFixed(2)} sqm  [TLA x FLAR]`);
  console.log(`--------------------------------------------------------------------`);
  console.log(`PARKING SPATIAL METRICS:`);
  console.log(`  • Standard Car Parking Slot:  2.50m x 5.00m (12.50 sqm)`);
  console.log(`  • Accessible PWD Parking:     3.70m x 5.00m (Includes 1.20m clear transfer aisle)`);
  console.log('====================================================================\n');
}

// 2. NSCP 2015 FACTORED LOAD & BEAM MOMENTS
async function solveBeamMoment(args = []) {
  console.log('\n📐 --- [2] NSCP 2015 FACTORED GRAVITY LOAD & BEAM MOMENT SOLVER ---');
  const span = parseFloat(args[0] || await ask('Enter Beam Span Length (L in meters, e.g. 6.0): ')) || 6.0;
  const dl = parseFloat(args[1] || await ask('Enter Uniform Dead Load (D in kN/m, e.g. 15.0): ')) || 15.0;
  const ll = parseFloat(args[2] || await ask('Enter Uniform Live Load (L in kN/m, e.g. 12.0): ')) || 12.0;

  const wu = (1.2 * dl) + (1.6 * ll);
  const ra = (wu * span) / 2;
  const mu_ssb = (wu * Math.pow(span, 2)) / 8;
  const mu_cantilever = (wu * Math.pow(span, 2)) / 2;
  const mu_cont_support = -(wu * Math.pow(span, 2)) / 10;
  const mu_cont_span = (wu * Math.pow(span, 2)) / 14;

  console.log('\n📐 ================= STEP-BY-STEP CALCULATION =================');
  console.log(`BEAM SPAN (L):               ${span.toFixed(2)} m`);
  console.log(`UNFACTORED DEAD LOAD (D):    ${dl.toFixed(2)} kN/m`);
  console.log(`UNFACTORED LIVE LOAD (L):    ${ll.toFixed(2)} kN/m`);
  console.log(`--------------------------------------------------------------`);
  console.log(`FACTORED ULTIMATE LOAD (Wu): ${wu.toFixed(2)} kN/m  [Wu = 1.2D + 1.6L]`);
  console.log(`SIMPLE SUPPORT REACTION (R): ${ra.toFixed(2)} kN    [R = Wu * L / 2]`);
  console.log(`SIMPLY SUPPORTED MAX MOMENT: ${mu_ssb.toFixed(2)} kN-m [Mu = Wu * L^2 / 8]`);
  console.log(`CONTINUOUS INTERIOR SUPPORT: ${mu_cont_support.toFixed(2)} kN-m [Mu = -Wu * L^2 / 10]`);
  console.log(`CONTINUOUS INTERIOR MIDSPAN: ${mu_cont_span.toFixed(2)} kN-m [Mu = +Wu * L^2 / 14]`);
  console.log(`CANTILEVER FIXED END MOMENT: ${mu_cantilever.toFixed(2)} kN-m [Mu = -Wu * L^2 / 2]`);
  console.log('==============================================================\n');
}

// 3. RCD SINGLY REINFORCED BEAM SOLVER
async function solveRCD(args = []) {
  console.log('\n🧱 --- [3] RCD SINGLY REINFORCED BEAM CAPACITY & REBAR SOLVER ---');
  const b = parseFloat(args[0] || await ask('Enter Beam Width (b in mm, e.g. 300): ')) || 300;
  const h = parseFloat(args[1] || await ask('Enter Total Beam Height (h in mm, e.g. 500): ')) || 500;
  const cover = parseFloat(args[2] || await ask('Enter Concrete Clear Cover (in mm, default 40): ')) || 40;
  const fc = parseFloat(args[3] || await ask("Enter Concrete Strength (f'c in MPa, e.g. 28): ")) || 28;
  const fy = parseFloat(args[4] || await ask('Enter Steel Yield Strength (fy in MPa, e.g. 414 for Gr60): ')) || 414;
  const mu_input = parseFloat(args[5] || await ask('Enter Factored Moment (Mu in kN-m, e.g. 167.4): ')) || 167.4;

  const d = h - cover - 10 - 10;
  const beta1 = fc <= 28 ? 0.85 : Math.max(0.65, 0.85 - 0.05 * ((fc - 28) / 7));
  const rho_min = Math.max((0.25 * Math.sqrt(fc)) / fy, 1.4 / fy);
  const rho_max = (0.85 * fc * beta1 / fy) * (3 / 7);

  const Mu_Nmm = mu_input * 1e6;
  const A_coeff = (0.90 * Math.pow(fy, 2)) / (1.7 * fc * b);
  const B_coeff = -0.90 * fy * d;
  const C_coeff = Mu_Nmm;

  const discriminant = Math.pow(B_coeff, 2) - (4 * A_coeff * C_coeff);
  let as_req = 0;
  if (discriminant >= 0) {
    as_req = (-B_coeff - Math.sqrt(discriminant)) / (2 * A_coeff);
  }

  const rho_actual = as_req / (b * d);
  const bar20_count = Math.ceil(as_req / 314.16);

  console.log('\n📐 ================= STEP-BY-STEP RCD DERIVATION =================');
  console.log(`SECTION: ${b}mm (W) x ${h}mm (H) | EFFECTIVE DEPTH (d): ${d.toFixed(1)} mm`);
  console.log(`MATERIALS: f'c = ${fc} MPa (beta1 = ${beta1.toFixed(3)}), fy = ${fy} MPa`);
  console.log(`FACTORED DESIGN MOMENT (Mu): ${mu_input.toFixed(2)} kN-m`);
  console.log(`----------------------------------------------------------------`);
  console.log(`REINFORCEMENT RATIO LIMITS:`);
  console.log(`  • Minimum Ratio (rho_min): ${rho_min.toFixed(5)}`);
  console.log(`  • Maximum Ratio (rho_max): ${rho_max.toFixed(5)} (Ductile Tension Limit)`);
  console.log(`----------------------------------------------------------------`);
  console.log(`REQUIRED TENSION STEEL (As): ${as_req.toFixed(2)} mm^2`);
  console.log(`ACTUAL STEEL RATIO (rho):    ${rho_actual.toFixed(5)}`);
  if (rho_actual >= rho_min && rho_actual <= rho_max) {
    console.log(`STATUS: ✅ OPTIMAL DUCTILE TENSION-CONTROLLED SECTION (phi = 0.90)`);
  } else if (rho_actual < rho_min) {
    console.log(`STATUS: ⚠️ UNDER-REINFORCED BELOW MINIMUM (Adopt As_min = ${(rho_min*b*d).toFixed(2)} mm^2)`);
  } else {
    console.log(`STATUS: 🔴 OVER-REINFORCED! BRITTLE COMPRESSION FAILURE RISK! Increase beam depth.`);
  }
  console.log(`RECOMMENDED REBAR: Provide ${bar20_count} - 20mmØ PNS 49 Bars in 1 Layer.`);
  console.log('================================================================\n');
}

// 4. POST-TENSIONING & LOAD BALANCING SOLVER
async function solvePostTensioning(args = []) {
  console.log('\n🏗️  --- [4] POST-TENSIONED TWO-WAY FLAT PLATE & LOAD BALANCING SOLVER ---');
  const span = parseFloat(args[0] || await ask('Enter Column Bay Span (L in meters, e.g. 8.5): ')) || 8.5;
  const sdl = parseFloat(args[1] || await ask('Enter Superimposed Dead Load (SDL in kPa, e.g. 1.8): ')) || 1.8;
  const ll = parseFloat(args[2] || await ask('Enter Live Load (LL in kPa, e.g. 2.4): ')) || 2.4;

  const h_calc = (span * 1000) / 42;
  const h = Math.ceil(h_calc / 10) * 10;
  const sw = (h / 1000) * 24.0;
  const w_dead = sw + sdl;
  const w_bal = 0.75 * w_dead;

  const cover = 25;
  const drape_a = ((h / 2) - cover - 6.35) / 1000;
  const P_eff = (w_bal * Math.pow(span, 2)) / (8 * drape_a);
  const strand_force = 110.15;
  const strands_per_m = P_eff / strand_force;

  console.log('\n📐 ================= STEP-BY-STEP PT LOAD BALANCING =================');
  console.log(`BAY SPAN (L):             ${span.toFixed(2)} m x ${span.toFixed(2)} m`);
  console.log(`PRELIMINARY SLAB DEPTH:   ${h} mm  (Span/42 rule vs RC Span/30 = ${(span*1000/30).toFixed(0)}mm)`);
  console.log(`CONCRETE SELF-WEIGHT:     ${sw.toFixed(2)} kPa`);
  console.log(`TOTAL UNFACTORED DEAD:    ${w_dead.toFixed(2)} kPa  [SW + SDL]`);
  console.log(`--------------------------------------------------------------------`);
  console.log(`TARGET BALANCED LOAD (w_bal): ${w_bal.toFixed(2)} kPa  (75% of Dead Load)`);
  console.log(`EFFECTIVE TENDON DRAPE (a):   ${(drape_a * 1000).toFixed(1)} mm`);
  console.log(`REQUIRED PRESTRESS FORCE (P): ${P_eff.toFixed(2)} kN per meter width`);
  console.log(`STRAND SPACING (12.7mm Gr270): Space 1 strand every ${(1000/strands_per_m).toFixed(0)} mm across strip.`);
  console.log(`STUDIO ADVANTAGE: Saves ${(span*1000/30 - h).toFixed(0)}mm height per floor compared to RC!`);
  console.log('====================================================================\n');
}

// 5. SABINE ACOUSTICS SOLVER
async function solveAcoustics(args = []) {
  console.log('\n⚡ --- [5] SABINE ACOUSTIC REVERBERATION TIME (RT60) & DEFICIT SOLVER ---');
  const v = parseFloat(args[0] || await ask('Enter Room Interior Volume (V in m^3, e.g. 600): ')) || 600;
  const a = parseFloat(args[1] || await ask('Enter Existing Sound Absorption (A in Sabins / m^2, e.g. 113.5): ')) || 113.5;
  const target_rt = parseFloat(args[2] || await ask('Enter Target RT60 (seconds, e.g. 0.70 for Lecture Hall): ')) || 0.70;

  const current_rt = (0.161 * v) / a;
  const required_a = (0.161 * v) / target_rt;
  const deficit_a = required_a - a;
  const panel_area = deficit_a > 0 ? deficit_a / 0.83 : 0;

  console.log('\n📐 ================= STEP-BY-STEP ACOUSTIC DERIVATION =================');
  console.log(`ROOM VOLUME (V):          ${v.toFixed(2)} m^3`);
  console.log(`CURRENT ABSORPTION (A):   ${a.toFixed(2)} metric Sabins (m^2)`);
  console.log(`CURRENT REVERBERATION:    ${current_rt.toFixed(3)} seconds  [RT60 = 0.161*V/A]`);
  console.log(`TARGET REVERBERATION:     ${target_rt.toFixed(2)} seconds`);
  console.log(`----------------------------------------------------------------------`);
  if (deficit_a > 0) {
    console.log(`ABSORPTION DEFICIT:       ${deficit_a.toFixed(2)} metric Sabins needed`);
    console.log(`ACOUSTIC PANEL TREATMENT: Install ${panel_area.toFixed(1)} sqm of acoustic wall panels (NRC 0.85)`);
  } else {
    console.log(`STATUS: ✅ Room already satisfies target reverberation time!`);
  }
  console.log('======================================================================\n');
}

// 6. CENTRAL HVAC COOLING LOAD & AIRFLOW
async function solveHVAC(args = []) {
  console.log('\n❄️  --- [6] CENTRAL HVAC COOLING LOAD & TONNAGE (TR) SOLVER ---');
  const area = parseFloat(args[0] || await ask('Enter Conditioned Floor Area (sqm, e.g. 1200): ')) || 1200;
  const occupants = parseFloat(args[1] || await ask('Enter Total Number of Occupants (e.g. 120): ')) || 120;
  const heat_flux = parseFloat(args[2] || await ask('Enter Estimated Envelope + Lighting Heat Flux (W/sqm, default 110): ')) || 110;

  const envelope_load = (area * heat_flux) / 1000;
  const occupant_load = (occupants * 130) / 1000;
  const vent_load = (occupants * 10 * 1.2 * 1.0 * 10) / 1000;
  const total_kw = (envelope_load + occupant_load + vent_load) * 1.10;
  const tr = total_kw / 3.517;
  const cfm = tr * 400;

  console.log('\n📐 ================= STEP-BY-STEP HVAC DERIVATION =================');
  console.log(`FLOOR AREA:               ${area.toFixed(2)} sqm | OCCUPANTS: ${occupants}`);
  console.log(`ENVELOPE & LIGHTING HEAT: ${envelope_load.toFixed(2)} kW`);
  console.log(`OCCUPANT METABOLIC LOAD:  ${occupant_load.toFixed(2)} kW  (130W / person)`);
  console.log(`OUTDOOR FRESH AIR LOAD:   ${vent_load.toFixed(2)} kW  (ASHRAE 62.1)`);
  console.log(`------------------------------------------------------------------`);
  console.log(`TOTAL COOLING CAPACITY:   ${total_kw.toFixed(2)} kW`);
  console.log(`TONS OF REFRIGERATION:    ${tr.toFixed(1)} TR  (1 TR = 12,000 BTU/hr)`);
  console.log(`ESTIMATED AHU AIRFLOW:    ${cfm.toFixed(0)} CFM  (400 CFM / TR)`);
  console.log('==================================================================\n');
}

// 7. STORMWATER HYDROLOGY (RATIONAL METHOD)
async function solveStormwater(args = []) {
  console.log('\n🌧️  --- [7] STORMWATER HYDROLOGY & DETENTION BASIN SOLVER ---');
  const hectares = parseFloat(args[0] || await ask('Enter Site Area (in Hectares, e.g. 4.0): ')) || 4.0;
  const c_comp = parseFloat(args[1] || await ask('Enter Composite Runoff Coefficient C (0.1-0.95, default 0.55): ')) || 0.55;
  const rainfall_i = parseFloat(args[2] || await ask('Enter 25-Year Rainfall Intensity (mm/hr, default 120): ')) || 120;

  const q_peak = (c_comp * rainfall_i * hectares) / 360;
  const storm_vol = q_peak * 1800;
  const detention_vol = storm_vol * 0.60;

  console.log('\n📐 ================= STEP-BY-STEP HYDROLOGY DERIVATION =================');
  console.log(`SITE AREA:                ${hectares.toFixed(2)} ha (${(hectares*10000).toFixed(0)} sqm)`);
  console.log(`RUNOFF COEFFICIENT (C):   ${c_comp.toFixed(2)} | RAINFALL INTENSITY: ${rainfall_i} mm/hr`);
  console.log(`------------------------------------------------------------------------`);
  console.log(`PEAK STORM RUNOFF (Q):    ${q_peak.toFixed(3)} m^3/s  [Q = CIA / 360]`);
  console.log(`30-MIN CLOUDBURST VOLUME: ${storm_vol.toFixed(2)} m^3`);
  console.log(`DETENTION POND VOLUME:    ${detention_vol.toFixed(2)} m^3  (60% on-site retention)`);
  console.log('========================================================================\n');
}

// 8. BP 220 VS PD 957 HOUSING LOT YIELD
async function solveHousing(args = []) {
  console.log('\n🏡 --- [8] BP 220 / PD 957 SUBDIVISION LOT YIELD CALCULATOR ---');
  const site_ha = parseFloat(args[0] || await ask('Enter Total Subdivision Area (in Hectares, e.g. 5.0): ')) || 5.0;
  const saleable_pct = parseFloat(args[1] || await ask('Enter Saleable Land Percentage (% default 70): ')) || 70;
  const min_lot = parseFloat(args[2] || await ask('Enter Minimum Lot Size (sqm, e.g. 36 for BP220 Rowhouse, 120 for PD957): ')) || 36;

  const total_sqm = site_ha * 10000;
  const saleable_sqm = total_sqm * (saleable_pct / 100);
  const open_space_sqm = total_sqm - saleable_sqm;
  const lot_yield = Math.floor(saleable_sqm / min_lot);
  const density = lot_yield / site_ha;

  console.log('\n📐 ================= STEP-BY-STEP SUBDIVISION YIELD =================');
  console.log(`TOTAL SITE AREA:          ${site_ha.toFixed(2)} ha (${total_sqm.toFixed(0)} sqm)`);
  console.log(`SALEABLE AREA (${saleable_pct}%):     ${saleable_sqm.toFixed(0)} sqm`);
  console.log(`OPEN SPACE & ROADS:       ${open_space_sqm.toFixed(0)} sqm  (Parks, roads, community)`);
  console.log(`MINIMUM LOT SIZE:         ${min_lot.toFixed(1)} sqm`);
  console.log(`--------------------------------------------------------------------`);
  console.log(`TOTAL HOUSING LOT YIELD:  ${lot_yield} Saleable Lots`);
  console.log(`GROSS PLANNING DENSITY:   ${density.toFixed(1)} units / hectare`);
  console.log('====================================================================\n');
}

async function main() {
  const cliArgs = process.argv.slice(2);
  if (cliArgs.length > 0) {
    const choice = cliArgs[0];
    const subArgs = cliArgs.slice(1);
    if (choice === '1') await solveAMBF(subArgs);
    else if (choice === '2') await solveBeamMoment(subArgs);
    else if (choice === '3') await solveRCD(subArgs);
    else if (choice === '4') await solvePostTensioning(subArgs);
    else if (choice === '5') await solveAcoustics(subArgs);
    else if (choice === '6') await solveHVAC(subArgs);
    else if (choice === '7') await solveStormwater(subArgs);
    else if (choice === '8') await solveHousing(subArgs);
    if (rl) rl.close();
    return;
  }

  console.log('\n🏛️  ===================================================================');
  console.log('    TAMA ARCHITECTURAL & STRUCTURAL CALCULATION ENGINE (Master v1.9.5)');
  console.log('    Mapúa University ARIDBE & PRC Architecture Board Licensure Hub');
  console.log('===================================================================\n');
  console.log('Select Calculation Module:');
  console.log('  [1] PD 1096 NBCP Table VII.1/VIII.1 AMBF, TOSL, FLAR & TGFA Zoning Solver');
  console.log('  [2] NSCP 2015 Factored Gravity Load & Continuous Beam Moments Solver');
  console.log('  [3] RCD Singly Reinforced Beam Capacity & Rebar Area Solver');
  console.log('  [4] Post-Tensioned (PT) Flat Plate Depth & T.Y. Lin Load Balancing Solver');
  console.log('  [5] Sabine Architectural Acoustics (RT60) & Acoustic Panel Deficit Solver');
  console.log('  [6] Central HVAC Cooling Load Tonnage (TR) & Air Handling Unit (CFM) Solver');
  console.log('  [7] Stormwater Hydrology (Rational Method Q=CIA/360) & Detention Basin Solver');
  console.log('  [8] BP 220 vs PD 957 Subdivision Master Plan Lot Yield & Density Solver');

  const choice = (await ask('\n👉 Choose Calculator (1-8, default 1): ')).trim() || '1';

  if (choice === '1') await solveAMBF();
  else if (choice === '2') await solveBeamMoment();
  else if (choice === '3') await solveRCD();
  else if (choice === '4') await solvePostTensioning();
  else if (choice === '5') await solveAcoustics();
  else if (choice === '6') await solveHVAC();
  else if (choice === '7') await solveStormwater();
  else if (choice === '8') await solveHousing();

  if (rl) rl.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
