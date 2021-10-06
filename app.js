var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//inicio das requisições das rotas
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let aeonRouter = require('./routes/aeonRoutes');
let loginRouter = require('./routes/loginRoutes');
let clientRouter = require('./routes/clientRoutes');

//fim das requisições das rotas

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Chama bootstrap, jquery e fontawesome
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

//inicio das chamadas das rotas
app.use('/', aeonRouter);
app.use('/users', usersRouter);
app.use('/sistema', aeonRouter);
app.use('/', loginRouter);
app.use('/', clientRouter);

//fim das chamadas das rotas


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
