var koa = require('koa');
var app = koa();
var port = process.argv[2];
app.listen(port);
app.use(function*(next) {

	switch(this.path){
		case '/':
			this.body = 'hello koa'
			break;
		case '/404':
			this.body = 'page not found'
			break;
		case '/500':
			this.body = "internal server error"
			break;
	}
	
})
