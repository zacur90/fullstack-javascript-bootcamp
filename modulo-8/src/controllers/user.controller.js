// Simulación de base de datos
let users = [];

// GET - Obtener todos los usuarios
const getUsers = (req, res) => {
  res.json(users);
};

// POST - Crear usuario
const createUser = (req, res) => {
  const user = req.body;

  users.push(user);

  res.json({
    message: "Usuario creado ✅",
    data: user,
  });
};

// PUT - Actualizar usuario
const updateUser = (req, res) => {
  const id = req.params.id;
  const newData = req.body;

  if (!users[id]) {
    return res.status(404).json({
      message: "Usuario no encontrado ❌",
    });
  }

  users[id] = newData;

  res.json({
    message: "Usuario actualizado ✏️",
    data: newData,
  });
};

// DELETE - Eliminar usuario
const deleteUser = (req, res) => {
  const id = req.params.id;

  if (!users[id]) {
    return res.status(404).json({
      message: "Usuario no encontrado ❌",
    });
  }

  users.splice(id, 1);

  res.json({
    message: "Usuario eliminado 🗑️",
  });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};