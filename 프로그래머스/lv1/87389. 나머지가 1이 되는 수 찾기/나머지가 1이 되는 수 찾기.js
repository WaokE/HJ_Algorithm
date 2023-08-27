function solution(n) {
    const target = n - 1;
    for (let i=2;i<n;i++) {
        if (target%i === 0) {return i;}
    }
}