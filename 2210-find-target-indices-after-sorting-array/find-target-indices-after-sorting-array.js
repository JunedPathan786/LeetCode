/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
        let num = 0;
        let tcount = 0;

        for (let ele of nums) {
            if (ele === target) {
                tcount++;
            } else if (ele < target) {
                num++;
            }
        }

        let ans = [];

        while (tcount > 0) {
            ans.push(num);
            num++;
            tcount--;
        }

        return ans;
};