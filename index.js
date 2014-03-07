var bcrypt = require('bcryptjs')

exports.genSalt = function(rounds, seedLength) {
  return function(done) {
    bcrypt.genSalt(rounds, seedLength, done)
  }
}

exports.hash = function(s, salt) {
  return function(done) {
    bcrypt.hash(s, salt, done)
  }
}

exports.compare = function(s, hash) {
  return function(done) {
    bcrypt.compare(s, hash, done)
  }
}