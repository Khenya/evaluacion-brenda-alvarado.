import mongoose from 'mongoose';

export const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('Error de conexión:', err);
    process.exit(1); 
  }
};