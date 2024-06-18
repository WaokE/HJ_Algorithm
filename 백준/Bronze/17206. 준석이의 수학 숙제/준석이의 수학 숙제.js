const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    const T = +input[0];
    const arr = input[1].split(" ").map(Number);

    const dp = new Array(80001).fill(0);
    dp[3] = 3;

    for (let i = 4; i <= 80000; i++) {
        if (i % 3 === 0 || i % 7 === 0) {
            dp[i] = dp[i - 1] + i;
        } else {
            dp[i] = dp[i - 1];
        }
    }

    let result = "";
    arr.forEach((num) => {
        result += dp[num] + "\n";
    });
    console.log(result);
}

solution(input);
