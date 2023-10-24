function solution(dirs) {
    let result = 0;
    const visited = new Array(11);
    for (let i = 0; i < 11; i++) {
        visited[i] = new Array(11);
        for (let j = 0; j < 11; j++) {
            visited[i][j] = new Array(4).fill(false);
        }
    }

    const character = [0, 0];
    [...dirs].forEach((command) => {
        const destination = [character[0], character[1]];
        switch (command) {
            case 'U':
                if (character[0] < 5) {  // 수정: character[0]가 5 미만인 경우에만 이동
                    destination[0]++;
                    if (!visited[character[0] + 5][character[1] + 5][0] && !visited[destination[0] + 5][destination[1] + 5][1]) {
                        result++;
                        visited[character[0] + 5][character[1] + 5][0] = true;
                        visited[destination[0] + 5][destination[1] + 5][1] = true;
                    }
                }
                break;
            case 'D':
                if (character[0] > -5) {  // 수정: character[0]가 -5 초과인 경우에만 이동
                    destination[0]--;
                    if (!visited[character[0] + 5][character[1] + 5][1] && !visited[destination[0] + 5][destination[1] + 5][0]) {
                        result++;
                        visited[character[0] + 5][character[1] + 5][1] = true;
                        visited[destination[0] + 5][destination[1] + 5][0] = true;
                    }
                }
                break;
            case 'L':
                if (character[1] > -5) {  // 수정: character[1]가 -5 초과인 경우에만 이동
                    destination[1]--;
                    if (!visited[character[0] + 5][character[1] + 5][2] && !visited[destination[0] + 5][destination[1] + 5][3]) {
                        result++;
                        visited[character[0] + 5][character[1] + 5][2] = true;
                        visited[destination[0] + 5][destination[1] + 5][3] = true;
                    }
                }
                break;
            case 'R':
                if (character[1] < 5) {  // 수정: character[1]가 5 미만인 경우에만 이동
                    destination[1]++;
                    if (!visited[character[0] + 5][character[1] + 5][3] && !visited[destination[0] + 5][destination[1] + 5][2]) {
                        result++;
                        visited[character[0] + 5][character[1] + 5][3] = true;
                        visited[destination[0] + 5][destination[1] + 5][2] = true;
                    }
                }
                break;
        }
        character[0] = destination[0];
        character[1] = destination[1];
    })
    return result;
}
