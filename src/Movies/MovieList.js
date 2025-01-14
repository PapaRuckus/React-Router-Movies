import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function MovieList(props) {
  // const navigate = useNavigate();

  // const movieClick = (id) => () => {
  //   navigate(`movies/${id}`);
  // };

  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieDetails
          // movieClick={movieClick(movie.id)}
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { id, title, director, metascore } = props.movie;
  // const { movieClick } = props;
  const navigate = useNavigate();


  return (
    <div
      className="movie-card"
      onClick={() => navigate((`movies/${id}`))}
    >
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
