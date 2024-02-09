// add whatever parameters you deem necessary & write docstring
//input : sorted arr and num
// output: boolean
// use multiple pointer
// return true if there is an average

/**Checks if there are two elements in input array that average to
 * certain number */
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

