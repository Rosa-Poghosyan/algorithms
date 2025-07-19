//https://leetcode.com/problems/rotate-image/description/?envType=study-plan-v2&envId=top-interview-150

const rotate = (matrix) => {
    const reverse = (arr, start, end) => {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp
            ++start;
            --end;
        }
    };
    for(let i = 0; i < matrix.length; ++i) {
        for(let j = i + 1; j < matrix.length; ++j) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < matrix.length; ++i) {
        reverse(matrix[i], 0, matrix[i].length - 1);
    }
}

let matrix  =[
    [ 5, 1, 9, 11 ],
    [ 2, 4, 8, 10 ],
    [ 13, 3, 6, 7 ],
    [ 15, 14, 12, 16 ]
]


rotate(matrix);
//console.log(matrix)
console.log(matrix);