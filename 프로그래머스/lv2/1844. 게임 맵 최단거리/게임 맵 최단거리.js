function solution(maps) {
    const visited = [];
    for (let i=0;i<maps.length;i++) {
        visited.push(new Array(maps[0].length).fill(false));
    }
    
    const bfsQ = [];
    bfsQ.push([0, 0, 1]);
    sx = [-1, 1, 0 ,0];
    sy = [0, 0, -1 ,1];
    while (bfsQ.length > 0) {
        const [currentX, currentY, moved] = bfsQ.shift();
        if (currentX === maps.length - 1 && currentY === maps[0].length - 1) return moved;
        
        for (let i=0;i<4;i++) {
            const nx = currentX + sx[i];
            const ny = currentY + sy[i];
            if (nx < 0 || nx >= maps.length || ny < 0 || ny >= maps[0].length || visited[nx][ny] || maps[nx][ny] === 0) continue;
            else {
                visited[nx][ny] = true;
                bfsQ.push([nx, ny, moved + 1]);}
        }
    }
    return -1;
}