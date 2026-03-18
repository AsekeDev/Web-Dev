N = int(input())

numbers = []
for _ in range(N):
    x = int(input())
    numbers.append(x)

for i in range(0, N, 2):
    print(numbers[i], end=" ")