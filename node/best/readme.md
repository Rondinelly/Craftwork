# For a best code

### Bad code

<details>
<summary>Example <code>vendingMachine.js</code></summary>

```js
var balance = 0;

var products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
];

module.exports = {
  canAfford: function(amount){
    if(!this.isValidAmount(amount)){
      errorMessage = "Invalid Input";
    }
    if(errorMessage){
      throw new Error(errorMessage);
    }
    return amount <= balance;
  },

  decreaseBalance: function(amount){
    // This method decreases the balance of the vending machine. If the balance amount is not 
    // enough to cover the purchase, the method throws an error. 
    var errorMessage;
    if(!this.canAfford(amount)){
        errorMessage = 'Insufficient balance';
    }
    if(errorMessage){
        throw new Error(errorMessage);
    }
    balance -= amount;
  },

  getAmount: function(coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    switch(coinType){
      case 'p': return 1;
      case 'n': return 5;
      case 'd': return 10;
      case 'q': return 25;
      default: throw new Error('Unrecognized coin ' + coinType);
    }
  },

  getBalance: function(){ 
    return balance;
  },

  getProducts: function() { 
    return products;
  },

  getProduct: function(productId) {
    var product = products.find(function(p) { return p.id === productId; });
    return product;
  },
  
  increaseBalance: function(amount){
    balance += amount;
  },

  insertCoin: function(coinType){
    var value = this.getAmount(coinType);
    this.increaseBalance(value);
  },

  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
  },

  releaseChange: function(){
    var currentBalance = this.getBalance();
    this.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },

  vendProduct: function(productId){
    var product = this.getProduct(productId);
    this.decreaseBalance(product.price);
    return product;
  }

};
```
</details>

<br>

## Separation of Concerns

- [ ] In order to make code simpler and more maintainable, will can grouping functions together into their own files.

<details>
<summary>Example <code>balanceManager.js</code></summary>

```js
let balance = 0;

module.exports = {
  increaseBalance: function(amount){
    balance += amount;
  },
  getBalance: function(){ 
    return balance;
  },
  canAfford: function(amount){
    return amount <= balance;
  },
  decreaseBalance: function(amount){
    if(!canAfford(amount)){
      throw new Error('Insufficient balance');
    }
    balance -= amount;
  }
};
```
</details>

<br>

- [ ] For change related ones, take the method that relates to handling change and move it into `changeHandler.js` for example.

<details>
<summary>Example <code>changeHandler.js</code></summary>

```js
module.exports = {
  getAmount: function(coinType) {
    switch(coinType){
      case 'p': return 1;
      case 'n': return 5;
      case 'd': return 10;
      case 'q': return 25;
      default: throw new Error('Unrecognized coin ' + coinType);
    }
  }
};
```
</details>

<br>

- [ ] Model

<details>
<summary>Example <code>productInventory.js</code></summary>

```js
let products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
];

module.exports = {
  getProducts: function() { 
    return products;
  },
  getProduct: function(productId) {
    var product = products.find(function(p) { return p.id === productId; });
    return product;
  }
};
```

</details>

<br>

**Result expected:** concerns are fully separated.

## Switch Statements

* They also can be somewhat difficult to maintain compared to alternative value-retriever constructs like dictionaries.

* It's best to avoid switch statements if at all possible.

<details>
<summary>Example</summary>

```js
const coins = {
  'p': 1,
  'n': 5,
  'd': 10,
  'q': 25
};

module.exports = {
  getAmount: function(coinType) {
    if(!coins.hasOwnProperty(coinType)){
      throw new Error('Unrecognized coin ' + coinType);
    }
    return coins[coinType];
  }
};
```

</details>
