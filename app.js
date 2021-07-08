const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//**********MIDDLEWARES
//Order in middleware matters (Req -> A -> B -> C -> Res)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // additional logging eg. POST /api/v1/tours 201 18.442 ms - 155
}

console.log(process.env.NODE_ENV);

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//**********ROUTES a.k.a Route mounting
//One line change if there is a new version change or new apis to add
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
