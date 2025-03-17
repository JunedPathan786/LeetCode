/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while(start<=end){
        let mid = Math.floor((start + end) / 2);

        if(nums[mid]===target){
            return mid;
        }else if(nums[start]<=nums[mid]){ //first part is sorted

            if(target>=nums[start] && target<nums[mid]){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }else{ //second part is sorted 
            if(target>nums[mid] && target<=nums[end]){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }

    }

    return -1;
};