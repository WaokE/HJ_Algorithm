function solution(arr1, arr2) {
    const result = [];    
    for (let i=0;i<arr1.length;i++) {
        const tempArray = new Array(arr2[0].length);
        tempArray.fill(0);
        result.push(tempArray);
    }
    
    for (let i=0;i<arr1.length;i++) {
        for (let j=0;j<arr2[0].length;j++) {
            for (let k=0;k<arr1[0].length;k++) {
                result[i][j] += arr1[i][k] * arr2[k][j];  
            }
        }
    }
    return result;
}