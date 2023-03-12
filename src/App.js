import './App.css';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const uri = 'http://localhost:5001/api/v1/movies';

  const getMovies = async () => {
    try {
      const response = await fetch(uri);
      const data = await response.json();
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await fetch(`${uri}/${movieId}`);
      const singleMovie = await response.json();
      // singleMovie.reviewIds is not iterable

      if (singleMovie.reviews === null) {
        setMovie(singleMovie);
        return;
      } else {
        const actualReviews = singleMovie.reviews.map((review) => {
          console.log(review);
        });
        setReviews(actualReviews);
      }

      setMovie(singleMovie);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Layout />}>
          <Route
            path='/'
            element={<Home movies={movies} />}></Route>
          <Route
            path='/Trailer/:ytTrailerId'
            element={<Trailer />}></Route>
          <Route
            path='/Reviews/:movieId'
            element={
              <Reviews
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }></Route>
          <Route
            path='*'
            element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
