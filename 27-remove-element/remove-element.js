/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0;
    for (let right = 0; right < nums.length; right++){
        if(nums[right] !== val){
            nums[left] = nums[right];
            left++
        }
    }
  return left
};

//Time Complexity is O(n) beacuse of liner time operations. 
//Space Complexity is O(1) beacuse of I did not used other data stucture.