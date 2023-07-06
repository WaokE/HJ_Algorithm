N, M = list(map(int, input().split()))
video_lesson = list(map(int, input().split()))

start = max(video_lesson)
end = sum(video_lesson)
res = float('inf')
while start <= end:
    middle = (start + end)//2
    count_blueRay = 1
    temp_length = 0
    for video_length in video_lesson:
        if temp_length + video_length <= middle:
            temp_length += video_length
        else:
            count_blueRay += 1
            temp_length = video_length
        if count_blueRay > M:
            break
    if count_blueRay > M:
        start = middle + 1
    else:
        end = middle-1
        if(middle >= max(video_lesson)):
            res = min(res, middle)
            
print(res)
