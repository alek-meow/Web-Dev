def centered_average(nums):
  nums.remove(max(nums))
  nums.remove(min(nums))
  ans = 0
  for i in nums:
    ans += i
  return ans // len(nums)
