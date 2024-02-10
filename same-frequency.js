"use strict";


/** Creates frequency counter for the characters of the input string
 *
 * Returns an object with keys represeting characters in the input string
 * and values represeting the number of times that the character appears int
 * the input string
 */

function freqCounter(string) {
  let counter = {};

  for (let char of string) {
    counter[char] = counter[char] ? counter[char] + 1 : 1;
  }
  return counter;
}

/** Takes two positive integers and checks if they have the same
 * frequency of digits
 *
 * Returns a boolean
 */

function sameFrequency(num1, num2) {
  const num1Counter = freqCounter(num1.toString());
  const num2Counter = freqCounter(num2.toString());

  for (let key in num1Counter) {
    if (num1Counter[key] !== num2Counter[key]) return false;
  }

  return true;
}
