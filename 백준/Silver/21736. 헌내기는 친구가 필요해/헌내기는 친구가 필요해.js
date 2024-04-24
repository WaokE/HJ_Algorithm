const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    let result = 0;
    const [N, M] = input[0].split(" ").map(Number);
    const map = input.slice(1).map((row) => row.trim().split(""));
    const visited = new Array(N);
    for (let i = 0; i < N; i++) visited[i] = new Array(M).fill(false);

    const BFS = (x, y) => {
        const dx = [0, 0, 1, -1];
        const dy = [1, -1, 0, 0];
        const queue = [[x, y]];
        visited[x][y] = true;

        while (queue.length) {
            const [cx, cy] = queue.shift();
            if (map[cx][cy] === "P") result++;
            for (let i = 0; i < 4; i++) {
                const nx = cx + dx[i];
                const ny = cy + dy[i];

                if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
                if (visited[nx][ny] || map[nx][ny] === "X") continue;

                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
        console.log(result ? result : "TT");
    };

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (map[i][j] === "I") BFS(i, j);
        }
    }
}

solution(input);
