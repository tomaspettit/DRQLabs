//Movies component

//Import MovieItem from ./components/movieitem
import MovieItem from "./movieitem";

const Movies = (props) =>{
    //Exercise 2 Task 3: create MovieItem components
    return props.myMovies.map((movie) => (
        <div>
        <MovieItem myMovie={movie} key={movie.imdbID} />
        </div>
      ));
    }

export default Movies; 