/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let lastNegIndex = lastNegative(nums) + 1;
    let firstPosIndex = nums.length - firstPositive(nums);

    return Math.max(lastNegIndex, firstPosIndex);
};

function lastNegative (nums){
    let start = 0;
    let end = nums.length - 1;

    let ans = -1;

    while(start<=end){
        let mid = Math.floor((start + end) / 2);

        if(nums[mid]<0){
            ans = mid;
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }

    return ans;
}


function firstPositive(nums){
    let start = 0;
    let end = nums.length-1;

    let ans = nums.length;

    while(start<=end){
        let mid = Math.floor((start + end) / 2);

        if(nums[mid] > 0){
            ans = mid;
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return ans;
}