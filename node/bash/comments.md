# learnyoubash

## BASH

Lançado em 1989, Bash é um interpretador de shell Unix escrito por Brian Fox para o Projeto GNU.

## Comandos Unix (Modo interativo)

- `ls` lista o diretório atual.
- `touch` cria um arquivo.
- `grep` pesquisa determinado texto dentro de um arquivo.
- `cd` altera o diretório atual.
- `mkdir` cria uma nova pasta.
- `rm` deleta o arquivo selecionado( <kbd>Shift</kbd>+<kbd>delete</kbd> do Windows). 
- `echo` imprime um texto no terminal.
- `chmod +x` atribui permissão no Unix, ou seja, faz com que o _script_ seja executável no mesmo.
- `unset` apaga uma variável.
- `$BASH_VERSION` versão do bash.

## Arquivos `.bash` (Modo não interativo)

É um _script_ com uma sequência de comandos para execução. É necessário escrever a localização do interpretador(shebang)
`#!/usr/bin/env bash` na primeira linha do arquivo, para que o arquivo seja reconhecido como um bash, 
porém no Windows não é necessário, pois o mesmo reconhece o arquivo pela extensão.

## Variáveis

Não possuem tipos de dados previamente definidos.

Existem três tipos de variáveis:

- **Variáveis locais:**

Declaradas dentro do _script_ pode-se recuperar o valor desta pelo símbolo `$`, não pode haver espaço entre o símbolo de
atribuição `=` e o nome da variável, também a variável é reconhecida apenas localmente. 

- **Variáveis de ambiente:**

Para que uma variável seja global é preciso usar a palavra chave `export`, por exemplo:

```bash
export GLOBAL_VAR="I am a global variable"
```

Alguns [exemplos](http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_02.html#sect_03_02_04) de variáveis de ambiente do bash:

| Variable     | Description                                                   |
| ----------- | ------------------------------------------------------------ |
| `$HOME`      | Diretório inicial do usuário atual.                            |
| `$PATH`      | Uma lista de diretórios separados por `:` no qual o shell procura por comandos. |
| `$PWD`       | Diretório atual.                                |
| `$RANDOM`    | Gera um número inteiro aleatório de 0 a 32767.                           |
| `$UID`       | ID do usuário atual.                |

**Observação:** caso queira o valor de uma variável dentro uma string, é preciso declarar a string com aspas duplas `"` em vez
de usar aspas simples `'`.

## Parâmetros posicionais

Parâmetros posicionais são variáveis atribuidas posicionalmente a uma função.

| Parâmetro     | Descrição                                                 |
| ------------- | --------------------------------------------------------- |
| `$0`          | Nome do Script                                            |
| `$1 … $9`     | Primeiro argumento, segundo argumento...                  |
| `$*` or `$@`  | Todos os parâmetros posicionais, exceto `$0`.             |
| `$#`          | O número de parâmetros, sem contar `$0`.                  |
| `$FUNCNAME`   | O nome da função(usado somente dentro de uma função).     |

No exemplo abaixo, os parâmetros posicionais são `$0='./script.sh'`, `$1='foo'` e `$2='bar'`:

```bash
./script.sh foo bar
```

## Arrays

Tem forma semelhante a de outras linguagens de programação, porém com algumas peculiaridades, tais como:

- `${@:1:2}` em que `@` seleciona o array por determinada posição, `1` retorna o índice do array e `2` o cumprimento a partir da posição
do índice.

- `[*]` retorna todo conteúdo de um array, `[@]` também pode ser usado e tem o mesmo objetivo.

## Shell expansions

[Uma expansão é executada na linha de comando depois de ter sido dividida em _tokens_.](https://www.gnu.org/software/bash/manual/bash.html#Shell-Expansions)

**Expansão aritmética**

- Para que qualquer expressão aritmética seja calculada, usa-se `$(( ))`.

**Exemplo:**

```bash
echo $(( (2 + 2) * 5)) #20
```
**Substituição de comando**

- Possibilita que o valor de um comando possa ser atribuido a uma variável, através do uso de <code>``</code> ou `$()`.

**Exemplo:**

```bash
echo `date` # dom, 19 de ago de 2018 11:31:18 
```

**Expansões de chaves**

- Usando apenas chaves `{}`, tem como objetivo fazer mais de uma tarefa em um só comando, no qual pode-se gerar string diferentes,
arquivos e até criar intervalos pré determinados em um loop, usando `..`.

**Exemplos:**

```bash
mkdir -p project/{src,doc,tools}/
```

```bash
echo {00..10..2} # 00 02 04 06 08 10 
```

## Streams

Descritores:

| Código |  Descritor | Descrição            |
|  --    |  --------  |  ------------------- |
| `0`    | `stdin`    | Entrada padrão       |
| `1`    | `stdout`   | Saída padrão         |
| `2`    | `stderr`   | Saída de erros       |

Para redirecionar streams, esses operadores são usados:

| Operador | Descrição                             |
| -------- | ------------------------------------- |
| `>`      | Redireciona a saída                   |
| `&>`     | Redireciona a saída de erro           |
| `&>>`    | Redireciona a saída com saída de erro |
| `<`      | Redireciona entrada                   |

**Exemplo:**

Grava a saída do comando em um arquivo texto:

```bash
ls > list.txt
```

Faz a leitura do arquivo texto:

```bash
less < list.txt
```

**Pipe**

Pode ser usado para processar dados em um processo com vários comandos.

**Por exemplo:**

```bash
ls -l | grep .txt$ | less
```

**Listas de comandos: `&&` e `||`**

- `command1 && command2` significa que `command2` somente será executado se `command1` for executado com sucesso(retorno 0).

- `command1 || command2` quer dizer que `command2` será executado, caso aconteça algum erro com `command1`(retorna um erro).
