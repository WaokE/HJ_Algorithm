function solution(priorities, location) {
    let result = 0;
    const priorityList = [...priorities];
    priorityList.sort((a, b) => a - b);
    let maxPriority = priorityList.pop();
    for (let i=0;i<priorities.length;i++) {
        priorities[i] = [i, priorities[i]];
    }
    const taskQ = priorities.reverse();
    while (taskQ.length > 0) {
        const [index, priority] = taskQ.pop();
        if (priority === maxPriority) {
            maxPriority = priorityList.pop();
            result++;    
            if (index === location) return result;
        }
        else {
            taskQ.unshift([index, priority]);
        }
    }
}