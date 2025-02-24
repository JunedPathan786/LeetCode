/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;

    let n = x;

    let reverseNum = 0;

    while(n > 0){

        let d = n%10;

        reverseNum = reverseNum*10 + d;

        n= Math.floor(n/10);
    }

    if(reverseNum == x){
        return true;
    }else{
        return false;
    }
};