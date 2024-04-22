const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    const N = +input[0];
    const M = +input[1];

    console.log(N * M);
}

solution(input);
