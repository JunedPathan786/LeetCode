/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // Sorting the array.
    nums.sort((a,b) => a-b); 
    let res = [];
    const n = nums.length;

    for(let i = 0; i < n - 2; i++){
        //Skip the Duplicates 
        if(i > 0 && nums[i] === nums[i-1]) continue;
        
        let left = i + 1, right = n - 1 ;

        while(left < right){
            const sum = nums[i] + nums[left] + nums[right];

            if(sum === 0){
                res.push([nums[i], nums[left], nums[right]]);

                //Skip duplicate elements 
                while (left < right && nums[left] === nums[left +1 ]) left++;
                while (left < i && nums[right] === nums[right - 1 ]) right--;
                left++;
                right--;
            }else if (sum < 0){
                left++;
            }else{
                right--;
            }
        }
    } 
    return res;  
};