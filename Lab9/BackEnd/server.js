// server.js


// import express library
const express = require('express');

// Create an Express application called 'app'
const app = express();

// Set variable port 4000, the port of the server will listen
const port = 4000;

// Use CORS in the server
const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Use Body-Parser in the server
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB in server.js
// My Link: mongodb+srv://tomaspettit:adminLab7@lab7tomaspettit.5q0nt.mongodb.net/
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tomaspettit:adminLab7@lab7tomaspettit.5q0nt.mongodb.net/');

// Create a Data Model
const movieSchema = new mongoose.Schema({
  title:String,
  year:String,
  poster:String
});

const movieModel = new mongoose.model('myMovies',movieSchema);

app.get('/api/movies', async (req, res) => {
    const movies = await movieModel.find({});
    res.status(200).json({movies})
});

// GET is for reading all movies of the list from the MongoDB database
app.get('/api/movie/:id', async (req ,res)=>{
  const movie = await movieModel.findById(req.params.id);
  res.json(movie);
})

//PUT is for updating or editing the movie from the MongoDB database
app.put('/api/movie/:id', async (req, res)=>{
  const movie = await movieModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(movie);
})

/* 
   Handles DELETE requests by removing the specified movie from the MongoDB database.
   Sends a success or error response based on the outcome of the operation.
*/
app.delete('/api/movie/:id', async (req, res) => {
  
  console.log('Deleting movie with ID:', req.params.id);
  const movie = await movieModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Movie deleted successfully", movie });
  
  });

//POST is for creating the movie from the MongoDB database
app.post('/api/movies',async (req, res)=>{
    console.log(req.body.title);
    const {title, year, poster} = req.body;

    const newMovie = new movieModel({title, year, poster});
    await newMovie.save();

    res.status(201).json({"message":"Movie Added!",Movie:newMovie});
})

// Listens on localhost:4000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// {
//   "Title": "Avengers: Infinity War (server)",
//   "Year": "2018",
//   "imdbID": "tt4154756",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
// },
// {
//   "Title": "Captain America: Civil War (server)",
//   "Year": "2016",
//   "imdbID": "tt3498820",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
// },
// {
//   "Title": "World War Z (server)",
//   "Year": "2013",
//   "imdbID": "tt0816711",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
// }