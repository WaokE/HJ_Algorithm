function solution(record) {
    const userNickName = {};
    const commandLines = [];
    const result = [];
    
    record.forEach((message) => {
        const splitedMessage = message.split(' ');
        const command = splitedMessage[0];
        const userId = splitedMessage[1];
        
        switch(command) {
            case 'Enter':
                const enteredNickName = splitedMessage[2];
                userNickName[userId] = enteredNickName;
                commandLines.push(['Enter', userId]);
                break;
            case 'Leave':
                commandLines.push(['Leave', userId])
                break;
            case 'Change':
                const changedNickName = splitedMessage[2];
                userNickName[userId] = changedNickName;
                break;
        }
    })
    
    commandLines.forEach((command) => {
        const type = command[0];
        const userId = command[1];
        
        switch (type) {
            case 'Enter':
                result.push(`${userNickName[userId]}님이 들어왔습니다.`);
                break;
            case 'Leave':
                result.push(`${userNickName[userId]}님이 나갔습니다.`);
        }
    })
    
    return result;
}