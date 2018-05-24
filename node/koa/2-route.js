// -> /    - hello koa
// -> /404 - page not found
// -> /500 - internal server error

// this.path

// or 

// yield next

const koa = require('koa');

const app = koa();

app.use(function* (next) {
  if (this.path !== '/') {
    return yield next;
  }

  this.body = 'hello koa';
});

app.use(function* (next) {
  if (this.path !== '/404') {
    return yield next;
  }

  this.body = 'page not found';
});

app.use(function* (next) {
  if (this.path !== '/500') {
    return yield next;
  }

  this.body = 'internal server error';
});

app.listen(3001);
