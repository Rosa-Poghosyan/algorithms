//https://leetcode.com/problems/decode-string/description/?envType=problem-list-v2&envId=stack

const decodeString = (s) => {
    let stack = [];
    let num = 0;
    let str = '';
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if(char >= '0' && char <= '9') {
            num = num * 10 + parseInt(char);
        } else if(char === '[') {
            stack.push([str, num]);
            str = '';
            num = 0;
        } else if(char === ']') {
            const [prevStr, count] = stack.pop();
            str = prevStr + str.repeat(count);
        } else {
            str += char;
        }
    }
    return str;
}

s = "3[a]2[bc]"
console.log(decodeString(s)); // Output: "aaabcbc"