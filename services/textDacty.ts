import path from 'node:path';
import {parse, serialize} from '../utils/json';
const jsonDbPath = path.join(__dirname, "/../date/dactyText.json");
import {DactyText, NewDactyText } from '../types';
import { UUIDTypes } from 'uuid';
import { randomUUID } from 'node:crypto';

const legalLevel= ['easy', 'medium', 'hard'];


const defaultDactyTexts : DactyText[] = [
  {
    "id": "e4e9b7a1-8d0f-4c12-9c4b-7f3e8a5a1f2b",
    "content": "Le chat noir dort sur le canapé vert.",
    "level": "easy"
  },
  {
    "id": "b3f6c2d8-5a9e-4a15-8c7d-4e2b1f0d3a6c",
    "content": "L'intelligence artificielle est un domaine en pleine expansion, combinant l'informatique, la robotique et la psychologie pour créer des systèmes capables de raisonner, d'apprendre et de s'adapter.",
    "level": "medium"
  },
  {
    "id": "a9d8c7b6-1f2e-3c4d-5a6b-7c8d9e0f1a2b",
    "content": "La théorie de la relativité générale d'Einstein stipule que la gravitation n'est pas une force, mais une manifestation de la courbure de l'espace-temps causée par la masse et l'énergie, un concept révolutionnaire qui a transformé la physique moderne.",
    "level": "hard"
  }
];


const dactyTexts = parse(jsonDbPath, defaultDactyTexts);
console.log(dactyTexts);

function getAllDactyText(level : string) : DactyText[]{
    if(!level)
        return dactyTexts;
    let levelFilter;
    for (const element of legalLevel) {
        console.log(element + 'and' + legalLevel);
        if(element === level){
            levelFilter = level;
        }
    }
    if(levelFilter === undefined)
        return dactyTexts;
    const filteredDactyText = dactyTexts.filter((dactyText) => dactyText.level === level);
    return filteredDactyText;
}

function getOneDactyText(id : UUIDTypes): DactyText | undefined{
    const dactyText = dactyTexts.find((dactyText) => dactyText.id === id);
    if(!dactyText)
        return;
    return dactyText;
}


function createOneDactyText(newDactyText: NewDactyText) : DactyText | undefined{
    const nextId = randomUUID();
    const createdDactyText = {
        id : nextId,
        ... newDactyText
    };
    for (const element of legalLevel) {
        if(element === newDactyText.level){
            dactyTexts.push(createdDactyText);
            serialize(jsonDbPath, dactyTexts);
            return createdDactyText;
        }
    }
    return;
    
}

function deleteOneDactyText(id : UUIDTypes): DactyText | undefined{
    const index = dactyTexts.findIndex((dactyText) => dactyText.id === id);
    if(index === -1)
        return;
    
    const deletedDactyText = dactyTexts.splice(index, 1);
    serialize(jsonDbPath, dactyTexts);
    return deletedDactyText[0];
}

function updateOneDactyText(id : UUIDTypes, newDactyText : NewDactyText): DactyText |undefined{
    const dactyTextToPatch = dactyTexts.find((dactyText) => dactyText.id === id);
    if(!dactyTextToPatch){
        return;
    }
    if(newDactyText.content === undefined || newDactyText.level === undefined)
        return;

    dactyTextToPatch.content = newDactyText.content;
    dactyTextToPatch.level = newDactyText.level;

    serialize(jsonDbPath, dactyTexts);
    return dactyTextToPatch;
}

export { getAllDactyText, getOneDactyText, createOneDactyText, deleteOneDactyText, updateOneDactyText};