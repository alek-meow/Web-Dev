N = int(input())
arr = list(map(int, input().split(' ')))
ans = 0
for i in arr:
    if i > 0:
        ans += 1
print(ans)