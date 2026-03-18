N = int(input())

numbers = []
for _ in range(N):
    x = int(input())
    numbers.append(x)

found = False
for i in range(1, N):
    if (numbers[i] > 0 and numbers[i-1] > 0) or (numbers[i] < 0 and numbers[i-1] < 0):
        found = True
        break

if found:
    print("YES")
else:
    print("NO")