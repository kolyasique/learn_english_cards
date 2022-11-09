require('@babel/register');
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const sessionConfig = require('./config/sessionConfig');
const userSession = require('./middlewares/userSession');

// const onlyForSession = require('./middlewares/onlyForSession');

// const emptyRouter = require('./routes/emptyRouter');
const loginRouter = require('./routes/auth/loginRouter');
const registrationRouter = require('./routes/auth/registrationRouter');
const createCardRouter = require('./routes/createCardRouter');
const mainRouter = require('./routers/mainRouter');
const testRouter = require('./routers/testRouter');


const wordsRouter = require('./routers/wordsRouter');


const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session(sessionConfig));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userSession);

app.use('/', mainRouter);
app.use('/creationform', createCardRouter);
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/words', wordsRouter);
app.use('/test', testRouter);


app.listen(PORT, () => { console.log(`Server is up, PORT: ${PORT}`); });
