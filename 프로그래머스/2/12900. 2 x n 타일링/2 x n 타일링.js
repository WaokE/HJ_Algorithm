function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    let prev = 1;
    let current = 2;
    let result = 0;
    
    for (let i = 3; i <= n; i++) {
        result = (prev + current) % 1000000007;
        prev = current;
        current = result;
    }
    
    return result;
}
