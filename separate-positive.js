"use strict";

// add whatever parameters you deem necessary & write docstring

/** Takes a list of numbers and returns the same array but positive nums
 * will be on left and negative numbers will be on right. It does not have
 * to be sorted.
 */
function separatePositive(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] < 0 && nums[right] > 0) {
      [nums[left],nums[right]] = [nums[right],nums[left]];
    }
    if (nums[left] > 0) {
      left++;
    }
    if (nums[right] < 0) {
      right--;
    }
  }
  return nums;
}
