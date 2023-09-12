function solution(maps) {
    let startPos;
    let leverPos;
    let exitPos;
    for (let i=0;i<maps.length;i++) {
        for (let j=0;j<maps[i].length;j++) {
            if (maps[i][j] === 'S') startPos = [i, j];
            if (maps[i][j] === 'L') leverPos = [i, j];
            if (maps[i][j] === 'E') exitPos = [i, j];
        }
    }
    
    const sx = [-1, 1, 0, 0];
    const sy = [0, 0, -1, 1];
    const visited = new Array(maps.length);
    for (let i=0;i<maps.length;i++) visited[i] = new Array(maps[0].length).fill(false);
    let bfsQ = [[...startPos, 0]];
    let isLeverWorked = false;
    while (bfsQ.length > 0) {
        const [x, y, moveCount] = bfsQ.shift();
        if (visited[x][y]) continue;
        visited[x][y] = true;
        
        if (maps[x][y] === 'L') {
            for (let i=0;i<maps.length;i++) visited[i] = new Array(maps[0].length).fill(false);
            visited[x][y] = true;
            isLeverWorked = true;
            bfsQ = [];
            
        }
        if (maps[x][y] === 'E' && isLeverWorked) return moveCount;
        
        for (let i=0;i<4;i++) {
            const nx = x + sx[i];
            const ny = y + sy[i];
            
            if (nx < 0 || maps.length <= nx || ny < 0 || maps[0].length <= ny || maps[nx][ny] === 'X') continue;
            bfsQ.push([nx, ny, moveCount + 1]);
        }
    }
    return -1;
}