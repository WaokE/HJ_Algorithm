function solution(phone_book) {
    const phoneData = {};
    
    // 1. 모든 전화번호를 해시 맵에 저장
    for (const phone of phone_book) {
        phoneData[phone] = true;
    }
    
    // 2. 각 전화번호의 접두사가 해시 맵에 있는지 확인
    for (const phone of phone_book) {
        for (let i = 1; i < phone.length; i++) {
            const prefix = phone.substring(0, i);
            if (phoneData[prefix]) {
                return false;
            }
        }
    }
    
    return true;
}
