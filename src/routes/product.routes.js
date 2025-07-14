import express from 'express';
import { listar, crear, actualizar, eliminar } from '../controllers/product.controller.js';
import { verificarToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', listar);
router.post('/', verificarToken, crear);
router.put('/:id', verificarToken, actualizar);
router.delete('/:id', verificarToken, eliminar);

export default router;