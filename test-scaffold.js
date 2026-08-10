const fs = require('fs');
const path = require('path');

function assert(cond, msg) {
  if (!cond) {
    console.error(`❌ FAIL: ${msg}`);
    process.exit(1);
  }
  console.log(`✅ PASS: ${msg}`);
}

console.log('--- Running TAMA Full 7-Cluster System Verification (v1.9.0) ---');

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

// 3. Verify 7-Cluster Vault Knowledge Base (Milestone 7)
const requiredVaultFiles = [
  'vault/00-INCOMING-DROP-BOX/README.md',
  'vault/01-BUILDING-LAWS-AND-PROFPRAC/PD-1096-NBCP/RULE-7-8-ZONING-AMBF.md',
  'vault/01-BUILDING-LAWS-AND-PROFPRAC/RA-9514-FIRE-CODE/EGRESS-AND-OCCUPANT-LOADS.md',
  'vault/01-BUILDING-LAWS-AND-PROFPRAC/BP-344-ACCESSIBILITY/RAMPS-DOORS-PARKING.md',
  'vault/01-BUILDING-LAWS-AND-PROFPRAC/RA-9266-ARCHITECTURE-ACT/ARCHITECTURE-ACT-AND-SPP200.md',
  'vault/01-BUILDING-LAWS-AND-PROFPRAC/UAP-DOC-301-SPP-DOCS/CONTRACTS-AND-BIDDING-DOCS.md',
  'vault/02-DESIGN-STUDIO-SPINE/AD5-AD6-SITE-AND-LANDSCAPE/ZONING-AND-SPACE-PROGRAMMING.md',
  'vault/03-BUILDING-TECHNOLOGY-SERIES/BT1-MATERIALS-AND-JOINERY/WOOD-JOINERY-AND-MASONRY.md',
  'vault/03-BUILDING-TECHNOLOGY-SERIES/BT3-HEAVY-RCD-AND-PRESTRESS/PRESTRESSED-CONCRETE-AND-STEEL.md',
  'vault/04-BUILDING-UTILITIES-SERIES/BU1-PLUMBING-AND-SANITARY/PLUMBING-AND-ELECTRICAL-SYSTEMS.md',
  'vault/04-BUILDING-UTILITIES-SERIES/BU3-HVAC-AND-MECHANICAL/CENTRAL-HVAC-AND-ACOUSTICS.md',
  'vault/05-STRUCTURAL-STUDIES-SERIES/STRUC1-STATICS-AND-EQUILIBRIUM/SHEAR-AND-MOMENT-EQUATIONS.md',
  'vault/05-STRUCTURAL-STUDIES-SERIES/STRUC3-THEORY-OF-STRUCTURES/MOMENT-DISTRIBUTION-AND-RCD.md',
  'vault/06-HISTORY-AND-THEORY-SERIES/HOA1-ANCIENT-TO-RENAISSANCE/HISTORY-OF-ARCHITECTURE-TIMELINE.md',
  'vault/06-HISTORY-AND-THEORY-SERIES/TOA-FORM-SPACE-AND-ORDER/THEORY-OF-ARCHITECTURE-CHING-PRINCIPLES.md',
  'vault/07-PLANNING-AND-ENVIRONMENTAL/PLAN1-SITE-PLANNING-AND-ECOLOGY/SITE-PLANNING-AND-MICROCLIMATES.md',
  'vault/07-PLANNING-AND-ENVIRONMENTAL/PLAN2-URBAN-DESIGN-AND-HOUSING/KEVIN-LYNCH-AND-URBAN-NODES.md'
];

requiredVaultFiles.forEach(file => {
  assert(fs.existsSync(file), `Vault file populated: ${file}`);
  const content = fs.readFileSync(file, 'utf8');
  assert(content.length > 200, `Vault content substantive (>200 bytes): ${file}`);
});

// 4. Verify courses research suite
const requiredCoursesFiles = [
  'courses/MAPUA_ARCHITECTURE_CURRICULUM.md',
  'courses/COURSE_MASTER_INDEX.md',
  'courses/ARCHITECTURE_KNOWLEDGE_MAP.md',
  'courses/REVIEWER_KNOWLEDGE_BASE.md'
];

requiredCoursesFiles.forEach(file => {
  assert(fs.existsSync(file), `Courses research file exists: ${file}`);
});

// 5. Verify reviewers, mock exams, flashcard app, & design studio
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
});

// 6. Verify TheHUB plugin bridges
const requiredPlugins = [
  'plugin/mapua-calendar-bridge.js',
  'plugin/study-momentum-bridge.js',
  'plugin/mapua-architect-brain.js',
  'plugin/README.md'
];

requiredPlugins.forEach(plug => {
  assert(fs.existsSync(plug), `Plugin bridge exists: ${plug}`);
});

// 7. Verify roadmap & proposal
assert(fs.existsSync('research/directives/roadmap/MASTER_ROADMAP_TAMA_V1.0.md'), 'Master Roadmap exists in research/directives/roadmap/');
assert(fs.existsSync('research/directives/roadmap/TAMA_THEHUB_INTEGRATION_PROPOSAL_V1.0.md'), 'Integration Proposal exists in research/directives/roadmap/');

console.log('--- ALL TAMA 7-CLUSTER FULL-SYSTEM VERIFICATIONS PASSED (100% GREEN) ---');
process.exit(0);
