function solution(my_string) {
    const filter = ['a', 'e', 'i', 'o', 'u'];
    return [...my_string].map((char) => {
        return filter.includes(char) ? '' : char;
    }).join('')
    
}