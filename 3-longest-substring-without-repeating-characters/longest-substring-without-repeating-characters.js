/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxlen = 0;
    let set = new Set();

    let left=0;
    let right=0;

    while(right < s.length){
       let letter = s[right];

       if(!set.has(letter)){
        set.add(letter);
        maxlen = Math.max(maxlen , set.size);
        right++;
       }else{
        set.delete(s[left]);
        left++;
       }
    }
    return maxlen;
};