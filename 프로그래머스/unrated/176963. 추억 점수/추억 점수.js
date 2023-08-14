function solution(name, yearning, photo) {
    const personData = {};
    for (let i=0;i<name.length;i++) {
        personData[name[i]] = yearning[i]
    }
    
    let result = [];
    for (let i=0;i<photo.length;i++) {
        let photoYearning = 0;
        for (let j=0;j<photo[i].length;j++) {
            if (personData[photo[i][j]]) {
            photoYearning += personData[photo[i][j]]
            }
        }
        result.push(photoYearning)
    }
    return result
}