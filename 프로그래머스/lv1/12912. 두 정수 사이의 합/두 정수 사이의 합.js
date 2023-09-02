function solution(a, b) {
    let big;
    let small;
    if (a > b) {
        big = a;
        small = b;
    }
    else {
        big = b;
        small = a;
    }
    let result = 0;
    for (let i=small;i<=big;i++) {
        result += i;
    }
    return result;
}