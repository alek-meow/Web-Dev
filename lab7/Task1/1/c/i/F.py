x = input()
ans = str()
for i in range(len(x) - 1, -1, -1):
    if len(ans) == 0:
        if x[i] == '0':
            continue
    ans += x[i]
print(ans)