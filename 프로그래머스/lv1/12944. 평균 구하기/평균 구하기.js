function solution(arr) {
    const sum = arr.reduce(((prev,sum) => prev + sum), 0);
    
    return sum / arr.length
}