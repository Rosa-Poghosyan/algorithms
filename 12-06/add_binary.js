//https://leetcode.com/problems/add-binary/description/?envType=study-plan-v2&envId=top-interview-150

const addBinary = (a, b) => {
    let carry = 0;
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const bitA = i >= 0 ? +a[i] : 0;
        const bitB = j >= 0 ? +b[j] : 0;

        const sum = bitA + bitB + carry;
        result = (sum % 2) + result; // Append the current bit to the result
        carry = Math.floor(sum / 2); // Update carry for next iteration

        --i;
        --j;
    }

    return result;
}

let a = "1010", b = "1011"
console.log(addBinary(a, b))