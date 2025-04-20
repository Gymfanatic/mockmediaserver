const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let movies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
  { id: 2, title: "The Matrix", director: "Lana Wachowski", year: 1999 }
];

let series = [
  { id: 1, title: "Breaking Bad", director: "Vince Gilligan", year: 2008 },
  { id: 2, title: "Stranger Things", director: "The Duffer Brothers", year: 2016 }
];

let songs = [
  { id: 1, title: "Bohemian Rhapsody", artist: "Queen", year: 1975 },
  { id: 2, title: "Imagine", artist: "John Lennon", year: 1971 }
];

app.get('/movies', (req, res) => {
  res.json(movies); 
});

app.get('/series', (req, res) => {
  res.json(series); 
});

app.get('/songs', (req, res) => {
  res.json(songs); 
});

app.post('/movies', (req, res) => {
  const newMovie = req.body;
  movies.push(newMovie);
  res.json(movies);
});

app.post('/series', (req, res) => {
  const newSeries = req.body;
  series.push(newSeries);
  res.json(series);
});

app.post('/songs', (req, res) => {
  const newSong = req.body;
  songs.push(newSong);
  res.json(songs);
});

app.put('/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  const updatedMovie = req.body;
  let movie = movies.find(m => m.id === movieId);
  if (movie) {
    movie.title = updatedMovie.title || movie.title;
    movie.director = updatedMovie.director || movie.director;
    movie.year = updatedMovie.year || movie.year;
    res.json(movies);
  } else {
    res.status(404).send('Movie not found');
  }
});

app.delete('/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  movies = movies.filter(m => m.id !== movieId);
  res.json(movies);
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
