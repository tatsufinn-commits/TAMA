#!/usr/bin/env node
/**
 * TAMA Interactive Terminal Study Runner
 * Lets you run 5-minute active recall drills and mock exams directly in your terminal!
 */

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cards = [
  { q: "What is the maximum slope for an accessible ramp under BP 344?", a: "1:12 (8.33%) with 1.50m landing every 6.00m run." },
  { q: "What are the standard BP 344 dual handrail heights?", a: "0.70m and 0.90m above floor level." },
  { q: "What is the minimum clear door width under BP 344?", a: "0.80m (800mm)." },
  { q: "What are the standard dimensions for a perpendicular car parking slot?", a: "2.50m x 5.00m (PD 1096 NBCP Table VII.5)." },
  { q: "What is the occupant load factor for classrooms under RA 9514 Fire Code?", a: "1.80 sqm per person." },
  { q: "What is the minimum stair width for an exit serving >= 50 occupants under Fire Code?", a: "1.12m (1,120mm)." },
  { q: "What is the maximum travel distance to an exit in a building WITH sprinklers?", a: "61.00m (200 ft)." },
  { q: "What is the maximum midspan bending moment for a simply supported beam with load w?", a: "w*L^2 / 8." },
  { q: "What is the standard slope for horizontal plumbing drainage pipes <= 100mm?", a: "2.0% (20mm per meter)." },
  { q: "What is the maximum Percentage of Site Occupancy (PSO) for an R-1 inside lot?", a: "50% (without firewall)." }
];

console.log('\n🏛️  ======================================================');
console.log('    TAMA ARCHITECTURAL ACTIVE RECALL DRILL (5-MINUTE FLASH)');
console.log('    Authority: PD 1096, RA 9514, BP 344, NSCP 2015');
console.log('======================================================\n');

let current = 0;
let score = 0;

function askNext() {
  if (current >= cards.length) {
    console.log(`\n🎉 DRILL COMPLETE!`);
    console.log(`📊 Score: ${score} / ${cards.length} (${Math.round((score / cards.length) * 100)}%)`);
    console.log(`\nNext step: Log your score in docs/STUDY_LOGBOOK.md!`);
    rl.close();
    return;
  }

  const card = cards[current];
  console.log(`[Q${current + 1}/${cards.length}] ${card.q}`);
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
