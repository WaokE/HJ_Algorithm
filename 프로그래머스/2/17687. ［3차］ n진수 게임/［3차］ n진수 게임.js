function solution(n, t, m, p) {
    let game = 0;
    const tubeStack = [];
    
    let currentNumber = 0;
    while (tubeStack.length < t ) {
        const convertedNumber = currentNumber.toString(n);
        for (let i = 0; i < convertedNumber.length; i++) {
            game++;
            if (game % m === p || (game % m === 0 && p === m)) {
                tubeStack.push(convertedNumber[i]);
                if (tubeStack.length === t) break;
            }
        }
        currentNumber++;
    }
    
    return tubeStack.join('').toUpperCase()
}