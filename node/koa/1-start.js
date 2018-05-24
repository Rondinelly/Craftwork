const koa = require('koa');

const app = koa();

app.use(function* () {
  this.body = 'hello koa';
});

app.listen(3001);
