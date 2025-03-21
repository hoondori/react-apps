import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import '../styles/Home.css';

function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      }
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log(movies);
    setMovies(movies);
    setIsLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
            <span className="loader__text">'Loading....'</span>
          </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie 
              key={movie.id}
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
              />
          ))}
        </div>
    )}
    </section>
  )
}

export default Home;