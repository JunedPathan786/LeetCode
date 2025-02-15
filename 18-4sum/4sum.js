/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b) => a-b);  // Sorting for two-pointer approach
    const res = [];
    let n = nums.length;

    for(let i=0; i<n-3; i++){
        if(i > 0 && nums[i] === nums[i-1]) continue;  //Skip Duplicates

        for(let j=i+1; j<n-2; j++){
            if(j > i+1 && nums[j] === nums[j-1]) continue; //Skip Duplicates

            let left = j+1; right = n-1;

            while(left < right){
                let sum = nums[i] + nums[j] + nums[left] + nums[right];

                if(sum < target){
                    left++;
                }else if(sum > target){
                    right--;
                }else{ //Sum == target
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    
                     // Move pointers and skip duplicates
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                }
            }
        }
    }
    return res;
};