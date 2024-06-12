
const favoriteMovies = [
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
  for (const movie of movies) {
    console.log(movie);
  }
}

printFavoriteMovies(favoriteMovies);


// This function `printFavoriteMovies` takes an array of movies as input and then iterates over each movie in the array using a `for...of` loop, printing each one to the console.





interface Car {
  make: string;
  model: string;
  year: number;
}

const myCar: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2020
};

function printCarDetails(car: Car): void {
  for (const key in car) {
    console.log(`${key}: ${car[key]}`);
  }
}

printCarDetails(myCar);


