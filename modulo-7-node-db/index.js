const express = require('express');
const sequelize = require('./config/db');
const userRoutes = require('./routes/user.routes');

const app = express();
const PORT = 3000;

app.use(express.json());

// rutas
app.use('/usuarios', userRoutes);

// conexión DB
sequelize.authenticate()
  .then(() => console.log('✅ Conectado a PostgreSQL'))
  .catch(err => console.log(err));

sequelize.sync()
  .then(() => console.log('📦 Tablas creadas'))
  .catch(err => console.log(err));

// servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});