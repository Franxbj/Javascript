/* Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example: 

mixUp('mix', pod'): 'pox mid'
mixUp('dog', 'dinner'): 'dig donner'
}*/

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
mixUp('kofi', 'ama');