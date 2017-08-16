const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const config = require('../config');

router.post('/register', function(req, res) {
  if (!req.body.email || !req.body.password || !req.body.username) {
    res.json({
      success: false,
      message: 'Please enter email, password and username.'
    });
  } else {
    let newUser = new User({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      picture: req.body.picture,
    });

    newUser.save(function(err) {
      if (err) {
        return res.json({
          success: false,
          message: 'That email address already exists.'
        });
      }
      res.json({
        success: true,
        message: 'Successfully created new user.'
      });
    });
  }
});

router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

router.put('/user/:id', (req, res) => {

})

router.post('/auth', (req, res) => {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({
        success: false,
        message: 'Authentication failed. User not found.'
      });
    } else {
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
          var token = jwt.sign(user, config.auth.secret, {
            expiresIn: "2 days"
          });
          res.json({
            success: true,
            message: 'Authentication successfull',
            token,
            username: user.username,
            picture: user.picture,
            id: user._id,
            rooms: user.rooms,
          });
        } else {
          res.send({
            success: false,
            message: 'Authentication failed. Passwords did not match.'
          });
        }
      });
    }
  });
});


router.get('/users', passport.authenticate('jwt', {
  session: false
}), function(req, res) {
  res.send('It worked! User id is: ' + req.user._id + '.');
});


module.exports = router;
