const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    for (let i = 1; i < input.length; i++) {
        console.log(input[i].toLowerCase());
    }
}

solution(input);
