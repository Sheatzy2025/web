import { useState } from "react";
import { Link, Outlet, useMatch, useNavigate, useOutletContext } from "react-router-dom";

import type { CinemaContext, FavContext, Film } from "../../types";
type CombinedContext = CinemaContext & FavContext;
const NavBar = () => {
  const navigate = useNavigate();

  return(
    <nav>
      <button onClick={() => navigate("")}>Home</button>
      <button onClick={() => navigate("Cinema")}>Cinema</button>
      <button onClick={() => navigate("MovieList")}>MovieList</button>
      <button onClick={() => navigate("AddMovie")}>AddMovie</button>
      <button onClick={() => navigate("AddFavMovie")}>AddFavMovie</button>
    </nav>
  );
};

const HomePage = () => {
  const {favFilms} = useOutletContext<FavContext>()
  return(
    <div>
        <h1>Films Favoris: </h1>
        {favFilms.map((movie) => (
        <Link
          key={movie.title}
          to={`/movies/${movie.title}`}
          style={{ display: "block" }}
        >
          {movie.title}
        </Link>
        ))}
    </div>
   
  )
}
const CinemaPage = () => <p>Cinema Page</p>;
const MovieListPage = () => {
  const { films } = useOutletContext<CinemaContext>();

  return (
    <div>
      <h1>Movies List</h1>
      <h2>Movies:</h2>

      {films.map((movie) => (
        <Link
          key={movie.title}
          to={`/movies/${movie.title}`}
          style={{ display: "block" }}
        >
          {movie.title}
        </Link>
      ))}
    </div>
  );
};
const AddMoviePage = () => <p>Add a movie!</p>
const AddFavPage = () => <p>Add a movie to fav!</p>

const defaultFilms = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    duree: 148,
    urlImage: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    description: "Un voleur capable d’entrer dans les rêves doit accomplir une mission presque impossible : implanter une idée dans l’esprit d’un individu.",
    budget: 160_000_000
  },
  {
    title: "Parasite",
    director: "Bong Joon-ho",
    duree: 132,
    urlImage: "https://m.media-amazon.com/images/I/81nC3yQm4CL._AC_SY679_.jpg",
    description: "Une satire sociale où une famille pauvre s’infiltre peu à peu dans la vie d’une famille aisée.",
    budget: 11_000_000
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    duree: 169,
    urlImage: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    description: "Un groupe d’explorateurs voyage à travers un trou de ver à la recherche d’un nouvel espoir pour l’humanité.",
    budget: 165_000_000
  },
  {
    title: "Le Fabuleux Destin d’Amélie Poulain",
    director: "Jean-Pierre Jeunet",
    duree: 122,
    urlImage: "https://m.media-amazon.com/images/I/71+eOfl+xgL._AC_SY679_.jpg",
    description: "Amélie, jeune serveuse à Montmartre, décide de consacrer sa vie à faire le bien autour d’elle.",
    budget: 10_000_000
  },
  {
    title: "Mad Max: Fury Road",
    director: "George Miller",
    duree: 120,
    urlImage: "https://m.media-amazon.com/images/I/81TrM2pWZ1L._AC_SY679_.jpg",
    description: "Dans un monde post-apocalyptique, Max et Furiosa unissent leurs forces pour fuir un tyran et retrouver la liberté.",
    budget: 150_000_000
  }
];

const MoviePage = () => {
  const { films } = useOutletContext<CinemaContext>();
  const match = useMatch("/movies/:movieTitle")
  const movieTitle = match?.params.movieTitle;
  console.log(movieTitle)
  if(!movieTitle) return <p>Movie Not Found</p>
  const movie = films.find((movie) => movie.title === movieTitle)
  console.log(movie)
  if (!movie)  return <p>Movie Not Found</p>
  return (  
    <div>
      <h2>{movie.title}</h2>
      <p>Directeur: {movie.director}</p>
      <p>Durée: {movie.duree}</p>
      <p>Url Image: {movie.urlImage}</p>
      <p>Description: {movie.description}</p>
      <p>Budget: {movie.budget}</p>
    </div>
  )
}
const App = () => {
  
  const [films, setFilms] = useState<Film[]>(defaultFilms);
  const [favFilms, setFavFilms] = useState<Film[]>([]);
  const addFavFilm = (film :Film) => {
    setFavFilms((prev) => [...prev, film])
  }
  const addFilm = (film : Film) => {
    setFilms((prev) => [...prev, film])
  }

  const FavContext : FavContext = {
    favFilms,
    addFavFilm,
  }
  const context: CinemaContext = {
    films,
    addFilm,
  };

  const outletContext: CombinedContext = {
  ...context,
  ...FavContext,
};
  return (
    <div>
      <NavBar />
      <Outlet context={outletContext} />
    </div>
  );
};

export default App;
export {HomePage, CinemaPage, MovieListPage, MoviePage, AddMoviePage, AddFavPage};