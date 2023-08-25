function solution(n, lost, reserve) {
    let nLost = [];
    let nReserve = [];
    for (let i=0;i<lost.length;i++) {
        if (!reserve.includes(lost[i])) nLost.push(lost[i]);
    }
    for (let i=0;i<reserve.length;i++) {
        if (!lost.includes(reserve[i])) nReserve.push(reserve[i]);
    }
    nLost = nLost.sort((a, b) => a - b);
    nReserve = nReserve.sort((a, b) => a - b);
    
    nReserve.forEach((student) => {
        for (let i=0;i<nLost.length;i++) {
            if (nLost[i] === student + 1 || nLost[i] === student -1) {
                nLost.splice(i, 1);
                break;
            }
        }
    })
    
    return n - nLost.length;
} 