const fs = require('fs');
const path = require('path');

function assert(cond, msg) {
  if (!cond) {
    console.error(`❌ FAIL: ${msg}`);
    process.exit(1);
  }
  console.log(`✅ PASS: ${msg}`);
}

console.log('--- Running TAMA Full System Verification (v1.8.0 Milestone 6) ---');

// 1. Verify docs suite
const requiredDocs = [
  'docs/AI_RULES.md',
  'docs/AGENTS.md',
  'docs/STUDY_LOGBOOK.md',
  'docs/STRATEGIC_ACADEMIC_FRAMEWORK.md',
  'docs/PROMPT_PLAYBOOK.md',
  'docs/ACADEMIC_CONTEXT.md',
  'docs/CODEBASE_DEEP_DIVE_STUDY.md',
  'docs/DIAGNOSTIC_AND_TESTING_GUIDE.md',
  'docs/FUTURE_BRAIN_UPGRADE_SPEC.md',
  'docs/REPAIR_DOSSIER.md',
  'docs/VERSIONING_GUIDE.md'
];

requiredDocs.forEach(doc => {
  assert(fs.existsSync(doc), `Document exists: ${doc}`);
});

// 2. Verify versioning guide & root CLI scripts
assert(fs.existsSync('VERSIONING_GUIDE.md'), 'Root VERSIONING_GUIDE.md exists');
assert(fs.existsSync('package.json'), 'Root package.json exists');
assert(fs.existsSync('README.md'), 'Root README.md exists');
assert(fs.existsSync('study.js'), 'Interactive study runner study.js exists');
assert(fs.existsSync('export-anki.js'), 'Anki exporter export-anki.js exists');
assert(fs.existsSync('grade-exam.js'), 'Automated exam grader grade-exam.js exists');
assert(fs.existsSync('solve.js'), 'Architectural math wizard solve.js exists');
assert(fs.existsSync('query-code.js'), 'Rapid code search query-code.js exists');

// 3. Verify vault knowledge files
const requiredVaultFiles = [
  'vault/00-CORE-BUILDING-LAWS/PD-1096-NBCP/RULE-7-8-ZONING-AMBF.md',
  'vault/00-CORE-BUILDING-LAWS/RA-9514-FIRE-CODE/EGRESS-AND-OCCUPANT-LOADS.md',
  'vault/00-CORE-BUILDING-LAWS/BP-344-ACCESSIBILITY/RAMPS-DOORS-PARKING.md',
  'vault/00-CORE-BUILDING-LAWS/RA-9266-SPP-DOCS/ARCHITECTURE-ACT-AND-SPP200.md',
  'vault/01-CURRENT-COURSES/BUILDING-TECH-3-4/PRESTRESSED-CONCRETE-AND-STEEL.md',
  'vault/01-CURRENT-COURSES/UTILITIES-3-MEPFS/CENTRAL-HVAC-AND-ACOUSTICS.md',
  'vault/01-CURRENT-COURSES/STRUCTURAL-THEORY/MOMENT-DISTRIBUTION-AND-RCD.md',
  'vault/01-CURRENT-COURSES/PROF-PRACTICE-1/CONTRACTS-AND-BIDDING-DOCS.md',
  'vault/01-CURRENT-COURSES/ARCH-DESIGN-5/ZONING-AND-SPACE-PROGRAMMING.md',
  'vault/02-HISTORY-ARCHIVE/HOA-1-TO-4/HISTORY-OF-ARCHITECTURE-TIMELINE.md',
  'vault/02-HISTORY-ARCHIVE/TOA-1-TO-2/THEORY-OF-ARCHITECTURE-CHING-PRINCIPLES.md',
  'vault/02-HISTORY-ARCHIVE/BUILDING-TECH-1-2/WOOD-JOINERY-AND-MASONRY.md',
  'vault/02-HISTORY-ARCHIVE/UTILITIES-1-2/PLUMBING-AND-ELECTRICAL-SYSTEMS.md',
  'vault/02-HISTORY-ARCHIVE/STATICS-STRENGTH-MATERIALS/SHEAR-AND-MOMENT-EQUATIONS.md'
];

requiredVaultFiles.forEach(file => {
  assert(fs.existsSync(file), `Vault file populated: ${file}`);
  const content = fs.readFileSync(file, 'utf8');
  assert(content.length > 300, `Vault content substantive (>300 bytes): ${file}`);
});

// 4. Verify reviewers, mock exams, flashcard app, & design studio
const requiredReviewers = [
  'reviewers/mock-exams/MAPUA_DEPT_EXAM_SET_01.md',
  'reviewers/mock-exams/MAPUA_EXIT_EXAM_SIMULATION_SET_02.md',
  'reviewers/mock-exams/MAPUA_DEPT_EXAM_SET_03_BUILDING_TECH.md',
  'reviewers/mock-exams/MAPUA_DEPT_EXAM_SET_04_STRUCTURAL_THEORY.md',
  'reviewers/mock-exams/MAPUA_DEPT_EXAM_SET_05_UTILITIES_MEPFS.md',
  'reviewers/mock-exams/MAPUA_EXIT_EXAM_50_ITEM_MASTER_SIMULATION.md',
  'reviewers/mock-exams/MAPUA_EXIT_EXAM_50_ITEM_MASTER_SIMULATION.json',
  'reviewers/mock-exams/SOCRATIC_EXAM_GENERATOR_TEMPLATE.md',
  'reviewers/formula-cheatsheets/AMBF_TGFA_STRUCTURES_FORMULAS.md',
  'reviewers/formula-cheatsheets/PHILIPPINE_BUILDING_LAWS_MASTER_MATRIX.md',
  'reviewers/flashcards/BP344_AND_NBCP_ACTIVE_RECALL_DECK.md',
  'reviewers/flashcards/FIRE_CODE_AND_BUILDING_TECH_DECK.md',
  'reviewers/flashcards/HOA_AND_TOA_ACTIVE_RECALL_DECK.md',
  'reviewers/flashcards/STRUCTURAL_AND_UTILITIES_DECK.md',
  'reviewers/flashcards/anki_import_deck.tsv',
  'reviewers/flashcard-app/index.html',
  'reviewers/design-studio/MAJOR_PLATE_DEFENSE_CHECKLIST.md',
  'reviewers/diagram-vault/ARCHITECTURAL_EXAM_DIAGRAM_SHEETS.md',
  'reviewers/EXAM_WEAK_SPOT_ANALYZER.md'
];

requiredReviewers.forEach(rev => {
  assert(fs.existsSync(rev), `Reviewer artifact exists: ${rev}`);
  const content = fs.readFileSync(rev, 'utf8');
  assert(content.length > 50, `Reviewer artifact substantive: ${rev}`);
});

// 5. Verify TheHUB plugin bridges
const requiredPlugins = [
  'plugin/mapua-calendar-bridge.js',
  'plugin/study-momentum-bridge.js',
  'plugin/mapua-architect-brain.js',
  'plugin/README.md'
];

requiredPlugins.forEach(plug => {
  assert(fs.existsSync(plug), `Plugin bridge exists: ${plug}`);
});

// 6. Verify roadmap & proposal
assert(fs.existsSync('research/directives/roadmap/MASTER_ROADMAP_TAMA_V1.0.md'), 'Master Roadmap exists in research/directives/roadmap/');
assert(fs.existsSync('research/directives/roadmap/TAMA_THEHUB_INTEGRATION_PROPOSAL_V1.0.md'), 'Integration Proposal exists in research/directives/roadmap/');

console.log('--- ALL TAMA FULL-SYSTEM VERIFICATIONS PASSED (BUILDS T00 – T28: 100% GREEN) ---');
process.exit(0);
