N = int(input())

numbers = []
for _ in range(N):
    x = int(input())
    numbers.append(x)

for i in range(N):
    if numbers[i] % 2 == 0:
        print(numbers[i], end=" ")