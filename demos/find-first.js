"use strict"

let numbers = [7, 9, 64, 60, 12, 13, 65, 62];

function isOver60(arrayValue) {
    if(arrayValue > 60 ){
        return true;
    } else{
        return false;
    }
}
//The line below, is shorterversion
  // return arrayValue > 60;

function find(arrayOfNumbers) {
    for (constnumber of arrayOfNumbers) {
        if(number > 60) {
            return number;
        }
    }
}
let firstValueOver60 = numbers.find(function (arrayValue) {
    return arrayValue > 60;
}

console.log(firstValueOver60);
console.log(firstValueOver60v2);
// let firstValueOver60 = numbers.find(isOver60);
//find method(function) Returns the value of the  first element in the array where conditions in the function
//and indefined otherwise
let firstValueOver60 = find(numbers);
console.log(firstValueOver60);