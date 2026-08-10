#!/usr/bin/env node
/**
 * TAMA Rapid Building Code Quick-Search CLI (Build T27)
 * Instantly searches Philippine Building Codes (PD 1096, RA 9514, BP 344, RA 9266, NSCP)
 * Usage: node query-code.js [keyword]  OR  npm run code [keyword]
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const codeEntries = [
  { keywords: ['ramp', 'slope', 'pwd', 'accessible', 'bp344'], law: 'BP 344 Rule II', title: 'Pedestrian Accessibility Ramp Slope & Width', metric: 'Max slope: 1:12 (8.33%). Min clear width: 1.20m. Max run: 6.00m per ramp. Level landing of at least 1.50m required every 6.00m run. Dual handrails at 0.70m and 0.90m.' },
  { keywords: ['handrail', 'railing', 'stairs', 'ramps', 'bp344'], law: 'BP 344 Rule II', title: 'Accessible Dual Handrail Heights', metric: 'Dual handrails required at 0.70m (700mm) and 0.90m (900mm) above floor level. 300mm horizontal extension at top and bottom.' },
  { keywords: ['door', 'clearance', 'width', 'entrance', 'bp344'], law: 'BP 344 Rule II', title: 'Accessible Door Minimum Clear Opening', metric: 'Minimum 0.80m (800mm) clear opening measured between door face and stop at 90 degrees. Lever-type handles at 0.90m preferred.' },
  { keywords: ['toilet', 'washroom', 'wc', 'accessible', 'bathroom', 'bp344'], law: 'BP 344 Rule II', title: 'Accessible Water Closet Stall Dimensions', metric: 'Minimum 1.70m x 1.80m stall. 1.50m clear wheelchair turning circle. Grab bars at 0.80m height. Lavatory clearance 0.60m to 0.70m knee clearance.' },
  { keywords: ['parking', 'car', 'slot', 'dimension', 'nbcp', 'pd1096'], law: 'PD 1096 NBCP Table VII.5', title: 'Standard Off-Street Parking Slot Dimensions', metric: 'Perpendicular car slot: 2.50m x 5.00m (12.50 sqm). Parallel car slot: 2.15m x 6.00m. Bus/Truck slot: 3.60m x 12.00m.' },
  { keywords: ['pwd parking', 'accessible parking', 'parking', 'bp344'], law: 'BP 344 Rule III', title: 'Accessible (PWD) Parking Slot Dimensions', metric: '3.70m x 5.00m (includes a 1.20m clear access aisle walkway alongside parking slot).' },
  { keywords: ['ambf', 'footprint', 'pso', 'lot', 'zoning', 'nbcp', 'pd1096'], law: 'PD 1096 NBCP Table VII.1', title: 'Maximum Allowable Percentage of Site Occupancy (PSO)', metric: 'R-1 inside lot: 50% PSO (50% TOSL). R-2 inside lot: 70% PSO. C-2 inside lot: 75% PSO. C-2 corner lot: 80% PSO. AMBF = TLA x PSO.' },
  { keywords: ['tgfa', 'flar', 'gross floor area', 'nbcp', 'pd1096'], law: 'PD 1096 NBCP Table VII.G.1', title: 'Total Gross Floor Area (TGFA) & FLAR', metric: 'TGFA = Total Lot Area (TLA) x FLAR. FLAR varies from 1.50 (R-1) to 3.00-6.00 (C-2) to 9.00-18.00 (C-3).' },
  { keywords: ['stair', 'stairway', 'egress', 'width', 'fire code', 'ra9514'], law: 'RA 9514 Section 10.2.5.4', title: 'Fire Exit Stairway Clear Width', metric: 'Occupant load < 50: minimum 0.91m (915mm). Occupant load >= 50: minimum 1.12m (1,120mm). Max riser: 0.20m (200mm). Min tread: 0.25m (250mm).' },
  { keywords: ['travel distance', 'sprinkler', 'egress', 'exit', 'fire code', 'ra9514'], law: 'RA 9514 Section 10.2.5.2', title: 'Maximum Travel Distance to Exits', metric: 'Without automatic fire sprinklers: 46.00m (150 ft). With approved automatic fire sprinklers: 61.00m (200 ft). Dead-end corridor limit: 6.00m (15.00m with sprinklers).' },
  { keywords: ['occupant load', 'classroom', 'office', 'density', 'fire code', 'ra9514'], law: 'RA 9514 Section 10.2.5.2', title: 'Occupant Load Factors (Floor Area per Person)', metric: 'Classroom: 1.80 sqm/person (net). Offices: 9.30 sqm/person (gross). Assembly with chairs only: 0.65 sqm/person. Commercial retail street floor: 2.80 sqm/person.' },
  { keywords: ['prestressed', 'post-tensioning', 'tendon', 'transfer', 'concrete', 'aci318'], law: 'ACI 318 Sec. 18.18 / NSCP 2015', title: 'Minimum Prestress Transfer Compressive Strength', metric: 'Concrete compressive strength at transfer (f\'ci) must be at least 20.5 MPa (3,000 psi) before jacking post-tensioned tendons.' },
  { keywords: ['cover', 'rebar', 'concrete cover', 'footing', 'nscp'], law: 'NSCP 2015 Section 420.6.1.3', title: 'Minimum Concrete Protective Clear Cover', metric: 'Cast permanently against earth: 75mm (3 in). Cast against formwork exposed to weather: 50mm (#6-#18) / 40mm (#5 or smaller). Interior beams/columns: 40mm. Slabs: 20mm.' },
  { keywords: ['drainage', 'slope', 'plumbing', 'pipe', 'npc'], law: 'National Plumbing Code Section 704.4', title: 'Horizontal Drainage Pipe Minimum Slope', metric: 'Pipes <= 100mm (4 in) diameter: minimum 2% slope (20mm per meter or 1/4 in/ft). Pipes > 100mm: 1% slope (10mm/m) with approval.' },
  { keywords: ['electrical', 'wire', 'breaker', 'outlet', 'pec'], law: 'Philippine Electrical Code 2017', title: 'Standard Electrical Branch Circuits', metric: 'Lighting circuit: 2.0 mm^2 (#14 AWG) copper wire with 15A breaker. Convenience outlets: 3.5 mm^2 (#12 AWG) copper wire with 20A breaker (max 8-10 outlets).' },
  { keywords: ['cooling', 'ton', 'tr', 'btu', 'hvac', 'chiller'], law: 'ASHRAE Fundamentals / UT3', title: 'HVAC Cooling Load Metric Conversion', metric: '1 Ton of Refrigeration (TR) = 12,000 BTU/hr = 3.517 kW cooling capacity. Office fresh air ventilation: 15 to 20 CFM per person.' },
  { keywords: ['acoustics', 'rt60', 'reverberation', 'sabine'], law: 'Acoustic Engineering / UT3', title: 'Sabine Reverberation Time Equation', metric: 'RT60 = 0.161 * V / A (where V = room volume in m^3, A = total sound absorption in Sabins m^2). Optimal speech RT60: 0.8s to 1.2s.' }
];

function searchCode(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return codeEntries.filter(entry => {
    return entry.keywords.some(k => k.includes(q) || q.includes(k)) ||
           entry.law.toLowerCase().includes(q) ||
           entry.title.toLowerCase().includes(q) ||
           entry.metric.toLowerCase().includes(q);
  });
}

const args = process.argv.slice(2).join(' ');

if (args.trim()) {
  const results = searchCode(args);
  printResults(args, results);
} else {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  console.log('\n🔍 --- TAMA RAPID BUILDING CODE QUERY ENGINE ---');
  console.log('Search across PD 1096 NBCP, RA 9514 Fire Code, BP 344, NSCP, PEC, NPC\n');
  rl.question('👉 Enter keyword (e.g. ramp, parking, stair, travel, cover, slope): ', (query) => {
    const results = searchCode(query);
    printResults(query, results);
    rl.close();
  });
}

function printResults(query, results) {
  console.log(`\n======================================================`);
  console.log(`🔍 SEARCH RESULTS FOR: "${query}" (${results.length} found)`);
  console.log(`======================================================\n`);

  if (!results.length) {
    console.log(`❌ No exact match found for "${query}". Try: ramp, parking, stair, travel, cover, slope, toilet, or ambf.`);
    return;
  }

  results.forEach((r, i) => {
    console.log(`[${i + 1}] 📜 ${r.law} — ${r.title}`);
    console.log(`    📐 STANDARD: ${r.metric}\n`);
  });
}
