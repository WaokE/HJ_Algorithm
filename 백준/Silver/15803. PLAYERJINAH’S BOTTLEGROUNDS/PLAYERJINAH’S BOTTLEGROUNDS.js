const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function ccw(point1, point2, point3) {
    return (
        (point2[0] - point1[0]) * (point3[1] - point1[1]) -
        (point2[1] - point1[1]) * (point3[0] - point1[0])
    );
}

function solution(input) {
    const point1 = input[0].split(" ").map(Number);
    const point2 = input[1].split(" ").map(Number);
    const point3 = input[2].split(" ").map(Number);

    const result = ccw(point1, point2, point3);

    if (result === 0) {
        console.log("WHERE IS MY CHICKEN?");
    } else {
        console.log("WINNER WINNER CHICKEN DINNER!");
    }
}

solution(input);
