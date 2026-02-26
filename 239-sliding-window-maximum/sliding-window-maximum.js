/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let deque = [];   // stores indices
        let result = [];

        for (let i = 0; i < nums.length; i++) {

        // 1️⃣ Remove indices out of window
        if (deque.length && deque[0] <= i - k) {
            deque.shift();
        }

        // 2️⃣ Remove smaller elements from back
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        
        // 3️⃣ Add current index
        deque.push(i);

        // 4️⃣ Window formed → record max
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};