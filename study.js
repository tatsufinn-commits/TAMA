#!/usr/bin/env node
/**
 * TAMA Interactive Multi-Mode Terminal Study Suite (v1.5.0)
 * Allows students to run 5-minute active recall drills or subject-specific mock exams.
 */

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionBanks = {
  laws: [
    { q: "What is the maximum slope for an accessible ramp under BP 344?", a: "1:12 (8.33%) with 1.50m landing every 6.00m run." },
    { q: "What are the standard BP 344 dual handrail heights?", a: "0.70m and 0.90m above floor level." },
    { q: "What is the minimum clear door width under BP 344?", a: "0.80m (800mm)." },
    { q: "What are the standard dimensions for a perpendicular car parking slot?", a: "2.50m x 5.00m (PD 1096 NBCP Table VII.5)." },
    { q: "What is the occupant load factor for classrooms under RA 9514 Fire Code?", a: "1.80 sqm per person." },
    { q: "What is the minimum stair width for an exit serving >= 50 occupants under Fire Code?", a: "1.12m (1,120mm)." },
    { q: "What is the maximum travel distance to an exit in a building WITH sprinklers?", a: "61.00m (200 ft)." },
    { q: "What is the maximum Percentage of Site Occupancy (PSO) for an R-1 inside lot?", a: "50% (without firewall)." }
  ],
  tech: [
    { q: "What is the minimum concrete compressive strength required before post-tensioning transfer (f'ci)?", a: "20.5 MPa (3,000 psi) per ACI 318." },
    { q: "What do the numbers 24 and 84 denote in W 24 x 84 steel shape?", a: "24 inch nominal depth, 84 lbs/ft nominal weight." },
    { q: "What is the minimum clear concrete cover for earth-cast footings per NSCP 2015?", a: "75mm (3 inches)." },
    { q: "What is the volumetric ratio of Class A mortar mix?", a: "1 part cement : 2 parts sand (1:2)." },
    { q: "What are standard Philippine CHB nominal length and height?", a: "200mm x 400mm (8 in x 16 in)." }
  ],
  struct: [
    { q: "What is the NSCP 2015 basic gravity ultimate load combination formula?", a: "Wu = 1.2*D + 1.6*L." },
    { q: "What is the maximum midspan bending moment for a simply supported beam carrying load w?", a: "M_max = w * L^2 / 8." },
    { q: "What is the flexural bending stress formula in terms of section modulus S?", a: "sigma = M / S (where S = b*h^2 / 6 for rectangle)." },
    { q: "What is the strength reduction factor (phi) for tension-controlled RCD flexure?", a: "phi = 0.90 per NSCP 2015." }
  ],
  utilities: [
    { q: "What is the minimum slope required for horizontal plumbing drainage pipes <= 100mm?", a: "2.0% (20mm per meter)." },
    { q: "What is the minimum waste pipe diameter for a water closet (toilet)?", a: "75mm (3 inch) minimum." },
    { q: "What is the standard wire size and breaker rating for a general convenience outlet circuit?", a: "3.5 mm^2 (#12 AWG) copper wire with 20A breaker." },
    { q: "What is the cooling capacity conversion for 1 Ton of Refrigeration (TR)?", a: "12,000 BTU/hr = 3.517 kW." },
    { q: "What is Sabine's formula for reverberation time (RT60)?", a: "RT60 = (0.161 * V) / A." }
  ]
};

console.log('\n🏛️  ======================================================');
console.log('    TAMA INTERACTIVE MAPÚA ACADEMIC STUDY SUITE (v1.5.0)');
console.log('    Authority: PD 1096, RA 9514, BP 344, NSCP, PEC, NPC');
console.log('======================================================\n');
console.log('Select Study Mode:');
console.log('  [1] Building Laws & BP 344 Drill (8 Items)');
console.log('  [2] Building Tech & Construction Drill (5 Items)');
console.log('  [3] Structural Calculations & RCD Drill (4 Items)');
console.log('  [4] Utilities & MEPFS Engineering Drill (5 Items)');
console.log('  [5] Full Comprehensive Exit Simulation (All 22 Items)');

rl.question('\n👉 Choose Mode (1-5, default 1): ', (choice) => {
  let deck = questionBanks.laws;
  const c = choice.trim();
  if (c === '2') deck = questionBanks.tech;
  else if (c === '3') deck = questionBanks.struct;
  else if (c === '4') deck = questionBanks.utilities;
  else if (c === '5') deck = [...questionBanks.laws, ...questionBanks.tech, ...questionBanks.struct, ...questionBanks.utilities];

  console.log(`\n🚀 Starting drill with ${deck.length} questions...\n`);
  let current = 0;
  let score = 0;

  function askNext() {
    if (current >= deck.length) {
      console.log(`\n🎉 DRILL COMPLETE!`);
      const pct = Math.round((score / deck.length) * 100);
      console.log(`📊 Score: ${score} / ${deck.length} (${pct}%)`);
      if (pct >= 80) console.log(`🌟 STATUS: EXAM READY! High mastery demonstrated.`);
      else console.log(`⚠️  STATUS: REVIEW RECOMMENDED. Check docs/STUDY_LOGBOOK.md!`);
      rl.close();
      return;
    }

    const card = deck[current];
    console.log(`[Q${current + 1}/${deck.length}] ${card.q}`);
    rl.question('👉 Your Answer (or press Enter to reveal): ', () => {
      console.log(`   🔑 STANDARD: ${card.a}\n`);
      rl.question('   Did you get it right? (y/n): ', (ans) => {
        if (ans.trim().toLowerCase() === 'y') score++;
        current++;
        console.log('------------------------------------------------------');
        askNext();
      });
    });
  }

  askNext();
});
