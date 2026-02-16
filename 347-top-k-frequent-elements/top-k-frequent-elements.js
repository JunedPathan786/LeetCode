/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    if(k == nums.length){
        return nums
    }

     // Step 1: Count frequency
    const count = new Map();

    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    // Step 2: Create a min heap (we simulate using array + sort)
    const heap = [];

    for (let [num, freq] of count) {

        heap.push([num, freq]);

        // Sort by frequency (smallest first)
        heap.sort((a, b) => a[1] - b[1]);

        // Keep heap size only k
        if (heap.length > k) {
            heap.shift(); // remove smallest frequency
        }
    }

    // Step 3: Return only numbers
    return heap.map(item => item[0]);
};