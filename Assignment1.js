var assignment = "This is Francis Boafo's Assignment 1 in Javascript";
console.log(assignment);


console.log("*****THE CALCULATOR*****");

function squareNumber(num){
    var sq = num * num;
    console.log("The result of squaring the number " + num + " is "  + sq + ".");
}
squareNumber(10);

function halfNumber(num){
    var div = num / 2;
    console.log("Half of " + num + " is " + div + ".");
}
halfNumber(86);

function percentOf(num1, num2){
    var per = (num1/num2)*100;
    console.log(num1 + " is " + per + "%" + " of " + num2  + ".");
}

percentOf(6,12);

function areaOfCircle(num) {
    var area = Math.PI * num * num;
    console.log("The area of a circle with radius " + num + " is " + area + ".");
    //bonus 
    console.log(area.toFixed(2) + " is rounded up.");
}

areaOfCircle(2);

function calculator(num){
    var half = num/2;
    console.log(half);
    var square = half * half;
    console.log(square);
    var area = Math.PI * (square * square);
    console.log(area);
    var percent = (area/square) * 100;
    console.log(percent);
    console.log(area + " is " + percent + "%" + " of " + square  + ".");
}
calculator(5);

console.log("*****D r E V I I*****");

function drEvil(amount){
    //var am = amount;
    if(amount >=1000000){
        console.log(amount + " dollars (pinky)");
    }
    else {
        console.log(amount + " dollars");
    }    
}

drEvil(100);

console.log("*****M I X U P *****");

function mixUp(string1, string2){
    var firstTwoString1 = string1.slice(0, 2);
    var firstTwoString2 = string2.slice(0, 2);
    var replace1 = string1.replace(firstTwoString1, firstTwoString2);
    var replace2 = string2.replace(firstTwoString2, firstTwoString1);
    console.log(replace1 + ' ' + replace2);

}
mixUp('mix', 'pod');
mixUp('dog', 'dinner');

console.log("***** F I X S T A R T *****");

/* function fixStart(str){
    var firstCharacter = str.slice(0,1);
    var newStr = str.replaceAll(firstCharacter, '*');
    console.log(newStr);
    //console.log(firstCharacter);
} */
function fixStart(s) {
    var c = s.charAt(0);
    return c + s.slice(1).replace(new RegExp(c, 'g'), '*');
  }

console.log(fixStart('babble'));

console.log("***** V E R B I N G*****");

function verbing(str){
    var lastThreeCharacters = str.slice(-3);
    //console.log(lastThreeCharacters);

    if (str.length < 3) {
        console.log(str);
    }
    else if (lastThreeCharacters == 'ing') {
        console.log(str + 'ly');
    }
    else {
        console.log(str + 'ing');
    }
}

verbing('swiming');

console.log("***** NOT BAD*****");

function notBad(str){
    var notIndex = str.indexOf('not');
    var badIndex = str.indexOf('bad');
    if (notIndex == -1 || badIndex == -1 || badIndex < notIndex) return str;
    return str.slice(0, notIndex) + 'good' + str.slice(badIndex + 3);
  }
console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so good!'));
console.log(notBad('This dinner is bad!'));
  