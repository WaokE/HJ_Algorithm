function solution(N, road, K) {
    const towns = new Array(N + 1).fill(Infinity);
    const roadData = new Array(N + 1);
    towns[1] = 0;
    
    road.forEach((road) => {
        const from = road[0];
        const to = road[1];
        const weight = road[2];
         
        roadData[from] ? roadData[from].push([to, weight]) : roadData[from] = [[to, weight]];
    
        roadData[to] ? roadData[to].push([from, weight]) : roadData[to] = [[from, weight]];
    })
    
    const searchQ = [1];
    while (searchQ.length > 0) {
        const current = searchQ.pop();
        roadData[current].forEach((road) => {
            const to = road[0];
            const weight = road[1];
            
            if (towns[to] > weight + towns[current]) {
                towns[to] = weight + towns[current];
                searchQ.push(to);
            }
        })
    }
    return towns.filter((time) => time <= K).length;
    
}