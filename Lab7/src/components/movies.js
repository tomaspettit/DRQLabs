// movies.js

//IMPORT
import MovieItem from "./movieitem";

// Movies Function
const Movies = (props)=>{
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem mymovie={movie} key={movie._id} />
        }
    );
}

//Export to App.js
export default Movies;
