function solution(arr)
{
    const result = [];
    arr.forEach((number) => {
        if (result.length === 0 || result[result.length-1] !== number) {
            result.push(number);
        }
    })
    return result;
}