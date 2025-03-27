/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = Math.max(...salary);
    let min = Math.min(...salary);
    let sum = salary.reduce((acc, val) => acc + val, 0);

    return (sum - max - min) / (salary.length - 2);
};
