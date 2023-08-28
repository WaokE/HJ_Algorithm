function solution(sizes) {
    const resultSize = [0, 0];
    
    sizes.forEach((size) => {
        const sortedSize = size.sort((a, b) => b - a);
        if (resultSize[0] < sortedSize[0]) resultSize[0] = sortedSize[0];
        if (resultSize[1] < sortedSize[1]) resultSize[1] = sortedSize[1];
    })
    return resultSize[0] * resultSize[1];
}