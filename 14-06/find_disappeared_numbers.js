const findDisappearedNumbers = function (nums) {
    const n = nums.length;
    const result = [];

    for (let i = 0; i < n; ++i) {
        const index = Math.abs(nums[i]) - 1;
        if (index >= 0 && index < n) {
            nums[index] = -Math.abs(nums[index]);
        }
    }
    for (let i = 0; i < n; ++i) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
}