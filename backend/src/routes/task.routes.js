import express from 'express';
import { fetchTasks, addTask , editTask , removeTask , fetchTaskById  } from '../controllers/task.controller.js';

const router = express.Router();

router.get('/tasks', fetchTasks);
router.get('/tasks/:id' , fetchTaskById)
router.post('/addtasks/:id', addTask);
router.put('/puttasks/:id', editTask);
router.delete('/deletetasks/:id', removeTask);
export default router;