const findDuplicates = (nums) => {
    const seen = new Set();
    const duplicates = new Set();
    for(let num of nums) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }
    return Array.from(duplicates);
}


const findDuplicates = function(nums) {
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        const x = Math.abs(nums[i]);
        if (nums[x - 1] < 0) {
            ans.push(x);
        }
        nums[x - 1] *= -1;
    }
    return ans;
}