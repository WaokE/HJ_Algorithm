const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    const n = Number(input[0]);
    const dp = new Array(1001).fill(0);

    dp[1] = 1;
    dp[2] = 3;
    dp[3] = dp[1] * 2 + dp[2];

    for (let i = 4; i <= n; i++) {
        dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10007;
    }

    console.log(dp[n]);
}

solution(input);
