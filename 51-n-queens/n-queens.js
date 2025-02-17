function solveNQueens(n) {
    const results = [];
    const board = new Array(n).fill(0).map(() => new Array(n).fill('.'));

    // Boolean arrays for column and diagonals
    const cols = new Array(n).fill(false);
    const diag1 = new Array(2 * n - 1).fill(false); // row + col
    const diag2 = new Array(2 * n - 1).fill(false); // row - col + (n - 1)

    function backtrack(row) {
        if (row === n) {
            results.push(board.map(row => row.join("")));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols[col] || diag1[row + col] || diag2[row - col + (n - 1)]) {
                continue; // Skip if under attack
            }

            // Place queen
            board[row][col] = 'Q';
            cols[col] = diag1[row + col] = diag2[row - col + (n - 1)] = true;

            // Move to next row
            backtrack(row + 1);

            // Remove queen (backtracking)
            board[row][col] = '.';
            cols[col] = diag1[row + col] = diag2[row - col + (n - 1)] = false;
        }
    }

    backtrack(0);
    return results;
}

// Example usage
console.log(solveNQueens(4));
