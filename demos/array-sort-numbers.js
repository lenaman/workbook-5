"use strict";

const randomNumbers = [298, 754, 855, 413, 579, 932, 533, 64, 464, 344, 65, 636, 439, 903, 606, 205, 971, 743, 623];



randomNumbers.sort(function (a, b){

    //THIS IS THE LONG VERSION

    // return a-b;
    // if (a < b) return -1;        // right order
    // else if (a == b) return 0;   // same values
    // else return 1;               // swap, wrong order
});

    // THIS IS THE SHORTER VERSION
    randomNumbers.sort((a, b) => a-b);
    console.log(randomNumbers);