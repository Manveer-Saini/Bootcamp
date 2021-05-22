// 1. Get 1 to 255 - Write a function that returns an array with all the
//  numbers from 1 to 255.

function numsTo255(){
    let numTo255 = [];

    for(let i = 1; i < 256; i++){
        numTo255.push(i);
    }
    return numTo255;
}

// 2. Get even 1000 - Write a function that would get the sum of all the even
//  numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function evenSumTo1000(){
    let sum = 0;
    for(let i = 1; i <= 1000; i++){
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

// 3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers
//  from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function oddSumTo5000(){
    let sum = 0;
    for(let i = 1; i <= 5000; i++){
        if (i % 2 == 1) {
            sum += i;
        }
    }
    return sum;
}

// 4. Iterate an array - Write a function that returns the sum of all the values
// within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function sumOfArray(sumArray){
    let sum = 0;
    for(let i = 0; i < sumArray.length; i++){
        sum += sumArray[i];
    }
    return sum;
}

// 5. Find max - Given an array with multiple values, write a function that
// returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
    function maxArray(someArray){
        let max = someArray[0];

        for(let i = 0; i < someArray.length; i++){
            if (max < someArray[i]) {
                max = someArray[i];
            }
        }
        return max;
    }

// let theArray = [-3,3,5,-7];
// console.log(maxArray(theArray));

// 6. Find average - Given an array with multiple values, write a function that
// returns the average of the values in the array. (e.g. for [1,3,5,7,20]
// average is 7.2)
    function averageArray(someArray){
        let sum = 0;
        for(let i = 0; i < someArray.length; i++){
            sum += someArray[i];
        }
        sum /= someArray.length;
        return sum;
    }


    // let theArray = [1,3,5,7,20];
    // console.log(averageArray(theArray));
// 7. Write a function that would return an array of all the odd numbers
// between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddNumber(){
    let oddNumberArray = [];
    for(let i = 1; i < 51; i++){
        if (i % 2 == 1){
            oddNumberArray.push(i);
        }
    }
    return oddNumberArray;
}


// 8. Greater than Y - Given value of Y, write a function that takes an
// array and returns the number of values that are greater than Y. For example
// if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two
// values in the array greater than 3, which are 5, 7). 

function oddNumber(array, Y){
    let numsGreater = 0;
    for(let i = 0; i < array.length; i++){
        if (array[i] > Y){
            numsGreater++;
        }
    }
    return numsGreater;
}

// 9. Squares - Given an array with multiple values, write a function that
// replaces each value in the array with the value squared by itself. (e.g.
// [1,5,10,-2] will become [1,25,100,4])

function squares(array){
    for(let i = 0; i < array.length; i++){
        array[i] *= array[i];
    }
    return array;
}

// 10. Negatives - Given an array with multiple values, write a function that
// replaces any negative numbers within the array with the value of 0. When the
// program is done the array should contain no negative values. (e.g. [1,5,10,
// -2] will become [1,5,10,0])

function negatives(array){
    for(let i = 0; i < array.length; i++){
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
    return array;
}

// 11. Max/Min/Avg - Given an array with multiple values, write a function that
// returns a new array that only contains the maximum, minimum, and average
// values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(array){
    let max = array[0];
    let resultArray =[];
        for(let i = 0; i < array.length; i++){
            if (max < array[i]) {
                max = array[i];
            }
        }
        resultArray.push(max);

        let min = array[0];
        for(let i = 0; i < array.length; i++){
            if (min > array[i]) {
                min = array[i];
            }
        }
        resultArray.push(min);

        resultArray.push(averageArray(array));
}

// 12. Swap Values - Write a function that will swap the first and last values
// of any given array. The default minimum length of the array is 2. (e.g.
// [1,5,10,-2] will become [-2,5,10,1]).

function swapFirstLast(array){
    let temp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = temp;
    return array;
}

// 13. Number to String - Write a function that takes an array of numbers and
// replaces any negative values within the array with the string 'Dojo'. For
// example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function dojoNegative(array){
    for(let i = 0; i < array.length; i++){
        if (array[i] < 0) {
            array[i] = 'Dojo';
        }
    }
    return array;
}