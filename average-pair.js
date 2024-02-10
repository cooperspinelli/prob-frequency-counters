"use strict";

/**Checks if there are two elements in input array that average to
 * certain number and returns true or false */
function averagePair(sortedNums, aveNum) {
  let left = 0;
  let right = sortedNums.length - 1;

  while (left < right) {
    const average = (sortedNums[left] + sortedNums[right]) / 2;
    if (average === aveNum) {
      return true;
    } else if (average > aveNum) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

