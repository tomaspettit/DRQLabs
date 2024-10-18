// movieitem.js

//IMPORTS
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

//Function MovieItems
const MovieItem = (props)=> {
  useEffect(() => {
    console.log("Movie Item:", props.myMovie);
  }, [props.myMovie]); // Only run this effect when the mymovie prop changes
  
  //Bootstrap Cards for Movie Title(header), Poster(body) & Year(footer)
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

//Export to App.js
export default MovieItem;