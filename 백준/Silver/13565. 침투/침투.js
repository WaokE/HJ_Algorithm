const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    let result = "NO";
    const [M, N] = input[0].split(" ").map(Number);
    const fiber = [];
    for (let i = 1; i < input.length; i++) fiber.push(input[i].split("").map(Number));

    visited = [];
    for (let i = 0; i < M; i++) visited.push(new Array(N).fill(false));

    searchQ = [];
    for (let i = 0; i < N; i++) {
        if (fiber[0][i] === 0) searchQ.push([0, i]);
    }

    const nx = [0, 0, 1, -1];
    const ny = [1, -1, 0, 0];

    while (searchQ.length > 0) {
        const [cx, cy] = searchQ.pop();
        if (cx === M - 1) {
            result = "YES";
            break;
        }
        visited[cx][cy] = true;

        for (let i = 0; i < 4; i++) {
            nnx = cx + nx[i];
            nny = cy + ny[i];

            if (
                0 <= nnx &&
                nnx < M &&
                0 <= nny &&
                nny < N &&
                fiber[nnx][nny] === 0 &&
                visited[nnx][nny] === false
            )
                searchQ.push([nnx, nny]);
        }
    }
    // console.log(visited);
    console.log(result);
}

solution(input);
