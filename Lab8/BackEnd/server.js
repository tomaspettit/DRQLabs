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

// This route are added to support a new movie data
// Retrieve All Data using GET method -> Implement a method to fetch all movie records
app.get('/api/movies', async (req, res) => {
    const movies = await movieModel.find({});
    res.status(200).json({movies})
});

// Two new routes are added to support editing movie data
  // The GET method of the route is for create and edit one movie
  // GET /api/movie/:id: This route fetches a specific movie by its ID.
  app.get('/api/movie/:id', async (req, res) => {
    let movie = await movieModel.findById({ _id: req.params.id });
    res.send(movie);
  });

  // The route is for only editing one movie
  // PUT /api/movie/:id: This route updates a specific movie’s information.
  app.put('/api/movie/:id', async (req, res) => {
    let movie = await movieModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(movie);
  });

//Add Data to MongoDB using POST method-> Create a method to add new movie records
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
