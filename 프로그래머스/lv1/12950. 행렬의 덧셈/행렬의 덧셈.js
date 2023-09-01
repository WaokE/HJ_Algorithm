function solution(arr1, arr2) {
    const result = new Array(arr1.length);
    for (let i=0;i<arr1.length;i++) result[i] = [];
    
    for (let i=0;i<arr1.length;i++) {
        for (let j=0;j<arr1[0].length;j++) {
            result[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    
    return result;
}