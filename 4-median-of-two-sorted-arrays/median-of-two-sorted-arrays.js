var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2);
    arr.sort((a,b) => a-b) //Sort the array
    let n = arr.length;

    if(n%2 === 0){
        return((arr[n/2]+arr[n/2-1])/2);
    }else{
        return arr[Math.floor(n/2)];
    }
};