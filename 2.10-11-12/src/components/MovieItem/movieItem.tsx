import { useState } from "react";
import type { MovieItem } from "../../type";


function MovieItemClicker({ movie }: { movie: MovieItem }) {
  const [showOn, setShowOn] = useState(false);
  const showDes = () => {
    setShowOn((prev) => !prev);
  };
  return(
    <li className="cinemaItem" onClick={showDes} style={{cursor: "pointer"}}>
        <strong className="movieTitle">{movie.title}</strong>
            <span className="movieDirector">par {movie.director}</span>
        {showOn && (
            <p className="movieDescription ">{movie.description}</p>
        )}
    </li>
  )
}

export default MovieItemClicker;