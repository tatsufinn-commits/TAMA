# 🔌 TAMA ↔ TheHUB Integration Plugin Suite (Milestone 3)
## Technical Plugin Specifications & Ready-to-Import Bridges

This folder contains the complete, tested integration bridges connecting **TAMA (The Academic Hub)** with **TheHUB (Marciale-OS)**.

---

## 📦 Delivered Integration Bridges:

### 1. `plugin/mapua-calendar-bridge.js` (Build T13)
* Scans parsed Blackboard `.ics` feeds for keywords (`"Departmental"`, `"Exit Exam"`, `"Major Plate"`).
* Computes days remaining and urgency tiers.
* Recommends high-yield review vaults based on exam titles.

### 2. `plugin/study-momentum-bridge.js` (Build T14)
* Connects completed mock exams and flashcard drills to TheHUB's `postMessage` event bus.
* Dispatches `hub.activity` events awarding **+200 Gold, +100 XP, and bonus wisdom scrolls** to your Idle Hero companion!

### 3. `plugin/mapua-architect-brain.js` (Build T15)
* Ready-to-import Brain Profile definition (`mapua_architect`) for TheHUB's `modules/00-utils-config.js`.
* Turns Marciale into a Socratic Mapúa Studio Mentor & Exam Coach.
