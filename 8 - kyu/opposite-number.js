/* 
  Title:
    Opposite number

  Description:
    Very simple, given a number, find its opposite.
  But can you do it in 1 line of code and without any conditionals?

  Examples:
    1: -1
    14: -14
    -34: 34
  
  Link:
    https://www.codewars.com/kata/opposite-number
*/

// Long Solution
function opposite(number) {
  return -number
}

// Short Solution
const opposite = number => -number

// Test to pass
console.log(opposite(1))
// => It should return -1