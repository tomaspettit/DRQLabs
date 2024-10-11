//MovieItem Function

//IMPORTS
import { useEffect } from "react";
import Card from 'react-bootstrap/Card'; //Boostrap Card for Exercise 3

const MovieItem = (props)=> {
  useEffect(() => {
    console.log("Movie Item:", props.myMovie);
  }, [props.myMovie]); // Only run this effect when the mymovie prop changes

  //Card.Header for Movie Title
  //Footer for Movie Year
  //Card.Body for Movie Poster
  return (
    <div>
      <Card>
        <Card.Header>{props.myMovie.Title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
            <footer>{props.myMovie.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

//export to App.js
export default MovieItem;

//no useEffect
/*return (
    <div>
      <h3>{props.myMovie.Title}</h3>
      <p>{props.myMovie.Year}</p>
          <blockquote className="blockquote mb-0">
            <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
          </blockquote>
    </div>
  );*/

//useEffect
/*
 2. Dependency array:
 useEffect(() => {
  console.log("Movies:", props.myMovies);
   }, [props.myMovies]);
   */
  /*

 3. Cleanup:
   useEffect(() => {
  const subscription = someAPICall();
  
  return () => {
    subscription.unsubscribe(); // Cleanup when component unmounts
  };
}, []);
*/
