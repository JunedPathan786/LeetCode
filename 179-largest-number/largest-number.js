/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let arr = nums.map(String);
    
    arr.sort((a, b) => (b + a).localeCompare(a + b));
    
    if (arr[0] === '0') return '0';
    
    return arr.join('');
};