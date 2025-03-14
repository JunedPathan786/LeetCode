/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans = [-1 ,-1];
    
    if(nums.length == 0){
        return ans;
    }

    ans[0] = firstOccurrence(nums , target);
    ans[1] = lastOccurrence(nums, target);

    return ans;
};

function firstOccurrence(nums , target){
    let start = 0;
    let end = nums.length-1;

    let ans = -1;

    while(start <= end){
        let mid = Math.floor((start + end ) / 2);

        if(nums[mid] === target){
            ans = mid;
            end = mid - 1;
        }else if(target > nums[mid]){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }

    return ans;
}

function lastOccurrence(nums , target ){
    let start = 0;
    let end = nums.length - 1;


    let ans = -1;

    while(start <= end ){
        let mid = Math.floor((start + end) / 2);

        if(nums[mid] === target){
            ans = mid;
            start = mid + 1;
        }else if(target > nums[mid]){
            start = start +1;
        }else{
            end = end -1;
        }
    }
    return ans;

}