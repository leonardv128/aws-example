const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('<h1>PRUEBA NODE.JS SOBRE AWS</h1>'))

app.listen(8080);
console.log('Server on port 8080')