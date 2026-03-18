def xor(x, y):
    return (x == 1 and y == 0) or (x == 0 and y == 1)

numbers = input().split()
x = int(numbers[0])
y = int(numbers[1])

if xor(x, y):
    print(1)
else:
    print(0)