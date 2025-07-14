import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Usuario from '../models/user.js';
import Producto from '../models/product.js';

dotenv.config();

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado a MongoDB');

    // Crear un usuario de ejemplo
    await Usuario.create({
      username: 'prueba',
      contraseña: 'prueba1234'
    });

    // Crear un producto de ejemplo
    await Producto.create({
      nombre_producto: 'Producto inicial',
      imagen: '',
      categoria: 'Ejemplo',
      vendedor: 'Sistema',
      sucursal: 'Sucursal A',
      fecha_de_ingreso: new Date(),
      precio_unitario: 1.0,
      cantidad: 10
    });

    console.log('📦 Colecciones creadas con documentos de ejemplo');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error al inicializar:', err);
    process.exit(1);
  }
};

run();