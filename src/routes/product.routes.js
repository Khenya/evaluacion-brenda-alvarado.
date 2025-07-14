import express from 'express';
import { listar, crear, actualizar, eliminar, listarProductos  } from '../controllers/product.controller.js';
import { verificarToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', listar);
router.post('/', verificarToken, crear);
router.put('/:id', verificarToken, actualizar);
router.delete('/:id', verificarToken, eliminar);
router.get('/products', verificarToken, listarProductos);

export default router;