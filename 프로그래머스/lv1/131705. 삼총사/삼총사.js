function getCombinations(arr, selectCount) {
    const result = [];
    
    function combine(current, start) {
        if (current.length === selectCount) {
            result.push(current.slice());
            return;
        }
        
        for (let i = start; i < arr.length; i++) {
            current.push(arr[i]);
            combine(current, i + 1);
            current.pop();
        }
    }
    
    combine([], 0);
    
    return result;
}


function solution(number) {
    const combinations = getCombinations(number, 3);
    let result = 0;
    
    combinations.forEach((comb) => {
        const sum = comb.reduce((a, b) => a + b, 0);
        sum === 0 && result++
    })
    return result;
}