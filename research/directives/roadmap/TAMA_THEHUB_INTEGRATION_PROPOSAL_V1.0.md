# INTEGRATION PROPOSAL — TAMAintegration & TheHUB (Marciale-OS)
## Technical Architecture, Single-Brain Model & Plugin Specification
**Proposal Target:** Staged Milestone 3 Release (Post-TAMA Knowledge Vault Stabilization)  
**Author:** Tatsufinn (with Lead Systems Architecture Directives)  
**Status:** Approved Master Integration Proposal  

---

# 1. EXECUTIVE SUMMARY & PHILOSOPHY

The goal of this proposal is to seamlessly connect **TAMAintegration (The Academic Knowledge Vault & Exam Engine)** with **TheHUB (The Local-First Command Center)** without causing prompt bloat, memory fragmentation, or AI identity confusion on consumer laptop hardware.

Instead of running two competing AI assistants, we establish the **"Textbook & Single-Brain Model"**:
* **TAMAintegration** acts as the **Specialized Knowledge Vault** (curriculum data, building laws, flashcards, exam questions).
* **TheHUB's Marciale AI** acts as the **Unified Brain** (powered by your single local Ollama daemon on port 11434), adopting a specialized `mapua_architect` profile during study sessions.

```text
 ┌────────────────────────────────────────────────────────────────────────────┐
 │                    THE UNIFIED TAMA ↔ THEHUB INTEGRATION                   │
 └────────────────────────────────────────────────────────────────────────────┘
                                       │
     ┌─────────────────────────────────┴─────────────────────────────────┐
     ▼                                                                   ▼
┌─────────────────────────────────────────┐       ┌─────────────────────────────────────────┐
│            TAMAintegration              │       │                 TheHUB                  │
│       (Academic Knowledge Vault)        │       │         (Personal Command Center)       │
├─────────────────────────────────────────┤       ├─────────────────────────────────────────┤
│ • vault/00-CORE-BUILDING-LAWS/          │ ◄───► │ • modules/04-tracker.js (Caffeine sync) │
│ • vault/01-CURRENT-COURSES/             │ ◄───► │ • modules/05-calendar.js (Mapúa ICS)    │
│ • reviewers/mock-exams/                 │ ───►  │ • modules/14-companion.js (+200 Game XP)│
│ • docs/STUDY_LOGBOOK.md                 │ ◄───► │ • modules/08-assistant.js (Marciale AI) │
└─────────────────────────────────────────┘       └─────────────────────────────────────────┘
```

---

# 2. THE 4 CORE INTEGRATION BRIDGES

---

### Bridge 1: Mapúa Blackboard ICS Calendar & Exam Countdown
* **Current State in TheHUB:** `server.py` reads `MAPUA_ICS_URL` from the environment and parses `VEVENT` records.
* **Proposed Upgrade:**
  1. TheHUB detects events containing keywords like `"Departmental"`, `"Exit Exam"`, `"Major Plate"`, or `"Final Defense"`.
  2. The Today Dashboard renders a dedicated **Mapúa Exam Countdown Card** showing days remaining.
  3. When an exam is $<7\text{ days}$ away, Marciale AI automatically recommends targeted 50-minute study blocks from `TAMAintegration/reviewers/`.

---

### Bridge 2: Study-to-Companion Momentum XP Adapter (`postMessage` Bridge)
* **Philosophy:** Real-world study effort should power your Idle Hero companion RPG progression.
* **Protocol Payload:**
  When you complete a mock exam or 30-minute flashcard drill in TAMA:
  ```json
  {
    "type": "hub.activity",
    "payload": {
      "type": "study_session_completed",
      "subject": "Building Tech 3 - Pre-stressed Concrete",
      "score": "18/20 (90%)",
      "points": 20,
      "reward": { "gold": 200, "xp": 100 }
    }
  }
  ```
* **Effect:** Your hero in the companion game receives +200 Gold, +100 XP, and triggers a celebration particle!

---

### Bridge 3: Circadian Biometric Study Scheduling
* **Integration Point:** `TheHUB/modules/04-tracker.js` $\leftrightarrow$ `TAMAintegration/docs/STRATEGIC_ACADEMIC_FRAMEWORK.md`.
* **Behavior:**
  * If active caffeine concentration is $>100\text{mg}$ (Peak Alertness), TheHUB suggests **Complex Structural Calculations & AMBF Rule 7/8 Drills**.
  * If caffeine is decaying below $40\text{mg}$ (Evening Wind-Down), TheHUB suggests **History of Architecture (HOA) Reading & Flashcards**.

---

### Bridge 4: Marciale Brain Profile: `mapua_architect`
* **Integration Point:** `TheHUB/modules/00-utils-config.js`.
* **Configuration:**
  ```javascript
  BRAIN_PROFILES['mapua_architect'] = {
    name: 'Marciale (Mapúa Studio & ALE Exam Coach)',
    profile: 'instructor',
    systemPrompt: `You are Marciale, acting as a Senior Architectural Mentor and Mapúa Exam Coach.
  - Your student is a 3rd-year BS Architecture student at Mapúa University.
  - Always use the Socratic method for Building Tech, Utilities, and Structures.
  - Strictly cite Philippine Building Laws (PD 1096 NBCP, RA 9514 Fire Code, BP 344, RA 9266).
  - Never hallucinate dimensional standards, occupant load factors, or moment formulas.`,
    tools: ['query_building_code', 'generate_mock_exam', 'log_study_session']
  };
  ```

---

# 3. IMPLEMENTATION TIMELINE & GATING

| Phase | Dependency | Description |
|---|---|---|
| **Phase 1 (Immediate)** | Standalone TAMA | Populate `vault/`, create `reviewers/`, and stabilize `docs/`. |
| **Phase 2 (Milestone 1-2)**| Academic Scaffolding | Test mock exam generator and flashcard drills independently. |
| **Phase 3 (Milestone 3)** | TheHUB V8 Integration | Connect the 4 Integration Bridges via `plugin/` interface. |

---
**End of Proposal Document.**
