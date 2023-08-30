function solution(d, budget) {
    let result = 0;
    d.sort((a, b) => a - b);
    for (let i=0;i<d.length;i++) {
        if (d[i] <= budget) {
            budget -= d[i];
            result++;
        }
        else break;
    }
    return result;
}