function measureCount (number) {
    let result = 0;
    for (let i=0;i<=number;i++) {
        if (number % i === 0) result++;
    }
    return result;
}

function solution(left, right) {
    let result = 0;
    for (let i=left;i<=right;i++) {
        const measures = measureCount(i);
        measures % 2 === 0 ? result += i : result -= i;
    }
    return result;
}