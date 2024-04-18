const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    let stickCount = 1;
    let smallestStick = 64;
    let totalLength = 64;
    const targetLength = Number(input[0]);

    while (true) {
        if (totalLength === targetLength) return stickCount;
        smallestStick = smallestStick / 2;
        stickCount++;

        if (totalLength - smallestStick >= targetLength) {
            totalLength = totalLength - smallestStick;
            stickCount--;
        }
    }
}

console.log(solution(input));
