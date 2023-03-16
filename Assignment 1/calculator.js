console.log("*****THE CALCULATOR*****");

function squareNumber(num){
    var sq = num * num;
    console.log("The result of squaring the number " + num + " is "  + sq + ".");
}
squareNumber(10);

console.log("* * * * * * * * * * ");

function halfNumber(num){
    var div = num / 2;
    console.log("Half of " + num + " is " + div + ".");
}
halfNumber(86);

console.log("* * * * * * * * * * ");

function percentOf(num1, num2){
    var per = (num1/num2)*100;
    console.log(num1 + " is " + per + "%" + " of " + num2  + ".");
}

percentOf(6,12);

console.log("* * * * * * * * * * ");

function areaOfCircle(num) {
    var area = Math.PI * num * num;
    console.log("The area of a circle with radius " + num + " is " + area + ".");

    console.log("* * * * * * * * * * ");
    
    //bonus 
    console.log(area.toFixed(2) + " is rounded figure.");
}

areaOfCircle(2);

console.log("* * * * * * * * * * ");

function calculator(num){ //take half of a number and store it. 
    var half = num/2;
    console.log('The half of ' + num + ' is ' + half);

    console.log("* * * * * * * * * * ");

// Square the result of #1 and store that result.
    var square = half * half;
    console.log('The square of ' + half + ' is ' + square);

    console.log("* * * * * * * * * * ");

// Calculate the area of a circle with the result of #2 as the radius
    var area = Math.PI * (square * square);
    console.log('The area of a circle with ' + square + ' as radius is ' +  area);

    console.log("* * * * * * * * * * ");

// Calculate the percentage that area is of the square result(#3)
    var percent = (square/area) * 100;
    //console.log(percent);
    console.log(square + " is " + percent + "%" + " of " + area  + ".");
}
calculator(5);