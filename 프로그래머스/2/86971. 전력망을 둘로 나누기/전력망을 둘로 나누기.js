function solution(n, wires) {
    let result = Infinity;
    const wireData = {};
    wires.forEach((wire) => {
        const [from, to] = wire;
        wireData[from] ? wireData[from].push(to) : wireData[from] = [to];
        wireData[to] ? wireData[to].push(from) : wireData[to] = [from]; 
    })
    
    wires.forEach((cutedWire) => {
        const visited = new Array(n + 1).fill(false);
        const connectedNode = [];
        for (let i=1;i<=n;i++) {
            let nodeCount = 0;
            if (!visited[i]) {
                const DFSStack = [i];
                while (DFSStack.length > 0) {
                    const currentNode = DFSStack.pop();
                    if (visited[currentNode]) continue;
                    nodeCount++;
                    visited[currentNode] = true;
                   for (let i=0;i<wireData[currentNode].length;i++) { 
                       const destination = wireData[currentNode][i]
                       if (cutedWire.includes(currentNode) && cutedWire.includes(destination)) continue;
                       DFSStack.push(destination);
                    }
                }
            }
            if(nodeCount !== 0)connectedNode.push(nodeCount);
        }
        const differ = Math.abs(connectedNode[0] - connectedNode[1]);
        if (result > differ) result = differ;
    })
    return result;
}