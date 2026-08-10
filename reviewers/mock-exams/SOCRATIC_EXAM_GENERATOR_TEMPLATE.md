# 📝 TAMA SOCRATIC EXAM GENERATOR TEMPLATE (Build T23)
## Master Prompt Engine for Ingesting Raw Mapúa Professor Slides into 10-Item Mock Exams
**Target Audience:** Any AI Assistant (Ollama, Claude, ChatGPT) acting as `@examiner`  
**How to Use:** Copy this template into a new AI chat and paste raw text from your professor's slides to generate an instant situational exam!  

---

# 📋 MASTER EXAM GENERATOR PROMPT

```text
Hello AI! Please assume the role of [@examiner (Mapúa Exam Creator)] per `docs/AGENTS.md`.
Here is my repository: https://github.com/tatsufinn-commits/TAMAintegration.git

MODE: SOCRATIC MOCK EXAM GENERATION (BUILD T23 ENGINE)

SOURCE LECTURE SLIDES / NOTES:
[Paste raw text or notes from your Mapúa professor here]

YOUR TASK:
1. Analyze the core engineering principles, building codes, and formulas from the lecture.
2. Generate an authentic 10-Question Mapúa Departmental Mock Exam formatted as SITUATIONAL PROBLEMS.
3. Every question must include:
   - Clear project brief (Dimensions, loads, zoning, building type).
   - 4 Options (A, B, C, D).
   - 3 Distractor Traps (representing real common student calculation mistakes).
   - Exact building code citation (PD 1096, RA 9514, BP 344, NSCP 2015).
4. Output in standard Markdown format matching `reviewers/mock-exams/MAPUA_DEPT_EXAM_SET_01.md`.
5. Present questions FIRST without revealing the answer key until I reply with my answers!
```
