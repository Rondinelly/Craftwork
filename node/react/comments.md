# learnyoureact

## React 

É uma biblioteca javascript com o objetivo de criar páginas web. Baseado em componentes que gerenciam seu próprio estado, é
escrito em javascript em vez de templates, o que facilita a manipulação de dados.

**Palavras chaves:**

- Componente
- Estado
- Elemento
- Props

## Componente

```jsx
React.Component
```

Um componente React implementa um método `render()` que recebe dados de entrada e renderiza uma nova tela.
Cada componente permite dividir a interface do usuário em partes independentes, reutilizáveis, com o propósito de pensar em cada
parte isoladamente. Conceitualmente, os componentes são como funções JavaScript. Obtém propriedades, as processa e retorna
elementos React que indicam o que deve ser apresentado na tela.

- Pode ser usado uma classe ES6 para definir um componente:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

**JSX**

Os arquivos em React usam uma sintaxe semelhante a XML chamada **JSX**, que quer dizer que existe código HTML incluso ao
Javascript.

**Conceitos:**

- JSX é compilado em chamadas `React.createElement`.

- JSX permite escrever HTML em seu JavaScript, em vez de escrever código JavaScript que cria e modifica a árvore DOM.

- O React trata os componentes que começam com letras minúsculas como tags DOM, ou seja, sempre que você criar um componente, o
mesmo deve começar com letra Maiúscula, pois é assim que o React difere um componente React de uma tag HTML.

## Props

São propriedades de um objeto, formado por um elemento que representa um componente definido pelo usuário, com isso, ele
transmite atributos JSX a esse componente como um único objeto. É uma maneira de compartilhar funcionalidade entre componentes
sem repetir o código.

- Pode ser usado para transmitir valores de um componente pai para um componente filho.
- Um componente filho pode ter valores entregues por meio de atributos ou por meio de conteúdo aninhado.
- `this.props.children` é usado para exibir o que é incluso entre tags ao invocar um componente. Tem o objetivo de personalizar
o conteúdo do seu aplicativo e, ao mesmo tempo, reutilizar os mesmos componentes.
- `Props` são Read-Only, portanto, não é recomendado alterá-las.
