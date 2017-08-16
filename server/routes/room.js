const express = require('express');
const router = express.Router();
const passport = require('passport');
const { Room, } = require('../controllers');
const config = require('../config');

router.post('/', (req, res, next) => {
  Room.create({ title: req.body.title }, (err, data) => {
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

module.exports = router;
