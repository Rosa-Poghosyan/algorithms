//https://leetcode.com/problems/basic-calculator-ii/description/?envType=problem-list-v2&envId=stack


const calculate = (s) => {
    s = s.replace(/\s+/g, '');
    const stack = [];
    let num = 0;
    let operation = '+';
    for (let i = 0; i < s.length; ++i) {
        let n = parseInt(s[i]);
        if (!isNaN(n)) {
            num = num * 10 + n;
        }
        if (isNaN(n) || i === s.length - 1) {
            if (operation === '+') {
                stack.push(num);
            } else if (operation === '-') {
                stack.push(-num);
            } else if (operation === '*') {
                num = stack.pop() * num;
                stack.push(num);
            } else if (operation === '/') {
                num = Math.trunc(stack.pop() / num);
                stack.push(num);
             }
            operation = s[i];
            num = 0;
        }
    }
    let sum = 0;
    for (let i = 0; i < stack.length; ++i) {
        sum += stack[i];
    }
    return sum;
}

let s = "-34 + 2 / 2";
console.log(calculate(s)); // Output: 7