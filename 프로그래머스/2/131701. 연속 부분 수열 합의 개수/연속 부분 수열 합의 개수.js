function solution(elements) {
    const result = [];
    const n = elements.length;

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < i + n; j++) {
            sum += elements[j % n];
            result.push(sum);
        }
    }

    return [...new Set(result)].length;
}
