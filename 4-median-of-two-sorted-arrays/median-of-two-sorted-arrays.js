/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   if(nums1.length > nums2.length){
            return findMedianSortedArrays(nums2, nums1)
        }

        let m = nums1.length
        let n = nums2.length

        let left = 0
        let right = m

        let half = Math.floor((m+n+1)/2)

        while(left <= right){
            let i = Math.floor((left+right)/2)
            let j = half - i

            let leftA = (i === 0) ? -Infinity : nums1[i - 1]
            let rightA = (i === m) ? Infinity : nums1[i]
            
            let leftB = (j === 0) ? -Infinity : nums2[j - 1]
            let rightB = (j === n) ? Infinity : nums2[j]

            if(leftA <= rightB && leftB <= rightA){

                if((m+n)%2 === 0){
                    return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2
                }else{
                    return Math.max(leftA, leftB)
                }
            }else if(leftA > rightB){
                right = i - 1
            }else{
                left = i + 1
            }
        }
};