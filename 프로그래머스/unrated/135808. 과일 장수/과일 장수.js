function solution(k, m, score) {
    const sortedScore = score.sort((a, b) =>  a - b );
    let appleBox = [];
    let result = 0;
    
    while (sortedScore.length > 0) {
        appleBox.push(sortedScore.pop());
        
        if (appleBox.length === m) {
            result += (appleBox.pop() * m);
            appleBox = [];
        }
    }
    return result;
}