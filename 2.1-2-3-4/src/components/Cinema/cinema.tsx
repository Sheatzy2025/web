import type { Movie } from "../../type";

interface CinemaProps{
  name : string;
  movie : Movie[];
}

const Cinema = (props : CinemaProps) =>(
  <div>
    <h2>{props.name}</h2>
    <ul>
      {props.movie.map((movie) => (
        <li key={movie.title}>
          <strong>{movie.title} </strong> - réalisé par : {movie.director}
          
        </li>
      ))}
    </ul>
  </div>
)
       

export default Cinema;