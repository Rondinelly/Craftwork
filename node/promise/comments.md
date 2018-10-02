# Promises Workshop for JavaScript!

## Warm up

_Promise_ é um recurso adicionado ao [ES6](https://tc39.github.io/ecma262/#sec-promise-objects).
Seu objetivo é simplificar a lógica assíncrona em Javascript. Imagine, uma função assíncrona, 
que retorna um valor, para depois representar os eventuais resultados dessa operação à 
um objeto. A definição mais comum para promise é: um objeto que representa o resultado final de 
uma única operação assíncrona. Pode ser retornado a partir de funções assíncronas, permitindo 
não só callbacks, serem chamados quando a operação falha ou é bem-sucedida, mas também manipular 
o objeto promise que foi retornado.

- Método `setTimeout`, executa um trecho de código após determinado tempo em Milissegundos.

## Fulfilling a Promise

Uma Promise contém três estados:

- _fulfilled_
  - No qual, o _Handler fulfillment_ pode:
    - Retornar um valor com uma simples função.
    - Obter os dados e lançar uma exceção como resposta.

- _rejected_
  - No qual, o _Handler rejection_ pode:
    - Retornar um valor, no qual `catch` encontra e manipula o erro.
    - Com `catch` encontrar o erro novamente ou um novo. 

- _pending_ é o estado, que aguarda a finalização para o estado _fulfilled_ ou _rejected_.

**new promise**

Fornece um novo objeto promise inicializado, mas não resolvido, o equivalente a:

```js
new Promise((resolve, reject) => { ... })
```

No construtor, é atribuído um _callback_, em que `resolve` e `reject` indicam o resultado
da operação.

**Método `then`** 

Registra _callbacks_ para receber o valor eventual de uma promise ou a razão pela qual 
a promise não pôde ser cumprida. Possui dois parâmetros: o callback `onFulfilled` e 
`onRejected`, que são opcionais, sendo assim, o método `then` aguarda o retorno de 
_fulfillment_ ou _rejection_.
