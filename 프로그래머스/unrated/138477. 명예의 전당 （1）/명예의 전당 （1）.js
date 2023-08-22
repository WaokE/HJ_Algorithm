function solution(k, score) {
    let temple = [];
    const result = [];
    score.forEach((score) => {
        temple.push(Number(score));
        temple = temple.sort((a, b) => a - b);
        if (temple.length > k) {temple = temple.slice(1, k + 1);}
        result.push(temple[0]);
    })
    return result;
}