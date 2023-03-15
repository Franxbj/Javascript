console.log('Hey, Welcome to if/else Exercise');

console.log("* * * * * * * * * * * * * *");
console.log("What number's bigger");

function greaterNum(num1, num2){
    if(num1 > num2){
        console.log("The greater number of " + num1 + " and " + num2 + " is " + num1);
    }
    else {
        console.log('The greater number of ' + num1 + ' and ' + num2 + ' is ' + num2);
    }
}

greaterNum(2,4);
greaterNum(6,3);

console.log("* * * * * * * * * * * * * *");
console.log("The World Translator");

function helloWorld(language) {
    if (language == 'es') {
        console.log('Hola mundo');
    }
    else if (language == 'de') {
        console.log('Hallo Welt');
    }
    else {
        console.log('Hello World');
    }
}

helloWorld('en');
//helloWorld('es');
//helloWorld('de')

console.log("* * * * * * * * * * * * * *");
console.log("The Grade Assigner");

function assignGrade(numScore){
    if (numScore >= 90){
        console.log('A');
    } 
    else if (numScore <= 89 && numScore >= 80){
        console.log('B');
    } 
    else if (numScore <= 79 && numScore >= 70){
        console.log('C');
    }
    else if (numScore <= 69 && numScore >= 59){
        console.log('D');
    }
    else {
        console.log('F');
    }
}

assignGrade(59);

console.log("* * * * * * * * * * * * * *");
console.log("The Pluralizer");

function pluralizer(noun, num){
    if (num >= 2) {
        console.log(num + ' ' + noun + 's');
    }
    else {
        console.log(num + ' ' + noun);
    }
}

pluralizer('sheep', 10);

console.log("* * * * * * * * * * * * * *");
console.log("The Pluralizer");

function plural(noun, number) {
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
        console.log(number + ' ' + noun + 's')
    }
    else {
        console.log(number + ' ' + noun);
    }
}
plural('sheep', 5);