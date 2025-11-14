import { useState, type SyntheticEvent } from "react";
import {Box, Button, TextField} from "@mui/material";
import type { Film, } from "../../types";
interface AddFilmProps {
    addFilm: (film: Film) => void
}

const AddFilm = ({addFilm} : AddFilmProps) =>{
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [duree, setDuree] = useState(0);
    const [urlImage, setUrlImage] = useState("");
    const [description, setDescrition] = useState("");
    const [budget, setBudget] = useState(0);
    const handleSubmit = (e : SyntheticEvent) => {
        e.preventDefault()
        addFilm({title: title, director: director, duree : duree,
            urlImage : urlImage ?? "", description: description ?? "",
            budget: budget ?? 0 })
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
        <Box>
            <form onSubmit={handleSubmit}>
                <Box sx={{marginBottom: 2}}>
                    <TextField
                    fullWidth
                    id="title"
                    name="title"
                    label="title"
                    variant="outlined"
                    value={title}
                    onChange={handleTitleChange}
                    required
                    color="primary"
                    />
                </Box>
                <Box sx={{marginBottom: 2}}>
                    <TextField
                    fullWidth
                    id="director"
                    name="director"
                    label="director"
                    variant="outlined"
                    value={director}
                    onChange={handleDirectorChange}
                    required
                    color="primary"
                    />
                </Box>
                <Box sx={{marginBottom: 2}}>
                    <TextField
                    fullWidth
                    id="duree"
                    name="duree"
                    label="Duree"
                    variant="outlined"
                    value={duree}
                    onChange={handleDureeChange}
                    required
                    color="primary"
                    />
                </Box>
                <Box sx={{marginBottom: 2}}>
                    <TextField
                    fullWidth
                    id="urlImage"
                    name="urlImage"
                    label="UrlImage"
                    variant="outlined"
                    value={duree}
                    onChange={handleUrlImageChange}
                    color="primary"
                    />
                </Box>
                <Box sx={{marginBottom: 2}}>
                    <TextField
                    fullWidth
                    id="description"
                    name="description"
                    label="Description"
                    variant="outlined"
                    value={duree}
                    onChange={handleDescriptionChange}
                    color="primary"
                    />
                </Box>
                <Box sx={{marginBottom: 2}}>
                    <TextField
                    fullWidth
                    id="budget"
                    name="budget"
                    label="Budget"
                    variant="outlined"
                    value={duree}
                    onChange={handleBudgetChange}
                    color="primary"
                    />
                </Box>
                <Button type="submit" variant="contained" color="primary">Ajouter</Button>
            </form>
        </Box>
    )
}

export default AddFilm;