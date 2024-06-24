const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    const [N, score, P] = input[0].split(" ").map(Number);
    if (N === 0) {
        console.log(1);
        return;
    }
    const scores = input[1].split(" ").map(Number);

    if (N === P && scores[N - 1] >= score) {
        console.log(-1);
        return;
    }

    let rank = 1;
    let sameRank = 0;
    for (let i = 0; i < N; i++) {
        if (scores[i] > score) {
            rank++;
        } else if (scores[i] === score) {
            sameRank++;
        } else {
            break;
        }
    }

    if (rank > P) {
        console.log(-1);
        return;
    }

    if (rank + sameRank <= P) {
        console.log(rank);
        return;
    }
}

solution(input);
