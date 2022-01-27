import { Router } from 'express';
import { getCharacter, getCharacters, syncCharacter } from '../controller/characters.controller';

const router = Router();

router.get('/:currentPage?/:limit?', getCharacters);

// router.get('/id/:id', getCharacter);


export default router;