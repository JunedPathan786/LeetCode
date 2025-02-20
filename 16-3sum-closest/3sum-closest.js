/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b); 
    let n = nums.length;
    let resultSum = 0;
    let minDifference = Number.MAX_VALUE;

    for(let i=0; i<n-2; i++){
        let left = i+1;
        let right = n-1;

        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];

            if(sum === target){
                return sum;
            }else if (sum < target){
                left++
            }else {
                right--
            }

            let currDifference = Math.abs(sum - target)

            if(currDifference < minDifference){
                resultSum = sum;
                minDifference = currDifference;
            }
        }
    }
    return resultSum;
  
};