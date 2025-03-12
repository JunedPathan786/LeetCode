/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
        const hm = new Map();

        for (let i = 0; i < arr.length; i++) {
            const ele = arr[i];

            if (hm.has(ele)) {
                hm.set(ele, hm.get(ele) + 1);
            } else {
                hm.set(ele, 1);
            }
        }

        let ans = -1;
        for (let key of hm.keys()) {
            if (hm.get(key) === key) {
                ans = Math.max(ans, key);
            }
        }

        return ans;
};
