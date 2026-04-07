const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/auth.middleware");

// 🔒 TODAS protegidas
router.get("/users", verifyToken, userController.getUsers);
router.post("/users", verifyToken, userController.createUser);
router.put("/users/:id", verifyToken, userController.updateUser);
router.delete("/users/:id", verifyToken, userController.deleteUser);

module.exports = router;