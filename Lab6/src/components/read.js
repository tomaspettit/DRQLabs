// read.js

//IMPORTS
import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";

// Read Function
const Read = () => {
  //state: current state value. E.g. movies
  //setState: update the state value. E.g. setMovies
  const [movies, setMovies] = useState([]);

  //useEffect() is used to log props to the console whenever the component mounts or updates
  useEffect(() => {
    for(let i=0;i<100000;i++){
      
    }
    //GET, it can retrieve a Resource
    axios.get('http://localhost:4000/api/movies')
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  //Read Component
  return (
    <div>
      <h3>Hello from read component!</h3>
      <Movies myMovies={movies} />
    </div>
  );
}

//Export to App.js
export default Read;
