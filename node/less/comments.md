# LESS is more

Less (sigla de Leaner Style Sheets) é uma linguagem de extensão compatível com versões anteriores do 
CSS, ou seja, Less é um pré-processador de CSS, que permite criar estilos CSS modulares, escalonáveis 
e mais gerenciáveis. Com Less é possível adicionar recursos que permitem adicionar variáveis, 
_mixins_ e outras funções que facilitam o CSS. O compilador é quem transforma o código Less em CSS 
padrão que um navegador possa ler e processar. Less é escrito em JavaScript, então é executado dentro 
do NodeJS, no navegador e dentro do [Rhino](https://github.com/mozilla/rhino). 

- Usa a extensão `.less` para seus arquivos.

## VARIABLES

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

Mixins são uma maneira de incluir propriedades de um conjunto de regras em outro conjunto de regras. 
Mixins permitem que você adicione todas as propriedades de uma classe em outra classe simplesmente 
incluindo o nome da classe como uma de suas propriedades. Assim como variáveis, mas para classes 
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

## NESTED RULES

O aninhamento facilita a leitura e manutenção do seu CSS. É uma ótima maneira de organizar 
seu CSS e torná-lo mais legível.

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
alterados dentro do conjunto de regras definido. Isso é conhecido como _bubbling_.

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





