# Stream

Stream é uma coleção de dados, como arrays ou strings. 
A diferença é que um stream é preechido de forma **incremental**, 
ou seja, ele define o quanto irá usar 
de memória, não tendo que usar toda memória disponível.
O que possibilita trabalhar com grande quantidade de dados,
visto que ele pode dividir a quantidade de dados por etapas, 
de acordo com a memória disponível.

## meet pipe 

O conceito de `pipe` é agrupar funções, redirecionado o 
resultado da função da esquerda para a direita, isso 
torna possível agregar um resultado pré-processado a
outra função.

- [`fs.createReadStream(path[, options])`](https://github.com/Rondinelly/nodeschool-howto/blob/master/node/basic/comments.md#fscreatereadstreampath-options)

## input output

- `process.stdin` é um Readable stream. 
- `process.stdout` é um Writable stream.

## transform

- [through2](https://www.npmjs.com/package/through2)

 `this.push(chunk)` enfileira os dados a serem adicionados, 
 pode ser chamado várias vezes, enquanto o callback não for finalizado.
 `this.push(null)` pode ser acionado quando não houver mais 
 dados e o callback não for finalizado.
 
 ## lines
 
 - [split](https://www.npmjs.com/package/split)
 
Faz a quebra de um Stream e remonta seu conteúdo por linha.

- `if(numero % 2)`

Verifica se um número é ímpar.

## concat 

- [concat stream](https://www.npmjs.com/package/concat-stream)

Concatena todo o conteúdo de um stream e retorna em um único Buffer.

**Métodos úteis:**

- [split](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split)

- [reverse](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

- [join](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

   
