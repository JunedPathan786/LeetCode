/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length;

    if(digits[n-1] != 9){
        digits[n-1] = digits[n-1] + 1;
        return digits;
    }

    digits[n-1] = 0;

    for(let i=n-2; i>=0; i--){

        if(digits[i] != 9){
            digits[i] = digits[i] + 1;
            return digits;
        }

        digits[i] = 0;
    }


    let ans = new Array(n + 1).fill(0);
    ans[0] = 1;
    return ans;
};