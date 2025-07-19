function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let max = 0;
    for (let num of nums) {
        max = Math.max(max, digitCount(num));
    }
    return max;
}

function radixSort(nums) {
    const maxDigitCount = mostDigits(nums);

    for (let k = 0; k < maxDigitCount; ++k) {
        const digitBuckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < nums.length; ++i) {
            const digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }

        nums = [].concat(...digitBuckets);
    }

    return nums;
}

const maximumGap = (nums) => {
    if (nums.length < 2) return 0;
    const sortedNums = radixSort(nums);
    let maxGap = 0;
    for (let i = 1; i < sortedNums.length; ++i) {
        const gap = sortedNums[i] - sortedNums[i - 1];
        maxGap = Math.max(maxGap, gap);
    }

    return maxGap;
}

const nums = [3];
console.log(maximumGap(nums)); // Output: 3 (the maximum gap is between 6 and 9)