function solution(num) {
    let collatzCount = 0;
    let temp = num;
    
    while (temp !== 1) {
        if (collatzCount === 500) {
            collatzCount = -1;
            break;
        }
        if (temp % 2 === 0) {
            collatzCount++;
            temp /= 2;
            continue;
        }
        else {
            collatzCount++;
            temp = temp * 3 + 1
            continue;
        }
    }
    return collatzCount;
}