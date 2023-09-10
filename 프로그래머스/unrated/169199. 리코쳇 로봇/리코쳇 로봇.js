function solution(board) {
    let robot;
    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[i].length;j++) {
            if (board[i][j] === 'R') robot = [i, j];
        }
    }
    
    const visited = new Array(board.length);
    for (let i=0;i<board.length;i++) visited[i] = new Array(board[0].length).fill(false);
    
    const sx = [-1, 1, 0 ,0];
    const sy = [0, 0, -1, 1];
    
    const bfsQ = [[...robot, 0]];
    while (bfsQ.length > 0) {
        const [x, y, moveCount] = bfsQ.shift();
        if (visited[x][y]) continue;
        visited[x][y] = true;
        
        if (board[x][y] === 'G') return moveCount;
        
        for (let i=0;i<4;i++) {
            const [nx, ny] = move(x, y, i);
            bfsQ.push([nx, ny, moveCount + 1]);
        }
    }
    
    function move (x, y, dir) {
        const sumX = sx[dir];
        const sumY = sy[dir];
        
        while (true) {
            const nx = x + sumX;
            const ny = y + sumY;
            
            if (0 <= nx && nx < board.length && 0 <= ny && ny < board[0].length && board[nx][ny] !== 'D') {
                x = nx;
                y = ny;
                }
            else {
                return [x, y]
                }
        }
    }
    return -1;
}


    