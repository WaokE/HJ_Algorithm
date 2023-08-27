function solution(a, b, n) {
    let result = 0;
    while (n >= a) {
        const canChangeCount = Math.floor(n/a);
        n -= canChangeCount * a;
        n += canChangeCount * b;
        result += canChangeCount * b;
    }
    return (result);
}