/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    
    let n = mat.length;

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){

            if(i==j || i+j == n-1){
                sum += mat[i][j]
            }  
        }
    }

    return sum;
};