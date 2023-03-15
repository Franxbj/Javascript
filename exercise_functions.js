console.log("FORTUNE TELLER");

function tellFortune(numChildren, partnerName, geoLocation, jobTitle){
    console.log('You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partnerName + ' with' + numChildren + ' kids');
}

tellFortune(2,'Purity', 'Accra', 'Web Developer');
tellFortune(3,'Helen', 'Helsinki', 'Software Developer');
tellFortune(1,'Bernice', 'Liverpool', 'IT Developer');

console.log("*************");

console.log("PUPPY AGE CALCULATOR");

function calculateAge(age){
    dogAge = age * 7;
    console.log('Your doggie is ' + dogAge + 'years old in dog years!')
}

calculateAge(1);
calculateAge(2);
calculateAge(3);

console.log("*************");

console.log("LIFETIME SUPPLY CALCULATOR");

function calculateSupply(age, amountPerDay){
    const maxAge = 70;
    amountConsumed = (maxAge - age) * (amountPerDay * 365);
    console.log('You will need ' + amountConsumed + ' to last you until ripe old age of ' + maxAge);
}
calculateSupply(25, 2);
calculateSupply(30, 4);
calculateSupply(21, 1);

console.log("*************");

console.log("GEOMETRIZER");

function calcCircumference(radius){
    circumference = Math.PI * 2 * radius;
    console.log('The circumference is ' + circumference);
}
calcCircumference(2);

function calcArea(radius){
    area = Math.PI * (radius*radius);
    console.log('The area is ' + area);
}

calcArea(3);

console.log("*************");

console.log("THE TEMPERATTURE CONVERTER");  

function celciusToFahrenheit(celcius){
    var celTemp = (celcius*1.8) + 32;
    console.log(celcius + "°C" + " is " + celTemp + "°F");
}
celciusToFahrenheit(1);

function fahrenheitToCelcius(fahrenheit){
    var FahrenheitTemp = (fahrenheit - 32) * (5/9);
    console.log(fahrenheit + '°F' + ' is ' + FahrenheitTemp + '°C');
}
fahrenheitToCelcius(78);
