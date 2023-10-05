function countSetBits(number) {
    const binaryString = number.toString(2);
    return (binaryString.match(/1/g) || []).length;
}


function solution(n) {
    const answerBitCount = countSetBits(n);
    
    let current = n + 1;
    while (true) {
        const temp = countSetBits(current);
        if (temp === answerBitCount) {
            return current
        }
        else {
            current++;
        }
    }
}