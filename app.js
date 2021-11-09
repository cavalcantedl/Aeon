let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// define as rotas das paginas
let paginasRouter = require('./routes/pagesRouters');

// define as rotas de usuarios
let usersRouter = require('./routes/users');

// define as rotas do sistema
let dashboardRouter = require('./routes/dashboardRouters');

// define as rotas de login
// let usersRouter = require('./routes/users');

let app = express();

//Bootstrap and FontAwesome
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/jquery/dist/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/bootstrap-icons/font', express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font')));
app.use('/fontawesome-free/css', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/css')));
app.use('/fontawesome-free/webfonts', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts')));

// JVectorMap
app.use('/jvectormap', express.static(path.join(__dirname, 'node_modules/jvectormap')));

// Apex Charts
app.use('/apexcharts/dist', express.static(path.join(__dirname, 'node_modules/apexcharts/dist')));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// view paginas
app.use('/', paginasRouter);

// view sistema
app.use('/sistema/dashboard', dashboardRouter);

// view usuarios
app.use('/users', usersRouter);

// view login
// app.use('/users', usersRouter);

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
  res.render('pages/error',);
});

module.exports = app;
