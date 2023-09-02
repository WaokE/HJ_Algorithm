function solution(n) {
    const primeList = new Array(1000000).fill(true);    
    
    for (let i=2;i<Math.sqrt(1000000);i++) {
        let iterate = i;
        while (iterate < 1000000) {
            iterate += i;
            primeList[iterate] = false;
        }
    }
    
    console.log(primeList);
    
    let result = 0;
    for (let i=2;i<=n;i++) {
        if (primeList[i]) result++;
    }
    return result;
}