#!/usr/bin/env node
/**
 * TAMA Interactive Architectural Math Calculation Wizard (Build T21)
 * Solves the 4 most critical calculation domains in Mapúa Architecture Exams:
 * 1. PD 1096 NBCP Table VII.1 AMBF / TOSL / Parking Calculator
 * 2. NSCP 2015 Factored Gravity Load & Simple Beam Moment Solver
 * 3. RCD Singly Reinforced Beam Capacity & Whitney Stress Block Solver
 * 4. Sabine Acoustic Reverberation Time (RT60) Solver
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function solveAMBF() {
  console.log('\n🏛️  --- [1] PD 1096 NBCP AMBF & ZONING CALCULATOR ---');
  const tla = parseFloat(await ask('Enter Total Lot Area (TLA in sqm, e.g. 600): ')) || 600;
  console.log('Select Zoning Classification:');
  console.log('  [1] R-1 (Single-Family Residential)');
  console.log('  [2] R-2 (Medium Density Residential)');
  console.log('  [3] C-2 (Medium Density Commercial)');
  console.log('  [4] Industrial');
  const zoneChoice = (await ask('Choice (1-4, default 3): ')).trim() || '3';

  console.log('Select Lot Type:');
  console.log('  [1] Inside Lot');
  console.log('  [2] Corner Lot');
  console.log('  [3] Through Lot');
  console.log('  [4] Interior Lot');
  const lotChoice = (await ask('Choice (1-4, default 1): ')).trim() || '1';

  let pso = 0.75;
  let zoneName = 'C-2 (Commercial 2)';
  let lotName = 'Inside Lot';

  if (zoneChoice === '1') {
    zoneName = 'R-1 (Residential 1)';
    pso = lotChoice === '2' ? 0.60 : 0.50;
  } else if (zoneChoice === '2') {
    zoneName = 'R-2 (Residential 2)';
    pso = lotChoice === '2' ? 0.75 : (lotChoice === '4' ? 0.65 : 0.70);
  } else if (zoneChoice === '4') {
    zoneName = 'Industrial';
    pso = lotChoice === '2' ? 0.80 : 0.75;
  } else {
    pso = lotChoice === '2' ? 0.80 : (lotChoice === '4' ? 0.70 : 0.75);
  }

  if (lotChoice === '2') lotName = 'Corner Lot';
  else if (lotChoice === '3') lotName = 'Through Lot';
  else if (lotChoice === '4') lotName = 'Interior Lot';

  const ambf = tla * pso;
  const tosl = tla - ambf;
  const usa = tosl * 0.50; // Minimum 50% of TOSL for unpaved surface
  const isa = tosl * 0.50; // Maximum 50% of TOSL for impervious paving

  console.log('\n📐 ================= STEP-BY-STEP CALCULATION =================');
  console.log(`ZONING:               ${zoneName} | LOT TYPE: ${lotName}`);
  console.log(`TOTAL LOT AREA (TLA): ${tla.toFixed(2)} sqm`);
  console.log(`MAX ALLOWABLE PSO:    ${(pso * 100).toFixed(0)}% (PD 1096 Table VII.1)`);
  console.log(`--------------------------------------------------------------`);
  console.log(`ALLOWABLE MAX FOOTPRINT (AMBF): ${ambf.toFixed(2)} sqm  [TLA x PSO]`);
  console.log(`MIN TOTAL OPEN SPACE (TOSL):    ${tosl.toFixed(2)} sqm  [TLA - AMBF]`);
  console.log(`  • Unpaved Surface Area (USA): ${usa.toFixed(2)} sqm  (Min. 50% of TOSL)`);
  console.log(`  • Impervious Paved Area (ISA):${isa.toFixed(2)} sqm  (Max. 50% of TOSL)`);
  console.log(`--------------------------------------------------------------`);
  console.log(`PARKING METRICS:`);
  console.log(`  • Standard Car Slot:   2.50m x 5.00m (Minimum 12.50 sqm)`);
  console.log(`  • Accessible PWD Slot: 3.70m x 5.00m (Includes 1.20m clear aisle)`);
  console.log('==============================================================\n');
}

async function solveBeamMoment() {
  console.log('\n📐 --- [2] NSCP 2015 FACTORED GRAVITY LOAD & BEAM MOMENT SOLVER ---');
  const span = parseFloat(await ask('Enter Beam Span Length (L in meters, e.g. 6.0): ')) || 6.0;
  const dl = parseFloat(await ask('Enter Uniform Dead Load (D in kN/m, e.g. 15.0): ')) || 15.0;
  const ll = parseFloat(await ask('Enter Uniform Live Load (L in kN/m, e.g. 10.0): ')) || 10.0;

  const wu = (1.2 * dl) + (1.6 * ll);
  const ra = (wu * span) / 2;
  const mu = (wu * Math.pow(span, 2)) / 8;
  const cantileverMu = (wu * Math.pow(span, 2)) / 2;

  console.log('\n📐 ================= STEP-BY-STEP CALCULATION =================');
  console.log(`BEAM SPAN (L):        ${span.toFixed(2)} m`);
  console.log(`UNFACTORED DEAD (D):  ${dl.toFixed(2)} kN/m`);
  console.log(`UNFACTORED LIVE (L):  ${ll.toFixed(2)} kN/m`);
  console.log(`--------------------------------------------------------------`);
  console.log(`FACTORED ULTIMATE LOAD (Wu): ${wu.toFixed(2)} kN/m  [Wu = 1.2D + 1.6L]`);
  console.log(`SUPPORT REACTIONS (RA = RB): ${ra.toFixed(2)} kN    [RA = Wu * L / 2]`);
  console.log(`MAX MIDSPAN MOMENT (Mu):     ${mu.toFixed(2)} kN-m [Mu = Wu * L^2 / 8]`);
  console.log(`(If Cantilever Fixed Moment: ${cantileverMu.toFixed(2)} kN-m [Mu = Wu * L^2 / 2])`);
  console.log('==============================================================\n');
}

async function solveRCD() {
  console.log('\n🧱 --- [3] RCD SINGLY REINFORCED BEAM CAPACITY SOLVER ---');
  const b = parseFloat(await ask('Enter Beam Width (b in mm, e.g. 250): ')) || 250;
  const d = parseFloat(await ask('Enter Effective Depth (d in mm, e.g. 450): ')) || 450;
  const fc = parseFloat(await ask("Enter Concrete Strength (f'c in MPa, e.g. 21): ")) || 21;
  const fy = parseFloat(await ask('Enter Steel Yield Strength (fy in MPa, e.g. 275 for Gr40): ')) || 275;
  const as = parseFloat(await ask('Enter Tension Steel Area (As in mm^2, e.g. 1200): ')) || 1200;

  const a = (as * fy) / (0.85 * fc * b);
  const mn = as * fy * (d - (a / 2)) * 1e-6; // Convert N-mm to kN-m
  const phiMn = 0.90 * mn;

  console.log('\n📐 ================= STEP-BY-STEP CALCULATION =================');
  console.log(`SECTION: b = ${b}mm, d = ${d}mm | MATERIAL: f'c = ${fc}MPa, fy = ${fy}MPa`);
  console.log(`TENSION STEEL AREA (As): ${as} mm^2`);
  console.log(`--------------------------------------------------------------`);
  console.log(`WHITNEY STRESS BLOCK (a):     ${a.toFixed(2)} mm     [a = (As * fy) / (0.85 * f'c * b)]`);
  console.log(`LEVER ARM (d - a/2):          ${(d - a/2).toFixed(2)} mm`);
  console.log(`NOMINAL FLEXURAL MOMENT (Mn): ${mn.toFixed(2)} kN-m  [Mn = As * fy * (d - a/2)]`);
  console.log(`DESIGN MOMENT CAPACITY (phi*Mn): ${phiMn.toFixed(2)} kN-m [phi = 0.90 for flexure]`);
  console.log('==============================================================\n');
}

async function solveAcoustics() {
  console.log('\n⚡ --- [4] SABINE ACOUSTIC REVERBERATION TIME (RT60) SOLVER ---');
  const v = parseFloat(await ask('Enter Room Interior Volume (V in m^3, e.g. 3000): ')) || 3000;
  const a = parseFloat(await ask('Enter Total Sound Absorption (A in Sabins / m^2, e.g. 483): ')) || 483;

  const rt60 = (0.161 * v) / a;

  console.log('\n📐 ================= STEP-BY-STEP CALCULATION =================');
  console.log(`ROOM VOLUME (V):           ${v.toFixed(2)} m^3`);
  console.log(`TOTAL ABSORPTION (A):      ${a.toFixed(2)} Sabins (m^2)`);
  console.log(`--------------------------------------------------------------`);
  console.log(`REVERBERATION TIME (RT60): ${rt60.toFixed(2)} seconds [RT60 = 0.161 * V / A]`);
  console.log(`ACOUSTIC ASSESSMENT:`);
  if (rt60 >= 0.8 && rt60 <= 1.2) {
    console.log(`  🌟 OPTIMAL: Ideal for speech, lecture halls, and classrooms (0.8s - 1.2s target).`);
  } else if (rt60 > 1.2 && rt60 <= 2.2) {
    console.log(`  🎻 OPTIMAL: Ideal for symphonic music and orchestral halls (1.8s - 2.2s target).`);
  } else if (rt60 > 2.2) {
    console.log(`  ⚠️  WARNING: Excessive reverberation! Speech intelligibility will be poor. Add acoustic panels.`);
  } else {
    console.log(`  ⚠️  NOTE: Very dry / dead acoustic space. Good for recording studios.`);
  }
  console.log('==============================================================\n');
}

async function main() {
  console.log('\n🏛️  ======================================================');
  console.log('    TAMA ARCHITECTURAL CALCULATION WIZARD (Build T21)');
  console.log('    Authority: PD 1096 NBCP, NSCP 2015, ACI 318, ASHRAE');
  console.log('======================================================\n');
  console.log('Select Calculation Wizard:');
  console.log('  [1] PD 1096 NBCP Table VII.1 AMBF / TOSL / Parking Solver');
  console.log('  [2] NSCP 2015 Factored Gravity Load & Simple Beam Moment Solver');
  console.log('  [3] RCD Singly Reinforced Beam Capacity & Whitney Block Solver');
  console.log('  [4] Sabine Acoustic Reverberation Time (RT60) Solver');

  const choice = (await ask('\n👉 Choose Calculator (1-4, default 1): ')).trim() || '1';

  if (choice === '1') await solveAMBF();
  else if (choice === '2') await solveBeamMoment();
  else if (choice === '3') await solveRCD();
  else if (choice === '4') await solveAcoustics();

  rl.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
