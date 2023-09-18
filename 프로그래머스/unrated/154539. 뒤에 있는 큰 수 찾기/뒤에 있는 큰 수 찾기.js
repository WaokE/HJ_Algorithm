function solution(numbers) {
    const result = new Array(numbers.length).fill(-1);
    const indexStack = [];
    
    for (let i=0;i<numbers.length;i++) {
        const currentNumber = numbers[i];
        while (numbers[indexStack[indexStack.length - 1]] < currentNumber) {
            const popedIndex = indexStack.pop();
            result[popedIndex] = currentNumber;
        }
        indexStack.push(i);
    }
    return result
}