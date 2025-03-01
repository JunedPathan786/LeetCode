/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let ans = numBottles;

    while(numBottles >= numExchange){

        let newBottles = Math.floor(numBottles / numExchange);

        let remBottles = numBottles % numExchange;

        ans +=newBottles;

        numBottles = newBottles + remBottles;
    }
    return ans;
};