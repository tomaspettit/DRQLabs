// server.js

//Exercise 3: Building a Simple Express Server

//import express Library
const express = require('express');

//Create an Express application called 'app'
const app = express();
//Set variable port 3000, the port of the server will listen
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});

//Access http://localhost:3000

//Exercise 4: Route with URL Parameters

//Set up route for my first name page
app.get('/hello/:fname', (req, res) => {
    const fname = req.params.fname;
    res.send(`Hello ${fname}`);
});
//Access http://localhost:3000/hello/Tomás

//Set up rotate for my last name page
app.get('/hello/:fname/:lname', (req, res) => {
    const fname = req.params.fname;
    const lname = req.params.lname;
    res.send(`Hello ${fname} ${lname}`);
});
//Access http://localhost:3000/hello/Tomás/Pettit


//Exercise 5: Return JSON Data

//Set up route for the movies page
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.status(201).json({ myMovies:movies });
});
//Access http://localhost:3000/api/movies

//Exercise 6: Serving Static HTML

//Routing /index so it can serves an index.html file
//Serve the HTML file
const path = require('path');

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Access http://localhost:3000/index



//Exercise 7: Handling GET Form Submission
//GET request
app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

app.use(express.static('public'));

//Exercise 8: Handling POST Form Submission
//Body parser Middleware to parse URL-encoded data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//POST request handler for the /name endpoint
app.post('/name', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

//Listens on localhost:3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
