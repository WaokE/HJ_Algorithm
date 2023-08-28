function solution(numbers) {
    const result = new Set();
    
    for (let i=0;i<numbers.length;i++) {
        const first = numbers[i];
        for (let j=0;j<numbers.length;j++) {
            if (i === j) continue;
            const second = numbers[j];
            result.add(first + second);
        }
    }
    
    return [...result].sort((a, b) => a - b);
}