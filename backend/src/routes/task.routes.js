import express from 'express';
import { fetchTasks, addTask , editTask , removeTask , fetchTaskById  } from '../controllers/task.controller.js';
import { verifyToken } from '../middleware/token.middleware.js';
const router = express.Router();

router.get('/tasks', fetchTasks);
router.get('/tasks/:id' , verifyToken, fetchTaskById)
router.post('/addtasks/:id', verifyToken, addTask);
router.put('/puttasks/:id', verifyToken, editTask);
router.delete('/deletetasks/:id', verifyToken, removeTask);
export default router;