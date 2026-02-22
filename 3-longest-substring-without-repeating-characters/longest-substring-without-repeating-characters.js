/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s==null || s.length==0){
        return 0
    }

    if(s.length==1){
        return 1
    }

    let left = 0
    let right = 0
    let ans = 0

    let set = new Set()

    while(right < s.length){
        let c = s.charAt(right)
        while(set.has(c)){
            set.delete(s.charAt(left))
            left++
        }
        set.add(c)
        ans = Math.max(ans, right-left+1)
        right++
    }

    return ans
};