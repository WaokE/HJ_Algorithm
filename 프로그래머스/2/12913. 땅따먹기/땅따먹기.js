function solution(land) {
    const xLength = land.length;
    const yLength = land[0].length;
    const memo = Array.from({ length: xLength }, () => Array(yLength).fill(-1));
    memo[0] = [...land[0]];

    for (let x = 1; x < xLength; x++) {
        for (let y = 0; y < yLength; y++) {
            memo[x][y] = Math.max(...memo[x - 1].filter((_, i) => i !== y)) + land[x][y];
        }
    }

    return Math.max(...memo[xLength - 1]);
}
