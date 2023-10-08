function solution(arr) {
    const current = [...arr];
    console.log(Math.min(...current));
    console.log(current.indexOf(Math.min(...current)))
    while (new Set(current).size !== 1) {
        const min = Math.min(...current);
        const minIndex = current.indexOf(min);
        
        current[minIndex] += arr[minIndex];
    }
    return current[0]
}