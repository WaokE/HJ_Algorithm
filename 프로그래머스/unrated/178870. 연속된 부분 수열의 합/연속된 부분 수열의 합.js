function solution(sequence, k) {
    let maxSum = sequence[0];
    let firstPointer = 0;
    let secondPointer = 0;
    const result = [];
    while (firstPointer < sequence.length) {
        if (maxSum === k) {
            result.push([firstPointer, secondPointer]);
        }
        
        if (maxSum <= k) {
            secondPointer++ 
            maxSum += sequence[secondPointer];
        } 
        else { 
            maxSum -= sequence[firstPointer];
            firstPointer++;
        }
    }
    result.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]))
    
    return result[0];
}