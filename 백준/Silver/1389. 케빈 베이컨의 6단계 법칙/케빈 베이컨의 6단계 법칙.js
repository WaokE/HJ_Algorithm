const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    const [N, M] = input[0].split(" ").map(Number);
    const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));
    for (let i = 1; i <= N; i++) {
        graph[i][i] = 0;
    }
    for (let i = 1; i <= M; i++) {
        const [a, b] = input[i].split(" ").map(Number);
        graph[a][b] = 1;
        graph[b][a] = 1;
    }
    for (let k = 1; k <= N; k++) {
        for (let i = 1; i <= N; i++) {
            for (let j = 1; j <= N; j++) {
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
            }
        }
    }
    let min = Infinity;
    let answer = 0;
    for (let i = 1; i <= N; i++) {
        let sum = 0;
        for (let j = 1; j <= N; j++) {
            sum += graph[i][j];
        }
        if (min > sum) {
            min = sum;
            answer = i;
        }
    }
    console.log(answer);
}

solution(input);