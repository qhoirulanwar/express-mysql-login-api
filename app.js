const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const indexApp = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//enable CORS on ExpressJS
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE, OPTIONS");
  next();
});

app.use('/', indexApp);
app.use('/user', require('./routes/user'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('index');
});

module.exports = app;
