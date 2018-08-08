## `process.argv`

A propriedade `process.argv` retorna uma matriz de strings contendo os argumentos de um CLI transmitido quando o processo NODE
foi iniciado;
O primeiro elemento do array `process.argv` é sempre "node" e o segundo elemento é sempre o caminho do arquivo executado, do
terceiro em diante 
são passados os argumentos `(process.argv[2])`;

## `fs.readFileSync(path[, options])`

Faz a leitura de um arquivo de forma síncrona;

## `fs.readFile(path[, options], callback)`

Faz a leitura de um arquivo de forma assíncrona; o callback tem dois argumentos: `(err, data)`, no qual data é o conteúdo do
arquivo.

### callback

Funções em Javascript são objetos, o que significa que eles se comportam como qualquer outro objeto,
pode ser armazenados em variáveis, serem passados como argumentos ou serem retornados de outras funções;
Um callback, em si, é apenas uma função passada como um argumento para outra função e, em seguida, executada dentro dela;
callback é uma função que é chamada por uma função acima. A idéia é deixar a função acima (externa) manipular a execução do
callback.

### foreach

É um método prototípico de um Array. 
O método `forEach()` chama uma determinada function/callback em cada elemento de uma matriz, de acordo com a ordem do índice.

```js
arrayName.forEach(function(currentValue, index, array){
    console.log(`arr[${index}] is  ${currentValue}`);
})
```

O  método `forEach()` usa uma function como argumento. A função consiste em três parâmetros:

- `currentValue` mantém o valor presente sendo processado. 
- a variável `index` mantém o índice do valor nessa matriz específica. 
- a variável `array` mantém o array total passado.

## `fs.readdir(path[, options], callback)`

Faz a leitura do diretório (`path`).

- `options`(opcional) para indicar o enconding do arquivo.
- `callback` contém `err`, `files` é a lista com o nome dos arquivos do diretório.

## `path.extname(path)`

Retorna a extensão do arquivo do caminho(path) selecionado.

## `module.exports`

A palavra-chave `require` retorna um objeto, que faz referência ao valor `module.exports` de um determinado arquivo.
Cada módulo também é privado(acessível apenas a partir do código do módulo). O Node.js internamente envolve todos os módulos
`require` em um wrapper. 

## `http.get(url[, options][, callback])`

Retorna uma nova instância de `http.ClientRequest`, semelhante a `http.request()`, porém já definido como um método GET, realiza
a chamada `req.end()` de modo automático.

![eventDebug](https://raw.githubusercontent.com/Rondinelly/Craftwork/master/resources/end.PNG)

### handler
- `response.on("data", console.log);` :arrow_lower_right:
- `response.on("error", console.error);` :arrow_right: objeto _IncomingMessage_. 

## npm -- bl (BufferList)

Através de um _stream piped_ será realizado a coleta de dados. Ao terminar a stream, um callback vai ser disparado com os dados.
O parâmetro `data` resultante do callback é uma concatenação de todos objetos `Buffer` da lista. O objetivo é armazenar todos os 
dados do buffer ou parte destes.

## `net.createServer([options][, connectionListener])`

Cria um servidor TCP ou IPC, sem HTTP. Retorna uma nova instância de `net.Server`. O argumento `connectionListener` é uma
função, que é um ouvinte do evento `connection`, que por sua vez é emitido quando uma nova conexão é feita. `socket` é uma
instância de `net.Socket` que herda de `stream.Duplex` heranças de `stream.Readable`. Com isso, é possível usar
`socket.write(data)` para escrever dados para o socket. Possui o evento `socket.end()` que fecha o socket.

**Comando para teste local**

```console
$ telnet localhost --porta
```

## `http.createServer([options][, requestListener])`

Retorna uma nova instância de `http.Server`(servidor http). `requestListener` é uma função que é automaticamente adicionada ao
evento `'request'`, que é o evento acionado a cada requisição, tendo dois objetos:

- `http.IncomingMessage`(request) utilizado para buscar propriedades.
- `http.ServerResponse`(response) utilizado para enviar dados.

**server.listen()**

Inicia o servidor HTTP, que tem como parâmetro a porta de conexão escolhida.

## `fs.createReadStream(path[, options])`

Retorna uma nova instância de `fs.ReadStream`(objeto Readable Streams). Realiza o stream de arquivos, sendo o primeiro
argumento: `path`, o caminho do arquivo.

**Readable streams**

`Readable streams` armazenam dados em memória até certo ponto, para ter mais dados disponíveis para leitura quando o stream fica 
disponível para realizar o mesmo.

## Class: http.IncomingMessage

Pode ser usado para visualizar informações da requisição como status e dados.

- **message.method**

Campo apenas para leitura, contém o método HTTP da requisição no valor de uma string.

## npm -- through2-map

Tem por objetivo funcionar como `Array.prototype.map` em um _stream_, porém seu uso é apenas para modificar dados, não funciona
para filtro.
