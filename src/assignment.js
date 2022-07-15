// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================
/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 @param {Array} arrayOfNumbers the array of numbers to sum
 @returns number the sum of the numbers
*/

function sumOfNumbers(arrayOfNumbers) {
    const sum = arrayOfNumbers.reduce((acc, num) => acc + num, 0)
  return sum;
}
 assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 *
  *@param{Array}arrayOfNumbers the array containing even or non-even numbers
  *@returns number the count of even numbers
*/
function countEvenNumbers(arrayOfNumbers) {
    const filterEven = arrayOfNumbers.filter((num) => num % 2 === 0)
return filterEven.length
}
 assignment.countEvenNumbers = countEvenNumbers;
 
// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================
