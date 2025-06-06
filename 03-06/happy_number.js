//https://leetcode.com/problems/happy-number/description/

const sumOfDigitPowers = (n) => {
    let sum = 0
    while (n > 0) {
        sum += Math.pow(n % 10, 2);
        n = Math.floor(n / 10);
    }
    return sum;
}

const isHappy = (n) => {
    if(n <= 0) return false;
    let seen = new Set();
    let num = n;
    while (num !== 1) {
        num = sumOfDigitPowers(num);
        if(seen.has(num)) return false;
        seen.add(num);
    }
    return true;
}

console.log(isHappy(2)); // Example usage, should return true for 19