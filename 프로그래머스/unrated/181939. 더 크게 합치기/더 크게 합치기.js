function solution(a, b) {
    const aString = a.toString();
    const bString = b.toString();
    return Number(bString + aString) > Number(aString + bString) ? Number(bString + aString) : Number(aString + bString)
}