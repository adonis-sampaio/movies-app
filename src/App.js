import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import {useEffect, useState} from 'react';


const FEATURED_API = "https://api.themoviedb.org/3/movie/popular?api_key=8226a08b470ebbe92062c043cd6759cf&language=en-US&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=8226a08b470ebbe92062c043cd6759cf&language=en-US&page=1&include_adult=false&query="

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getData = async (API) => {
      const moviesResp = await fetch(API);
      const moviesR = await moviesResp.json();
  
      setMovies(moviesR.results);
      console.log(movies);

  }

  useEffect(() => {
    getData(FEATURED_API);
  },[])

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getData(SEARCH_API+searchTerm);
      setSearchTerm('');
    }
    
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input className="search" 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container"> 
        {movies.map(movie => (
            <Movie key={movie.id} {...movie}/>
        ))}
      </div>
    </>
  );
}

export default App;
