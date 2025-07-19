//https://leetcode.com/problems/daily-temperatures/?envType=problem-list-v2&envId=stack

const dailyTemperatures = (temperatures) => {
    const n = temperatures.length;
    const result = new Array(n).fill(0);
    const stack = [];
    for (let i = 0; i < n; ++i) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }
    return result;
}
let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
//dailyTemperatures(temperatures); // Output: [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures(temperatures)); // Output: [1, 1, 4, 2, 1, 1, 0, 0]