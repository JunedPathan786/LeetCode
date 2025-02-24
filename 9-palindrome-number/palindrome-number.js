/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false; // Negative numbers are not palindromes

    let reverseNum = 0, n = x;

    while (n > 0) {
        reverseNum = reverseNum * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    return reverseNum === x;
};
