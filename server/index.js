const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const config = require('./config');

// const routes = require('./routes/index');
const users = require('./routes/user');

mongoose.Promise = Promise;
mongoose.connect(config.database.local);
mongoose.connection.on('error', console.error);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/users', users);

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


server.listen(3000);
