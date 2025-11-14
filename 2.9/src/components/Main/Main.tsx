import { useState } from "react";
import AddFilm from "./AddFilm";
import FilmMenu from "../Film/film";
import { Container, Typography } from "@mui/material";
import type { Film } from "../../types";
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

const Main = () => {
    const [films, setFilms] = useState(defaultFilms);
    const addFilm = (newFilm : Film) =>{
        setFilms(prev =>[...prev, {
            urlImage: "",
            description: "",
            budget:0,
            ...newFilm
        }])
    }

    return(
        <Container component="main" sx={{mt:10, mb:10, flex: "1"}} maxWidth="xl">
            <Typography variant="h2"component="h1" >
                Here is all of the films you can dream of :)
            </Typography>
                <FilmMenu films={films}></FilmMenu>
                <AddFilm addFilm={addFilm}></AddFilm>
        </Container>
    )
}

export default Main;
