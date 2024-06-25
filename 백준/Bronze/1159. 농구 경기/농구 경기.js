const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    const N = +input[0];
    const dict = {};
    for (let i = 1; i <= N; i++) {
        const name = input[i].trim();
        dict[name[0]] ? dict[name[0]]++ : (dict[name[0]] = 1);
    }

    const sortedKeys = Object.keys(dict).sort();
    const result = [];
    sortedKeys.forEach((key) => {
        if (dict[key] >= 5) result.push(key);
    });

    result.length === 0 ? console.log("PREDAJA") : console.log(result.join(""));
}

solution(input);
