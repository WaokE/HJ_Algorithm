function solution(k, dungeons) {
    const dfsStack = [[k, new Set()]];
    let result = 0;
    while (dfsStack.length > 0) {
        const [fatigue, cleared] = dfsStack.pop();
        if (result < cleared.size) result = cleared.size;
        for (let i=0;i<dungeons.length;i++) {
            const min = dungeons[i][0];
            const cost = dungeons[i][1];
            if (!cleared.has(i) && min <= fatigue) {
                const temp = new Set(cleared);
                temp.add(i);
                dfsStack.push([fatigue - cost, temp])            
            }
        }
    }
    return result
}