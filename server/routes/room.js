const express = require('express');
const router = express.Router();
const passport = require('passport');
const { Room, } = require('../controllers');
const config = require('../config');

router.post('/', (req, res) => {
  Room.create(req.body, (err, data) => {
    if (err) {
      return res.json({
        success: false,
        error: err,
      })
    }
    return res.json({
      sucess: true,
      title: data
    });
  })
})

router.get('/', (req, res) => {
  Room.find({}, (err, rooms) => {
    res.json(rooms);
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
      res.send({
        success: true,
        status,
      });
    }
  })
})

router.get('/user/:id', (req, res) => {
  Room.find({ users: req.params.id }, (err, data) => {
    if (err) {
      return res.json({
        error: err,
      })
    }
    return res.json({
      title: data
    });
  })
})

module.exports = router;
