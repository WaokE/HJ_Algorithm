function solution(topping) {
    let result = 0;
    const me = {};
    const bro = new Set();
    
    topping.forEach((topping) => {
        me[topping] ? me[topping]++ : me[topping] = 1;
    })
    let meSize = Object.keys(me).length;
    
    topping.forEach((topping) => {
        me[topping]--;
        if (me[topping] === 0) meSize--;
        bro.add(topping);
        if (meSize === bro.size) {
            result++;
        }
    })
    return result;
}