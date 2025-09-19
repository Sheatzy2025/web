import { Router } from "express";
import { Film, NewFilm } from "../types";
import { isAValidNewFilm, isNumber, isAValidFilmPatch } from "../utils/type-guards";
import path from "node:path";
import {parse, serialize} from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../date/films.json");

const router = Router();
const defaultFilms: Film[] = [
  {
    id: 1,
    title: "Shang-Chi and the Legend of the Ten Rings",
    director: "Destin Daniel Cretton",
    duration: 132,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
    description:
      "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
    budget: 150,
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    budget: 63,
  },
  {
    id: 3,
    title: "Summer Wars",
    director: "Mamoru Hosoda",
    duration: 114,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg",
    description:
      "A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.",
    budget: 18.7,
  },
  {
    id: 4,
    title: "The Meyerowitz Stories",
    director: "Noah Baumbach",
    duration: 112,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/af/The_Meyerowitz_Stories.png",
    description:
      "An estranged family gathers together in New York City for an event celebrating the artistic work of their father.",
  },
  {
    id: 5,
    title: "her",
    director: "Spike Jonze",
    duration: 126,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
    description:
      "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    budget: 23,
  },
];
// Read all films

router.get("/", (req, res) => {
  const films = parse(jsonDbPath, defaultFilms);
  if(films.length === 0){
    throw new Error("Erreur 404");
  }
  if(!req.query["minimum-duration"]){
    return res.json(films);
  }
  const durationMinimum = Number(req.query["minimum-duration"]);
  const filteredFilm = films.filter((film) => {
    return film.duration >= durationMinimum;
  });
  return res.json(filteredFilm);
});

router.get('/:id', (req, res) =>{
  const idFilm = Number(req.params.id);
  const films = parse(jsonDbPath, defaultFilms);
  if(!isNumber(idFilm)){
    return res.sendStatus(400);
  }
  const filmToReturn = films.find((film) => film.id === idFilm);
  if(filmToReturn === undefined){
    res.status(404).send('Erreur 404');
  }
  return res.json(filmToReturn);
});

router.post("/", (req,res) =>{
  const body: unknown = req.body;

  if(!isAValidNewFilm(body)){
    return res.sendStatus(400);
  }

  const {title, director, duration, budget, description, imageUrl} = body as NewFilm;
  const films = parse(jsonDbPath, defaultFilms);

  if(!title || !director || !duration){
    return res.sendStatus(400);
  }

  const nextId = films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0 ) + 1;

  const newFilm : Film = {
    id: nextId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  };

  for (const element of films) {
    if(element.director === newFilm.director && element.title === newFilm.title){
      return res.sendStatus(409);
    }
  }
  films.push(newFilm);
  serialize(jsonDbPath, films);
  return res.json(newFilm);
 });


 router.delete("/:id", (req, res) =>{
    const idToDelete = Number(req.params.id);
    const films = parse(jsonDbPath, defaultFilms);
    if(!isNumber(idToDelete))
      return res.sendStatus(403);

    const filmToDelete = films.findIndex((film) =>(idToDelete === film.id));

    if(filmToDelete === -1)
      return res.send(404);

    const deleteFilm = films.splice(filmToDelete, 1);
    serialize(jsonDbPath, films);
    return res.json(deleteFilm);
 });

 router.patch("/:id", (req, res) =>{
  const idToPatch = Number(req.params.id);
  const films = parse(jsonDbPath, defaultFilms);
    if(!isNumber(idToPatch))
      return res.sendStatus(403);

  const filmToPatch = films.find((film) => film.id === idToPatch);
  if(!filmToPatch)
    return res.sendStatus(404);
  
  const body: unknown = req.body;
  if(!isAValidFilmPatch(body)){
    console.log('here bitch');
    return res.sendStatus(400);
  }

  const {title, director, duration, budget, description, imageUrl}: Partial<NewFilm> = body;

  if (title) {
    filmToPatch.title = title;
  }
  if (director) {
    filmToPatch.director = director;
  }
  if (duration) {
    filmToPatch.duration = duration;
  }
  if (budget) {
    filmToPatch.budget = budget;
  }
  if(description)
    filmToPatch.description = description;
  if(imageUrl)
    filmToPatch.imageUrl = imageUrl;

  serialize(jsonDbPath, films);
  return res.json(filmToPatch);
 });
 

export default router;
