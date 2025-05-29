/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {

    const tempArr = []
    for(let i=0; i < arr.length; i++){
        tempArr[i] = fn(arr[i], i)
    }

    return tempArr
};