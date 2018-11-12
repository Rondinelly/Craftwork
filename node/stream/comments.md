# Stream

Stream é uma coleção de dados, como arrays ou strings. 
A diferença é que um stream decide o quanto irá usar 
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
- `process.stdout`é um Writable stream.



