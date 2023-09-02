function solution(n, m) {
    const result = [];
    let a = n;
    let b = m;
    while (true) {
        const temp = a % b;
        if (temp === 0) {
            result.push(b);
            break;
        }
        else {
            a = b;
            b = temp;
        }
    }
    
    result.push(n * m / result[0]);
    
    return result;
}