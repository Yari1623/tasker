import express from 'express';
import { fetchTasks, addTask , editTask , removeTask } from '../controllers/task.controller';

const router = express.Router();

router.get('/tasks', fetchTasks);
router.post('/tasks', addTask);
router.put('/tasks/:id', editTask);
router.delete('/tasks/:id', removeTask);
export default router;