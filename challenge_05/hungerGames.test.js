import test from 'node:test'
import assert from 'node:assert'
import hungerGames from './hungerGames.js'

const participants = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

test('hungerGames', () => {
  assert.equal(hungerGames(participants), '4-4')
})
