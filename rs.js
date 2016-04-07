var koa = require("koa");
var app = koa();
var port = process.argv[2];
var parse = require('co-body');
app.listen(port);
var fs = require('fs');
app.use(function*() {
	switch(this.path) {
		case '/json': 
		   this.body = {foo:'bar'}
		   break;
		case '/stream':
		   this.body = 'Stream';
		   this.type = 'application/octet-stream';
		   this.body = fs.createReadStream(process.argv[3]);
		   break;
	}
})
