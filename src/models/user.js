import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
});

export default mongoose.model('Usuario', usuarioSchema);