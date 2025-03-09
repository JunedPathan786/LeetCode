/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = -1;
    let smax = -1;
    let maxIdx = 0;

    for(let i=0; i<nums.length; i++){

        if(max < nums[i]){
            smax = max;
            max = nums[i];
            maxIdx = i;
        }else if(smax < nums[i]){
            smax = nums[i];
        }   
    }

    if(smax*2 <= max){
        return maxIdx;
    }else{
        return -1;
    }

};