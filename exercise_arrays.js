console.log('Exercise on Arrays');
console.log('-------------------');

/* Create an array to hold your top choices(colors, presidents, etc).
For each choice, log to the screen a string like; 'My #1 choice is blue'
BONUS: Change it to log "My first choice, 'My second choice, 'My third choice", picking the right suffix for the number based on what it is. */

var myColors = ['Red', 'Blue', 'Green'];
for (var i = 0; i < myColors.length; i++ ) {
    console.log('My #' + (i +1) + ' choice is ' + myColors[i]);
}

console.log('* * * * B O N U S * * * *');

for (var i = 0; i < myColors.length; i++){
    var colorNum = i + 1;
    var colorNumSuffix;

    if (colorNum == 1) {
        colorNumSuffix = 'st';
    } 
    else if (colorNum == 2) {
        colorNumSuffix = 'nd';
    }
    else if (colorNum == 3) {
        colorNumSuffix = 'rd';
    }
    else colorNumSuffix = 'th';

    console.log('My ' + colorNum + colorNumSuffix + ' choice is ' + myColors[i]);
}

/* console.log('My #1 choice is ' + myColors[0] +'.');

console.log('My 1st choice is, My 2nd choice is and My 3rd choice is ' + myColors[0] + ',' + myColors[1] + ',' + myColors[2] );
 */