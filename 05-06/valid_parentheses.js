//https://leetcode.com/problems/valid-parentheses/description/?envType=problem-list-v2&envId=stack

const isValid = (s) => {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let char of s) {
        if(map[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;
            if (map[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
}

const s = "[";
console.log(isValid(s)); // true