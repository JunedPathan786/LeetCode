/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   let maxWater = 0; //ans
   let n = height.length;
   let lp=0; rp=n-1;

   while(lp < rp){
    let w = rp-lp;
    let ht = Math.min(height[lp], height[rp]);
    let currWater = w * ht;
    maxWater = Math.max(maxWater, currWater);

    height[lp] < height[rp] ? lp++ : rp--;
   }

    return maxWater;
};