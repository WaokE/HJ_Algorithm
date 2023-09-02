function solution(arr) {
    let minElemIndex = 0;
    for (let i=0;i<arr.length;i++) {
        if (arr[i] < arr[minElemIndex]) minElemIndex = i;
    }
    arr.splice(minElemIndex, 1);
    if (arr.length > 0) return arr;
    else return [-1]
}