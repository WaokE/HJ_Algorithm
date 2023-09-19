function solution(genres, plays) {
    const totalScores = {};
    const indexOfGenres = {};

    // 장르별 총 재생 횟수와 곡의 인덱스 저장
    for (let i = 0; i < genres.length; i++) {
        totalScores[genres[i]] = (totalScores[genres[i]] || 0) + plays[i];
        if (!indexOfGenres[genres[i]]) {
            indexOfGenres[genres[i]] = [];
        }
        indexOfGenres[genres[i]].push(i);
    }

    // 재생 횟수 내림차순으로 장르 정렬
    const sortedGenres = Object.keys(totalScores).sort((a, b) => totalScores[b] - totalScores[a]);

    const result = [];
    for (const genre of sortedGenres) {
        const genreIndexs = indexOfGenres[genre];
        // 장르 내 곡이 하나일 경우 바로 추가
        if (genreIndexs.length === 1) {
            result.push(genreIndexs[0]);
        } else {
            // 장르 내 곡이 여러 개일 경우, 재생 횟수 내림차순으로 정렬하고 최대 2개 추가
            genreIndexs.sort((a, b) => {
                if (plays[a] === plays[b]) {
                    return a - b;
                } else {
                    return plays[b] - plays[a];
                }
            });
            result.push(genreIndexs[0]);
            result.push(genreIndexs[1]);
        }
    }

    return result;
}
