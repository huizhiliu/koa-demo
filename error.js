var koa = require('koa');
var app = koa();
app.use(errorHandler());

app.use(function* () {
      if (this.path === '/error') {
      	this.body = 'internal server error';
      	this.status = 500;
      	throw new Error('ooops');
      } else {
		this.body = 'OK';
      } 
});

function errorHandler() {
	return function* (next) {
		try{
			yield next;
		}catch(e) {
			console.log(e);
		}
	}
}

app.listen(process.argv[2]);
