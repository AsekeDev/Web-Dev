N = int(input())

numbers = []
for _ in range(N):
    x = int(input())
    numbers.append(x)

count = 0
for i in range(N):
    if numbers[i] > 0:
        count += 1

print(count)