
import type { MovieItem } from "../../type";
import MovieItemClicker from "../MovieItem/movieItem";
import "./Cinema.css"; // 👉 Import du CSS

interface CinemaProps {
  name: string;
  movie : MovieItem[];
}



const Cinema = (props: CinemaProps) => (
  <div className="cinema">
    <h2 className="cinema-title">{props.name}</h2>
    <ul className="cinema-list">
      {props.movie.map((movie) => (
        <MovieItemClicker key={movie.title} movie={movie}/>
      ))}
    </ul>
  </div>
);

export default Cinema;
