const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    const T = input.shift();
    for (let i = 0; i < T; i++) {
        const wearCount = input.shift();

        const wearList = {};
        for (let j = 0; j < wearCount; j++) {
            const [wear, type] = input
                .shift()
                .split(" ")
                .map((e) => e.trim());
            wearList[type] ? wearList[type].push(wear) : (wearList[type] = [wear]);
        }

        let result = 1;
        for (let key in wearList) {
            result *= wearList[key].length + 1;
        }
        console.log(result - 1);
    }
}

solution(input);