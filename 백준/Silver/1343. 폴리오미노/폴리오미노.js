const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    let pointer = 0;
    const result = [];
    while (pointer < input[0].length) {
        const current = input[0][pointer].trim();

        if (current === ".") {
            result.push(".");
            pointer++;
        } else {
            if (
                input[0][pointer + 1] === "X" &&
                input[0][pointer + 2] === "X" &&
                input[0][pointer + 3] === "X"
            ) {
                result.push("A");
                result.push("A");
                result.push("A");
                result.push("A");
                pointer += 4;
            } else if (input[0][pointer + 1] === "X") {
                result.push("B");
                result.push("B");
                pointer += 2;
            } else {
                result.push("C");
                pointer++;
                break;
            }
        }
    }
    result[result.length - 1] === "C" ? console.log("-1") : console.log(result.join(""));
}

solution(input);
