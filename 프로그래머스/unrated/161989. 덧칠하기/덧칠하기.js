function solution(n, m, section) {
    let currentPos = -1;
    let count = 0;
    section.forEach((wall) => {
        if (wall > currentPos) {
            count += 1;
            currentPos = wall + (m-1);
        }
    })
    return count
}