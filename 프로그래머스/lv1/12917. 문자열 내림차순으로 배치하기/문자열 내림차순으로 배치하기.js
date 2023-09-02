function solution(s) {
    const result = [...s].sort((a, b) => {
        return b.charCodeAt() - a.charCodeAt();
    })
    
    return result.join('');
}