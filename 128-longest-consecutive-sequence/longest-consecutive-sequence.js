/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums === 0){
        return 0
    }

    let numSet = new Set()

    let longestSub = 0

    for(let i=0; i<nums.length; i++){
        numSet.add(nums[i])
    }

    for(let num of numSet){
        if(numSet.has(num-1)){
            continue
        }else{
            let currentNum = num
            let currentSub = 1

            while(numSet.has(currentNum+1)){
                currentNum++
                currentSub++
            }

            longestSub = Math.max(currentSub, longestSub)
        }
    }
    return longestSub
};