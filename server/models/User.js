const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  firstName: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  fullName: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  picture: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    default: '',
  },
  birthday: {
    type: Date,
    default: new Date(),
  },
  gender: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: '',
  },
  address: {
    type: String,
    default: '',
  },
  friends: [String],
});

UserSchema.pre('save', function(next) {
  const user = this;
  this.fullName = this.firstName + " " + this.lastName;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
