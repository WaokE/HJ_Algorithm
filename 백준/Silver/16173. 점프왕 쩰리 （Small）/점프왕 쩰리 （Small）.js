const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    let result = "Hing";
    const N = Number(input[0]);
    const map = [];
    for (let i = 0; i < N; i++) map.push(input[i + 1].split(" ").map(Number));

    const visited = [];
    for (let i = 0; i < N; i++) visited.push(new Array(N).fill(false));

    const searchQ = [[0, 0]];
    while (searchQ.length > 0) {
        const [cx, cy] = searchQ.shift();
        visited[cx][cy] = true;

        if (cx === N - 1 && cy === N - 1) {
            result = "HaruHaru";
            break;
        }
        const power = map[cx][cy];
        const nx = cx + power;
        const ny = cy + power;

        if (nx < N && !visited[nx][cy]) searchQ.push([nx, cy]);
        if (ny < N && !visited[cx][ny]) searchQ.push([cx, ny]);
    }
    console.log(result);
}

solution(input);