function twoSum(num, target){
    let map = new Map();

    for(let i=0; i<num.length; i++){
        let complement = target - num[i];

        if(map.has(complement)){
            return[map.get(complement), i];
        }
        map.set(num[i], i);
    }
    return []
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))