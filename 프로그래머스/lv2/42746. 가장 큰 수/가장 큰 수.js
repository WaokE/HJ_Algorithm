function solution(numbers) {
    const sortedNumbers = numbers.map(String).sort((a, b) => {
        return (b + a) - (a + b);
    });

    if (sortedNumbers[0] === '0') return '0';
    return sortedNumbers.join('');
}
