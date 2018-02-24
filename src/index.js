const express = require('express');
const controller = require('../dist/server').default;

const app = express();
app.get('/', controller);
app.use(express.static('dist'));
app.listen(3000);
