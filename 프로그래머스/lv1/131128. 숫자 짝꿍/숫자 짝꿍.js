function solution(X, Y) {
    const dictX = {};
    [...X].forEach((number) => {
        number = Number(number);
        dictX[number] ? dictX[number]++ : dictX[number] = 1;
    })
    
    const overlapDict = {};
    [...Y].forEach((number) => {
        number = Number(number);
        if (dictX[number] && dictX[number] > 0) {
            dictX[number]--;
            overlapDict[number] ? overlapDict[number]++ : overlapDict[number] = 1;   
        }
    })
    
    const resultArray = [];
    const overlapKeyArray = Object.keys(overlapDict).sort((a, b) => b - a);
    overlapKeyArray.forEach((number) => {
        while (overlapDict[number] > 0) {
            overlapDict[number]--;
            resultArray.push(number);
        }
    })
    
     if (resultArray.length === 0) return '-1'
    const result = resultArray.join('');
    return Number(result) === 0 ? '0' : result;
}