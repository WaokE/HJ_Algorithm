function solution(triangle) {
    const dp = [];
    for (let i=1;i<=triangle.length;i++) {
        dp.push(new Array(i).fill(-1));
    }
    dp[0][0] = triangle[0][0];
    let result = -1;

    for (let i=1;i<triangle.length;i++) {
        for (let j=0;j<triangle[i].length;j++) {            
            if (j === 0) dp[i][j] = triangle[i][j] + dp[i - 1][j];
            else if (j === triangle[i].length - 1) dp[i][j] = triangle[i][j] + dp[i - 1][j - 1];
            else {
                dp[i][j] = Math.max(triangle[i][j] + dp[i - 1][j - 1] , triangle[i][j] + dp[i - 1][j]);
            }
            if (i === triangle.length - 1 && result < dp[i][j]) result = dp[i][j]
        }
    }
    return result;
}