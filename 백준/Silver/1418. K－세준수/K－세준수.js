const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    const N = Number(input[0]);
    const K = Number(input[1]);

    let count = 0;
    for (let i = 1; i <= N; i++) {
        let num = i;
        let max = 0;
        for (let j = 2; j <= num; j++) {
            if (num % j === 0) {
                max = Math.max(max, j);
                num = num / j;
                j = 1;
            }
        }
        if (max <= K) {
            count++;
        }
    }
    console.log(count);
}

solution(input);