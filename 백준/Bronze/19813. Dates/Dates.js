const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

function solution(input) {
    //
    const N = +input[0];

    for (let i = 1; i <= N; i++) {
        const originStr = input[i].trim();
        if (originStr.includes("/")) {
            let [month, day, year] = originStr.split("/");
            day.length === 1 ? (day = "0" + day) : day;
            month.length === 1 ? (month = "0" + month) : month;
            while (year.length < 4) {
                year = "0" + year;
            }
            console.log([day, month, year].join("."), [month, day, year].join("/"));
        } else {
            let [day, month, year] = originStr.split(".");
            day.length === 1 ? (day = "0" + day) : day;
            month.length === 1 ? (month = "0" + month) : month;
            while (year.length < 4) {
                year = "0" + year;
            }
            console.log([day, month, year].join("."), [month, day, year].join("/"));
        }
    }
}

solution(input);
