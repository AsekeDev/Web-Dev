def power(a, n):
    result = 1
    for _ in range(n):
        result *= a
    return result

numbers = input().split()
a = float(numbers[0])
n = int(numbers[1])

print(power(a, n))