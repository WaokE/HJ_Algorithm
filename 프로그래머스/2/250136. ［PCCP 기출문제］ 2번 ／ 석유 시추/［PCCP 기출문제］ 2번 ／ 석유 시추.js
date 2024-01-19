function solution(land) {
    const xLength = land[0].length;
    const yLength = land.length;
    const drillingPoints = new Array(xLength).fill(0);

    const visited = new Array(yLength);
    for (let i = 0; i < yLength; i++) visited[i] = new Array(xLength).fill(false);

    for (let i = 0; i < yLength; i++) {
        for (let j = 0; j < xLength; j++) {
            if (land[i][j] === 1 && !visited[i][j]) {
                bfs(i, j, land, visited);
            }
        }
    }

    function bfs(x, y, land, visited) {
        const visitedPoints = new Set();
        let foundedOils = 0;
        const queue = [[x, y]];
        visited[x][y] = true;
        const dx = [1, 0, -1, 0];
        const dy = [0, 1, 0, -1];

        while (queue.length > 0) {
            const [cx, cy] = queue.shift();
            visitedPoints.add(cy);
            foundedOils++;

            for (let i = 0; i < 4; i++) {
                const nx = cx + dx[i];
                const ny = cy + dy[i];

                if (nx >= 0 && nx < yLength && ny >= 0 && ny < xLength) {
                    if (land[nx][ny] === 1 && !visited[nx][ny]) {
                        queue.push([nx, ny]);
                        visited[nx][ny] = true;
                    }
                }
            }
        }

        visitedPoints.forEach((point) => {
            drillingPoints[point] += foundedOils;
        });
    }

    return Math.max(...drillingPoints);
}
