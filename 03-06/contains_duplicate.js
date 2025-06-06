//https://leetcode.com/problems/contains-duplicate/description/

const containsDuplicate = function (nums) {
    const hash = {};
    for (let i = 0; i < nums.length; ++i) {
        if (hash[nums[i]]) return true;
        hash[nums[i]] = true;
    }
    return false;
}