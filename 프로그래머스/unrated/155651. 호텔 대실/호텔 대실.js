function timeToMin (time) {
    const hour = Number(time.slice(0,2));
    const minute = Number(time.slice(3,5));
    
    return ((hour * 60) + minute);
}

function solution(book_time) {
    book_time.sort((a, b) => {
        const first = timeToMin(a[0]);
        const second = timeToMin(b[0]);
        
        return second - first;
    })
    
    const rooms = [];
    let result = -1;
    while(book_time.length > 0) {
        const current = book_time.pop();
        const currentStartTime = timeToMin(current[0]);
        
        while (rooms[rooms.length - 1] <= currentStartTime) rooms.pop();
        rooms.push(timeToMin(current[1]) + 10);
        if (result < rooms.length) result = rooms.length
        rooms.sort((a, b) => b - a);
    }
    
    return result;
}