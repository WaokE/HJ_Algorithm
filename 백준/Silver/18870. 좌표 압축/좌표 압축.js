const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    const N = Number(input[0]);
    const numbers = input[1].split(" ").map(Number);
    const copied = numbers.slice();
    copied.sort((a, b) => a - b);

    let count = 0;
    const dict = {};
    copied.forEach((numb) => {
        if (dict[numb] !== undefined) {
        } else {
            dict[numb] = count;
            count++;
        }
    });

    console.log(numbers.map((n) => dict[n]).join(" "));
}

solution(input);
