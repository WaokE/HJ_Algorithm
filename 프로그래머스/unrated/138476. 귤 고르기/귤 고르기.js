function solution(k, tangerine) {
    const tangerineData = {};
    let result = 0;
    tangerine.forEach((size) => {
        tangerineData[size] ? tangerineData[size]++ : tangerineData[size] = 1;
    })
    const values = (Object.values(tangerineData));
    values.sort((a, b) => a - b);
    while (k > 0) {
        k -= values.pop();
        result++;
    }
    return result
}