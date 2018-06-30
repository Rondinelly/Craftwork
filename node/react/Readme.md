# Think in React

 One such technique is the single responsibility principle, that is, a component should ideally only do one thing.
  * If it ends up growing it should be decomposed into smaller subcomponents.
  
## Static version 

* data model and renders the UI

* How to  build components that reuse other components and pass data using `props`?
  * Firstly, `props` are a way of passing data from parent to child.
  
  * Install it using npm
  
  
  ```
  npm install react@15.1.0 react-dom@15.1.0
  npm install react-addons-test-utils@15.1.0
  ```
  
  * Basic React component. 
  
  <br>
  
  ```jsx
  
  import React from "react"

  export const FilterableProductTable = React.createClass({
      render() {
          return (
              <div></div>
          );
      },
  });
  ```
  * HTML in javascript?
  It's called JSX.
