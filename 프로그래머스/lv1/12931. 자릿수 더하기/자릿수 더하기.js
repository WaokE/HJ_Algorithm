function solution(n)
{
    let result = 0;
    [...n.toString()].forEach((numb) => result += Number(numb));
    
    return result
}