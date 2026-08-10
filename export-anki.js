#!/usr/bin/env node
/**
 * TAMA Anki / Quizlet Flashcard Exporter (Build T18)
 * Parses all Markdown flashcard decks in reviewers/flashcards/ and exports a clean TSV for Anki mobile.
 */

const fs = require('fs');
const path = require('path');

const flashcardDir = path.join(__dirname, 'reviewers/flashcards');
const outputFile = path.join(flashcardDir, 'anki_import_deck.tsv');

console.log('--- TAMA Anki Flashcard Exporter (Build T18) ---');

if (!fs.existsSync(flashcardDir)) {
  console.error(`Directory not found: ${flashcardDir}`);
  process.exit(1);
}

const files = fs.readdirSync(flashcardDir).filter(f => f.endsWith('.md'));
let totalCards = 0;
const tsvRows = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(flashcardDir, file), 'utf8');
  const lines = content.split('\n');
  let currentFront = '';
  let currentBack = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.includes('**FRONT:**')) {
      currentFront = line.replace(/.*?\*\*FRONT:\*\*\s*/, '').trim();
    } else if (line.includes('**BACK:**')) {
      currentBack = line.replace(/.*?\*\*BACK:\*\*\s*/, '').trim();
      if (currentFront && currentBack) {
        // Clean up markdown formatting for Anki
        const cleanFront = currentFront.replace(/\*\*/g, '').replace(/`/g, '');
        const cleanBack = currentBack.replace(/\*\*/g, '').replace(/`/g, '');
        tsvRows.push(`${cleanFront}\t${cleanBack}\t${file.replace('.md', '')}`);
        totalCards++;
        currentFront = '';
        currentBack = '';
      }
    }
  }
});

fs.writeFileSync(outputFile, tsvRows.join('\n'), 'utf8');
console.log(`✅ Successfully exported ${totalCards} flashcards from ${files.length} decks to:`);
console.log(`   📂 ${outputFile}`);
console.log(`\n📲 How to import into Anki / Quizlet on your phone:`);
console.log(`   1. Open Anki on Desktop / Web -> Import File -> Select anki_import_deck.tsv`);
console.log(`   2. Set Separator to Tab -> Sync to your phone!`);
