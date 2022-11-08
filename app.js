require('@babel/register');
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const sessionConfig = require('./config/sessionConfig');
const userSession = require('./middlewares/userSession');

// const onlyForSession = require('./middlewares/onlyForSession');

// const emptyRouter = require('./routes/emptyRouter');
const loginRouter = require('./routes/auth/loginRouter');
const registrationRouter = require('./routes/auth/registrationRouter');

const mainRouter = require('./routers/mainRouter');

const morgan = require('morgan');

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
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);


app.listen(PORT, () => { console.log(`Server is up, PORT: ${PORT}`); });
