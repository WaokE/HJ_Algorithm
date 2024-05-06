const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    let result = 0;
    const N = +input[0];
    const M = +input[1];
    const S = input[2];

    const pattern = "IO";
    const target = pattern.repeat(N) + "I";

    const searchStack = [];
    for (let i = 0; i < S.length; i++) {
        searchStack.push(S[i]);
        if (searchStack.length >= target.length) {
            if (searchStack.slice(searchStack.length - target.length).join("") === target) result++;
        }
    }

    console.log(result);
}

solution(input);
