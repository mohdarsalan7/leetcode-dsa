/** @format */

// https://leetcode.com/problems/array-reduce-transformation/

type Fn = (accum: number, curr: number) => number;

const nums = [1, 2, 3, 4];
const init = 0;

// const fn = (accum: number, curr: number) => accum + curr;

const reduce = (nums: number[], init: number) => {
  console.log(nums, init);
  return nums.reduce((accum: number, curr: number) => accum + curr, init);
};

console.log(reduce(nums, init));
