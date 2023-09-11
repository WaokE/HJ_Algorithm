function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    let result = 0;
    while (A.length > 0) {
        const first = A.shift();
        const second = B.pop();
        result += (first * second)
    }
    
    return result;
}