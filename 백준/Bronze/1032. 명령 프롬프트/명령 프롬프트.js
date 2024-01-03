const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let iterations = +input[0];

let standard = input[1];
let result = [];
for (let i = 1; i <= iterations; i++) {
    for (let j = 0; j < standard.length; j++) {
        if (standard[j] === input[i][j]) {
            result[j] = standard[j];
        } else {
            result[j] = "?";
        }
    }
    standard = result;
}
console.log(standard.join(""));