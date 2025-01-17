/** @format */

// Two Sum - Leetcode #1
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const numbers = [2, 7, 11, 15];
const target = 9;
console.log(target);

function twoSum(nums: number[], target: number): number[] | void {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]];
      }
    }
  }
}

console.log(twoSum(numbers, target));
