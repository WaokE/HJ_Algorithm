function solution(n) {
    let result = 0;
    let sum = 0;
    let start = 1;

    for (let end = 1; end <= n; end++) {
        sum += end;

        while (sum > n) {
            sum -= start;
            start++;
        }

        if (sum === n) {
            result++;
        }
    }

    return result;
}
