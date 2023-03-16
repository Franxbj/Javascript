/* Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go' */

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