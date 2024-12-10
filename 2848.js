//2848. Points That Intersect With Cars

/*
You are given a 0-indexed 2D integer array nums representing the coordinates of the cars parking on a number line. For any index i, nums[i] = [starti, endi] where starti is the starting point
of the ith car and endi is the ending point of the ith car.

Return the number of integer points on the line that are covered with any part of a car.
*/

/**
 * @param {number[][]} nums
 * @return {number}
 */
const numberOfPoints = (nums) => {
  const points = {};

  for (const num of nums) {
    for (let i = num[0]; i <= num[num.length - 1]; i += 1) {
      points[i] = 1;
    }
  }

  return Object.keys(points).length;
};

console.log(
  [
    [3, 6],
    [1, 5],
    [4, 7],
  ],
  numberOfPoints([
    [3, 6],
    [1, 5],
    [4, 7],
  ]),
  7,
);
console.log(
  [
    [1, 3],
    [5, 8],
  ],
  numberOfPoints([
    [1, 3],
    [5, 8],
  ]),
  7,
);
