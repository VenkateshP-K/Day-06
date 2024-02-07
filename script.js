class movie
{
  constructor(movieName,movieStudio,movieRating){
  this.movieName = movieName
  this.movieStudio = movieStudio
  this.movieRating = movieRating
  }
   // Method
  get_pg(){
  return `The rating for the movie is ${this.movieRating}`
  }

}
var movie01 = new movie("Casino Royale","Eon Productions","PG13");
console.log(movie01);
console.log(movie01.get_pg())