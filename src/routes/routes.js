import { Router } from "express";
import { getAudios, getLogin } from '../controllers/users.controllers.js';

const router = Router();

router.get('/api/audios', getAudios);

router.post('/api/login', getLogin);

export default router;
