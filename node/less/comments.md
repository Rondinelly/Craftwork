# LESS is more

Less (sigla de Leaner Style Sheets) é uma linguagem de extensão compatível com versões anteriores do 
CSS, ou seja, Less é um pré-processador de CSS, que permite criar estilos CSS modulares, escalonáveis 
e mais gerenciáveis. Com Less é possível adicionar recursos que permitem adicionar variáveis, 
_mixins_ e outras funções que facilitam o CSS. O compilador é quem transforma o código Less em CSS 
padrão que um navegador possa ler e processar.  

- Usa a extensão `.less` para seus arquivos.

## Resumo

| Palavra-chave | Descrição                     |
| ------------- | ----------------------------- |
| `@`           | [Variáveis](https://github.com/Rondinelly/nodeschool-howto/blob/master/node/less/comments.md#variables)|
| `.`           | [_Mixins_](https://github.com/Rondinelly/nodeschool-howto/blob/master/node/less/comments.md#mixins)    |
| `~`           | [_Escaping_](https://github.com/Rondinelly/nodeschool-howto/blob/master/node/less/comments.md#escaping)|
| `#`           | [_Namespace_](https://github.com/Rondinelly/nodeschool-howto/blob/master/node/less/comments.md#namespaces-and-accessors)|
| `@import`     | [Importa _Mixins_ ou variáveis](https://github.com/Rondinelly/nodeschool-howto/blob/master/node/less/comments.md#importing) |

## Variables

Para criar uma variável, anexe o símbolo `@` ao início do nome de uma variável.

**Exemplo:**

Arquivo `.less`

```less 
@color: #000;
body {
  color: @color;
}
```

Quando transformado em CSS fica:

```css
body {
  color: #000;
}
```

## Mixins

_Mixins_ são uma forma de incluir propriedades de um conjunto de regras em outro conjunto de regras. 
_Mixins_ permitem que você adicione todas as propriedades de uma classe em outra classe simplesmente 
incluindo o nome da classe como uma de suas propriedades. Assim como variáveis, porém para classes 
completas. 

**Exemplo:**

Arquivo `.less`

```less 
@material-blue: #2196F3;
.header {
  background-color: @material-blue;
}
.article-header {
  .header
}
```

CSS:

```css
.header {
  background-color: #2196F3;
}
.article-header {
  background-color: #2196F3;
}
```

## Nested rules

O aninhamento facilita a leitura e manutenção do CSS. É uma maneira de organizar o CSS,  
além de torná-lo mais legível.

**Exemplo:**

Arquivo `.less`

```less 
.red-text {
  color: #F44336;
}

aside {
  ul {
    margin: 0;
  }
  a {
    .red-text;
  }
}
```

- Note que os seletores `ul` e `a` são aninhados no interior do seletor `aside`. 

CSS:

```css
.red-text {
  color: #F44336;
}
aside ul {
  margin: 0;
}
aside a {
  color: #F44336;
}
```

## Nested directives and bubbling

É possível aninhar diretivas, da mesma forma que é feita com seletores.
Quando se coloca uma diretiva no topo, seus elementos relativos serão 
alterados dentro do conjunto de regras definido. Isso é conhecido como **_bubbling_**.

**Exemplo:**

Arquivo `.less`

```less 
.screen-color {
  @media screen {
    color: #212121;
    @media (min-width: 768px) {
      color: #333333;
    }
  }
}
```

CSS:

```css
@media screen {
  .screen-color {
    color: #212121;
  }
}
@media screen and (min-width: 768px) {
  .screen-color {
    color: #333333;
  }
}
```

## Operations

LESS fornece suporte para operações aritméticas, tais como `+`, `-`, `*` e `/`, podendo 
ser aplicado a números, cores e variáveis.

**Exemplo:**

Arquivo `.less`

```less 
@container-margin: 20px;
.container {
  margin: @container-margin;
  @media (max-width: 480px) {
    margin: (@container-margin / 2);
  }
}
```

CSS:

```css
.container {
  margin: 20px;
}
@media (max-width: 480px) {
  .container {
    margin: 10px;
  }
}
```

## Escaping

Usando `~` como prefixo, se forma um _Escaping_. _Escaping_ permite usar qualquer 
string arbitrária ou valor de variável como propriedade, ou seja, constrói 
seletores dinamicamente.

**Exemplo:**

Arquivo `.less`

```less 
.coloured-block {
  background-color: ~"green";
}
```

CSS:

```css
.coloured-block {
  background-color: green;
}
```

## Functions

Less mapeia o código JavaScript para manipulação de valores e usa funções predefinidas que 
manipulam aspectos de elementos HTML na folha de estilo. LESS fornece uma variedade de funções 
que transformam cores, manipulam strings e até realiza cálculos matemáticos. 

**Exemplo:**

Arquivo `.less`

```less 
@width: 0.05;

.coln {
  margin: percentage(@width);
}
```

CSS:

```css
.coln {
  margin: 5%;
}
```

## Namespaces and accessors

Um _namespace_ é definido usando `#` como prefixo. Podendo agrupar _mixins_ com um nome 
em comum. _Namespaces_ evitam conflito de nome e encapsulam um grupo de _mixins_ externamente.

**Exemplo:**

Arquivo `.less`

```less 
#header-styles {
  .header-lg {
    font-size: 32px;
  }
}

.page-header {
  color: #111111;
  #header-styles > .header-lg;
}
```

É preciso referenciar _namespace_ `>` _mixin_.
Isso quer dizer, que só se acessa `.header-lg`, com o _namespace_ `#header-styles`.

CSS:

```css
#header-styles .header-lg {
  font-size: 32px;
}
.page-header {
  color: #111111;
  font-size: 32px;
}
```


## Scope

Variáveis e _mixins_ são procurados localmente, se não forem encontrados, 
o compilador irá procurar no escopo pai e assim por diante.

**Exemplo:**

Arquivo `.less`

```less 
@padding: percentage(0.01);

.card {
  @padding: 10px;
  .footer {
    padding: @padding;
  }
}
```

CSS:

```css
.card .footer {
  padding: 10px;
}
```

## Importing

A instrução `@import`, permite importar um arquivo `.less`. Com isso todas as variáveis 
e _mixins_ definidos são disponibilizados.

**Exemplo:**

Arquivo `.less`

```less 
@import "variables";

.card {
  margin: @margin;
  padding: @padding;
  color: #111111;
}
```

Arquivo `.less` contendo as variáveis:

```less
@padding: 10px;
@margin: 5%;
```

## Links 

- [Less Tutorial](https://www.tutorialspoint.com/less/index.htm)

- [CodePen](https://codepen.io/tag/less/)

