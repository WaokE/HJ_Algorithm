function solution(arr) {
    const n = arr.length;

    function allZerosOrOnes(start, size) {
        const [startX, startY] = start;
        const value = arr[startX][startY];
        for (let i = startX; i < startX + size; i++) {
            for (let j = startY; j < startY + size; j++) {
                if (arr[i][j] !== value) {
                    return false;
                }
            }
        }
        return true;
    }

    function quad(start, size) {
        const [startX, startY] = start;
        if (size === 1 || allZerosOrOnes(start, size)) {
            if (arr[startX][startY] === 0) return [1, 0];
            else return [0, 1];
        }

        const halfSize = size / 2;
        const [zeroCount1, oneCount1] = quad(start, halfSize);
        const [zeroCount2, oneCount2] = quad([startX, startY + halfSize], halfSize);
        const [zeroCount3, oneCount3] = quad([startX + halfSize, startY], halfSize);
        const [zeroCount4, oneCount4] = quad([startX + halfSize, startY + halfSize], halfSize);

        return [
            zeroCount1 + zeroCount2 + zeroCount3 + zeroCount4,
            oneCount1 + oneCount2 + oneCount3 + oneCount4
        ];
    }

    const [zero, one] = quad([0, 0], n);
    return [zero, one];
}