const findMaxAverage = function(nums, k) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }
    maxSum = currentSum;

    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum / k;
}