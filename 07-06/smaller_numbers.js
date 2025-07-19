//https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

const countingSort = (nums) => {
    const expected = [];
    const maxHeight = Math.max(...nums);
    const count = new Array(maxHeight + 1).fill(0);
    for (const num of nums) {
        ++count[num];
    }
    for(let i = 0; i < count.length; ++i) {
        while (count[i] > 0) {
            expected.push(i);
            --count[i];
        }
    }
    return expected;
}
const smallerNumbersThanCurrent = (nums) => {

    const sorted = countingSort(nums);
    const result = [];

    for (const num of nums) {
        const index = sorted.indexOf(num);
        result.push(index);
    }
    return result;
}
let nums = [8,1,2,2,3]
let t = performance.now();
console.log(smallerNumbersThanCurrent(nums));
console.log(`Execution time: ${performance.now() - t} ms`); // Output: [4,0,1,1,3]
