/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    let feq = new Array(26).fill(0);

     for (let word of words) {
        for (let char of word) {
            feq[char.charCodeAt(0) - 97]++;
        }
    }

      for (let count of feq) {
        if (count % words.length !== 0) {
            return false;
        }
    }

    return true;
};