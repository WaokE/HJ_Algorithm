function solution(msg) {
    const result = [];
    let dictIndex = 1;
    const dict = {}
    for (let i=65;i<91;i++) {
        dict[String.fromCharCode(i)] = dictIndex;
        dictIndex++;
    }
    
    let start = 0;
    while (start < msg.length) {
        let end = start + 1;
        while (end <= msg.length && dict[msg.slice(start, end)]) end++;
        result.push(dict[msg.slice(start, end - 1)])
        dict[msg.slice(start, end)] = dictIndex;
        dictIndex++;
        start = end - 1;
    }  
    return result
}