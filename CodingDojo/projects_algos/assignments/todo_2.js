function reverse(arr){
    let front = 0;
    let back = arr.length - 1; 
    while(front < back){
        temp = arr[front];
        arr[front] = arr[back];
        arr[back] = temp;
        front++;
        back--;
    }
}

reverseArr = [1, 2, 3, 4, 5];
console.log(reverseArr);
reverse(reverseArr);
console.log(reverseArr);

function rotate (nums, k) {
    let minusOne = nums.length - 1;
    if (k > 0){
        k = k % nums.length;
        reverseWithIndices(nums, 0, minusOne);
        reverseWithIndices(nums, 0, k - 1);
        reverseWithIndices(nums, k, minusOne);
    }
    else{
        k *= -1;
        k = k % nums.length;
        reverseWithIndices(nums, 0, minusOne);
        reverseWithIndices(nums, 0, minusOne - k);
        reverseWithIndices(nums, nums.length - k, minusOne);

    }
    
    
};

function reverseWithIndices(arr, start, end){
    
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

let rotateArrayRight = [1, 2, 3, 4, 5];
console.log("Rotate to the right", rotateArrayRight);
rotate(rotateArrayRight, 2);
console.log(rotateArrayRight);

let rotateArrayLeft = [1, 3, 5, 7, 9, 11];
console.log("Rotate to the left", rotateArrayLeft);
rotate(rotateArrayLeft, -2);
console.log(rotateArrayLeft);

function filterRange(arr, min, max){
    let newIndex = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > min && arr[i] < max){
            arr[newIndex] = arr[i];
            newIndex++;
        }
    }
    return newIndex;
}



function concatenate(arr1, arr2){
    let newArr = [];
    let curr = 0;

    for(let i = 0; i < arr1.length; i++){
        newArr[curr] = arr1[i];
        curr++;
    }
    for(let i = 0; i < arr2.length; i++){
        newArr[curr] = arr2[i];
        curr++;
    }

    return newArr;
}
