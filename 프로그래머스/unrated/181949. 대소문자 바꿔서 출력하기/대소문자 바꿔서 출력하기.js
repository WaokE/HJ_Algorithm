const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const result = [];
    
    for (let i=0;i<str.length;i++) {
        const ASCII = str[i].charCodeAt();
        if (65 <= ASCII && ASCII <= 90) {
            result.push(str[i].toLowerCase());
        } 
        else {
            result.push(str[i].toUpperCase());
        }
    }
    console.log(result.join(''));
});