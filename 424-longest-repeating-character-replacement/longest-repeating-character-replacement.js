/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let occurence = new Array(26).fill(0)
    let left = 0
    let ans = 0
    let maxOccurence = 0

    for(let right = 0 ; right < s.length; right++){
        maxOccurence = Math.max(maxOccurence, ++occurence[s.charCodeAt(right) - 'A'.charCodeAt(0)])
        if(right - left + 1 - maxOccurence > k){
            occurence[s.charCodeAt(left) - 'A'.charCodeAt(0)]--
            left++
        }
        ans = Math.max(ans , right - left + 1)
    }
    return ans
};