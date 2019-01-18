# ESNext Generation

- Iteradores 
- Geradores

## Introduction To Iterators

Para Manipular dados, temos `Symbol.iterator` que retorna 
um objeto chamado `iterator`. Este iterador terá um único 
método `next()`.

- `next()` tem as seguintes propriedades internas:
 - `value` -- Contador.
 - `done`-- Retorna `false` quando a lista termina.

Com um _iterator_ pode se fazer um loop em uma coleção:

```js
const alpha = ['a','b','c'];
const it = alpha[Symbol.iterator]();
 
it.next();  //{ value: 'a', done: false }
it.next();  //{ value: 'b', done: false }
it.next();  //{ value: 'c', done: false }
it.next();  //{ value: undefined, done: true }
```

O que torna um iterador especial é como ele percorre uma 
coleção. Outros loops precisam carregar a coleção inteira 
para depois iterar sobre ela, enquanto um _iterador_ só 
precisa saber a posição atual na coleção. 
