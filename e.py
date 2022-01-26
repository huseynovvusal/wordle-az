a = []
while True:
    s = input()
    if len(s) == 5:
        a.append(s)
    if s == '0':
        break

print(a)