/**
 * @param {number[]} nums
 * @return {boolean}
 */


function containsDuplicate(nums) {
    // Create a set to track seen numbers
    let seen = new Set();

    for (let num of nums) {
        // If num is already in set, we found a duplicate
        if (seen.has(num)) {
            return true;
        }
        // Otherwise, add it to the set
        seen.add(num);
    }

    // No duplicates found
    return false;
}


