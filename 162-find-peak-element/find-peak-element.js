/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length === 1) return 0; 
    
    if (nums[0] > nums[1]) return 0;
    if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

    let start = 1;
    let end = nums.length - 2;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid; 
        } else if (nums[mid] < nums[mid + 1]) {
            start = mid + 1; 
        } else {
            end = mid - 1; 
        }
    }
    
    return -1; 
};
