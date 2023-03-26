N = int(input())
arr = list(map(int, input().split(' ')))
ans = False
for i in range(1, N):
    if (arr[i] > 0 and arr[i - 1] > 0) or (arr[i] < 0 and arr[i - 1] < 0):
        ans = True
        break
print('YES') if ans else print('NO')