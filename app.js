const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('H3l0 h0w R U!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
