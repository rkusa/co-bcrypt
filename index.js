
/**
 * Module dependencies
 */

var thunkify = require ('thunkify');

/**
 * Methods to wrap
 */

var methods = [
	'genSalt',
	'hash',
	'compare'
];

/**
 * Wrap `bcrypt` 
 *
 * @param {BCrypt} native or pure js version
 * @return {WrappedBCrypt}
 * @api public
 */

module.exports = function (bcrypt) {
	var obj = {};
	for (var k in bcrypt) {
		if (methods.indexOf(k) >= 0) {
			obj[k] = thunkify(bcrypt[k]);
		} else {
			obj[k] = bcrypt[k];
		}
	}
	return obj;
}