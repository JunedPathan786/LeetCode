/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(nums); // Use Set for fast lookup
    let maxLen = 0;

    for (let num of numSet) {
        // Check if this is the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Expand the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            maxLen = Math.max(maxLen, currentStreak);
        }
    }

    return maxLen;
};
