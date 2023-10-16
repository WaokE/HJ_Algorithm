function TimeToMinute(time) {
    const hour = Number(time.slice(0, 2));
    const min = Number(time.slice(3, 5));
    
    return (hour * 60) + min
}
 
function solution(fees, records) {
    const [basicTime, basicFee, partTime, partFee] = fees;
    
    function calculateFee (time) {
        if (time <= basicTime) {
            return basicFee;
        }
        else {
            return basicFee + (Math.ceil((time - basicTime) / partTime) * partFee);
        }
    }
    
    const parking = {};
    const totalParkingTime = {};
    records.forEach((record) => {
        const [timeStr, carNumb, type] = record.split(' ');
        switch (type) {
            case 'IN':
                parking[carNumb] = TimeToMinute(timeStr);
                break;
            case 'OUT':
                const parkingTime = TimeToMinute(timeStr) - parking[carNumb];
                totalParkingTime[carNumb] ? totalParkingTime[carNumb] += parkingTime : totalParkingTime[carNumb] = parkingTime;
                parking[carNumb] = undefined;
                break;
        }
    })
    
    for (const car in parking) {
        if (parking[car] !== undefined) {
            const parkingTime = TimeToMinute("23:59") - parking[car];
            totalParkingTime[car] ? totalParkingTime[car] += parkingTime : totalParkingTime[car] = parkingTime;
        }
    }
    
    const cars = Object.keys(parking);
    cars.sort((a, b) => Number(a) - Number(b));
    
    const result = [];
    cars.forEach((carNumb) => {
        result.push(calculateFee(totalParkingTime[carNumb]));
    })
    
    return result;
}