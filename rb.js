var koa = require('koa');
var parse = require('co-body');
var port = process.argv[2];
var app = koa();
app.listen(port);
app.use(function*() {
	var body = yield parse(this);
	this.body = body.name.toUpperCase();
})