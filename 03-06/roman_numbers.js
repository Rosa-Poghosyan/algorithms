let nums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const romanToInt = (s) => {
    let total = 0;
    let prevValue = 0;
    for (let i = s.length - 1; i >= 0; --i) {
        let currentValue = nums[s[i]];
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
        prevValue = currentValue;
    }
    return total;
}


const s = "MCMXCIV"; // Example input
console.log(romanToInt(s)); // Should output 1994