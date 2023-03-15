console.log('Exercise on for loops');

console.log("* * * * * * * * * * * * * *");
console.log("The even/odd reporter");
//QUESTION: Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (eg. "2 is even")

for (var i = 0; i <= 20; i = i + 1){
    //console.log(i);
    if (i % 2 === 0){
        console.log(i + ' is even');
    }
    else {
        console.log(i + ' is odd'); 
    }
}

console.log("* * * * * * * * * * * * * *");
console.log("Multiplication Tables");
//QUESTION: Write a for loop that will iterate from 0 to 10. For each iteration, it will multiply the number by 9 and log the result (eg. "2 * 9 = 18"). BONUS: Use a nested for loop to show the tables for every multiplier from 1 to 10.(100 results total).

for (var i = 0; i <= 10; i++){
    var multiplier = i * 9;
    console.log(i + ' * 9 = ' + multiplier);
}

console.log("B O N U S"); 

for (var multiplier = 0; multiplier <=10; multiplier ++){
    for (var i = 0; i <=10; i++) {
        var result = multiplier * i;
        console.log(multiplier + ' * ' + i + ' = ' + result);
    }
}

console.log("* * * * * * * * * * * * * *");
console.log("Grade Assigner");
//QUESTION: CHeck the result of your assignGrade function from the conditionals exercise by logging every value from 60 to 100: you log should show "For 88, you got a B. For 89, you got a B. For 90, you got an A. For 91, you got an A" etc. logging each grade point in the range. 

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (let i = 60; i <= 100; i++) {
  console.log('For ' + i + ', you got a ' + assignGrade(i));
}
