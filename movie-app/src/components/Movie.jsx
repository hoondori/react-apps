import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Movie.css';
import { Link } from 'react-router-dom';

function Movie( { title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <Link to='/movie-detail' state={{year, title, summary, poster, genres}}>
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => {
              return <li className="movie_genre" key={index}>{genre}</li>;
            })}
          </ul>
          <p className="movie__summary">{summary.slice(0,100)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.PropTypes = {
  id: PropTypes.number.isRequired,  // id in API data
  year: PropTypes.string.isRequired, // published year
  title: PropTypes.string.isRequired, // movie title
  summary: PropTypes.string.isRequired, // movie description
  poster: PropTypes.string.isRequired, // movie image path
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // genres
};

export default Movie;