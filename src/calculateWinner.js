export function calculateWinner(squares) {
    let isWin;
    let squareToWin = 5;
    for (let i = 0; i < squares.length; i++) {
        for (let j = 0; j < squares[i].length; j++) {
            if (!squares[i][j]) continue;
            if (j <= squares[i].length - squareToWin) {
                isWin = true;
                for (let k = 0; k < squareToWin - 1; k++) {
                    if (squares[i][j + k] !== squares[i][j + k + 1]) {
                        isWin = false
                    }
                }
                if (j> 0 && squares[i][j - 1] && squares[i][j] !== squares[i][j - 1] && squares[i][j + squareToWin + 1] !== squares[i][j + squareToWin]) {
                    isWin = false;
                }
                if (squares[i][j] === squares[i][j + squareToWin] || (squares[i][j - 1] && squares[i][j] === squares[i][j - 1])){
                   isWin=false;
                }
                if (isWin) return { val: squares[i][j] };
            }

            if (i <= squares.length - squareToWin) {
                isWin = true;
                for (let k = 0; k < squareToWin - 1; k++) {
                    if (squares[i+k][j] !== squares[i+k+1][j]) {
                        isWin = false
                    }
                }
                if (i>0 && squares[i - 1][j] && squares[i][j] !== squares[i - 1][j] && squares[i + squareToWin + 1][j] !== squares[i + squareToWin][j]) {
                    isWin = false;
                }
              
                if (isWin) return { val: squares[i][j] };
            }

            if (i <= squares.length - squareToWin && j <= squares[i].length - squareToWin){
                isWin = true;
                for (let k = 0; k < squareToWin - 1; k++) {
                    if (squares[i + k][j+k] !== squares[i + k + 1][j+k+1]) {
                        isWin = false
                    }
                }
                if (i> 0 && j> 0 && squares[i - 1][j - 1] && squares[i][j] !== squares[i - 1][j - 1] && squares[i + squareToWin + 1][j + squareToWin + 1] !== squares[i + squareToWin][j + squareToWin]) {
                    isWin = false;
                }
                
                if (isWin) return { val: squares[i][j] };
            }
            if (i <= squares.length - squareToWin && j >= squareToWin-1){
                isWin = true;
                for (let k = 0; k < squareToWin - 1; k++) {
                    if (squares[i + k][j - k] !== squares[i + k + 1][j - k - 1]) {
                        isWin = false
                    } 
                }
                if (i > 0 && squares[i - 1][j + 1] && squares[i][j] !== squares[i - 1][j + 1] && squares[i + squareToWin + 1][j - squareToWin - 1] !== squares[i + squareToWin][j - squareToWin]) {
                    isWin = false;
                }
                if (isWin) return { val: squares[i][j] };
            }
        }
    }
    return null;
}