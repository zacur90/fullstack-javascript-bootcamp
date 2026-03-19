const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Crear usuario
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Validación básica
    if (!name || !email) {
      return res.status(400).json({
        error: 'Name y email son obligatorios'
      });
    }

    const user = await User.create({ name, email });
    res.status(201).json(user);

  } catch (error) {
    res.status(500).json({
      error: 'Error al crear usuario'
    });
  }
});

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);

  } catch (error) {
    res.status(500).json({
      error: 'Error al obtener usuarios'
    });
  }
});

// Obtener usuario por ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        error: 'Usuario no encontrado'
      });
    }

    res.json(user);

  } catch (error) {
    res.status(500).json({
      error: 'Error al obtener usuario'
    });
  }
});

// Actualizar usuario
router.put('/:id', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Validación básica
    if (!name || !email) {
      return res.status(400).json({
        error: 'Name y email son obligatorios'
      });
    }

    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        error: 'Usuario no encontrado'
      });
    }

    await user.update({ name, email });

    res.json({
      message: 'Usuario actualizado',
      user
    });

  } catch (error) {
    res.status(500).json({
      error: 'Error al actualizar usuario'
    });
  }
});

// Eliminar usuario
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        error: 'Usuario no encontrado'
      });
    }

    await user.destroy();

    res.json({
      message: 'Usuario eliminado'
    });

  } catch (error) {
    res.status(500).json({
      error: 'Error al eliminar usuario'
    });
  }
});

module.exports = router;