const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const daysPerMonth = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
};

const daysPerMonthLeapYear = {
    January: 31,
    February: 29,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
};

function solution(input) {
    //
    const [first, second] = input[0].trim().split(", ");
    const [month, day] = first.split(" ");
    const [year, time] = second.split(" ");
    const [hour, minute] = time.split(":");

    const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

    let totalDays = 0;
    for (let key in daysPerMonth) {
        if (key === month) {
            break;
        }
        totalDays += isLeapYear ? daysPerMonthLeapYear[key] : daysPerMonth[key];
    }

    totalDays += Number(day) - 1;
    const totalHours = totalDays * 24 + Number(hour);
    const totalMinutes = totalHours * 60 + Number(minute);

    const totalMinutesInYear = isLeapYear ? 527040 : 525600;
    const percentage = (totalMinutes / totalMinutesInYear) * 100;

    console.log(percentage);
}

solution(input);