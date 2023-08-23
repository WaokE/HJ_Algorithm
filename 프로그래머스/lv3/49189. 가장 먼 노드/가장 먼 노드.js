function solution(n, edge) {
    const sortedEdge = []
    for (var i = 0; i < n+1; i++) {
        sortedEdge[i] = [];
    }
    edge.forEach((edge) => {
        sortedEdge[edge[0]].push(edge[1]);
        sortedEdge[edge[1]].push(edge[0]);
    })
    
    const isVisitedNode = new Array(n+1);
    isVisitedNode.fill(false);
    const searchQ = [[1, 0]];
    let maxDistance = 1;
    let result = 0;
    
    while (searchQ.length > 0) {
        const [currentNode, distance] = searchQ.shift();
        if (isVisitedNode[currentNode]) continue;
        isVisitedNode[currentNode] = true;
        
        if (distance === maxDistance) result++;
        else if (distance > maxDistance) {
            maxDistance = distance;
            result = 1;
        }
        
        sortedEdge[currentNode].forEach((to) => {
            searchQ.push([to, distance + 1]);
        })
    }
    return result;
}