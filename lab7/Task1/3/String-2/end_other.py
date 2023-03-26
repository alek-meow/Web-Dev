def end_other(a, b):
  s1 = a.lower()
  s2 = b.lower()
  return s1.endswith(s2) or s2.endswith(s1)
