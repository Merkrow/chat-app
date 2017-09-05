const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');

const config = require('./config');

const { Message, User, Room } = require('./controllers');

// const routes = require('./routes/index');
const users = require('./routes/user');
const rooms = require('./routes/room');

let onlineUsers = new Set();

mongoose.Promise = Promise;
mongoose.connect(config.database.local, {
  useMongoClient: true,
});
mongoose.connection.on('error', console.error);

app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/users', users);
app.use('/rooms', rooms);
io.on('connection', (socket) => {
  onlineUsers.add(socket.handshake.query.id);
  io.emit('online users', Array.from(onlineUsers));
  socket.on('online users', ({ friends, id }) => {
    const res = friends.reduce((acc, friendId) => {
      if (onlineUsers.has(friendId)) {
        return acc.concat(friendId);
      };
      return acc;
    }, []);
    io.emit(`online users ${id}`, res);
  })

  socket.on('get unread', ({ roomId, userId }) => {
    Message.getUnreadMessages(userId, roomId, (err, messages) => {
      socket.emit(`unread messages ${roomId}`, messages.length);
    })
  })

  socket.on('create room', ({ room, creatorId }) => {
    Room.create(room, (err, newRoom) => {
      room.users
      .map(userId => {
        io.emit(`new room ${userId}`, newRoom)
      })
    })
  })

  socket.on('chat message', (chatMessage) => {
    Message.create({
      sender: chatMessage.userId,
      text: chatMessage.text,
      date: chatMessage.date,
      chatId: chatMessage.chatId,
      usersViewed: chatMessage.usersViewed
    }, (err, message) => {
      if (err) {
        return;
      }
      io.emit(`message response ${chatMessage.chatId}`, message);
      io.emit(`last message ${chatMessage.chatId} new`, message);
    });
  });

  socket.on('read messages', ({ roomId, userId}) => {
    Message.findAndUpdate(userId, roomId, (err, messages) => {
    })
  })

  socket.on('get messages', (id) => {
    Message.find({ chatId: id }, (err, messages) => {
      socket.emit(`messages response ${id}`, messages);
    })
  })

  socket.on('get last message', (id) => {
    Message.findLast(id, (err, message) => {
      io.emit(`last message ${id}`, message);
    })
  })

  socket.on('user typing', ({ roomId, userName }) => {
    io.emit(`typing emit to ${roomId}`, userName);
  })

  socket.on('disconnect', () => {
    onlineUsers.delete(socket.handshake.query.id);
    io.emit('online users', Array.from(onlineUsers));
  })

  socket.on('update user', ({ userId, friendId, update }) => {
    User.updateUser(userId, update, (err, user) => {
      io.emit(`update user ${userId}`, user);
      if (friendId) {
        io.emit(`update user ${friendId} ${userId}`, user);
      }
    })
  })
});

app.use('/', require('express').static(path.join(__dirname, '/public')));


app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


server.listen(process.env.PORT || '8080');
