/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
   if (n === 0) {
       return 0;
   } else if (n === 1) {
       return 1;
   }

   let firstVal = 0;
   let secondVal = 1;

   for (let i = 1; i <= n; i++) {
       let thirdVal = firstVal + secondVal;
       firstVal = secondVal;
       secondVal = thirdVal;
   }

   return firstVal;
};
