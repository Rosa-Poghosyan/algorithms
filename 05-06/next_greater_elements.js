//https://leetcode.com/problems/next-greater-element-ii/description/

const nextGreaterElements = (nums) => {
    const n = nums.length;
    const result = new Array(n).fill(-1);
    const stack = [];

    for (let i = 0; i < 2 * n; ++i) {
        const index = i % n;
        while (stack.length > 0 && nums[index] > nums[stack[stack.length - 1]]) {
            const topIndex = stack.pop();
            result[topIndex] = nums[index];
        }
        if (i < n) {
            stack.push(index);
        }
    }

    return result;
}