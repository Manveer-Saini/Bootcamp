from typing import Counter


def biggieList(theList):
    for i in range(len(theList)):
        if(theList[i] > 0):
            theList[i] = "big"
    return theList
print(biggieList([-1, 2, 5, 0, -2]))

def positiveListVal(theList):
    counter = 0
    for i in range(len(theList)):
        if(theList[i] > 0):
            counter += 1
    theList[len(theList) - 1] = counter
    return theList
print(positiveListVal([-1, 2, 5, 0, -2]))

def sumOfAll(theList):
    sum = 0
    for i in theList:
        sum += i
    return sum
print(sumOfAll([-1, 2, 5, 0, -2]))

def avgOfAll(theList):
    avg = 0
    for i in theList:
        avg += i
    avg /= len(theList)
    return avg
print(avgOfAll([1, 2, 3, 4]))

def lengthOfList(theList):
    counter = 0
    for i in theList:
        counter += 1
    return counter
print(lengthOfList([1, 2, 3, 4]))

def minimumVal(theList):
    if(len(theList) == 0):
        return False
    min = theList[0]
    for i in range(1, len(theList)):
        if(min > theList[i]):
            min = theList[i]
    return min
print(minimumVal([-1, 2, 5, 0, -3, -2]))

def maximumVal(theList):
    if(len(theList) == 0):
        return False
    max = theList[0]
    for i in range(1, len(theList)):
        if(max < theList[i]):
            max = theList[i]
    return max
print(maximumVal([-1, 2, 5, 0, -3, -2]))

def ultimateAnalysis(theList):
    theDict = {}
    sum = 0
    for i in theList:
        sum += i
    theDict["sumTotal"] = sum

    sum /= len(theList)
    theDict["average"] = sum

    min = theList[0]
    for i in range(1, len(theList)):
        if(min > theList[i]):
            min = theList[i]
    theDict["minimum"] = min

    max = theList[0]
    for i in range(1, len(theList)):
        if(max < theList[i]):
            max = theList[i]
    theDict["maximum"] = max

    counter = 0
    for i in theList:
        counter += 1
    theDict["lengthOfList"] = counter

    return theDict
print(ultimateAnalysis([-1, 2, 5, 0, -3, -2]))

def reverseList(theList):
    front = 0
    back = len(theList) - 1
    while(front < back):
        temp = theList[front]
        theList[front] = theList[back]
        theList[back] = temp
        front += 1
        back -= 1
    return theList
print(reverseList([-1, 2, 5, 0, -3, -2]))