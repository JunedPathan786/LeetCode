/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;
    let third = Number.MAX_VALUE;

    for(let i=0; i<nums.length; i++){

        let ele = nums[i]

        if(first>= ele){
            first = ele;
        }else if(second >= ele){
            second = ele;
        }else{
            third = ele;
            return true;
        }
    }
    
    return false;
};