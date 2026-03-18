N = int(input())

numbers = []
for _ in range(N):
    x = int(input())
    numbers.append(x)

for i in range(N // 2):
    numbers[i], numbers[N - 1 - i] = numbers[N - 1 - i], numbers[i]

for i in range(N):
    print(numbers[i], end=" ")