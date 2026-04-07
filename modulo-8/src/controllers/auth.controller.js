const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { username } = req.body;

  // usuario fake (para prueba)
  const user = {
    id: 1,
    username,
  };

  const token = jwt.sign(user, "secreto", {
    expiresIn: "1h",
  });

  res.json({
    message: "Login exitoso 🔐",
    token,
  });
};

module.exports = {
  login,
};