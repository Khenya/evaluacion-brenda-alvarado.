import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  nombre_producto: { type: String, required: true },
  imagen: { type: String, default: '' },
  categoria: { type: String, required: true },
  vendedor: { type: String, required: true },
  fecha_de_ingreso: { type: Date, default: Date.now },
  sucursal: { type: String, required: true },
  precio_unitario: { type: Number, required: true },
  cantidad: { type: Number, required: true },
});

export default mongoose.model('Producto', productoSchema);