// movies.js

// IMPORT
import MovieItem from "./movieitem";

const Movies = (props)=>{
    return props.myMovies.map(
        (movie)=>{
            /* 
               Passes the ReloadData function to child components so 
               they can trigger a refresh after deletion. 
            */
            return <MovieItem mymovie={movie} key={movie._id} Reload={props.ReloadData}/>
        }
    );
}

export default Movies;