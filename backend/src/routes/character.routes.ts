import { Router } from 'express';
import { getCharacter, syncCharacter } from '../controller/characters.controller';

const router = Router();

router.get('/id/:id', getCharacter);
router.get('/sync', syncCharacter);


export default router;