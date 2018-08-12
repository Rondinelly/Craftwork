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
