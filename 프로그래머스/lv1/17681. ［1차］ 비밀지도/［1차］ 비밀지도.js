function solution(n, arr1, arr2) {
    const result = [];
    for (let i=0;i<n;i++) result.push(new Array(n));
    
    for (let i=0;i<n;i++) {
        let secretCode1 = arr1[i];
        let secretCode2 = arr2[i];
        for (let j=0;j<n;j++) {
            let flag = false;
            if (secretCode1 >= 2 ** (n-j-1)) {
                secretCode1 -= 2 ** (n-j-1);
                flag = true;
            }
            if (secretCode2 >= 2 ** (n-j-1)) {
                secretCode2 -= 2 ** (n-j-1);
                flag = true;
            }
            flag ? result[i][j] = ('#') : result[i][j] = (' '); 
        }
    }
     
    return result.map((array) => array.join(''));
}