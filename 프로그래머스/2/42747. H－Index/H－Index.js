function solution(citations) {
    const totalPaper = citations.length;
    citations.sort((a, b) => b - a);
    
    for (let i = 0; i < totalPaper; i++) {
        if (i + 1 > citations[i]) {
            return i;
        }
    }
    
    return totalPaper;
}
