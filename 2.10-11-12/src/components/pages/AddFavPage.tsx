import { useState, type SyntheticEvent } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./AddFavPage.css"
import { type FavContext, type Film, type CinemaContext } from "../../types";

type CinemaCombinedContext = CinemaContext & FavContext;


const AddFavPage = () => {
   const { films, addFavFilm } = useOutletContext<CinemaCombinedContext>();

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const movieToAdd = films.find((movie : Film) => movie.title === title)
        if(!movieToAdd) return <p>Movie not found</p>
        addFavFilm(movieToAdd)
        navigate("/");
    };

    const handleTitleChange = (e:SyntheticEvent) =>{
         const titleInput = e.target as HTMLInputElement;
        console.log("change in titleInput", titleInput.value)
        setTitle(titleInput.value)
    }

    console.log('Page chargée')
    return (
        <div>
            <h1>
            Ajouter un film
            </h1>
            <form onSubmit={handleSubmit}>
                 <label htmlFor="title">Titre: </label>
                    <input value={title} type="text" name="title" onChange={handleTitleChange}required></input>
                    <label htmlFor="director">Directeur: </label>
                    <button type="submit">Ajouter</button>
            </form>
        </div>
    )

}

export default AddFavPage;