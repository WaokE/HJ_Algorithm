function solution(phone_number) {
    const result = [];
    for (let i=0;i<phone_number.length;i++) i < phone_number.length - 4 ? result.push('*') : result.push(phone_number[i])
    
    return result.join('');
}