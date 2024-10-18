// read.js

//IMPORTS
import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios"; //npm install axios


//Read Function - useState, JSON Blob link, Movies component
function Read() {
  //useState() it allows you to add state variables to functional components
  const [movies, setMovies] = useState([]);

  //useEffect() is used to log props to the console whenever the component mounts or updates
  useEffect(() => {
    //GET, it can retrieve a Resource
    axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872') //JSON Blob Link for make an HTTP GET call that will return the JSON data
      .then((response) => {
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
    
    //Read Component
    return (
        <div>
            <h3>Hello from read component!</h3>
            <Movies myMovies={movies}/>
        </div>
    );
}

//Export to App.js
export default Read;