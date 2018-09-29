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

`Buffer` atualmente suporta as seguintes codificações: `"ascii"`, `"utf8"`, `"utf16le"`,
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
// Print: 627974657769736572
```

## Modifying `Buffer`

Existe a posssibilidade de alterar um `Buffer`, como um Array, por exemplo.

```js
// input: test...
let dot = ".".charCodeAt(0);
let exclamationPoint = "!".charCodeAt(0);

process.stdin.on("data", function(buff) {
  for (var i = 0; i < buff.length; i++) {
    if (buff[i] === dot)
       buff[i] = exclamationPoint
  }
  process.stdout.write(buff);
  // Print: test!!!
});
```

## Line splitter

- [buf.slice([start[, end]])](https://github.com/nodejs/node/blob/master/doc/api/buffer.md#bufslicestart-end)

Através dos índices `start` e `end`, se obtém um novo `Buffer`, 
dentro do trecho delimitado no índice.

Pode-se, por exemplo, com um `Buffer`, dividir os dados por linha.

```js
let fs = require("fs");
let file = fs.readFileSync(__dirname);
let offset = 0;
let NL = "\n".charCodeAt(0);

for (let i = 0; i < file.length; i++) {
  if (file[i] === NL) {
    console.log(file.slice(offset, i))
    i++
    offset = i
  }
}
```

**Nota:** Ao dividir um `Buffer`, o espaço de memória dos dois objetos se sobrepõem, 
portanto, ao modificar uma parte, consequentemente será sobrescrito no `Buffer`original.

## `Buffer` concat

- [Class Method: Buffer.concat(list[, totalLength])](https://github.com/nodejs/node/blob/master/doc/api/buffer.md#class-method-bufferconcatlist-totallength)

Ao criar uma lista composta por objetos do tipo `Buffer`, com o método `concat`, se 
transforma essa lista em um único objeto `Buffer`.

```js
let buffers = [];

process.stdin.on("readable", () => {
  let chunk = process.stdin.read();
  if (chunk !== null) {
    buffers.push(chunk);
  }
});

process.on("SIGINT", () => {
  console.log(Buffer.concat(buffers));
  process.exit();
});
```

## typed arrays

Para trabalhar com dados binários no navegador, existem os _[typed arrays](http://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Typed_arrays)_.

- `Uint8Array`

Representa o formato do _Typed array_ em 8 bits. _Uint_ significa _unsigned_, o que equivale a 
"apenas inteiros positivos". `Int8Array` por outro lado, pode armazenar valores positivos e negativos.

Todos os dados _input_ transformados em bytes, representados em um `Uint8Array`, após isso, o _output_ 
em formato JSON.

```js
process.stdin.once("data", function(buff) {
  var ui8 = new Uint8Array(buff)
  process.stdout.write(JSON.stringify(ui8));
})
```
