#!/usr/bin/env node
/**
 * TAMA Knowledge Regression Tests (Phase VIII — Post-Audit Governance)
 * Usage: npm run ktest   (or: node knowledge-regression.js)
 * Exit codes: 0 = all pass · 1 = knowledge integrity regression detected
 * Scope: critical regulations · verified tables · known historical errors ·
 *        supersession markers · agent-critical paths
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const results = { checks: 0, passed: 0, failed: 0, msgs: [] };

function read(p) { try { return fs.readFileSync(path.join(ROOT, p), 'utf8'); } catch (e) { return ''; } }
function exists(p) { return fs.existsSync(path.join(ROOT, p)); }
function t(name, ok, detail) {
  results.checks++;
  if (ok) { results.passed++; console.log(`✅ PASS — ${name}`); }
  else { results.failed++; results.msgs.push(name); console.log(`❌ FAIL — ${name}${detail ? ' — ' + detail : ''}`); }
}

/* ===== GROUP 1: REGULATORY AUTHORITY (critical values) ===== */
console.log('\n=== GROUP 1: REGULATORY AUTHORITY ===');
const verified = read('vault/00-CORE-BUILDING-LAWS/PD-1096-NBCP/PD-1096-IRR-2005-VERIFIED-TABLES.md');
t('Table VIII.1 exists & is current', verified.includes('Table VIII.1') && !verified.includes('SUPERSEDED'), '');
t('R-2 basic PSO = 55/60 (verified)', verified.includes('**55%**') && verified.includes('**60%**'), 'R-2 basic row');
t('Com-2 PSO = 75/85 (verified)', verified.includes('**75%**') && verified.includes('**85%**'), 'Com-2 row');
t('Footnotes e/f documented', verified.includes('without firewall') && verified.includes('with firewall'), '');
t('Formulas present (PSO+ISA=MACA, PSO+TOSL=TLA)', verified.includes('MACA') && verified.includes('TLA'), '');

/* Legacy supersession: old PSO table must be visibly marked */
const legacy = read('vault/00-CORE-BUILDING-LAWS/PD-1096-NBCP/RULE-7-8-ZONING-AMBF.md');
t('Legacy RULE-7-8 marked SUPERSEDED', legacy.includes('AUDIT NOTICE') && legacy.includes('SUPERSEDED'), '');
t('Legacy mirror also marked', read('vault/01-BUILDING-LAWS-AND-PROFPRAC/PD-1096-NBCP/RULE-7-8-ZONING-AMBF.md').includes('AUDIT NOTICE'), '');

/* ===== GROUP 2: STAIR-WIDTH (verified 2026-08-10) ===== */
console.log('\n=== GROUP 2: STAIR-WIDTH REGRESSION ===');
const irr = read('vault/00-CORE-BUILDING-LAWS/PD-1096-NBCP/RAW/PD-1096_IRR-2005_FULLTEXT.txt');
t('IRR: >50 occupants → 1.10 m', /more than fif\s*ty \(50\) shall not be less than\s*1\.10 meters/.test(irr) || /more than 50 shall\s*not be less than 1\.10/.test(irr), '');
t('IRR: ≤50 occupants → 0.90 m', /fifty \(50\) or less may be 900/.test(irr), '');
t('IRR: private <10 → 0.75 m', /less than ten \(10\) may\s*be 750/.test(irr), '');
t('IRR: headroom ≥ 2.00 m', /headroom.{0,40}not less than\s*2\.00 meters/.test(irr), '');

/* Cheat-sheet must carry the corrected values */
const cheat = read('reviewers/formula-cheatsheets/PHILIPPINE_BUILDING_LAWS_MASTER_MATRIX.md');
t('Cheat-sheet: ≤50 → 0.90 m (corrected)', cheat.includes('0.90') && cheat.includes('$\\le 50$ occupants'), '');
t('Cheat-sheet: >50 → 1.10 m (verified)', cheat.includes('1.10') && cheat.includes('$>50$ occupants'), '');
t('Cheat-sheet: RA 9514 column flagged UNVERIFIED', cheat.includes('UNVERIFIED'), '');

/* ===== GROUP 3: VAULT INDEXING ===== */
console.log('\n=== GROUP 3: VAULT INDEXING ===');
const index = read('vault/VAULT-INDEX.md');
const canonical = [
  'PD-1096-IRR-2005-VERIFIED-TABLES.md','PD-1096-IRR-RULES-INDEX.md','RA-9266-VERIFIED-KEY-PROVISIONS.md',
  'BP-344-IRR-VERIFIED-PROVISIONS.md','RA-9514-VERIFIED-STRUCTURE.md','ENVIRONMENTAL-LAWS-SUMMARY.md',
  'RA-10066-HERITAGE-ACT-SUMMARY.md','PD-957-BP220-HOUSING-LAWS-SUMMARY.md','PHILIPPINE-ARCHITECTURE-HISTORY.md',
  'STATICS-FUNDAMENTALS-AND-WORKED-EXAMPLES.md','STRENGTH-OF-MATERIALS-AND-TRUSS-ANALYSIS.md',
  'MOMENT-DISTRIBUTION-WORKED-EXAMPLE.md','FRAME-ANALYSIS-WITH-SIDESWAY.md','MEPFS-WORKED-CALCULATIONS.md',
  'BUILDING-ASSEMBLIES-DEPTH.md','PHILIPPINE-CONSTRUCTION-MATERIALS-PRACTICE.md','TROPICAL-DESIGN-PHILIPPINES.md',
  'PHILIPPINE-GREEN-BUILDING.md','CLUP-AND-ZONING-PROCESS.md','ARCHITECTURAL-DESIGN-PROCESS.md',
  'ARCHITECTURAL-CASE-STUDIES.md','PHILIPPINE-ARCHITECTURAL-CASE-STUDIES.md','STUDIO-PROJECT-BRIEF-TEMPLATES.md',
  'HOA-GOTHIC-PERIOD-MODULE.md','HOA-RENAISSANCE-PERIOD-MODULE.md','HOA-MODERNISM-PERIOD-MODULE.md',
  'HOA-ROMANESQUE-BAROQUE-MODULE.md','COMMON-MISTAKES-AND-EXAM-TRAPS.md',
  'SITE-PLANNING-AND-MICROCLIMATES.md','KEVIN-LYNCH-AND-URBAN-NODES.md',
];
const missing = canonical.filter(f => !index.includes(f));
t('All canonical knowledge files indexed', missing.length === 0, missing.length ? `missing: ${missing.join(', ')}` : `${canonical.length} files`);

/* ===== GROUP 4: ACQUISITION QUEUE ===== */
console.log('\n=== GROUP 4: ACQUISITION QUEUE ===');
const targets = read('research/NEXT_ACQUISITION_TARGETS.md');
t('Completed targets marked ✅ (#1/#4/#5)', ['1 ','4 ','5 '].every(n => targets.includes(`| ${n.trim()} |`) && targets.includes('✅')), '');
t('Fire Code IRR target status honest (⏳ not ✅)', targets.includes('⏳') && !targets.includes('| 2 |**'), '');

/* ===== GROUP 5: AGENT PATHS ===== */
console.log('\n=== GROUP 5: AGENT PATHS ===');
const agentPaths = ['docs/AGENTS.md','docs/AI_RULES.md','reviewers/mock-exams/','reviewers/flashcards/',
  'vault/00-CORE-BUILDING-LAWS/','vault/01-CURRENT-COURSES/','vault/02-HISTORY-ARCHIVE/'];
t('Agent paths exist', agentPaths.every(exists), '');

/* ===== SUMMARY ===== */
console.log(`\n=== SUMMARY: ${results.passed}/${results.checks} passed, ${results.failed} failed ===`);
if (results.failed) console.log('Failed: ' + results.msgs.join('; '));
process.exit(results.failed ? 1 : 0);
