//https://leetcode.com/problems/bulls-and-cows/description/

const getHint = (secret, guess) => {
    let bulls = 0;
    let cows = 0;
    const secretCount = new Array(10).fill(0);
    const guessCount = new Array(10).fill(0);
    for (let i = 0; i < secret.length; ++i) {
        if (secret[i] === guess[i]) {
           ++bulls;
        } else {
            ++secretCount[secret.charCodeAt(i) - '0'.charCodeAt(0)];
            ++guessCount[guess.charCodeAt(i) - '0'.charCodeAt(0)];
        }

    }
    for (let i = 0; i < secretCount.length; ++i) {
        cows += Math.min(secretCount[i], guessCount[i]);
    }
    return `${bulls}A${cows}B`;
}

const secret = "1123";
const guess = "0111";
console.log(getHint(secret, guess)); // Output: "1A3B" (1 bull and 3 cows)