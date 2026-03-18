N = int(input())

numbers = []
for _ in range(N):
    x = int(input())
    numbers.append(x)

count = 0
for i in range(1, N-1):
    if numbers[i] > numbers[i-1] and numbers[i] > numbers[i+1]:
        count += 1

print(count)