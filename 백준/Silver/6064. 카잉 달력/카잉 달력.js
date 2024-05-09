const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    const T = +input[0];

    for (let i = 1; i <= T; i++) {
        let [M, N, x, y] = input[i].split(" ").map(Number);

        let result = -1;
        x--;

        for (let j = x; j < M * N; j += M) {
            if (j % N === y - 1) {
                result = j + 1;
                break;
            }
        }

        console.log(result);
    }
}

solution(input);
