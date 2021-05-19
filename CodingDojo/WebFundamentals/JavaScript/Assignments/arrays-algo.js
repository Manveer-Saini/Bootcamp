let testArr = [6,3,5,1,2,4]
let sum = 0;
for(let i = 0; i < testArr.length; i++){
    sum += testArr[i];
    console.log("Num:", testArr[i] + ",", "Sum:", sum);
}

for(let i = 0; i < testArr.length; i++){
    testArr[i] *= i;
}
console.log(testArr);