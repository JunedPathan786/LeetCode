/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.match(/[A-Z0-9]/gi)

    if(!str || !str.length) return true

    let left = 0
    let right = str.length - 1

    while(left < right){
        let left_alpha = str[left].toLowerCase()
        let right_alpha = str[right].toLowerCase()

        if(left_alpha != right_alpha){
            return false
        }
        left++
        right--
    }
    return true
};