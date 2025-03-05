/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let ans = new Array(nums.length);

    let start = 0;
    let end = nums.length - 1;

    let ptr = nums.length - 1;

    while (start <= end) {
        let ss = nums[start] * nums[start];
        let es = nums[end] * nums[end];

        if (ss > es) {
            ans[ptr] = ss;
            start++;
        } else {
            ans[ptr] = es;
            end--;
        }
        ptr--;
    }
    
    return ans;
};
