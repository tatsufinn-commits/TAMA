# 🔍 TAMA DIAGNOSTIC & QUESTION VALIDATION GUIDE (`DIAGNOSTIC_AND_TESTING_GUIDE.md`)
## Automated Quality Verification for Question Banks, Answer Keys & Law Citations
**Target System:** TAMAintegration (Mapúa BS Architecture Academic Hub)  
**Standard:** Every generated mock exam must have a verified answer key, valid code citation, and working frontmatter.  

---

# 1. THE ACADEMIC QUALITY HARNESS

Before any generated mock exam or reviewer is marked as "Approved for Study" in `reviewers/`, it must pass **4 Automated Quality Probes**:

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │               THE 4 ACADEMIC VERIFICATION PROBES                           │
 ├────────────────────────────────────────────────────────────────────────────┤
 │ 1. ANSWER KEY INTEGRITY (Exactly 1 correct answer out of A, B, C, D)       │
 │ 2. CITATION ATTACHMENT (Every question must cite a real building law)      │
 │ 3. DISTRACTOR RATIONALE (All 3 wrong choices must have trap explanations)  │
 │ 4. FRONTMATTER VALIDITY (Valid YAML subject code, term, and high-yield rank│
 └────────────────────────────────────────────────────────────────────────────┘
```

---

# 2. RUNNING THE VERIFICATION SCRIPTS

Execute from the root directory:
```bash
npm test
```
* **What it validates:**
  * Ingested markdown files in `vault/` have valid YAML frontmatter.
  * Generated mock exams in `reviewers/mock-exams/` have valid question structures and citations.
  * `docs/STUDY_LOGBOOK.md` is formatted properly without corrupt entries.
