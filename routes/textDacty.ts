import { Router } from "express";
import { NewDactyText } from "../types";
import { getAllDactyText, getOneDactyText, createOneDactyText, deleteOneDactyText, updateOneDactyText} from '../services/textDacty';

const textRouter = Router();

textRouter.get('/', (req, res) =>{
    const level = String(req.query['level']);
    const dactyTexts = getAllDactyText(level);
    return res.json(dactyTexts);
});

textRouter.get('/:id', (req, res) =>{
    const idText = req.params.id;
    const dactyText = getOneDactyText(idText);
    return res.json(dactyText);
});

textRouter.post('/', (req, res) =>{
    const body : unknown = req.body;
    console.log(body);
    const {content, level} = body as NewDactyText;
    const newDactyText = createOneDactyText({content, level});
    return res.json(newDactyText);
});

textRouter.delete('/:id', (req, res) => {
    const idToDelete = req.params.id;
    const deletedText = deleteOneDactyText(idToDelete);
    return res.json(deletedText);
});

textRouter.patch('/:id', (req, res) =>{
    const idToPatch = req.params.id;
    const body : unknown = req.body;
    
    const {content, level} = body as NewDactyText;
    const dactyTextToReturn = updateOneDactyText(idToPatch, {content, level});
    return res.json(dactyTextToReturn);
});


export default textRouter;
