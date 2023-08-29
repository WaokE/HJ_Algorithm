function solution(N, stages) {
    const onStagePeople = new Array(N+1).fill(0);
    let allPassedPeople = 0;
    stages.forEach((onStage) => {
        onStage === N + 1 ? allPassedPeople++ : onStagePeople[onStage]++;
    })
    
    const stagePassed = [...onStagePeople];
    for (let i=N;i>=0;i--) {
        i === N ? stagePassed[i] += allPassedPeople : stagePassed[i] = stagePassed[i + 1] + stagePassed[i];
    }
    
    const stageFailRatio = [];
    for (let i=1;i<=N;i++) {
        stageFailRatio.push([i, onStagePeople[i] / stagePassed[i]]);
    }
    stageFailRatio.sort((a, b) => {
        if (a[1] === b[1]) return b - a;
        else return b[1] - a[1];
    })
    
    const result = [];
    stageFailRatio.forEach((elem) => {
        result.push(elem[0]);
    })
    
    return result;
}