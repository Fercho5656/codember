import test from 'node:test'
import assert from 'node:assert'
import decode from './decode.js'

const midu = '109105100117'
const codember = '9911110010110998101114'
const codemberMidu = '9911110010110998101114 109105100117'
const playTetris = '11210897121 116101116114105115'

/*
* "109105100117" -> midu
* "9911110010110998101114" -> codember
* "9911110010110998101114 109105100117" -> codember midu
* "11210897121 116101116114105115" -> play tetris
*/

test('Should decode \'midu\'', t => {
  assert.equal(decode(midu), 'midu')
})
test('Should decode \'codember\'', t => {
  assert.equal(decode(codember), 'codember')
})
test('Should decode \'codember midu\'', t => {
  assert.equal(decode(codemberMidu), 'codember midu')
})
test('Should decode \'play tetris\'', t => {
  assert.equal(decode(playTetris), 'play tetris')
})
