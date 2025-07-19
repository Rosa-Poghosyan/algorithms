//https://leetcode.com/problems/reverse-string/description/?envType=problem-list-v2&envId=two-pointers

const reverseString = (s) => {
    let start = 0;
    let end = s.length - 1;
    while(start < end) {
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
    return s;
}

let s = ["h","e","l","l","o"]
console.log(reverseString(s))
