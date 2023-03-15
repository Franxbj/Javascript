console.log("Hello World");

/* function addNumbers(num1, num2) {
    var localResult = num1 + num2;
    console.log("The local result is: " + localResult);
}

addNumbers(5, 7);
console.log(localResult); */

var globalResult;

function addNumbers(num1, num2) {
    globalResult = num1 + num2;
    console.log("The global result is: " + globalResult);
}

addNumbers(5, 7);
console.log(globalResult);

var x;
x = 5;
console.log(x);

var y = 4;
console.log(y);

var z = 6;
z = 2;
console.log(z);

var greeting = "Hello Kitty"
console.log(greeting);

var myAge;
myAge = 21;
console.log(myAge);

var alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet.length);
console.log(alphabet[1] + alphabet[14] + alphabet[0] + alphabet[5] + alphabet[14]);

function myName () {
    console.log('Francis');
}

myName();

function squareNumber(num){
    var kofi = num * num;
    console.log(kofi);
}
squareNumber(3);

