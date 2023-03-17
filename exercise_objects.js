/* Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
On separate lines (one console.log statement for each), log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa */

var favRecipe = {
    recipeTitle: 'Mole',
    recipeServings: 2,
    recipeIngredients: ['cinnamon', 'cumin', 'cocoa'],
};

console.log(favRecipe.recipeTitle);
console.log('Serves: ' + favRecipe.recipeServings);
console.log('Ingredients:');
for (var i = 0; i < favRecipe.recipeIngredients.length; i++) {
    console.log(favRecipe.recipeIngredients[i]);
}


/* Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' */

console.log("***********************");
console.log("***********************");

var books = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        alreadyread: true,
    },

    {
        title: 'The Essentials',
        author: 'A.W. Tozer',
        alreadyread: false,
    },
    
    { 
        title: 'The Greatest Fight',
        author: 'C. H. Spurgeon',
        alreadyread: true,
    },
    
];

for (var i = 0; i < books.length; i++){
    var bookInLib = books[i];

   var bookInformation = bookInLib.title + ' by ' + bookInLib.author;

    if (bookInLib.alreadyread) {
        console.log('You already read ' + bookInformation);
    }

    else {
        console.log('You still need to read ' + bookInformation);
    }
}  