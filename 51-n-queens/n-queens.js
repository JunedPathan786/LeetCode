/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = [];
    const board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
    
    function isSafe(row, col){
        //Horizontal  
        for(let j=0; j<n; j++){
            if(board[row][j] == 'Q') return false;
        }

        //Vertical
        for(let i=0; i<n; i++){
            if(board[i][col] == 'Q') return false;
        }

        //left diagonal
        for(let i=row, j=col; i>=0 && j>=0; i--, j--){
            if(board[i][j] === "Q") return false;
        }

        //right diagonal
        for(let i=row, j=col; i>=0 && j<n; i--, j++){
            if(board[i][j] === "Q") return false;
        }
        return true;
    }

    function backtrack(row) {
        if(row === n){
            res.push(board.map(row => row.join("")));
            return;
        }

        for(let col=0; col<n; col++){
            if(isSafe(row, col)){
                board[row][col] = "Q";
                backtrack(row+1);
                board[row][col] = ".";
            }
        }
    }
    backtrack(0);
    return res;
};