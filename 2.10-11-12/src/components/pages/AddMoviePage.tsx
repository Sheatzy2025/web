import { useState, type SyntheticEvent } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./AddMoviePage.css"

import type { CinemaContext } from "../../types";

const AddMoviePage = () => {
    const { addFilm } = useOutletContext<CinemaContext>();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [duree, setDuree] = useState(0);
    const [urlImage, setUrlImage] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState(0);

    const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addFilm({ title : title, director : director, duree : duree, urlImage : urlImage, description : description, budget : budget});
    navigate("/MovieList");
  };

    const handleTitleChange = (e: SyntheticEvent) =>{
        const titleInput = e.target as HTMLInputElement;
        console.log("change in titleInput", titleInput.value)
        setTitle(titleInput.value)
    }
    const handleDirectorChange = (e: SyntheticEvent) =>{
        const directorInput = e.target as HTMLInputElement;
        console.log("change in ", directorInput.value)
        setDirector(directorInput.value)
    }
    const handleDureeChange = (e: SyntheticEvent) =>{
        const dureeInput = e.target as HTMLInputElement;
        console.log("change in titleInput", dureeInput.value)
        setDuree(Number(dureeInput.value))
    }
    const handleUrlImageChange = (e: SyntheticEvent) =>{
        const urlImageInput = e.target as HTMLInputElement;
        console.log("change in titleInput", urlImageInput.value)
        setUrlImage(urlImageInput.value)
    }
    const handleDescriptionChange = (e: SyntheticEvent) =>{
        const descriptionInput = e.target as HTMLInputElement;
        console.log("change in titleInput", descriptionInput.value)
        setDescription(descriptionInput.value)
    }
    const handleBudgetChange = (e: SyntheticEvent) =>{
        const budgetInput = e.target as HTMLInputElement;
        console.log("change in titleInput", budgetInput.value)
        setBudget(Number(budgetInput.value))
    }

    return (
        <div>
            <h1>
            Ajouter un film
            </h1>
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
    )
}

export default AddMoviePage;