'use strict';

// these are FUNCTION DECLARATIONS

function logger() {
    console.log('My name is Shema');
}

// calling / invoking the function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges}
    oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}


// FUNCTION EXPRESSION
const age1 = calcAge1(1988); // save it into a variable
console.log(age1); //display it to the console

const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);