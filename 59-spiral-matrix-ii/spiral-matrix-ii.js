/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let arr = Array.from({ length: n }, () => Array(n).fill(0));

    let count = 1;
    let minRow = 0;
    let maxRow = n - 1;
    let minCol = 0;
    let maxCol = n - 1;

    while (count <= n * n) {
        // Top row (left to right)
        for (let c = minCol; c <= maxCol; c++) {
            arr[minRow][c] = count++;
        }

        // Right column (top to bottom)
        for (let r = minRow + 1; r <= maxRow; r++) {
            arr[r][maxCol] = count++;
        }

        // Bottom row (right to left)
        for (let c = maxCol - 1; c >= minCol; c--) {
            arr[maxRow][c] = count++;
        }

        // Left column (bottom to top)
        for (let r = maxRow - 1; r > minRow; r--) {
            arr[r][minCol] = count++;
        }

        minRow++;
        maxRow--;
        minCol++;
        maxCol--;
    }

    return arr;
};
