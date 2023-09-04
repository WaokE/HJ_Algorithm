function solution(progresses, speeds) {
    const result = [];
    while (progresses.length > 0) {
        for (let i=0;i<progresses.length;i++) {
            progresses[i] += speeds[i]
        }
        
        let popCount = 0;
        while (true) {
            if (progresses.length === 0) break;
            if (progresses[0] >= 100) {
                popCount++;
                progresses.shift();
                speeds.shift();
            }
            else {
                break;
            }
        }
        if (popCount > 0) result.push(popCount)
    }
    
    return result;
}