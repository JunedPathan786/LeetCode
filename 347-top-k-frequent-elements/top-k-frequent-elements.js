/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    if(k == nums.length){
        return nums
    }
    
    // Step 1: Count the frequency of each element
    const countMap = new Map();
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Step 2: Create "buckets" (an array of arrays), where the index is the frequency
    // The maximum possible frequency is the length of the input array, n.
    const buckets = new Array(nums.length + 1).fill(null).map(() => []);

    for (const [num, count] of countMap.entries()) {
        buckets[count].push(num);
    }

    // Step 3: Iterate through the buckets from highest frequency down to 1
    // and collect elements until k elements are found.
    const result = [];

    for (let i = buckets.length - 1; i >= 1; i--) {
        for (const num of buckets[i]) {
            result.push(num);
            if (result.length === k) {
                return result; // Return as soon as k elements are collected
            }
        }
    }

    return result;
};