const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    let result = 0;
    const N = +input[0];
    for (let i = 1; i <= N; i++) {
        const word = input[i].trim();
        const dict = {};
        for (let j = 0; j < word.length; j++) {
            const char = word[j];

            if (dict[char] === undefined) dict[char] = j;
            else {
                if (dict[char] + 1 === j) dict[char] = j;
                else break;
            }

            if (j === word.length - 1) {
                result++;
            }
        }
    }
    console.log(result);
}

solution(input);
