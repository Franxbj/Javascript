/* It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes." */

var favMovie = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes']
}

function movieInformation (movie) {
   
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes.');
    console.log('It stars ' + favMovie.stars.join(', ')); 
}

movieInformation(favMovie);