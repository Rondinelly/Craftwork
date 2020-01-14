# Generator

```js
function* generatorFn() {...}
```

Ao contrário de uma function normal, function generator retorna vários valores um por um.

Uma expressão também pode ser um generator

```js
yield *foo(); // delegate foo
```

* O código dentro de uma function generator sempre será síncrono, mesmo se iterarmos os generators de forma assíncrona.

## Expressão `yield`

Pausa o generator e retorna um objeto `Iterator`, que contém duas propriedades que são: `value` e `done`

## Método `next()`

Retoma o generator e retorna um novo objeto `Iterator`, tal como: `{value: VALUE_FROM_YIELD, done: IS_THIS_FINISHED}`

## Exemplo

```js
function *foo () {
  var stop = yield 'woo';
  console.log(stop, 'inside foo');
}

var G = foo();

console.log(G.next());
// { value: 'woo', done: false }
console.log(G.next('bar'));
// 'bar', 'inside foo'
// { value: undefined, done: true }
```

