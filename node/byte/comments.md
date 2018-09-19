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

## Hexadecimal encoding

`Buffer` atualmente suporta essas codificações: `"ascii"`, `"utf8"`, `"utf16le"`,
`"ucs2"`, `"base64"`, `"latin1"`, `"binary"` e `"hex"`.

A codificação define o mapeamento da sequência de um valor para uma sequência de 
_bytes_ (e vice-versa). 

Dado uma matriz de _bytes_, também conhecida como octetos, pode se formar uma string 
codificada em formato hexadecimal, com o método `toString()`, usando `"hex"` como 
primeiro argumento:

- `"hex"` - Define cada _byte_ como dois caracteres hexadecimais(octetos hexadecimais), no 
qual cada par representa um único número na matriz de _bytes_ convertidos em hexadecimal.

```js
console.log(Buffer.from("bytewiser").toString("hex"));
// Prints: 627974657769736572
```
