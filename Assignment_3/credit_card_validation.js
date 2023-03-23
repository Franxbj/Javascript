function validateCreditCard (cardNumber) {

    //Number must be 16 digits
    if (cardNumber.length !== 16) {
        return false;
    }

    for (var i = 0; i < cardNumber.length; i ++){
        var typedNumber = cardNumber[i];
    }

    // all entries must indeed be integers. This converts all entries from strings to integer
    typedNumber = Number.parseInt(typedNumber); 

    // check that its indeed an integer
    if(!Number.isInteger(typedNumber)){
        return false;
    }

    //You must have at least two different digits represented (all of the digits cannot be the same)

    var object = {};

    for (var i = 0; i < cardNumber.length; i++){
        object[cardNumber[i]] = true;
    }

    if (Object.keys(object).length < 2){
        return false;
    }

    // The final digit must be even

    if (cardNumber[cardNumber.length - 1] % 2 !== 0){
        return false;
    }

    // The sum of all the digits must be greater than 16
    var sum = 0;
    for (var i = 0; i < cardNumber.length; i ++){
        sum += Number(cardNumber[i]);
    }
    if (sum <= 16) {
        return false;
    }

    //BONUS - remove dashes from string 
    
    return true;
};

console.log(validateCreditCard('4920234329831244'));
console.log(validateCreditCard('1923002321039428'));
console.log(validateCreditCard('9823119832342027'));