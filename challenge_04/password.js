export const isValidPassword = (password) => {
  // check if password is 5 characters long
  console.log('checking password', password)
  if (numberLength(password) < 5) return false
  // check if password contains the number 3 at least twice
  const passwordString = password.toString()
  const passwordArray = passwordString.split('')
  const passwordArrayLength = passwordArray.length
  let fiveCounter = 0
  for (let i = 0; i < passwordArrayLength; i++) {
    if (passwordArray[i] === '5') fiveCounter++
    if (fiveCounter === 2) break
  }
  if (fiveCounter < 2) return false
  // check if the right number is greather or equal to the left number
  for (let i = 0; i < passwordArrayLength - 1; i++) {
    if (Number(passwordArray[i]) > Number(passwordArray[i + 1])) return false
  }
  return true
}

const numberLength = function (n) {
  return (Math.log(Math.abs(n) + 1) * 0.43429448190325176 | 0) + 1
}

export const bruteForcePassword = () => {
  let password = 0
  const validPasswords = []
  while (numberLength(password) <= 5) {
    password++
    if (isValidPassword(password)) validPasswords.push(password)
    else console.log(`password ${password} is not valid`)
  }
  return validPasswords
}
