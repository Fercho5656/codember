import test from 'node:test'
import assert from 'node:assert'
import { isValidPassword, bruteForcePassword } from './password.js'

/**
 * 55678 es correcto lo cumple todo
 * 12555 es correcto, lo cumple todo
 * 55555 es correcto, lo cumple todo
 * 12345 es incorrecto, no tiene el 5 repetido.
 * 57775 es incorrecto, los números no van de forma creciente
 * 165-23555
 */

test('Should return true', () => {
  assert.equal(isValidPassword(55678), true)
  assert.equal(isValidPassword(12555), true)
  assert.equal(isValidPassword(55555), true)
})

test('Should return false', () => {
  assert.equal(isValidPassword(12345), false)
  assert.equal(isValidPassword(57775), false)
})

test('Should return 165-23555', () => {
  assert.equal(bruteForcePassword().length, 165)
  assert.equal(bruteForcePassword()[55], 23555)
})
