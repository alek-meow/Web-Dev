def no_teen_sum(a, b, c):
  ans = 0
  for i in [a, b, c]:
    if 13 <= i < 15 or 16 < i <= 19:
      ans += 0
    else:
      ans += i
  return ans
