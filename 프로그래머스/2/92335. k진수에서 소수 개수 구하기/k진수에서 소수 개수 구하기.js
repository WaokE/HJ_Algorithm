function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    if (number === 2) {
        return true;
    }

    if (number % 2 === 0) {
        return false;
    }

    const sqrt = Math.sqrt(number);
    for (let i = 3; i <= sqrt; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function convertToBaseK(n, k) {
    if (n === 0) {
        return '0';
    } else {
        return convertToBaseK(Math.floor(n / k), k) + (n % k).toString();
    }
}

function solution(n, k) {
    let result = 0;
    const binaryNumberArr = [...String(Number(convertToBaseK(n, k)))];
    let numberStack = [];
    binaryNumberArr.forEach((binary) => {
        if (binary !== '0') numberStack.push(binary);
        else {
            const number = Number(numberStack.join(''));
            if (isPrime(number)) result++;
            numberStack = []; 
        }
    })
    const number = Number(numberStack.join(''));
    if (isPrime(number)) result++;
    return result;
}