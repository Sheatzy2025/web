import { NewFilm } from "../types";

/**
 * This file contains type guards for typescript
 * @param value
 * @returns
 */

/**
 * Check if the value is a string and inform typescript of this
 * @param value
 * @returns
 */
const isString = (value: unknown): value is string => {
  return typeof value === "string" || value instanceof String;
};

/* Check if the value is a number and inform typescript of this */
const isNumber = (value: unknown): value is number => {
  return typeof value === "number" && isFinite(value);
};


const isAValidNewFilm = (value : unknown): value is Partial<NewFilm> =>{
  if(!value || typeof value !== "object" 
    || !("title" in value) 
    || !("director" in value)
    || !("duration" in value)
    || (typeof value.title !== "string")
    || (typeof value.director !== "string")
    || (typeof value.duration !== "number")
    || ("budget" in value && (typeof value.budget !== "number" && Number(value.budget)<= 0))
    || ("description" in value && typeof value.description !== "string")
    || ("imageUrl" in value && typeof value.imageUrl !== "string")
  )return false;
  return true;
};

const isAValidFilmPatch = (value : unknown): value is Partial<NewFilm> =>{
  if(!value ||typeof value !== "object")
    return false;
  if(("title" in value) || ("director" in value)|| ("duration" in value))
    return true;
  if("budget" in value && (typeof value.budget === "number" && Number(value.budget) <= 0)
  || "description" in value && typeof value.description === "string"
  || "imageUrl" in value && typeof value.imageUrl === "string")
  return true;
  return false;
};

/**
 * Check if the value is a new pizza
 * @param value
 * @returns boolean
 */

export { isString, isNumber, isAValidNewFilm, isAValidFilmPatch };
