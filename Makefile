test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--harmony \
		--require should \
		--reporter spec \
		test.js