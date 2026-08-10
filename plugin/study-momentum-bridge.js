/**
 * TAMA ↔ TheHUB: Study-to-Companion Momentum XP Bridge (Build T14)
 * Translates completed mock exams and flashcard drills into Idle Hero Gold and XP rewards.
 */

export class StudyMomentumBridge {
  constructor({ hubOrigin = '*' } = {}) {
    this._hubOrigin = hubOrigin;
  }

  /**
   * Dispatches a structured study activity event to TheHUB parent window.
   * @param {Object} studyData - Details of completed study session
   */
  emitStudyReward({ subject = 'Building Laws', activityType = 'mock_exam', score = '20/20', minutes = 30 } = {}) {
    const points = Math.max(5, Math.floor(minutes / 2));
    const rewardPayload = {
      type: 'hub.activity',
      payload: {
        id: `study-${Date.now()}`,
        type: 'study_session_completed',
        label: `Studied ${subject} (${score})`,
        points: points,
        ts: Date.now(),
        at: new Date().toISOString(),
        reward: {
          gold: points * 10,
          xp: points * 5,
          itemDropBonus: points >= 15 ? 'rare_scroll_of_wisdom' : null
        }
      }
    };

    try {
      if (typeof window !== 'undefined' && window.parent && window.parent !== window) {
        window.parent.postMessage(rewardPayload, this._hubOrigin);
        console.info(`[TAMA Bridge] Dispatched study reward: +${points * 10} Gold, +${points * 5} XP`);
        return true;
      }
    } catch (e) {
      console.warn('[TAMA Bridge] Standalone mode; parent frame not reachable.');
    }
    return false;
  }
}
