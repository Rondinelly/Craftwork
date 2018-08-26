# learnyoureact

## React 

É uma biblioteca javascript com o objetivo de criar páginas web. Baseado em componentes que gerenciam seu próprio estado, é escrito
em javascript em vez de templates, o que facilita a manipulação de dados.

**Palavras chaves:**

- Componente
- Estado
- Elemento

## Componente

```jsx
React.Component
```

Um componente React implementa um método `render()` que recebe dados de entrada e renderiza uma nova tela.
Cada componente permite dividir a interface do usuário em partes independentes, reutilizáveis, com o propósito de pensar em cada parte
isoladamente. Conceitualmente, os componentes são como funções JavaScript. Obtém entrada de dados, as processa e retorna elementos React
que indicam o que deve ser apresentado na tela.

- Pode ser usado uma classe ES6 para definir um componente:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

**JSX**

Os arquivos em React usam uma sintaxe semelhante a XML chamada **JSX**, que quer dizer que existe código HTML incluso ao Javascript.

**Conceitos:**

- JSX é compilado em chamadas `React.createElement`.

- JSX permite escrever HTML em seu JavaScript, em vez de escrever código JavaScript que cria e modifica a árvore DOM.

- O React trata os componentes que começam com letras minúsculas como tags DOM, ou seja, sempre que você criar um componente, o mesmo 
deve começar com letra Maiúscula, pois é assim que o React difere um componente React de uma tag HTML.
