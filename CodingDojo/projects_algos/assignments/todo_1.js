function pushFront(arr, val){
    arr[arr.length] = val;

    for(let i = arr.length - 1; i > 0; i--){
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
    }
    return arr;
}

console.log("This is for pushFront:");
let someArrPush = [0, 2, 3, 4];
console.log(someArrPush);
console.log(pushFront(someArrPush, 10));

function popFront(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }

    let poppedValue = arr.pop();

    return poppedValue;
}

console.log("This is for popFront:");
let someArrPop = [100, 2, 3, 4, 20];
console.log(someArrPop);
console.log(popFront(someArrPop));
console.log(someArrPop);

function insertAt(arr, index, val){
    arr[arr.length] = val;

    for(let i = arr.length - 1; i > index; i--){
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
    }
    return arr;
}

console.log("This is for insertAt:");
let someArrInsert = [100, 2, 3, 4, 20];
console.log(someArrInsert);
console.log(insertAt(someArrInsert, 3, 10));

function removeAt(arr, index){
    for(let i = index; i < arr.length - 1; i++){
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }

    let poppedValue = arr.pop();

    return poppedValue;
}

console.log("This is for removeAt:");
let someArrRemove = [100, 2, 3, 4, 20];
console.log(someArrRemove);
console.log(removeAt(someArrRemove, 3));
console.log(someArrRemove);

function swapPairs(arr){
    if(arr.length % 2 === 0){
        for(let i = 0; i <= arr.length - 2; i += 2){
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp; 
        }
    }
    else{
        for(let i = 0; i <= arr.length - 3; i += 2){
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp; 
        }
    }

    return arr;
}

console.log("This is for swapPairs:");
let someArrSwapOdd = [100, 2, 3, 4, 20];
console.log(someArrSwapOdd);
console.log(swapPairs(someArrSwapOdd));
let someArrSwapEven = [200, 2, 4, 5, 8, 10];
console.log(someArrSwapEven);
console.log(swapPairs(someArrSwapEven));

function removeDups(arr){
    let newArr = [];
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] !== arr[i + 1]){
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}

console.log("This is for removeDups:");
let someArrDups = [100, 2, 3, 3, 4, 20, 20];
console.log(someArrDups);
console.log(removeDups(someArrDups));
