const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Lab7TomasPettit:<db_password>@lab7tomaspettit.5q0nt.mongodb.net/');

const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});

const movieModel = mongoose.model('myMovies', movieSchema);

app.get('/api/movies', async (req, res) => {
  const movies = await movieModel.find({});
  res.status(200).json(movies);
});

app.post('/api/movies', async (req, res)=>{
  console.log(req.body.title);
  const { title, year, poster } = req.body;

  const newMovie = new movieModel({ title, year, poster });
  await newMovie.save();

  res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
})

app.get('/api/movie/:id', async (req, res) => {
  const movie = await movieModel.findById(req.params.id);
  res.send(movie);
});

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
    res.status(200).json({movies})
});*/