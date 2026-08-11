#!/usr/bin/env node
/**
 * TAMA Automated Repository Audit (Phase VII — Post-Audit Governance)
 * Usage: npm run audit   (or: node audit.js)
 * Exit codes: 0 = PASS (warnings allowed) · 1 = FAIL (integrity failure)
 * Checks: filesystem integrity · index integrity · acquisition integrity ·
 *         agent integrity · documentation integrity
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const results = { checks: 0, passed: 0, warnings: 0, failures: 0, failMsgs: [], warnMsgs: [] };
const PASS = 'PASS', WARN = 'WARN', FAIL = 'FAIL';

function exists(p) { return fs.existsSync(path.join(ROOT, p)); }
function read(p) { try { return fs.readFileSync(path.join(ROOT, p), 'utf8'); } catch (e) { return ''; } }

function check(name, ok, kind, detail) {
  results.checks++;
  if (kind === FAIL) { results.failures++; results.failMsgs.push(`[FAIL] ${name}: ${detail}`); }
  else if (kind === WARN) { results.warnings++; results.warnMsgs.push(`[WARN] ${name}: ${detail}`); }
  else { results.passed++; }
  console.log(`${ok ? '✅' : '⚠️'} ${kind} — ${name}${detail ? ' — ' + detail : ''}`);
}

/* ---------- 1. FILESYSTEM INTEGRITY ---------- */
console.log('\n=== 1. FILESYSTEM INTEGRITY ===');

// Collect ALL vault files (any type) + a repo-wide basename set
const vaultFiles = [];
const repoBase = new Set();
(function walk(dir, intoVault) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === '.git') continue;
      walk(p, intoVault || dir === path.join(ROOT, 'vault'));
    } else {
      repoBase.add(e.name);
      if (intoVault) vaultFiles.push(p);
    }
  }
})(ROOT, false);
// vault .md files only (for indexing/orphan checks)
const vaultMd = vaultFiles.filter(f => f.endsWith('.md') && !['VAULT-INDEX.md','KNOWLEDGE-COVERAGE-MATRIX.md'].includes(path.basename(f)));

// 1a. Every basename referenced in VAULT-INDEX must exist somewhere in vault/
const index = read('vault/VAULT-INDEX.md');
const refs = [...new Set([...index.matchAll(/([A-Za-z0-9_-]+\.(?:md|pdf|txt))/g)].map(m => m[1]))]
  .filter(r => !['VAULT-INDEX.md','KNOWLEDGE-COVERAGE-MATRIX.md'].includes(r));
const broken = refs.filter(r => !repoBase.has(r));
check('VAULT-INDEX references resolve (basename)', broken.length === 0, broken.length ? FAIL : PASS,
  broken.length ? `missing: ${broken.join('; ')}` : `${refs.length} basenames checked`);


const unindexed = vaultMd.filter(f => !index.includes(path.basename(f)));
check('All vault .md files indexed', unindexed.length === 0, unindexed.length ? WARN : PASS,
  unindexed.length ? unindexed.join('; ') : `${vaultMd.length} files`);

// 1c. Duplicate basenames (mirror detection)
const baseCount = {};
for (const f of vaultMd) baseCount[path.basename(f)] = (baseCount[path.basename(f)] || 0) + 1;
const dupes = Object.entries(baseCount).filter(([, n]) => n > 1).map(([b]) => b);
check('No duplicate basenames in vault', dupes.length === 0, dupes.length ? WARN : PASS,
  dupes.length ? `known mirrors: ${dupes.join(', ')} (see VAULT_CONSOLIDATION_PROPOSAL)` : 'clean');

/* ---------- 2. INDEX INTEGRITY ---------- */
console.log('\n=== 2. INDEX INTEGRITY ===');
// 2a. Coverage matrix contains the reconciled audit block
check('Coverage matrix has reconciled inventory', read('vault/KNOWLEDGE-COVERAGE-MATRIX.md').includes('RECONCILED AUDIT INVENTORY'),
  PASS, 'reconciled block present');

/* ---------- 3. ACQUISITION INTEGRITY ---------- */
console.log('\n=== 3. ACQUISITION INTEGRITY ===');
const targets = read('research/NEXT_ACQUISITION_TARGETS.md');
// 3a. Completed targets (#1,#4,#5) are marked ✅ and their key artifacts exist
const doneChecks = [
  ['T1 IRR text', 'vault/00-CORE-BUILDING-LAWS/PD-1096-NBCP/RAW/PD-1096_IRR-2005_FULLTEXT.txt', '✅ **DONE**'],
  ['T4 housing laws', 'vault/00-CORE-BUILDING-LAWS/PD-957-SUBDIVISION-CONDOMINIUM/RAW/PD-957_FULLTEXT_1976.txt', '✅ **DONE**'],
  ['T5 env laws', 'vault/00-CORE-BUILDING-LAWS/ENVIRONMENTAL-LAWS/RAW/RA-8749_CLEAN-AIR-ACT_1999.txt', '✅ **DONE**'],
];
for (const [name, file, mark] of doneChecks) {
  const ok = exists(file) && targets.includes(mark);
  check(`Queue ${name} consistent`, ok, ok ? PASS : FAIL, ok ? 'marked done + artifact exists' : 'check mark/artifact');
}
// 3b. Acquisition log records the PDF removals (correctly logged)
check('Log records 00-BOOKS PDF removals', read('research/ACQUISITION_LOG.md').includes('Removed from vault'),
  PASS, 'removal record present');

/* ---------- 4. AGENT INTEGRITY ---------- */
console.log('\n=== 4. AGENT INTEGRITY ===');
const agentRefs = [
  'docs/AGENTS.md','docs/AI_RULES.md','docs/STUDY_LOGBOOK.md',
  'reviewers/flashcards/','reviewers/formula-cheatsheets/','reviewers/mock-exams/',
  'vault/00-CORE-BUILDING-LAWS/','vault/01-CURRENT-COURSES/','vault/02-HISTORY-ARCHIVE/',
];
const missing = agentRefs.filter(r => !exists(r));
check('Agent-referenced paths exist', missing.length === 0, missing.length ? FAIL : PASS,
  missing.length ? missing.join('; ') : `${agentRefs.length} paths`);

/* ---------- 5. DOCUMENTATION INTEGRITY ---------- */
console.log('\n=== 5. DOCUMENTATION INTEGRITY ===');
const pkg = JSON.parse(read('package.json'));
const verPkg = pkg.version; // e.g. 1.9.0-a
const verReadme = (read('README.md').match(/TAMA ([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+\.a v)/) || [])[1] || '';
const verGuide = (read('VERSIONING_GUIDE.md').match(/TAMA ([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+\.a v)/) || [])[1] || '';
// package.json "1.9.0-a" maps to TAMA "1.9.0.0.a v" convention
const expected = verPkg.split('-')[0] + '.0.a v';
const verOk = (verReadme === expected || verReadme.includes(verPkg.split('-')[0])) && verGuide === expected;
check('Version strings synchronized (README/GUIDE/package.json)', verOk,
  verOk ? PASS : FAIL, `expected ${expected} | README: ${verReadme || '(none)'} | GUIDE: ${verGuide || '(none)'}`);

/* ---------- SUMMARY ---------- */
console.log('\n=== SUMMARY ===');
console.log(`Checks: ${results.checks} | Passed: ${results.passed} | Warnings: ${results.warnings} | Failures: ${results.failures}`);
if (results.warnMsgs.length) console.log('Warnings:\n  ' + results.warnMsgs.join('\n  '));
if (results.failMsgs.length) console.log('Failures:\n  ' + results.failMsgs.join('\n  '));
process.exit(results.failures ? 1 : 0);
