//  Given an array of numbers, your function should return an array in the ascending order.

let arrayNumbers = [100, 83, 32, 9, 45, 61];

let min = arrayNumbers[0];
let ascArray = [];
let index;
let splitArray1 = [];
let splitArray2 = [];
let mergeArray = [];

function minValue(arr) {

  loopValue = arr.length;

  for (let i = 0; i < loopValue; i++) {
    // calculate minimum, push it to new ascending order, get its index, split and join array and 

    console.log("first value of arr:" + arr);

    for (let values in arr) {
      if (arr[values] < min) { min = arr[values]; }
    }

    for (let values in arr) {
      if (arr[values] == min) { index = values; console.log("index:" + index); }
    }

    ascArray.push(min);
    console.log(ascArray);

    splitArray1 = arr.slice(0, Number(index));
    console.log(splitArray1);

    splitArray2 = arr.slice((Number(index) + 1), arr.length);
    console.log(splitArray2);

    mergeArray = splitArray1.concat(splitArray2);
    console.log(mergeArray);

    arr = mergeArray;
    console.log("second value of arr: " + arr);
    min = arr[0];

  }



}



minValue(arrayNumbers);
console.log(ascArray);



// find minimum value. push it in new array.  find the index of that. for one index less split
//  and then join it new array  