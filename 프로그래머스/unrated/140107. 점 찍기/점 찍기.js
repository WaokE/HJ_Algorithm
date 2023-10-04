function solution(k, d) {
    let result = 0;
    for (let i=k;i<d;i+=k) {
        const height = Math.floor(Math.sqrt(d**2 - i**2));
        result += Math.floor(height / k);
    }
    result += Math.floor(d/k) * 2 
    result ++;
    return result;
}