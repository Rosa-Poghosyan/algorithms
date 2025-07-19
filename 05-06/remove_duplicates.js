//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

const removeDuplicates = (nums) => {
    let uniqueIndex = 0;
    for (let i = 1; i < nums.length; ++i) {
        if(nums[i] !== nums[uniqueIndex]) {
            ++uniqueIndex;
            nums[uniqueIndex] = nums[i];
        }
    }
    return uniqueIndex + 1;
}