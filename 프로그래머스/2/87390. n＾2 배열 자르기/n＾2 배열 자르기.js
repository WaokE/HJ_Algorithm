function solution(n, left, right) {
    const result = [];
    const start = [Math.floor(left / n), left % n];
    const end = [Math.floor(right / n), right % n];
    
    
    while (start[0] !== end[0] || start[1] !== end[1]) {
        
        start[0] > start[1] ? result.push(start[0] + 1) : result.push(start[1] + 1);
        
        start[1]++;
        if (start[1] >= n) {
            start[0]++;
            start[1] = 0;
        }
    } 
     start[0] > start[1] ? result.push(start[0] + 1) : result.push(start[1] + 1);
    return result
}