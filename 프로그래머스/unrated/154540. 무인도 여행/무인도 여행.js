function solution(maps) {
    const result = [];
    const visited = new Array(maps.length);
    for (let i=0;i<maps.length;i++) visited[i] = new Array(maps[0].length).fill(false);
    
    const sx = [-1, 1, 0, 0];
    const sy = [0, 0, -1 ,1];
    for (let i=0;i<maps.length;i++) {
        for (let j=0;j<maps[i].length;j++) {
            if (!visited[i][j] && maps[i][j] !== 'X') {
                let totalFood = 0;
                const bfsQ = [[i, j]];
                while (bfsQ.length > 0) {
                    const [x, y] = bfsQ.shift();
                    if (visited[x][y]) continue;
                    visited[x][y] = true;
                    totalFood += Number(maps[x][y]);
                    
                    for (let i=0;i<4;i++) {
                        const nx = x + sx[i];
                        const ny = y + sy[i];
                                                
                        if (nx < 0 || maps.length <= nx || ny < 0 || maps[0].length <= ny || maps[nx][ny] === 'X') continue;
                        bfsQ.push([nx, ny]);
                    }
                }
                result.push(totalFood);
            }
        }
    }
    return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
}