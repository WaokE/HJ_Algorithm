const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    const A = input[0].trim();
    const B = input[1].trim();
    const C = input[2].trim();

    console.log(+A + +B - +C);
    console.log(A + B - C);
}

solution(input);
