'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const sqlite3 = require('sqlite3');

const app = express();
const db = new sqlite3.Database('./db/node-fit.sqlite');
const PORT = process.env.PORT || 3000;

const steps = require('./routes/steps.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// method override
app.use(methodOverride('_method'));

// use routes
app.use(steps);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`);
});
