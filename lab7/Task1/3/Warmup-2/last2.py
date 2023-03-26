def last2(str):
  ans = 0
  if len(str) > 2:
    end = str[len(str) - 2 :]
    for i in range(len(str) - 2):
      if end == str[i : i + 2]:
        ans += 1
  return ans
