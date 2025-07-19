//https://leetcode.com/problems/container-with-most-water/?envType=problem-list-v2&envId=two-pointers

const maxArea = (height) => {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while(left < right) {
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const area = width * currentHeight;
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}