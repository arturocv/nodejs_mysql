import { Router } from "express";
import { methods as userController} from "../controllers/controller.users";

const router = Router();

router.post("/api/login", userController.getLogin);
router.get('/api/audios', userController.obtenerAudios);



export default router;