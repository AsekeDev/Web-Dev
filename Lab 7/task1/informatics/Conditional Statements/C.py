correct = int(input())
student = int(input())

if correct == student:
    print("YES")
else:
    if correct == 1 and student != 1:
        print("YES")
    else:
        print("NO")