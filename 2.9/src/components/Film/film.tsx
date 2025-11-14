import { lightBlue } from "@mui/material/colors";
import type {Film}  from "../../types";
import "./FilmMenu.css";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useTheme} from "@mui/material";

interface FilmMenuProps{
    films: Film[];
}
const FilmMenu = ({films} : FilmMenuProps) => {
    const theme = useTheme();
    return (
        <TableContainer component={Paper}>
            <Table
            sx={{
                minWidth: 500,
                "& .MuiTableCell-head":{
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.primary.light,
                fontWeight: "bold",
            },
            "& .MuiTalbleCell-body": {
                backgroundColor: theme.palette.primary.light,
                color: lightBlue,
            },
            "& .MuiTableCell-root": {
                border: `1px solid ${theme.palette.secondary.main}`,
            },
        }}
    >
        <TableHead>
            <TableRow>
                <TableCell>Titre</TableCell>
                <TableCell>Directeur</TableCell>
                <TableCell>Durée</TableCell>
                <TableCell>Affiche</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Budget</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {films.map((film) =>(
                <TableRow key={film.title}>
                    <TableCell>{film.title}</TableCell>
                    <TableCell>{film.director}</TableCell>
                    <TableCell>{film.duree}</TableCell>
                    <TableCell>{film.urlImage}</TableCell>
                    <TableCell>{film.description}</TableCell>
                    <TableCell>{film.budget}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    );
};
export default FilmMenu;