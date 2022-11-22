export const isValidPassword = (password) => {
  if (numberLength(password) < 5) return false

  const passwordString = password.toString()
  const passwordArray = passwordString.split('')
  const fiveCounter = passwordString.match(/5/g) ?? []
  if (fiveCounter.length < 2) return false

  for (let i = 0; i < passwordArray.length - 1; i++) {
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
  }
  return validPasswords
}
