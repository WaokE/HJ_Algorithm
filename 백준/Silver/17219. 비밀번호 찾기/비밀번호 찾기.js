const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const siteDict = {};
    for (let i = 1; i < N + 1; i++) {
        const [URL, password] = input[i].split(" ");
        siteDict[URL] = password;
    }
    for (let i = 1 + N; i < input.length; i++) {
        console.log(siteDict[input[i].trim()]);
    }
}

solution(input);
