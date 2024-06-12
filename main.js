var favoriteMovies = [
    "Inception",
    "The Dark Knight",
    "Interstellar",
    "The Shawshank Redemption",
    "Pulp Fiction",
    "The Matrix",
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Godfather",
    "Fight Club",
    "Forrest Gump"
];
function printFavoriteMovies(movies) {
    for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
        var movie = movies_1[_i];
        console.log(movie);
    }
}
printFavoriteMovies(favoriteMovies);
// This function `printFavoriteMovies` takes an array of movies as input and then iterates over each movie in the array using a `for...of` loop, printing each one to the console.
