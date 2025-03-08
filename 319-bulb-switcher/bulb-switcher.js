/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    let count = 0;

    let i = 1;

    while(i*i<=n){
        count++;
        i++;
    }

    return count;
};