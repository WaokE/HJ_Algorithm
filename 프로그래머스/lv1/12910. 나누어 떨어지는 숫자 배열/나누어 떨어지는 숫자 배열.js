function solution(arr, divisor) {
    const result = [];
    arr.forEach((elem) => {
        if (elem % divisor === 0) result.push(elem);
    })
    
    result.sort((a, b) => a - b);
    return result.length > 0 ? result : [-1];
}