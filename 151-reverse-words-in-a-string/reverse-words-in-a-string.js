/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.trim().split(/\s+/);

    return arr.reverse().join(" ");
};
