var koa = require('koa');
var app = koa();
var port = process.argv[2];
app.listen(port);
app.use(function*() {
	if (this.request.is('application/json')) {
		this.body = 'json';
		this.body = {message: 'hi!'};
	} else {
		this.body = 'String';
		this.body = 'ok';
	}
})