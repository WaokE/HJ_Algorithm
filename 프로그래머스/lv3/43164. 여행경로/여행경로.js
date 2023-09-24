function solution(tickets) {
    const result = [];
    const ticketsData = {};
    for (let i=0;i<tickets.length;i++) {
        const [from, to] = tickets[i];
        ticketsData[from] ? ticketsData[from].push(i) : ticketsData[from] = [i];
    }
    
    const dfsStack = [['ICN', new Set()]];
    while (dfsStack.length > 0) {
        const [currentCountry, usedTicket] = dfsStack.pop();
        const canUseTickets = ticketsData[currentCountry];
        
        if (usedTicket.size === tickets.length) {
            result.push([...usedTicket]);
            continue;
        }
        
        if (canUseTickets) {
            canUseTickets.forEach((index) => {
                if (!usedTicket.has(index)) { 
                    const [from, to] = tickets[index];
                    const nUsedTicket = new Set([...usedTicket]);
                    nUsedTicket.add(index);
                    dfsStack.push([to, nUsedTicket]);
                }
            })
        }
    }
    for (let i=0;i<result.length;i++) {
        for (let j=0;j<result[i].length;j++) {
            result[i][j] = tickets[result[i][j]][1];
        }
        result[i].unshift('ICN')
    }
    result.sort();
    return result[0];
}