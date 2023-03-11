import { useEffect, useState } from 'react';
import './App.css';
import Layout from './Components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/home/Home';

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/movies');
      const data = await response.json();
      console.log(data);
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Layout />}>
          <Route
            path='/'
            element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
