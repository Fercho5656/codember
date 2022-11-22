import { bruteForcePassword } from './password.js'

const validPasswords = bruteForcePassword()

console.log(`${validPasswords.length}-${validPasswords[55]}`)
