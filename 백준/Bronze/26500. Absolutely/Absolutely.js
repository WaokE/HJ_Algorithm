const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    const n = +input.shift();

    for (let i = 0; i < n; i++) {
        const [a, b] = input[i].split(" ").map(Number);

        console.log(Math.abs(a - b).toFixed(1));
    }
}

solution(input);