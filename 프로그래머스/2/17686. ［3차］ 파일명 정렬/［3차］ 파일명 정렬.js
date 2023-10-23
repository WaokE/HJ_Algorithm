function solution(files) {
    const separatedFileNames = files.map((fullName) => {
        const match = fullName.match(/([^0-9]+)([0-9]+)(.*)/i);
        if (match) {
            const [_, head, number, tail] = match;
            return { fullName, head, number, tail };
        }
    });

    separatedFileNames.sort((a, b) => {
        const headComparison = a.head.localeCompare(b.head, undefined, { sensitivity: 'base' });
        if (headComparison !== 0) {
            return headComparison;
        }

        const aNumber = parseInt(a.number, 10);
        const bNumber = parseInt(b.number, 10);
        if (aNumber < bNumber) return -1;
        if (aNumber > bNumber) return 1;

        return 0; // HEAD 및 NUMBER가 동일한 경우, 원래 입력 순서를 유지
    });

    return separatedFileNames.map((file) => file.fullName);
}
