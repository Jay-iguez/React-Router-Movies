import React from 'react';
import { useNavigate, useParams, Link} from 'react-router-dom';

export default function MovieList(props) {
  const navigate = useNavigate()
  
  const onMovieClick = id => () => {
    navigate(`movies/${id}`)
  }

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} onMovieClick={onMovieClick(movie.id)}/>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card" onClick={props.onMovieClick}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
