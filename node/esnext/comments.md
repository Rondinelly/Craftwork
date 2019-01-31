# ESNext Generation

- Iteradores 
- Geradores

## Introduction To Iterators

Para Manipular dados, temos `Symbol.iterator` que retorna 
um objeto chamado `iterator`. Este iterador terá um único 
método `next()`.

- `next()` tem as seguintes propriedades internas:
 - `value` -- Contador.
 - `done`-- Retorna `true` quando a lista termina.

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

## Built-In Iterators

- `forEach()` método protótipo de um Array, semelhante a 
um `for` tradicional.
- `for...in` é um loop sobre as propriedades enumeráveis do 
próprio objeto iterável, em ordem arbitrária.
- `for...of` é um loop sobre as propriedades enumeráveis do 
próprio objeto iterável, na ordem da inserção original.

A diferença de `for...of` para `for...in`, está na forma de 
percorrer uma lista ou objeto, `for...in` percorre uma lista 
por índice, por outro lado `for...of` percorre por valores.

## Advanced Iterables 

Um _iterator_ pode percorrer uma sequência infinita de valores,
Com isso, a propriedade `done` do método `next()` nunca retornará 
`true`.

## Links 

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
