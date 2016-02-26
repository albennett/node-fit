'use strict';

const express = require('express');
const sqlite3 = require('sqlite3');

const PORT = process.env.PORT || 3000;

const app = express();
const db = new sqlite3.Database('./db/node-fit.sqlite');

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`);
});
