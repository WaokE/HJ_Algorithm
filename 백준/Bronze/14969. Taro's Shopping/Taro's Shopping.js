const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    while (true) {
        const [N, M] = input.shift().split(" ").map(Number);
        if (N === 0 && M === 0) break;

        const prices = input.shift().split(" ").map(Number);
        let max = 0;
        for (let i = 0; i < N; i++) {
            for (let j = i + 1; j < N; j++) {
                const sum = prices[i] + prices[j];
                if (sum <= M) {
                    max = Math.max(max, sum);
                }
            }
        }
        console.log(max ? max : "NONE");
    }
}

solution(input);