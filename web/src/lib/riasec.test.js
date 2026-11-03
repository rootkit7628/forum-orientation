import { describe, expect, it } from 'vitest'
import { SERIES } from '@/data/orientation-test'
import { matchScore, profileCode, scoreAnswers, TYPES } from './riasec'

const like = (type) => ({ type, liked: true })
const dislike = (type) => ({ type, liked: false })

describe('scoreAnswers', () => {
  it('counts one point per liked statement', () => {
    const scores = scoreAnswers({ a: like('S'), b: like('S'), c: dislike('S'), d: like('A') })
    expect(scores).toEqual({ R: 0, I: 0, A: 1, S: 2, E: 0, C: 0 })
  })

  it('ignores unknown types', () => {
    expect(scoreAnswers({ a: like('Z') })).toEqual({ R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 })
  })
})

describe('profileCode', () => {
  it('keeps the two strongest types, strongest first', () => {
    expect(profileCode({ R: 1, I: 0, A: 4, S: 6, E: 2, C: 0 })).toBe('SA')
  })

  it('breaks ties in hexagon order', () => {
    expect(profileCode({ R: 0, I: 3, A: 0, S: 3, E: 3, C: 0 })).toBe('IS')
  })

  it('returns a single letter when only one type was liked', () => {
    expect(profileCode({ R: 0, I: 0, A: 0, S: 0, E: 0, C: 2 })).toBe('C')
  })

  it('returns nothing when nothing was liked', () => {
    expect(profileCode({ R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 })).toBe('')
  })
})

describe('matchScore', () => {
  it('weighs the main type more than the second', () => {
    expect(matchScore('SA', ['S'])).toBe(2)
    expect(matchScore('SA', ['A'])).toBe(1)
    expect(matchScore('SA', ['A', 'S'])).toBe(3)
    expect(matchScore('SA', ['R'])).toBe(0)
  })
})

describe('the test content', () => {
  it('offers exactly one statement per type in every block', () => {
    for (const serie of SERIES) {
      for (const block of serie.blocks) expect(block).toHaveLength(TYPES.length)
    }
  })

  it('never repeats a statement', () => {
    const all = SERIES.flatMap((s) => s.blocks.flat())
    expect(new Set(all).size).toBe(all.length)
  })
})
