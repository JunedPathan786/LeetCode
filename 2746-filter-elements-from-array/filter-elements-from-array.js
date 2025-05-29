/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {

    const tempArr = []
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            tempArr.push(arr[i])
        }
    }
    return tempArr
};