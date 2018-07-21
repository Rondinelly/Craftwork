# `process.argv`

A propriedade `process.argv` retorna uma matriz de strings contendo os argumentos de um CLI transmitido quando o processo NODE foi iniciado;
O primeiro elemento do array `process.argv` é sempre "node" e o segundo elemento é sempre o caminho do arquivo executado, do terceiro em diante 
são passados os argumentos `(process.argv[2])`;

# `readFileSync(path[, options])`

Faz a leitura de um arquivo de forma síncrona;

# `readFile(path[, options], callback)`

Faz a leitura de um arquivo de forma assíncrona; o callback tem dois argumentos: `(err, data)`, no qual data é o conteúdo do arquivo.

### callback

Funções em Javascript são objetos, o que significa que eles se comportam como qualquer outro objeto,
pode ser armazenados em variáveis, serem passados como argumentos ou serem retornados de outras funções;
Um callback, em si, é apenas uma função passada como um argumento para outra função e, em seguida, executada dentro dela;
callback é uma função que é chamada por uma função acima. A idéia é deixar a função acima (externa) manipular a execução do callback.
