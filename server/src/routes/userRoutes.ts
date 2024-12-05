// routes/userRoutes.js
import express from 'express';
import { getUser, getUsers, login, register } from '../controllers/userController';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/:id', getUser);
router.get('/', getUsers);

export default router;