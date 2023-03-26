def xor(x, y):
    return int((x == 1 or y == 1) and x != y)


x, y = map(int, input().split(' '))
print(xor(x, y))