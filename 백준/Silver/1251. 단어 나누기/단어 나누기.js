const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    const word = [...input[0]];

    const possibleWords = [];
    for (let i = 1; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            possibleWords.push(
                word.slice(0, i).reverse().join("") +
                    word.slice(i, j).reverse().join("") +
                    word.slice(j).reverse().join("")
            );
        }
    }
    possibleWords.sort();
    console.log(possibleWords[0]);
}

solution(input);