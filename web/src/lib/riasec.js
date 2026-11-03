// Scoring of the interest test, after Holland's RIASEC model.

/** Hexagon order, also used to break ties. */
export const TYPES = ['R', 'I', 'A', 'S', 'E', 'C']

/** answers: { itemKey: { type: 'S', liked: true } } -> { R: 0, I: 2, ... } */
export function scoreAnswers(answers) {
  const scores = Object.fromEntries(TYPES.map((t) => [t, 0]))
  for (const answer of Object.values(answers)) {
    if (answer?.liked && answer.type in scores) scores[answer.type] += 1
  }
  return scores
}

/**
 * The profile code: the two strongest types, strongest first ("SA").
 * Returns '' when nothing was liked, since no profile can be drawn from that.
 */
export function profileCode(scores, length = 2) {
  const ranked = TYPES.map((type, order) => ({ type, order, score: scores[type] ?? 0 }))
    .filter((t) => t.score > 0)
    .sort((a, b) => b.score - a.score || a.order - b.order)
  return ranked
    .slice(0, length)
    .map((t) => t.type)
    .join('')
}

/** How well a job's profiles match a code: 2 for the main type, 1 for the second. */
export function matchScore(code, profiles = []) {
  return [...code].reduce((sum, type, i) => sum + (profiles.includes(type) ? code.length - i : 0), 0)
}
