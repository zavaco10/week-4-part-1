console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}


// Remember to call the function to test
console.log(helloName("Cody"));



// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
let value = addNumbers(1, 2)
 console.log(value);


// 4. Function to multiply three numbers & return the result
function multiplyThree(n1, n2, n3 ){
  return n1 * n2 * n3
}
let multValue = multiplyThree(3, 6, 9)
console.log(multValue); 


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }//end greater than zero
    return false;
}//end equal to or less than zero

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ){
  return array [array.length - 1];
}
console.log(getLast([1, 2, 3, 4]));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true; 
    }
  }
  return false; 
}
const myArray = [1, 2, 3, 4, 5];
console.log(find(3, myArray)); // should output true
console.log(find(6, myArray)); // should output false

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === 'a') {
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(arr) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
    }
   // TODO: loop to add items
  return sum;
  }

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

//created and named a function that takes input called inputArray
//declared newArray and will return stuff or not
//write a loop to look at all the numbers in inputArray
//loop will determine positive number or not
//if the number is posistive add it to newArray
//if negative do nothing
//return newArray

function madeUpArray (inputArray){
  let newArray = []
  for (let index = 0; index < inputArray.length; index++) {
    const element =inputArray[index]
    if (element >= 0) {
      newArray.push(element)
    }
  }
  return newArray;
}

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
