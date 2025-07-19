//https://leetcode.com/problems/longest-mountain-in-array/

const longestMountain = (arr) => {
    const n = arr.length - 1;
    if (n < 2) return 0;
    let maxLength = 0;
    let i = 1;
    while (i < n) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            let left = i - 1;
            let right = i + 1;
            while (left > 0 && arr[left] > arr[left - 1]) {
                --left;
            }
            while (right < n && arr[right] > arr[right + 1]) {
                ++right;
            }
            maxLength = Math.max(maxLength, right - left + 1);

        }
        ++i;
    }
    return maxLength;
}

let arr = [2, 1, 4, 7, 3, 2, 5];
console.log(longestMountain(arr)); // Output: 5 (the longest mountain is [1, 4, 7, 3, 2])