
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


// Write a function that uses a for loop to print the numbers from 1 to 100. 
// However, for numbers divisible by 3, print "Fixx" instead of number, 
// and for numbers divisible by 5 (and not 3), print "Buxx". 
// For numbers divisible by both 3 and 5, print "FixxBuxx". 

function printNumbers(): void {
  for (let num = 1; num <= 100; num++) {
      if (num % 3 === 0 && num % 5 === 0) {
          console.log("FixxBuxx");
      } else if (num % 3 === 0) {
          console.log("Fixx");
      } else if (num % 5 === 0) {
          console.log("Buxx");
      } else {
          console.log(num);
      }
  }
}

// Call the function to print the numbers
printNumbers();
