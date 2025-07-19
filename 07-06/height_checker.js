//https://leetcode.com/problems/height-checker/description/

const heightChecker = (heights) => {
    const expected = [];
    const maxHeight = Math.max(...heights);
    const count = new Array(maxHeight + 1).fill(0);
    for (const height of heights) {
        ++count[height];
    }
    for(let i = 0; i < count.length; ++i) {
        while (count[i] > 0) {
            expected.push(i);
            --count[i];
        }
    }
    let moves = 0;
    for (let i = 0; i < heights.length; ++i) {
        if (heights[i] !== expected[i]) {
           ++moves;
        }
    }
    return moves;
}
let heights = [1,2,3,4,5];
console.log(heightChecker(heights)); // Output: 3 (the heights need to be rearranged to [1, 1, 1, 2, 3, 4])