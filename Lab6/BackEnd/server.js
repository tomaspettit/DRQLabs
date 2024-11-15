// server.js

//import express Library
const express = require('express');

//Create an Express application called 'app'
const app = express();
//Set variable port 4000, the port of the server will listen
const port = 4000;

//Use CORS in the server
const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Use Body-Parser in the server
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Set up route for the movies page - JSON
//GET request
app.get('/api/movies', (req, res)=>
    {
        const movies = [
          {
            "Title": "Avengers: Infinity War (server)",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
          },
          {
            "Title": "Captain America: Civil War (server)",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
          },
          {
            "Title": "World War Z (server)",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
          }
        ];
        res.status(201).json({ movies });
});

//POST request handler
app.post('/api/movies', (req, res)=>{
    if(req.body.title == "" || req.body.year == "" || req.body.poster == ""){
        res.send("Movie Not Received");
    }else{
    console.log("Movie Title: "+req.body.title);
    console.log("Movie Year: "+req.body.year);
    console.log("Movie Poster: "+req.body.poster);
    res.send("Movie Received");
    }
})

//Listens on localhost:4000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
