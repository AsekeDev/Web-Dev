n = int(input())
arr = list(map(int, input().split()))

max_score = max(arr)
runner_up = -100

for score in arr:
    if score > runner_up and score < max_score:
        runner_up = score

print(runner_up)