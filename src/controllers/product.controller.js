import Producto from '../models/product.js';

export const listar = async (req, res) => {
  const { categoria, nombre } = req.query;
  const filtro = {};
  if (categoria) filtro.categoria = categoria;
  if (nombre) filtro.nombre_producto = new RegExp(nombre, 'i');

  const productos = await Producto.find(filtro);
  res.json(productos);
};

export const crear = async (req, res) => {
  try {
    const producto = new Producto(req.body);
    await producto.save();
    res.status(201).json(producto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(producto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Producto eliminado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};