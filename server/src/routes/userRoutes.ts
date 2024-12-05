// routes/userRoutes.js
import express from 'express';
import { login, register, testEndpoint } from '../controllers/userController';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/test', testEndpoint);

export default router;