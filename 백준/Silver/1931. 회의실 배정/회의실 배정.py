import sys
input = sys.stdin.readline

N = int(input())
meetings = [list(map(int, input().split()))for _ in range(N)]
meetings.sort()

currentTime = 0
result = []
for meeting in meetings:
    if result:
        prevMeeting = result[-1] 
        if prevMeeting[1] <= meeting[0]:
            result.append(meeting)
        else:
            if (meeting[1] - meeting[0]) + (meeting[0] - prevMeeting[0]) < (prevMeeting[1] - prevMeeting[0]):
                result.pop()
                result.append(meeting)
    else:
        result.append(meeting)

print(len(result))