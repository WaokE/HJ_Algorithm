function solution(n) {
    const primes = new Set();
    
    for (let i=1;i<=Math.sqrt(n);i++) {
        if (n % i === 0) {
            primes.add(i);
            primes.add(n / i);
        }
    }
    return [...primes].reduce(((sum, prev) => sum + prev), 0);
}