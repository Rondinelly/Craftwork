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

**Por exemplo:**

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

**Por exemplo:**

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

Quando transformado em CSS fica:

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

**Por exemplo:**

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

Quando transformado em CSS fica:

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





