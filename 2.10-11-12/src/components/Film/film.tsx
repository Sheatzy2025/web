import type {Film}  from "../../types";
import "./FilmMenu.css";

interface FilmMenuProps{
    films: Film[];
}
const FilmMenu = ({films} : FilmMenuProps) => {
    return (
        <table className="film-menu">
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Directeur</th>
                    <th>Duree (minutes)</th>
                    <th>Url</th>
                    <th>Description</th>
                    <th>Budget (en million)</th>
                
                </tr>
            </thead>
            <tbody>
                {films.map((film) =>(
                    <tr key={film.title}>
                        <td>{film.title}</td>
                        <td>{film.director}</td>
                        <td>{film.duree}</td>
                        <td>{film.urlImage}</td>
                        <td>{film.description}</td>
                        <td>{film.budget}</td>
                    </tr>
                ))};
            </tbody>
        </table>
    )
}
export default FilmMenu;