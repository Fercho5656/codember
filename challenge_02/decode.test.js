import test from 'node:test'
import assert from 'node:assert'
import decode from './decode.js'

const midu = '109105100117'
const codember = '9911110010110998101114'
const codemberMidu = '9911110010110998101114 109105100117'
const playTetris = '11210897121 116101116114105115'
const mailSubject = '119101 97114101 108101103105111110'
const mailContent = '73 107110111119 121111117 121111117 100111 110111116 107110111119 109101 73 97109 1199711699104105110103 121111117 73 97109 102111108108111119105110103 121111117 68111 121111117 11997110116 116111 11210897121 8010897121 119105116104 109101 79107 7610111639115 11210897121 82117110 116104105115 9911110910997110100 11511798109105116 116561181061045651505752561029911097108'

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

test('Should decode mail subject', t => {
  assert.equal(decode(mailSubject), 'we are legion')
})
test('Should decode secret 7', t => {
  assert.equal(decode(mailContent), 'I know you you do not know me I am watching you I am following you Do you want to play Play with me Ok Let\'s play Run this command submit t8vjh832948fcnal')
})