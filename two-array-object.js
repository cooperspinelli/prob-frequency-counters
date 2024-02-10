"use strict";

/** Creates an object from two arrays, uses the first array as keys
 * and the second array as values. If key array is longer than value array,
 * overflow keys are assigned the value of null. If value array is longer
 * than key array, overflow values are ignored.
 *
 * Assuming that all elements of key array are unique
 *
 * Returns object constructed from two arrays
 */

function twoArrayObject(keys, values) {

  const constructedFromArrays = {};

  for (let i = 0; i < keys.length; i++) {
    const value = i < values.length ? values[i] : null;
    constructedFromArrays[keys[i]] = value;
  }

  return constructedFromArrays;
}
