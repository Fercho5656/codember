const decode = (message) => {
  const words = message.split(' ')
  const decoded = words.map(word => {
    const chars = []
    // const chars = word.match(/.{1,3}/g)
    for (let i = 0; i < word.length; i += 0) {
      if (word[i] === '1') {
        chars.push(word[i] + word[i + 1] + word[i + 2])
        i += 3
      }
      else {
        chars.push('0' + word[i] + word[i + 1])
        i += 2
      }
    }
    return chars.map(char => String.fromCharCode(parseInt(char))).reduce((a, b) => a + b)
  })
  return decoded.join(' ')
}

export default decode
