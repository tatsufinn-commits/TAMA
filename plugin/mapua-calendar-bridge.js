/**
 * TAMA ↔ TheHUB: Mapúa Blackboard ICS Calendar Bridge (Build T13)
 * Filters institutional .ics calendar feeds for high-stakes Departmentals and Exit Exams.
 */

export class MapuaCalendarBridge {
  constructor() {
    this.highStakesKeywords = [
      'departmental',
      'exit exam',
      'major plate',
      'final defense',
      'pre-board',
      'mock exam',
      'midterm exam',
      'final exam'
    ];
  }

  /**
   * Scans an array of parsed ICS events and returns upcoming high-stakes exams.
   * @param {Array} events - Array of events from TheHUB's 05-calendar.js
   * @param {number} daysAhead - Lookahead window (default 14 days)
   * @returns {Array} Filtered exam countdown objects
   */
  extractUpcomingExams(events = [], daysAhead = 14) {
    const now = Date.now();
    const maxFuture = now + (daysAhead * 24 * 60 * 60 * 1000);

    return events.filter(evt => {
      if (!evt || !evt.title || !evt.date) return false;
      const titleLower = evt.title.toLowerCase();
      const isHighStakes = this.highStakesKeywords.some(kw => titleLower.includes(kw));
      if (!isHighStakes) return false;

      const eventTime = new Date(evt.date).getTime();
      return eventTime >= now && eventTime <= maxFuture;
    }).map(evt => {
      const eventTime = new Date(evt.date).getTime();
      const daysRemaining = Math.ceil((eventTime - now) / (1000 * 60 * 60 * 24));
      return {
        id: evt.id || `exam-${Date.now()}`,
        title: evt.title,
        date: evt.date,
        daysRemaining,
        urgency: daysRemaining <= 3 ? 'critical' : (daysRemaining <= 7 ? 'high' : 'normal'),
        recommendedVaultTopic: this._mapTopicFromTitle(evt.title)
      };
    });
  }

  _mapTopicFromTitle(title) {
    const t = String(title).toLowerCase();
    if (t.includes('tech') || t.includes('bt')) return 'vault/01-CURRENT-COURSES/BUILDING-TECH-3-4/';
    if (t.includes('struct') || t.includes('rcd')) return 'vault/01-CURRENT-COURSES/STRUCTURAL-THEORY/';
    if (t.includes('utilities') || t.includes('mepfs')) return 'vault/01-CURRENT-COURSES/UTILITIES-3-MEPFS/';
    if (t.includes('law') || t.includes('nbcp') || t.includes('profprac')) return 'vault/00-CORE-BUILDING-LAWS/';
    return 'vault/00-CORE-BUILDING-LAWS/';
  }
}
