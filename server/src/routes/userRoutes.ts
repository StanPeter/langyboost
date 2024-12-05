// routes/userRoutes.js
import express from 'express';
import { testEndpoint } from '../controllers/userController';

const router = express.Router();

// router.post('/signin', signIn);
router.post('/test', testEndpoint);

export default router;