/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    let maxVal = [];

    maxVal[n - 1] = prices[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        maxVal[i] = Math.max(maxVal[i + 1], prices[i]);
    }

    let ans = 0;

    for (let i = 0; i < prices.length; i++) {
        let currPro = maxVal[i] - prices[i];
        ans = Math.max(ans, currPro);
    }

    return ans;
};
