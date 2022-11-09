require('@babel/register');
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const sessionConfig = require('./config/sessionConfig');
const userSession = require('./middlewares/userSession');

const onlyForSession = require('./middlewares/onlyForSession');

// const emptyRouter = require('./routes/emptyRouter');
const loginRouter = require('./routes/auth/loginRouter');
const registrationRouter = require('./routes/auth/registrationRouter');
const createCardRouter = require('./routes/createCardRouter');
const mainRouter = require('./routers/mainRouter');
const authErrorRouter = require('./routes/auth/authError');
const wordRouter = require('./routers/wordsRouter');

const testRouter = require('./routers/testRouter');


const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session(sessionConfig));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userSession);

app.use('/autherror', authErrorRouter);
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);

app.use('/', onlyForSession, mainRouter);
app.use('/creationform', onlyForSession, createCardRouter);
app.use('/createthemeform', onlyForSession, createCardRouter);
app.use('/words', onlyForSession, wordRouter);
app.use('/test', onlyForSession, testRouter)


app.listen(PORT, () => { console.log(`Server is up, PORT: ${PORT}`); });
