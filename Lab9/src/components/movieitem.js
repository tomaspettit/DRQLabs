// movieitem.js

// IMPORTS
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

const MovieItem = (props)=> {
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

  /* 
     Adds a delete button to each movie, sending a DELETE request with the 
     movie's ID to the server. Refreshes the movie list by calling the Reload 
     function passed down as a prop.
  */
  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/api/movie/' + props.mymovie._id)
        .then((res) => {
            props.Reload(); // Refresh the movie list after deletion
        })
        .catch((err) => {
            console.error("Error deleting movie:", err);
        });
};

  return (
    <div>
      <Card>
        <Card.Header>{props.mymovie.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.mymovie.poster} alt={props.mymovie.title} />
            <footer>{props.mymovie.year}</footer>
          </blockquote>
        </Card.Body>
        <Link className="btn btn-primary" to={"/edit/"+props.mymovie._id}>Edit</Link>
        <Button className="btn btn-danger" onClick={handleDelete}>Delete</Button>
      </Card>
    </div>
  );
}

export default MovieItem;