const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./src/routes/user.routes");
const authRoutes = require("./src/routes/auth.routes");
const uploadRoutes = require("./src/routes/upload.routes");

app.use("/api", userRoutes);
app.use("/api", authRoutes);
app.use("/api", uploadRoutes);

app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});