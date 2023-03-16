/* Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le' */

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
