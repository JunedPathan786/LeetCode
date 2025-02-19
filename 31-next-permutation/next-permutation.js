/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let pivot = -1;
    let n = nums.length;
   
    for(let i=n-2; i>=0; i--){
        if(nums[i] < nums[i+1]){
            pivot = i;
            break;
        }
    }

    if(pivot === -1){
        nums.reverse();
        return;
    }

    for(let i=n-1; i>pivot; i--){
        if(nums[i] > nums[pivot]){
            [nums[i], nums[pivot]] =  [nums[pivot], nums[i]]
            break;
        }
    }

    let i=pivot+1 , j=n-1;
    while(i <= j){
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
};