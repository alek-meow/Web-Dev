N = int(input())
arr = list(map(int, input().split(' ')))
arr.reverse()
for i in range(N):
    print(arr[i], end=' ')
