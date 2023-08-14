function checkRoute (park, current, direction, distance, MAX_X, MAX_Y) {
    const [currentX, currentY] = current
    switch(direction) {
        case 'N':
            for (let i=1;i<distance+1;i++) {
                if (currentX - i < 0 || park[currentX - i][currentY] === "X") {return false;}
            }
            return true;
        case 'S':
            for (let i=1;i<distance+1;i++) {
                if (currentX + i > MAX_X || park[currentX + i][currentY] === "X") {return false;}
            }
            return true;
        case 'W':
            for (let i=1;i<distance+1;i++) {
                if (currentY - i < 0 || park[currentX][currentY - i] === "X") {return false;}
            }
            return true;
        case 'E':
            for (let i=1;i<distance+1;i++) {
                if (currentY + i > MAX_Y || park[currentX][currentY + i] === "X") {return false;}
            }
            return true;
    }
}

function solution(park, routes) {
    let robotDog = [];
    const MAX_X = park.length - 1;
    const MAX_Y = park[0].length - 1;
    
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === "S") robotDog = [i, j];
        }
    }
    
    for (let i = 0; i < routes.length; i++) {
        const [direction, distance] = routes[i].split(' ');
        if (direction === 'N' && checkRoute(park, robotDog, 'N', Number(distance), MAX_X, MAX_Y)) {
            robotDog = [robotDog[0] - Number(distance), robotDog[1]];
        } else if (direction === 'S' && checkRoute(park, robotDog, 'S', Number(distance), MAX_X, MAX_Y)) {
            robotDog = [robotDog[0] + Number(distance), robotDog[1]];
        } else if (direction === 'W' && checkRoute(park, robotDog, 'W', Number(distance), MAX_X, MAX_Y)) {
            robotDog = [robotDog[0], robotDog[1] - Number(distance)];
        } else if (direction === 'E' && checkRoute(park, robotDog, 'E', Number(distance), MAX_X, MAX_Y)) {
            robotDog = [robotDog[0], robotDog[1] + Number(distance)];
        }
        console.log(robotDog);
    }
    
    return robotDog;
}
