import express from 'express';
import { login , register , deleteUser , update} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login)
router.delete('/delete', deleteUser)
router.patch('/update' , update)
export default router;