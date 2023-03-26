def sum67(nums):
    six = False
    ans = 0
    for i in nums:
        if six and i == 7:
            six = False
            continue
        if not six:
            if i == 6:
                six = True
            else:
                ans += i

    return ans
