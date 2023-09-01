process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    const result = new Array(b);
    for (let i=0;i<b;i++) {
        result[i] = [];
        for (let j=0;j<a;j++) result[i].push('*');
    }
    
    for (let i=0;i<b;i++) {
        console.log(result[i].join(''));
    }
});