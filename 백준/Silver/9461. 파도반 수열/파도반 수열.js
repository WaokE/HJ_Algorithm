const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    dp = new Array(101).fill(0);
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 1;
    dp[4] = 2;
    dp[5] = 2;
    dp[6] = 3;

    for (let i = 7; i <= 100; i++) {
        dp[i] = dp[i - 1] + dp[i - 5];
    }

    input.slice(1).forEach((num) => {
        console.log(dp[Number(num)]);
    });
}

solution(input);
