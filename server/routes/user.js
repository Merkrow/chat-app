const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { User } = require('../controllers');
const config = require('../config');

router.post('/register', function(req, res) {
  if (!req.body.email || !req.body.password || !req.body.username) {
    res.json({
      success: false,
      message: 'Please enter email, password and username.'
    });
  } else {
    User.create(req.body, (err) => {
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

router.get('/userId/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    res.send(user);
  })
})

router.get('/search/:username', (req, res) => {
  User.findByUsername(req.params.username, (err, users) => {
    if (!users) {

    } else {
      res.send(users);
    }
  })
})

router.get('/', function(req, res) {
  User.find({}, (err, users) => {
    res.json(users);
  });
});

router.put('/:id', (req, res) => {
  User.updateUser(req.params.id, req.body, (err, user) => {
    if (!user) {
      res.send({
        success: false,
        message: 'Update error',
      });
    } else {
      res.send({
        success: true,
        user,
      });
    }
  })
})

router.delete('/:id', (req, res) => {
  User.deleteUser(req.params.id, (err, status) => {
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

router.post('/auth', (req, res) => {
  User.findOne({
    email: req.body.email
  }, (err, user) => {
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
            user: user,
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


router.get('/jwt_login', passport.authenticate('jwt', {
  session: false
}), function(req, res) {
  res.send(req.user);
});


module.exports = router;
