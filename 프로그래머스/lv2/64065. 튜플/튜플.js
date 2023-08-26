function solution(s) {
    const tuple = [];
    s.slice(2,s.length-2).split('},{').forEach((elem) => {
        tuple.push(elem.split(',').map((a) => Number(a)));
    })

    let result = new Set();
    tuple.sort((a, b) =>  b.length - a.length);
    while (tuple.length > 0) {
        const current = tuple.pop();
        current.forEach((elem) => {
            result.add(elem);
        })
    }
    return [...result];
}