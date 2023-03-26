def front3(str):
    front = ''
    if len(str) > 3:
        front = str[:3]
    else:
        front = str
    return front * 3
