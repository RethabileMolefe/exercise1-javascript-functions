// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply all 3 numbers together. Note: The argument passed must NOT be the same number. 
function multiply(x,y,z){
  return (x*y*z)
}
console.log(multiply(2,3,4));


// TODO: Create a function expression called ‘convertToSeconds’ that takes inanumber of minutes as an argument and returns the amount in seconds. ***Donotuse a console.log() inside of the function***
let convertToSeconds = function(minutes){
  return minutes * 60
}
console.log(convertToSeconds(3));

// TODO: Create a function called fahrenheitToCelsius that takes the temperature as a  parameter and returns the equivalent temperature in Celsius. ***Do not useaconsole.log() inside of the function***
function fahrenheitToCelsius(temperature){
  return (temperature-32)/ 1.8 + "℃"
}
console.log(fahrenheitToCelsius(86));

// TODO: Create a function that takes a string as a parameter and returns thereverseof the string. ***Do not use a console.log() inside of the function ***
let reverseOfaString = function(str){
  return str.split("").reverse().join("");
} 
console.log(reverseOfaString('Molefe'));

// TODO: Create a function that takes in a string and returns the number of Vowelsinthe sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not useaconsole.log() inside of the function***
let numberOfVowels = function(str){
  let vowels = ['a','e','i','o','u'];
  return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}
console.log(numberOfVowels('love'))

// TODO: Create a “isPrime” function that takes a number as a parameter andreturnstrue if the number is prime, and false otherwise. Make sure to test your codewith4numbers
function isPrime(number){
  if(number <= 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if(number % i === 0){
      return false;
    }
  }
  return true
}
console.log(isPrime(2));
console.log(isPrime(17));
console.log(isPrime(20));
console.log(isPrime(100));



