const scoreOfParentheses = function (s) {
    const stack = [];
    let score = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === '(') {
            stack.push(score);
            score = 0;
        } else {
            score = stack.pop() + Math.max(2 * score, 1);
        }
    }
    return score;

}


let s = "(()(()))";
console.log(scoreOfParentheses(s));