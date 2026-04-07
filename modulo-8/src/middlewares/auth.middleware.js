const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  // 1. Verificar que exista token
  if (!authHeader) {
    return res.status(401).json({
      message: "No hay token ❌",
    });
  }

  // 2. Formato: Bearer TOKEN
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Token mal formado ❌",
    });
  }

  // 3. Verificar token
  try {
    const decoded = jwt.verify(token, "secreto");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Token inválido o expirado ❌",
    });
  }
};

module.exports = verifyToken;