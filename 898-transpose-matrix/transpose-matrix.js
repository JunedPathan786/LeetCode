/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;

     let ans = new Array(col).fill(0).map(() => new Array(row));

    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++)
        ans[j][i] = matrix[i][j]
    }

    return ans;
};