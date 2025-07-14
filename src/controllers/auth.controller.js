import Usuario from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const { username, contraseña } = req.body;
  try {
    const usuario = await Usuario.findOne({ username });
    if (!usuario) return res.status(400).json({ mensaje: 'Credenciales inválidas' });

    const valid = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!valid) return res.status(400).json({ mensaje: 'Credenciales inválidas' });

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const signUp = async (req, res) => {
  const { username, contraseña } = req.body;
  try {
    const usuarioExistente = await Usuario.findOne({ username });
    if (usuarioExistente) return res.status(400).json({ mensaje: 'Ya existe el usuario' });

    const hash = await bcrypt.hash(contraseña, 10);
    const nuevoUsuario = new Usuario({ username, contraseña: hash });
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};