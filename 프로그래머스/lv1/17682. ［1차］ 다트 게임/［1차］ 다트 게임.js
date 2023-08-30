function solution(dartResult) {
    const taskQ = [...dartResult];
    const result = [];
    
    while (taskQ.length > 0) {
        let score = taskQ.shift();
        if (score === '1' && taskQ[0] === '0') {
            taskQ.shift();
            score = 10;
        }
        const bonus = taskQ.shift();
        let calculatedScore = 0;
        
        switch (bonus) {
            case 'S':
                calculatedScore = Number(score);
                break;
            case 'D':
                calculatedScore = Number(score) ** 2;
                break;
            case 'T':
                calculatedScore = Number(score) ** 3;
                break;
        }
        
        if (isNaN(taskQ[0]) && taskQ[0] !== undefined) {
            const option = taskQ.shift();
            switch (option) {
                case '*':
                    calculatedScore *= 2;
                    if (result.length > 0) result[result.length - 1] *= 2;
                    break;
                case '#':
                    calculatedScore = -calculatedScore;
                    break;
            }
        }
        result.push(calculatedScore);
    }
    const resultSum = result.reduce((sum, currValue) => sum + currValue, 0);
    return resultSum;
}