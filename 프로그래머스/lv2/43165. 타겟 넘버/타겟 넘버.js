function solution(numbers, target) {
    let result = 0;
    
    const dfsQ = [];
    dfsQ.push([0, 0])
    while (dfsQ.length > 0) {
        const [index, current] = dfsQ.pop();
        if (index === numbers.length) {
            if (current === target) result++;
            continue;
        }
        
        dfsQ.push([index + 1, current + numbers[index]]);
        dfsQ.push([index + 1, current - numbers[index]]);
    }
    
    return result;
}