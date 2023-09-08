function solution(begin, target, words) {
    words.push(begin);
    const convertData = {};
    const visited = {};
    
    words.forEach((word) => {
        for (let i=0;i<words.length;i++) {
            const compareWord = words[i];
            let differCount = 0;
            for (let j=0;j<word.length;j++) {
                if (word[j] !== compareWord[j]) differCount++;
            }
            if (differCount === 1) {
                convertData[word] ? convertData[word].push(compareWord) : convertData[word] = [compareWord];
            }
        }
    })
    
    words.forEach((word) => {
        visited[word] = false;
    })

    const BFSQ = [[begin, 0]];
            
    while (BFSQ.length > 0) {
        const [current, convertCount] = BFSQ.shift();
        if (current === target) return convertCount;
        if (visited[current]) continue;
        visited[current] = true;
        
        if (!convertData[current]) continue;
        convertData[current].forEach((toWord) => {
            BFSQ.push([toWord, convertCount + 1])
        })
    }
    return 0;
}