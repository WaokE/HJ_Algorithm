function solution(array, commands) {
    const result = [];
    commands.forEach((command) => {
        const [i, j, k] = command;
        const slicedArray = array.slice(i - 1, j).sort((a, b) => a - b);
        result.push(slicedArray[k - 1]);
    })
    
    return result;
}