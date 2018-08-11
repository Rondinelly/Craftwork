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

## Arquivos `.bash` (Modo não interativo)

É um _script_ com uma sequência de comandos para execução. É necessário escrever a localização do interpretador(shebang)
`#!/usr/bin/env bash` na primeira linha do arquivo, para que o arquivo seja reconhecido como um bash, 
porém no Windows não é necessário, pois o mesmo reconhece o arquivo pela extensão.
