function solution(number, limit, power) {
    let result = 0;
    for (let i=1;i<=number;i++) {
        const temp = new Set();
        for (let j=1;j<=Math.sqrt(i);j++) {
            if (i % j === 0) {
                temp.add(j);
                temp.add(i/j);
            }
        }
        [...temp].length > limit ? result += power : result += [...temp].length;
    }
    return result;
}