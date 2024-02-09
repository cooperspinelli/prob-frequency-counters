// add whatever parameters you deem necessary & write doc comment

function freqCounter(string) {
  let counter = {};

  for (let char of string) {
    counter[char] = counter[char] ? counter[char] + 1 : 1;
  }
  return counter;
}

function canConstructWord(word, letters) {

  if (word.length > letters.length) return false;

  let wordFreqCounter = freqCounter(word);
  let letterFreqCounter = freqCounter(letters);

  for (let char in wordFreqCounter) {
    if (letterFreqCounter[char] === undefined) return false;
    if (wordFreqCounter[char] > letterFreqCounter[char]) return false;
  }

  return true;
}
