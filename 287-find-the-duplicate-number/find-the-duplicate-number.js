/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    let ans = 0;
   
    for(let i=0; i<nums.length; i++){
        let ele = nums[i];
        ele = Math.abs(ele);

        if(nums[ele]>0){
            nums[ele] = -nums[ele]
        }else{
            ans =  ele;
            break;
        }
    }

    for(let i=0; i<nums.length; i++){
        nums[i] = Math.abs(nums[i]);
    }

    return ans;
};