const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const config = require('./config');

const { Message } = require('./controllers');

// const routes = require('./routes/index');
const users = require('./routes/user');
const rooms = require('./routes/room');

mongoose.Promise = Promise;
mongoose.connect(config.database.local, {
  useMongoClient: true,
});
mongoose.connection.on('error', console.error);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/users', users);
app.use('/rooms', rooms);

io.on('connection', (socket) => {
  socket.on('chat message', (chatMessage) => {
    Message.create({ sender: chatMessage.email, text: chatMessage.text, date: chatMessage.date, chatId: chatMessage.id }, (err, text) => {
      if (err) {
        return;
      }
      socket.emit('message_response', text);
    });
  });
});

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


server.listen(3000);