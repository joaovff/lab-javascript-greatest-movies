// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const allMovies = require("./data.js");

function getAllDirectors(someArr) {
  const director = someArr.map((someArr) => someArr.director);
  return director;
}
//console.log(getAllDirectors(allMovies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(someArr) {
  const steven = someArr.filter(
    (item) =>
      item.director === "Steven Spielberg" && item.genre.includes("Drama")
  );
  if (someArr.length === 0) {
    return 0;
  } else {
    return steven.length;
  }
}
//console.log(howManyMovies(allMovies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const scoreSum =
    moviesArray.reduce((accumulator, currentValue) => {
      if (!currentValue.score) {
        return accumulator;
      }
      return accumulator + currentValue.score;
    }, 0) / moviesArray.length;

  if (moviesArray.length === 0) {
    return 0;
  } else if (moviesArray.length >= 1) {
    return parseFloat(scoreSum.toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaScore = moviesArray.filter(
    (item) => item.score && item.genre.includes("Drama")
  );
  const avg = dramaScore.reduce((a, b) => a + b.score, 0) / dramaScore.length;
  if (dramaScore.length === 0) {
    return 0;
  } else {
    return parseFloat(avg.toFixed(2));
  }
}

console.log(dramaMoviesScore(allMovies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sorted = moviesArray.map((item) => item);
  const year = sorted.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title) ;
    } else {
      return a.year - b.year;
    }
  });
  return year;
}
//console.log(orderByYear(allMovies));
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sorted = moviesArray.map((item) => item.title).sort().slice(0, 20);
  return sorted;
}
console.log(orderAlphabetically(allMovies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
