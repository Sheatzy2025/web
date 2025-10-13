import type { Movie } from "../../type";
import "./Cinema.css"; // 👉 Import du CSS

interface CinemaProps {
  name: string;
  movie: Movie[];
}

const Cinema = (props: CinemaProps) => (
  <div className="cinema">
    <h2 className="cinema-title">{props.name}</h2>
    <ul className="cinema-list">
      {props.movie.map((movie) => (
        <li className="cinema-item" key={movie.title}>
          <strong className="movie-title">{movie.title}</strong>
          <span className="movie-director"> — réalisé par {movie.director}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Cinema;
