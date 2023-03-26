N = int(input())
arr = list(map(int, input().split(' ')))
ans = 0
for i in range(1, N):
    if arr[i - 1] < arr[i]:
        ans += 1
print(ans)