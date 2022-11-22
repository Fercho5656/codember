import { bruteForcePassword } from './password.js'

const SOLUTION_INDEX = 55
const validPasswords = bruteForcePassword()

console.log(`${validPasswords.length}-${validPasswords[SOLUTION_INDEX]}`)
