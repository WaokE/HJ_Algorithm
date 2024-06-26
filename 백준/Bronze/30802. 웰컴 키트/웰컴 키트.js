const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    const N = +input[0];
    const requirementPerSize = input[1].split(" ").map(Number);
    const [T, P] = input[2].split(" ").map(Number);

    let t = 0;
    requirementPerSize.forEach((requirement) => {
        const need = Math.ceil(requirement / T);
        t += need;
    });

    const totalRequirement = requirementPerSize.reduce((acc, cur) => acc + cur, 0);

    console.log(t);
    console.log(Math.floor(totalRequirement / P), totalRequirement % P);
}

solution(input);
