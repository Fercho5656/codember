import test from 'node:test'
import assert from 'node:assert'
import zebraColors from './lights.js'

test('Should return "4@blue"', t => {
  assert.equal(zebraColors(['red', 'blue', 'red', 'blue', 'green']), '4@blue')
})

test('Should return "2@gray"', t => {
  assert.equal(zebraColors(['green', 'red', 'blue', 'gray']), '2@gray')
})

test('Should return "1@blue"', t => {
  assert.equal(zebraColors(['blue', 'blue', 'blue', 'blue']), '1@blue')
})

test('Should return "6@green"', t => {
  assert.equal(zebraColors(['red', 'green', 'red', 'green', 'red', 'green']), '6@green')
})

test('Should return "4@red"', t => {
  assert.equal(zebraColors(['blue', 'red', 'blue', 'red', 'gray']), '4@red')
})

test('Should return "3@red"', t => {
  assert.equal(zebraColors(['red', 'red', 'blue', 'red', 'red', 'red', 'green']), '3@red')
})

test('Should return "6@green"', t => {
  assert.equal(zebraColors(['red', 'blue', 'red', 'green', 'red', 'green', 'red', 'green']), '6@green')
})