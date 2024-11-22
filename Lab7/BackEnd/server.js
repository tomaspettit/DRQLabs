// server.js

// import express library
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

//Connect to MongoDB in server.js
/*Link: mongodb+srv://tomaspettit:<db_password>@lab7tomaspettit.5q0nt.mongodb.net/
  <db_password> must be replace with the password for the tomaspettit user as 'adminLab7'.
*/
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tomaspettit:adminLab7@lab7tomaspettit.5q0nt.mongodb.net/');

//Create a Data Model
const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});

const movieModel = new mongoose.model('myMovies', movieSchema);

//Retrieve All Data using GET method -> Implement a method to fetch all movie records
app.get('/api/movies', async (req, res) => {
  const movies = await movieModel.find({});
  res.status(200).json(movies);
});

//Retrieve Data by ID -> Create a method to retrieve a specific movie by its ID
//Copy the ID for what has showing on the MongoDB data
app.get('/api/movie/:id', async (req, res) => {
  const movie = await movieModel.findById(req.params.id);
  res.send(movie);
});

//Add Data to MongoDB using POST method-> Create a method to add new movie records
app.post('/api/movies', async (req, res)=>{
  console.log(req.body.title);
  const { title, year, poster } = req.body;

  const newMovie = new movieModel({ title, year, poster });
  await newMovie.save();

  res.status(201).json({ "message": 'Movie created successfully', movie: newMovie });
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//Error handling
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).send('Something went wrong!');
});

/*app.get('/api/movies', (req, res) => {
    const movies = [
    {
        "_id": "67373551f4d029e5ca282cfa",
        "title": "The Avengers",
        "year": "2012",
        "poster": "https://th.bing.com/th/id/OIP.yZqxvO2SQ-tJ9bGFcuobhwHaLH?w=121&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        "__v": 0
    },
    {
        "_id": "67373670f4d029e5ca282d07",
        "title": "The Marvels",
        "year": "2023",
        "poster": "https://upload.wikimedia.org/wikipedia/en/7/7a/The_Marvels_poster.jpg",
        "__v": 0
    },
    {
        "_id": "6737368cf4d029e5ca282d09",
        "title": "Guardians of the Galaxy Vol. 3",
        "year": "2023",
        "poster": "https://upload.wikimedia.org/wikipedia/en/7/74/Guardians_of_the_Galaxy_Vol._3_poster.jpg",
        "__v": 0
    },
    {
        "_id": "67373c051df97c08eac86a10",
        "title": "Guardians of the Galaxy",
        "year": "2014",
        "poster": "https://upload.wikimedia.org/wikipedia/en/3/33/Guardians_of_the_Galaxy_%28film%29_poster.jpg",
        "__v": 0
    },
    {
        "_id": "67373c1f1df97c08eac86a12",
        "title": "Guardians of the Galaxy Vol. 2",
        "year": "2017",
        "poster": "https://upload.wikimedia.org/wikipedia/en/3/32/Guardians_of_the_Galaxy_Vol._2_poster.jpg",
        "__v": 0
    },
    {
        "_id": "67373c591df97c08eac86a14",
        "title": "Spider Man: Homecoming",
        "year": "2017",
        "poster": "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg",
        "__v": 0
    },
    {
        "_id": "67373c801df97c08eac86a16",
        "title": "Avengers: Endgame",
        "year": "2019",
        "poster": "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
        "__v": 0
    },
    {
        "_id": "67373cbc1df97c08eac86a18",
        "title": "Thor: Ragnarok",
        "year": "2017",
        "poster": "https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg",
        "__v": 0
    },
    {
        "_id": "67373e017347c9ee7a84bf4f",
        "title": "Back to the Future Part III",
        "year": "1990",
        "poster": "https://upload.wikimedia.org/wikipedia/en/4/4e/Back_to_the_Future_Part_III.jpg",
        "__v": 0
    },
    {
        "_id": "674049a8ae21ba3669d98862",
        "title": "The Simpsons Movie",
        "year": "2007",
        "poster": "https://upload.wikimedia.org/wikipedia/en/d/d5/The_Simpsons_Movie_%282007%29.png",
        "__v": 0
    }
];
    res.status(200).json({movies});
});*/
