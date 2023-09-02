function solution(n) {
    const result = [];
    for (let i=0;i<n;i++) {
        if (i % 2 === 0) result.push('수');
        else result.push('박')
    }
    
    return result.join('');
}