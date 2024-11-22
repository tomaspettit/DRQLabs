import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; //A component from React Router that lets you navigate to a new route without refreshing the page. It is used to create in-app navigation.

// to={"/edit/" + props.mymovie._id}: This to attribute defines the path the Link component should navigate to when clicked.

const MovieItem = (props)=> {
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

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
        <Link to={"/edit/" + props.mymovie._id} className="btn btn-primary">Edit</Link>
      </Card>
    </div>
  );
}

// Export to App.js
export default MovieItem;