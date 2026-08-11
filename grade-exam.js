#!/usr/bin/env node
/**
 * TAMA Automated Terminal Exam Grader (Build T20)
 * Evaluates student answers against answer keys, explains distractor traps,
 * and automatically logs scores to docs/STUDY_LOGBOOK.md!
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const default100 = path.join(__dirname, 'reviewers/mock-exams/MAPUA_EXIT_EXAM_100_ITEM_GRAND_SIMULATION.json');
const default50 = path.join(__dirname, 'reviewers/mock-exams/MAPUA_EXIT_EXAM_50_ITEM_MASTER_SIMULATION.json');

const targetArg = process.argv[2];
const examFile = (targetArg === '50' || targetArg === 'set02')
  ? default50
  : (fs.existsSync(default100) ? default100 : default50);
const logbookFile = path.join(__dirname, 'docs/STUDY_LOGBOOK.md');

if (!fs.existsSync(examFile)) {
  console.error(`Exam file not found: ${examFile}`);
  process.exit(1);
}

const exam = JSON.parse(fs.readFileSync(examFile, 'utf8'));

console.log('\n🏛️  ======================================================');
console.log(`    TAMA AUTOMATED EXAM GRADER (Build T20)`);
console.log(`    EXAM: ${exam.title}`);
console.log(`    TOTAL QUESTIONS: ${exam.questions.length} | PASSING: 70%`);
console.log('======================================================\n');

let index = 0;
let score = 0;
const results = [];

function promptQuestion() {
  if (index >= exam.questions.length) {
    finalizeExam();
    return;
  }

  const q = exam.questions[index];
  console.log(`\n[Question ${q.id}/${exam.questions.length}] (${q.category})`);
  console.log(`${q.question}`);
  Object.keys(q.options).forEach(opt => {
    console.log(`  [${opt}] ${q.options[opt]}`);
  });

  rl.question('\n👉 Your Choice (A, B, C, D): ', (ans) => {
    const cleanAns = ans.trim().toUpperCase();
    const isCorrect = cleanAns === q.correct;
    if (isCorrect) score++;

    results.push({
      id: q.id,
      category: q.category,
      userAnswer: cleanAns,
      correctAnswer: q.correct,
      isCorrect,
      citation: q.citation,
      trap: q.trap
    });

    if (isCorrect) {
      console.log(`   ✅ CORRECT! [${q.citation}]`);
    } else {
      console.log(`   ❌ INCORRECT. Correct answer is [${q.correct}]`);
      console.log(`   ⚠️  TRAP NOTE: ${q.trap}`);
      console.log(`   📜 CITATION: ${q.citation}`);
    }
    console.log('------------------------------------------------------');
    index++;
    promptQuestion();
  });
}

function finalizeExam() {
  const percentage = Math.round((score / exam.questions.length) * 100);
  const isPassed = percentage >= 70;

  console.log('\n🎉 ======================================================');
  console.log(`    EXAM COMPLETED!`);
  console.log(`    FINAL SCORE: ${score} / ${exam.questions.length} (${percentage}%)`);
  console.log(`    STATUS: ${isPassed ? '🟢 PASSED (Exam Ready!)' : '🔴 NEEDS REVIEW (Review Traps)'}`);
  console.log('======================================================\n');

  // Identify weak spots
  const wrongItems = results.filter(r => !r.isCorrect);
  const weakCategories = [...new Set(wrongItems.map(r => r.category))];

  // Append entry to docs/STUDY_LOGBOOK.md
  if (fs.existsSync(logbookFile)) {
    const today = new Date().toISOString().split('T')[0];
    const logEntry = `\n### [STUDY SESSION] Automated Exam Run: ${exam.title}
* **Date:** ${today}
* **Faculty in Charge:** @examiner / @architect
* **Activity Executed:** Automated 20-Question Mapúa ALE Exit Simulation
* **Score Achieved:** ${score} / ${exam.questions.length} (${percentage}%) — ${isPassed ? 'PASSED' : 'RETAKE RECOMMENDED'}
* **Identified Weak Categories:** ${weakCategories.length ? weakCategories.join(', ') : 'None! 100% Mastery'}
* **Next Action:** ${isPassed ? 'Proceed to next subject drill' : 'Drill flashcards in ' + (weakCategories[0] || 'Building Laws')}
`;
    fs.appendFileSync(logbookFile, logEntry, 'utf8');
    console.log(`📝 Score and weak-spot analysis automatically logged to docs/STUDY_LOGBOOK.md!`);
  }

  rl.close();
}

promptQuestion();
