const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/guest', indexRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

module.exports = app;
