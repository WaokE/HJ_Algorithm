const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    let result = 0;
    const N = +input[0];
    const M = +input[1];
    const S = input[2];

    for (let i = 0; i < M - 2; i++) {
        if (S[i] === "I" && S[i + 1] === "O" && S[i + 2] === "I") {
            let cnt = 0;
            while (S[i + 1] === "O" && S[i + 2] === "I") {
                cnt++;
                if (cnt === N) {
                    cnt--;
                    result++;
                }
                i += 2;
            }
        }
    }
    console.log(result);
}

solution(input);
