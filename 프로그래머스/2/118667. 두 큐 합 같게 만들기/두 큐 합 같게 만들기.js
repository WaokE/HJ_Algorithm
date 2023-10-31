function solution(queue1, queue2) {
    let sum1 = queue1.reduce((prev, sum) => prev + sum, 0);
    let sum2 = queue2.reduce((prev, sum) => prev + sum, 0);
    
    const searchQ = queue1.concat(queue2);
    let q1Point = 0;
    let q2Point = searchQ.length - queue2.length;
    
    let count = 0;
    while (q1Point < q2Point) {
        if (sum1 === sum2) return count;
        
        else if (sum1 < sum2) {
            sum2 -= searchQ[q2Point];
            sum1 += searchQ[q2Point];
            q2Point++;
        }
        else {
            sum1 -= searchQ[q1Point];
            sum2 += searchQ[q1Point];
            q1Point++;
        }
        count++;
    }
    return -1;
}