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
var myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
function printCarDetails(car) {
    for (var key in car) {
        console.log("".concat(key, ": ").concat(car[key]));
    }
}
printCarDetails(myCar);
