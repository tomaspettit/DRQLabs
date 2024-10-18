// movies.js

//IMPORT
import MovieItem from "./movieitem";

//Function Movies
const Movies = (props)=>{
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem myMovie={movie} key={movie.imdbID} />
        }
    );
}

//Export to App.js
export default Movies;