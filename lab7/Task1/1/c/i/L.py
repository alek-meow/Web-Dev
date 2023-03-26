x = input()
l = len(x) - 1
ans = 0
for i in x:
    if i == '1':
        ans += 2 ** l
    l -= 1
print(ans)
