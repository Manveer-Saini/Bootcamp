from typing import MutableMapping


for i in range(151):
    print(i)

for i in range(5,1001):
    if(i % 5 == 0):
        print(i)

for i in range(1, 101):
    if(i % 5 == 0):
        print("Coding")
    elif(i % 10 == 0):
        print("Coding Dojo")
    else:
        print(i)

sum = 0
for i in range(500001):
    if(i % 2 == 1):
        sum += i

print(sum)

for i in range(2018, 0, -4):
    print(i)

lowNum = 2
highNum = 9
mult = 3
for i in range(lowNum, highNum, mult):
    if(i % mult):
        print(i)