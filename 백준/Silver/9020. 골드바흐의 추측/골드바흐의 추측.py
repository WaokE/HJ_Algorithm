import sys

caseNum = int(sys.stdin.readline())
evens = [int(sys.stdin.readline()) for _ in range(caseNum)]

def isPrime(num):
    if num == 1: return False
    if num == 2: return True
    if num % 2 == 0: return False

    for i in range(3, int(num**0.5)+1, 2):
        if num % i == 0:
            return False

    return True

#입력받은 소수들 중 가장 큰 값보다 작은 소수들을 미리 전부 구해놓는다 -> 시간복잡도 개선을 위함
primes = []
for i in range(max(evens)):
    if(isPrime(i)==True):
        primes.append(i)

for even in evens:
    # 입력받은 짝수보다 작은 소수들을 모두 구한다
    primesUnderEven = []
    for i in range(len(primes)):
        primesUnderEven.append(primes[i])
        if primes[i] >= even:
            break

    matchs = []
    matchCount = 0
    startPoint = 0 
    endPoint = len(primesUnderEven)-1
    
    while 1:
        currentSum = primesUnderEven[startPoint] + primesUnderEven[endPoint]
        if endPoint < startPoint:
            break

        if currentSum < even:
            startPoint +=1
        elif currentSum > even:
            endPoint -= 1
        else:
            matchs.append([primesUnderEven[startPoint] , primesUnderEven[endPoint]])
            matchCount += 1
            endPoint -= 1
            # 중복된 인자가 붙어있을경우 ex) 2, 2, 3, 5, 6 ... 일때 중복되는 만큼 포인터를 움직여주고, 그에 따른 결과값이 몇개가 나오는지 계산하여 카운트에 더해 준다.
            # 이번 경우에는 소수를 담아놓은 primesUnderEven 리스트가 중복되는 인자를 가지지 않기에 스킵 가능!
            # currentPosition = [primesUnderEven[startPoint], primesUnderEven[endPoint]]
            # countStartDup = 0
            # countEndDup = 0
            # while primesUnderEven[startPoint] == currentPosition[0]:
            #     countStartDup += 1
            #     startPoint += 1
            # while primesUnderEven[endPoint] == currentPosition[1]:
            #     countEndDup += 1
            #     endPoint -=1
            # matchCount += countStartDup * countEndDup


    # 각 골드바흐 파티션들의 차를 구한 후, 가장 작은 차의 골드바흐 파티션을 출력한다.    
    subs = []
    for i in range(len(matchs)):
        subs.append(abs(matchs[i][0]-matchs[i][1]))
    print(matchs[subs.index(min(subs))][0], matchs[subs.index(min(subs))][1])
