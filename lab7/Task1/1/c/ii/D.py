a = int(input())
i = 0
while 2 ** i < a:
    i += 1
print('YES') if 2 ** i == a else print('NO')