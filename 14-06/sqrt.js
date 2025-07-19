//https://leetcode.com/problems/sqrtx/description/


const mySqrt = function(x) {
    if (x < 2) return x;

    let left = 0, right = x;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if (square === x) {
            return mid;
        } else if (square < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}

console.log(mySqrt(1000000000000000));  // Output: 2