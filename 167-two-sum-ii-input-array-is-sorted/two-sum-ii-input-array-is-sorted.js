/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let ans = new Array(2);

    let start = 0;
    let end = numbers.length-1;

    while(start < end ){
        let sum = numbers[start] + numbers[end];

        if(sum == target){
            ans[0] = start + 1;
            ans[1] = end + 1;

            return ans;
        }else if(sum > target){
            end--
        }else{
            start++;
        }
    }
    return ans;
};