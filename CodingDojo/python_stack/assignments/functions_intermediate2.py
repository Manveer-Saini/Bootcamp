x = [[5, 2, 3], [10, 8, 9]]
students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}
z = [{'x': 10, 'y': 20}]

x[1][0] = 15
print(x)
students[0]["last_name"] = "Bryant"
print(students)
sports_directory["soccer"][0] = "Andres"
print(sports_directory)
z[0]["y"] = 30
print(z)

students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]


def iterateDictionary(students):

    for studentIterator in students:
        separator = ", "
        newList = [] 
        for key, value in studentIterator.items():
            firstString = f"{key} - {value}"
            newList.append(firstString)
        
        print(separator.join(newList))

iterateDictionary(students)

# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel

def iterateDictionary2(key_name, some_list):
    for listIterator in some_list:
        print(listIterator[key_name])

iterateDictionary2("first_name", students)
iterateDictionary2("last_name", students)

dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo(some_dict):
    
    for key, value in some_dict.items():
        print(len(value), key.upper())
        for valueIterator in value:
            print(valueIterator)
        print()

printInfo(dojo)