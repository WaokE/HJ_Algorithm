function solution(n, computers) {
    let result = 0;
    const visited = new Array(n + 1).fill(false)
    function BFS (startNode) {
        const BFSQ = [startNode];
        while (BFSQ.length > 0) {
            const current = BFSQ.shift();
            if (visited[current]) continue;
            visited[current] = true;
            
            for (let i=0;i<n;i++) {
                if (computers[current - 1][i] && current !== i+1) BFSQ.push(i + 1); 
            }
        }
    }
    
    for (let i=1;i<=n;i++) {
        if (visited[i]) continue;
        BFS(i);
        result++;
    }
    
    return result;
}