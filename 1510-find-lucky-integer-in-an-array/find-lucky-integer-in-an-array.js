/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const hm = new Map();

    for (const num of arr) {
        hm.set(num, (hm.get(num) || 0) + 1);
    }

    let ans = -1;
  
    for (const [key, value] of hm) {
        if (key === value) {
            ans = Math.max(ans, key);
        }
    }

    return ans;
};
