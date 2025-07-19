//https://leetcode.com/problems/move-zeroes/description/?envType=problem-list-v2&envId=two-pointers

const moveZeroes = (nums) => {
    let p = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== 0) {
            if (i !== p) {
                nums[p] = nums[i];
                nums[i] = 0;
            }
            p++;
        }
    }
}

let nums = [1, 0, 15, 0, 3, 12, 0, 5];
moveZeroes(nums);
console.log(nums);