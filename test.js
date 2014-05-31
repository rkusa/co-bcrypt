
/**
 * Module dependencies
 */

var nan = require ('nan-bcrypt');
var js = require ('bcryptjs');
var wrap = require ('./');
var co = require ('co');

/**
 * Using nan-bcrypt
 */

describe ('wrap nan-bcrypt', function(){
	it ('should work', function(done){
		co(function * (){
			var bcrypt = wrap(nan);
			var salt = yield bcrypt.genSalt();
			var hash = yield bcrypt.hash('tobi', salt);
			var compared = yield bcrypt.compare('tobi', hash);
			compared.should.equal(true);
		})(done);
	});
});

/**
 * Using bcryptjs
 */

describe ('wrap bcryptjs', function(){
	it ('should work', function(done){
		co(function * (){
			var bcrypt = wrap(js);
			var salt = yield bcrypt.genSalt();
			var hash = yield bcrypt.hash('tobi', salt);
			var compared = yield bcrypt.compare('tobi', hash);
			compared.should.equal(true);
		})(done);
	});
});



