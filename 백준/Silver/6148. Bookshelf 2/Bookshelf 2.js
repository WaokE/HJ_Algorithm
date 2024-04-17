const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    const [N, H] = input[0].split(" ").map((n) => Number(n));
    const cows = input.slice(1).map((n) => Number(n));

    let answer = 0;
    let min = 1e9;
    for (let i = 1; i < 1 << N; i++) {
        let sum = 0;
        for (let j = 0; j < N; j++) {
            if (i & (1 << j)) {
                sum += cows[j];
            }
        }
        if (sum >= H) {
            min = Math.min(min, sum - H);
        }
    }
    console.log(min);
}

solution(input);