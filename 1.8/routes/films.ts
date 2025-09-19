import { Router } from "express";
import { NewFilm } from "../types";
import {  isNumber, isAValidFilmPatch } from "../utils/type-guards";

import { createOneFilm, deleteOneFilm, readAllfilm, readOneFilm, updateOneFilm } from "../services/films";


const router = Router();

// Read all films

router.get("/", (req, res) => {
  const durationMinimum = Number(req.query["minimum-duration"]);
  const drinks = readAllfilm(durationMinimum);
  return res.json(drinks);
});

router.get('/:id', (req, res) =>{
  const idFilm = Number(req.params.id);
  const drink = readOneFilm(idFilm);
  return res.json(drink);
});

router.post("/", (req,res) =>{
  const body: unknown = req.body;
  console.log(body);
  if(req.body.duration <=0){
    return res.sendStatus(400);
  }
  const {title, director, duration, budget, description, imageUrl} = body as NewFilm;
  const newFilm = createOneFilm({title, director, duration, budget, description, imageUrl});
  return res.json(newFilm);
 });


 router.delete("/:id", (req, res) =>{
    const idToDelete = Number(req.params.id);
    if(!isNumber(idToDelete))
      return res.sendStatus(403);
    const filmToDelete = deleteOneFilm(idToDelete);
    return res.json(filmToDelete);
 });

 router.patch("/:id", (req, res) =>{
  const idToPatch = Number(req.params.id);
    if(!isNumber(idToPatch))
      return res.sendStatus(403);

  const body: unknown = req.body;
  if(!isAValidFilmPatch(body)){
  
    return res.sendStatus(400);
  }

  const {title, director, duration, budget, description, imageUrl}: Partial<NewFilm> = body;

  const filmToReturn = updateOneFilm(idToPatch, {title, director, duration, budget, description, imageUrl});
  return res.json(filmToReturn);
 });
 

export default router;
