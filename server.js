const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('<h1>TE AMO MUCHISISISISISISMOOOOOO!!</h1>'))

app.listen(8080);
console.log('Server on port 8080')