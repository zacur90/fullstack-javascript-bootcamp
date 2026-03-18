const express = require('express');
const app = express();
const fs = require('fs');

const PORT = 3000;

app.use(express.static('public'));

// Ruta status (OK)
app.get('/status', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.use((req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;

  fs.appendFile('./logs/log.txt', log, (err) => {
    if (err) console.log(err);
  });

  next();
});