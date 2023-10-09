function solution(n,a,b)
{
    let currentA = a > b ? b : a;
    let currentB = a > b ? a : b;
    let result = 1;
    
    while (true) {
        if ((currentB - currentA) === 1 && currentB % 2 === 0) break;
        n = n ** (1/2);
        currentA =  Math.ceil(currentA / 2);
        currentB =  Math.ceil(currentB / 2);
        result++;
    }
    return result
}