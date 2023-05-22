from collections import deque
def solution(bridge_length, weight, truck_weights):
    sec = 0
    current_weight = 0
    trucks = deque(truck_weights)
    bridge = deque()
    
    while trucks:
        sec += 1
        if bridge:
            if bridge[0][1] == sec: 
                current_weight -= bridge.popleft()[0]
            if weight - current_weight >= trucks[0]:
                temp = trucks.popleft()
                current_weight += temp
                bridge.append((temp, sec+bridge_length))
        else:
            temp = trucks.popleft()
            current_weight += temp
            bridge.append((temp, sec+bridge_length))
    return(bridge[-1][1])