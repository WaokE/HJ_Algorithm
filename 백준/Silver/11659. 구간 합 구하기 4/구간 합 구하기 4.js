const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const numbers = input[1].split(" ").map(Number);
    const sumNumbers = [];
    numbers.forEach((num) => {
        if (sumNumbers[sumNumbers.length - 1])
            sumNumbers.push(sumNumbers[sumNumbers.length - 1] + num);
        else sumNumbers.push(num);
    });

    const parts = input.slice(2).map((str) => str.split(" ").map(Number));
    
    const results = []; // 결과값을 저장할 배열

    parts.forEach((part) => {
        const [startIndex, endIndex] = part;
        if (startIndex === 1) results.push(sumNumbers[endIndex - 1]);
        else results.push(sumNumbers[endIndex - 1] - sumNumbers[startIndex - 2]);
    });

    console.log(results.join('\n')); // 한 번에 결과값을 출력
}

solution(input);
