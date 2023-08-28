function solution(lottos, win_nums) {
    let winNumber = 0;
    let possibleNumberCount = 0;
    lottos.forEach((lotto) => {
        if (win_nums.includes(lotto)) {
            win_nums.splice(win_nums.indexOf(lotto), 1);
            winNumber++;
        }
        else if (lotto === 0) possibleNumberCount++;
    })
    
    console.log(winNumber);
    console.log(possibleNumberCount);
    
    const result = [];
    const canMax = 7 - (winNumber + possibleNumberCount);
    const canMin = 7 - winNumber;
    result.push(canMax > 6 ? 6 : canMax);
    result.push(canMin > 6 ? 6 : canMin);
    return result;
}