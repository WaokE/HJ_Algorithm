function timeToMinute (time) {
    const hour = Number(time.slice(0, 2));
    const minute = Number(time.slice(3, 5));
    
    return hour * 60 + minute;
}

function solution(plans) {
    const taskPlans = plans.map((data) => {
        return [data[0], timeToMinute(data[1]), Number(data[2])];
    })
    taskPlans.sort((a, b) => a[1] - b[1]);
    
    let currentTask = taskPlans.shift();
    let currentTime = currentTask[1];
    const result = [];
    const taskQ = [];
    
    while (taskPlans.length > 0) {
        // 다음 과제 시작 전에 현재 과제를 마무리 할 수 있는 경우
        if (currentTime + currentTask[2] <= taskPlans[0][1]) {
            if (taskQ.length > 0 && currentTime + currentTask[2] !== taskPlans[0][1]) {
                result.push(currentTask[0]);
                currentTime += currentTask[2];
                currentTask = taskQ.pop();
            }
            else {
                result.push(currentTask[0]);
                currentTime = taskPlans[0][1];
                currentTask = taskPlans.shift();
            }
        }
        // 다음 과제 시작 전에 현재 과제를 마무리 할 수 없는 경우 -> 미뤄야 함
        else {
            const [name, startTime, leftTime] = currentTask;
            taskQ.push([name, startTime, leftTime - (taskPlans[0][1] - currentTime)])
            currentTime = taskPlans[0][1];
            currentTask = taskPlans.shift();
        }
    }
    
    result.push(currentTask[0]);
    for (let i=taskQ.length-1;i>=0;i--) {
        result.push(taskQ[i][0]);
    }
    
    return result;
}