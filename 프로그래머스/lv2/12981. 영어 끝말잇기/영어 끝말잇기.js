function solution(n, words) {
    const usedWord = {}
    let prevEnd = words[0][0];
    let peopleCount = 1;
    let loopCount = 1;
    
    for (let i=0;i<words.length;i++) {
        const word = words[i];
        if(usedWord[word]) {  
            return [peopleCount, loopCount] 
        }
        else { 
            usedWord[word] = true;
        }
        
        const firstChar = word[0];
        if (firstChar !== prevEnd) return [peopleCount, loopCount];
        
        prevEnd = word[word.length - 1]
        peopleCount++;
        if (peopleCount > n) {
            peopleCount = 1;
            loopCount++;
        }
    } 
    return [0, 0];
}