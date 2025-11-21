import { useState, type SyntheticEvent } from "react";
import FilmMenu from "../Film/film";
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


const Main = () =>{
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [duree, setDuree] = useState(0);
    const [urlImage, setUrlImage] = useState("");
    const [description, setDescrition] = useState("");
    const [budget, setBudget] = useState(0);
    const [films, setFilms] = useState(defaultFilms)
    const handleSubmit = (e : SyntheticEvent) => {
        e.preventDefault()
        console.log("Submit:", title, director, duree, urlImage, description, budget)
        const newFilm = {
            title : title,
            director: director,
            duree : duree,
            urlImage : urlImage,
            description : description,
            budget : budget,
        }
        setFilms([...films, newFilm])
    }

    const handleTitleChange = (e : SyntheticEvent) =>{
        const titleInput = e.target as HTMLInputElement;
        console.log("Detectect title Change:", titleInput)
        setTitle(titleInput.value)
    }
    const handleDirectorChange = (e : SyntheticEvent) =>{
        const directorInput = e.target as HTMLInputElement;
        console.log("Detectect director Change:", directorInput)
        setDirector(directorInput.value)
    }
    const handleDureeChange = (e : SyntheticEvent) =>{
        const dureeInput = e.target as HTMLInputElement;
        console.log("Detectect duree Change:", dureeInput)
        setDuree(Number(dureeInput.value))
    }
    const handleUrlImageChange = (e : SyntheticEvent) =>{
        const UrlImageInput = e.target as HTMLInputElement;
        console.log("Detectect urlImage Change:", UrlImageInput)
        setUrlImage(UrlImageInput.value)
    }
    const handleDescriptionChange = (e : SyntheticEvent) =>{
        const discriptionInput = e.target as HTMLInputElement;
        console.log("Detectect desscription Change:", discriptionInput)
        setDescrition(discriptionInput.value)
    }
    const handleBudgetChange = (e : SyntheticEvent) =>{
        const budgetInput = e.target as HTMLInputElement;
        console.log("Detectect budget Change:", budgetInput)
        setBudget(Number(budgetInput.value))
    }

    return(
        <main>
            <FilmMenu films = {films}/>
            <div>
                <br />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Titre: </label>
                    <input value={title} type="text" name="title" onChange={handleTitleChange}required></input>
                    <label htmlFor="director">Directeur: </label>
                    <input value={director} type="text" name="director" onChange={handleDirectorChange}required></input>
                    <label htmlFor="duree">Duree: </label>
                    <input value={duree} type="text" name="duree" onChange={handleDureeChange}required></input>
                    <label htmlFor="urlImage">Url de l'image: </label>
                    <input value={urlImage} type="text" name="urlImage" onChange={handleUrlImageChange}></input>
                    <label htmlFor="description">Description: </label>
                    <input value={description} type="text" name="description" onChange={handleDescriptionChange}></input>
                    <label htmlFor="budget">Budget: </label>
                    <input value={budget} type="text" name="budget" onChange={handleBudgetChange}></input>
                    <button type="submit">Ajouter</button>
                </form>
            </div>
        </main>
    )
}

export default Main;