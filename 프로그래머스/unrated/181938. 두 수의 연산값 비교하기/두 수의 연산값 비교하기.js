function solution(a, b) {
    const first = Number(a.toString() + b.toString());
    const second = 2 * a * b;
    return second > first ? second : first
}