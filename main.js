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
// Write a function that uses a for loop to print the numbers from 1 to 100. 
// However, for numbers divisible by 3, print "Fixx" instead of number, 
// and for numbers divisible by 5 (and not 3), print "Buxx". 
// For numbers divisible by both 3 and 5, print "FixxBuxx". 
function printNumbers() {
    for (var num = 1; num <= 100; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("FixxBuxx");
        }
        else if (num % 3 === 0) {
            console.log("Fixx");
        }
        else if (num % 5 === 0) {
            console.log("Buxx");
        }
        else {
            console.log(num);
        }
    }
}
// Call the function to print the numbers
printNumbers();
