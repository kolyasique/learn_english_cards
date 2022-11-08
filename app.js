require('@babel/register');
require('dotenv').config();

const express = require('express');

const mainRouter = require('./routers/mainRouter');

const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.use('/', mainRouter);

app.listen(PORT, () => { console.log(`Server is up, PORT: ${PORT}`); });
