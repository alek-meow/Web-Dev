def round_sum(a, b, c):
  ans = 0
  for i in [a, b, c]:
    if i % 10 < 5:
      ans += i - (i % 10)
    else:
      ans += i + 10 - (i % 10)
  return ans