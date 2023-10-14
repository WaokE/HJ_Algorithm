function searchCache(cache, target) {
    for (let i = 0; i < cache.length; i++) {
        if (cache[i] === target) return i; // 해당 데이터의 인덱스 반환
    }
    return -1;
}

function updateCache(cache, limit, target) {
    const targetIndex = searchCache(cache, target);

    if (targetIndex !== -1) {
        // 이미 캐시에 있는 경우 해당 데이터를 맨 앞으로 이동
        const targetData = cache.splice(targetIndex, 1)[0];
        cache.unshift(targetData);
    } else {
        // 캐시에 없는 경우 맨 앞에 데이터 추가
        cache.unshift(target);
        if (cache.length > limit) cache.pop(); // 캐시 크기 제한 초과 시 맨 뒤의 데이터 제거
    }
}

function solution(cacheSize, cities) {
    let totalTime = 0;
    const cache = [];

    cities.forEach((city) => {
        const targetCity = city.toLowerCase();

        if (cacheSize === 0) {
            totalTime += 5; // 캐시 크기가 0이면 모든 요청이 cache miss
        } else {
            const targetIndex = searchCache(cache, targetCity);

            if (targetIndex !== -1) {
                totalTime += 1; // cache hit
            } else {
                totalTime += 5; // cache miss
            }

            updateCache(cache, cacheSize, targetCity);
        }
    });

    return totalTime;
}
