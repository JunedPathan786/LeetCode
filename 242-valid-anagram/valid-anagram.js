/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const freqMap = {};

    // Count frequency of characters in s
    for (let char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    // Subtract frequency using characters in t
    for (let char of t) {
        if (!freqMap[char]) {
            return false;
        }
        freqMap[char]--;
    }

    return true;
}
