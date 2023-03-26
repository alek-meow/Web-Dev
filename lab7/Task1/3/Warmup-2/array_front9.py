def array_front9(nums):
  l = min(4, len(nums))
  for i in range(l):
    if nums[i] == 9:
      return True
  return False
