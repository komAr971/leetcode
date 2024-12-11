//2778. Sum of Squares of Special Elements

/*
You are given a 1-indexed integer array nums of length n.

An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.

Return the sum of the squares of all special elements of nums.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfSquares = (nums) => {
  const n = nums.length;
  let result = 0;

  for (let i = 0; i < n; i += 1) {
    if (n % (i + 1) === 0) {
      result += Math.pow(nums[i], 2);
    }
  }

  return result;
};

console.log([1, 2, 3, 4], sumOfSquares([1, 2, 3, 4]), 21);
console.log([2, 7, 1, 19, 18, 3], sumOfSquares([2, 7, 1, 19, 18, 3]), 63);
