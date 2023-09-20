function solution(s) {
    let result = new Array(2).fill(0);
    while (s !== '1') {
        result[0]++;
        let one = 0;
        let zero = 0;
        for (let i=0;i<s.length;i++) {
            s[i] === '1' ? one++ : zero++;
        }
        s = one.toString(2);
        result[1] += zero;
    }
    return result
}