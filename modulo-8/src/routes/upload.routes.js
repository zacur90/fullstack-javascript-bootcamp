const express = require("express");
const router = express.Router();

const upload = require("../middlewares/upload.middleware");
const verifyToken = require("../middlewares/auth.middleware");

// Ruta protegida para subir archivo
router.post("/upload", verifyToken, upload.single("file"), (req, res) => {
  res.json({
    message: "Archivo subido correctamente 📂",
    file: req.file,
  });
});

module.exports = router;