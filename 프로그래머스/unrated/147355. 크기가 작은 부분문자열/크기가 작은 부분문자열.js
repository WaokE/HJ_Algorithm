function solution(t, p) {
    const subsequence = [];
    for (let i=0;i<=t.length-p.length;i++) {
        subsequence.push(Number(t.slice(i, i + p.length)));
    }
    return (subsequence.filter((part) => part <= Number(p)).length)
}