const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    let result = 1;
    const numbers = input[0].split(" ").map((n) => parseInt(n));
    numbers.sort();

    const num1 = numbers[0];
    const num2 = numbers[1];
    const num3 = numbers[2];
    const num4 = numbers[3];
    const num5 = numbers[4];
    while (true) {
        let resultCount = 0;
        if (result % num1 === 0) resultCount++;
        if (result % num2 === 0) resultCount++;
        if (result % num3 === 0) resultCount++;
        if (result % num4 === 0) resultCount++;
        if (result % num5 === 0) resultCount++;

        if (resultCount >= 3) {
            console.log(result);
            break;
        }
        result++;
    }
}

solution(input);
