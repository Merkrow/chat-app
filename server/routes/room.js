const express = require('express');
const router = express.Router();
const passport = require('passport');
const { Room, User, Message, } = require('../controllers');
const config = require('../config');

router.post('/', (req, res) => {
  Room.create(req.body, (err, data) => {
    if (err) {
      return res.json({
        success: false,
        error: err,
      })
    }
    return res.json(data);
  })
})

router.get('/', (req, res) => {
  Room.find({}, (err, rooms) => {
    res.json(rooms);
  })
})

router.post('/search', (req, res) => {
  Room.findTwoUsersRoom(req.body.users, (err, room) => {
    if (!room) {
      Room.create(req.body, (err, newRoom) => {
        return res.send(newRoom);
      })
    } else {
      return res.send(room);
    }
  })
})

router.put('/:id', (req, res) => {
  Room.updateRoom(id, req.body, (err, room) => {
    if (!room) {
      res.send({
        success: false,
        message: 'Update error',
      });
    } else {
      res.send({
        success: true,
        room,
      });
    }
  })
})

router.delete('/:id', (req, res) => {
  Room.deleteRoom(req.params.id, (err, status) => {
    if (!status) {
      res.send({
        success: false,
        message: 'Delete error',
      });
    } else {
      Message.deleteByRoomId(req.params.id, (err, status) => {
        res.send({
          success: true,
          status,
        });
      })
    }
  })
})

router.get('/user/:id', (req, res) => {
  Room.find({ users: { $in: [req.params.id] } }, (err, data) => {
    if (err) {
      return res.json({
        error: err,
      })
    }
    return res.json(data);
  })
})

module.exports = router;
