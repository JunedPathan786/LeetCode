/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length
    let answer = new Array(n).fill(0)
    let stack = []

    for(let i=0; i<n; i++){
        while(stack.length && temperatures[i] > temperatures[stack[stack.length -1]]){
            let index = stack.pop()
            answer[index] = i - index
        }
        stack.push(i)
    }
    return answer
};