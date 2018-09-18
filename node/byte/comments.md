# Bytewiser

## Buffer

As principais APIs Node.js:

- `http`
- `net`
- `fs`

Podem retornar um objeto `Buffer`.

Em Node.js, um objeto `Buffer` é um contêiner formado por _bytes_.
`Buffer`, nada mais é, que uma seção na memória, com a diferença que não é alocado 
pelo V8, mas pelo módulo `node_buffer` em C++. A estrutura de um `Buffer` é semelhante 
a um Array, no qual cada elemento é um número hexadecimal. `Buffer` é compilado em um 
tipo de objeto interno pelo Node.js, portanto, não é necessário referenciar nenhum módulo. 
Em resumo, `Buffer` é uma forma de armazenar dados.

## `Buffer` from string

- [Buffer.from(string[, encoding])](https://github.com/nodejs/node/blob/master/doc/api/buffer.md#bufferfrom-bufferalloc-and-bufferallocunsafe)

```js
console.log(Buffer.from("bytewiser"));
// Prints: <Buffer 62 79 74 65 77 69 73 65 72>
```

Retorna um novo objeto `Buffer`que contém uma cópia da string fornecida.

