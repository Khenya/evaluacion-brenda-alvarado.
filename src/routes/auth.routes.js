import express from 'express';
import { signUp, login } from '../controllers/auth.controller.js';

const router = express.Router();
router.post('/login', login);
router.post('/signUp', signUp);

export default router;