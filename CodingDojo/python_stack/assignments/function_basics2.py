def countdown(val):
    theList = []
    for i in range(val, -1, -1):
        theList.append(i)
    return theList
print(countdown(10))    

def printAndReturn(theList):
    print(theList[0])
    return theList[1]
print(printAndReturn([0, 2]))

def firstPlusLength(theList):
    sum = theList[0] + len(theList)
    return sum
print(firstPlusLength([0, 1, 2, 3, 4]))

def greaterThanSecond(theList):
    if(len(theList) < 2):
        return False
    counter = 0
    newList = []
    for i in theList:
        if(i > theList[1]):
            counter += 1
            newList.append(i)
    print(counter)
    return newList
print(greaterThanSecond([1, 2, 4, 10, 20, 1]))

def arrayOfSize(size, val):
    theList = []
    for i in range(size):
        theList.append(val)
    return theList
print(arrayOfSize(10, 5))