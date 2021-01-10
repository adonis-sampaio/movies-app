import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import {useEffect, useState} from 'react';


const FEATURED_API = "https://api.themoviedb.org/3/movie/popular?api_key=8226a08b470ebbe92062c043cd6759cf&language=en-US&page=1";
const IMG_API = 'https://image.tmdb.org/t/p/w180';
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=8226a08b470ebbe92062c043cd6759cf&language=en-US&page=1&include_adult=false"

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const moviesResp = await fetch(FEATURED_API);
    const moviesR = await moviesResp.json();

    setMovies(moviesR);
  },[])

  return (
    
    <div className="App">
      {movies.map(movie => (
          <Movie />
        ))}
    </div>
  );
}

export default App;
