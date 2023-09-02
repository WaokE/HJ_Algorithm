function solution(a, b) {
    const months = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const dayOfMonth = [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDay = 4;
    
    for (let i=1;i<a;i++) {
        totalDay += dayOfMonth[i];
    }
    totalDay += b;
    
    return months[totalDay % 7];
}