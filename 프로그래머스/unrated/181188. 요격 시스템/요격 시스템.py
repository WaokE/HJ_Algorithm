def solution(targets):
    targets.sort()
    missile = 0
    missileCount = 0
    for target in targets:
        if missile:
            if missile[1] <= target[0]:
                missile = [target[0], target[1]]
                missileCount += 1
            else:
                missile[0] = target[0]
                if target[1] < missile[1]: missile[1] = target[1]
        else:
            missile = [target[0], target[1]]
            missileCount += 1
    return missileCount
