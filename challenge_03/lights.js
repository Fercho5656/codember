/**
 * ['red', 'blue', 'red', 'blue', 'green'] -> 4, blue
 * ['green', 'red', 'blue', 'gray'] -> 2, gray
 * ['blue', 'blue', 'blue', 'blue'] -> 1, blue
 * ['red', 'green', 'red', 'green', 'red', 'green'] -> 6, green
 * ['blue', 'red', 'blue', 'red', 'gray'] -> 4, red
 * ['red', 'red', 'blue', 'red', 'red', 'red', 'green'] -> 3, red
 * ['red', 'blue', 'red', 'green', 'red', 'green', 'red', 'green'] -> 6, green 
 * 
 * Which lights have the longest zebra and what the last color of that color sequence is.
 * Keep in mind that he only wants to know the length of when two colors are alternating. 
 * Once the alternation of the two colors is broken, it stops counting.
 * If a color is repeated in the next position or a third color appears, then it stops counting.
 */



const zebraColors = (colors => {
  let maxSuccessionLength = 0
  let maxSuccessionLastColor = ''

  let lastColor = ''
  let nextColor = colors[0]
  let currentSuccessionLength = 0

  colors.forEach(color => {
    // Resets succession
    if (color === lastColor) return currentSuccessionLength = 0
    if (color !== nextColor || lastColor === color) currentSuccessionLength = 1
    
    currentSuccessionLength++
    
    [lastColor, nextColor] = [color, lastColor]
    
    if (currentSuccessionLength >= maxSuccessionLength) {
      maxSuccessionLength = currentSuccessionLength
      maxSuccessionLastColor = lastColor
    }
  })

  return `${maxSuccessionLength}@${maxSuccessionLastColor}`
})

export default zebraColors