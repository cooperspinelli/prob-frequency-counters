"use strict";

// add whatever parameters you deem necessary & write docstring
/** Takes two strings and returns a boolean value whether the characters
 * in the s1 appear somewhere in the s2, without their order changing. */

function isSubsequence(s1, s2) {
  let i = 0;
  let j = 0;

  while (j < s2.length) {
    if (s1[i] === s2[j]) {
      i++;
    }
    j++;
  }
  return i === s1.length;
}
