class person
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
var movie = new person("Casino Royale","Eon Productions","PG13");
console.log(movie);
console.log(movie.get_pg())