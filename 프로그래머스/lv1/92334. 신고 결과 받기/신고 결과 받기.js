function solution(id_list, report, k) {
    const reportDatas = {}; 
    const userIndex = {};
    const result = new Array(id_list.length);
    result.fill(0);
    for (let i=0;i<id_list.length;i++) {
        reportDatas[id_list[i]] = [];
        userIndex[id_list[i]] = i; 
    }
    
    report.forEach((reportData) => {
        const reportUser = reportData.split(' ')[0];
        const reportedUser = reportData.split(' ')[1];
        
        if (!reportDatas[reportedUser].includes(reportUser)) reportDatas[reportedUser].push(reportUser);
    })
    
    Object.keys(reportDatas).forEach((key) => {
        const value = reportDatas[key];
        if (value.length >= k) {
            value.forEach((userId) => {
                result[userIndex[userId]]++;
            })
        }
    })
    
    return result;
}