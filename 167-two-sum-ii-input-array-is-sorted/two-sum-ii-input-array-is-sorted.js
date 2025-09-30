/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let n = numbers.length;

    let i = 0;
    let j = n - 1

    while(i <j){
        let sum = numbers[i] + numbers[j]

        if(sum < target){
            i++
        }
        else if(sum > target){
            j--
        }
        else{
            return [i+1, j+1]
        }
    }
    return []
};