//https://leetcode.com/problems/sort-colors/

const sortColors = (nums) => {
    const count = [0, 0, 0];
    for (const num of nums) {
        ++count[num];
    }
    let i = 0;
    for(let j = 0; j < count.length; ++j) {
        while (count[j] > 0) {
            nums[i++] = j;
            --count[j];
        }
    }
}