## Install `jshint`

```
npm install -g jshint
```

## Config file for `jshint`

```json
{
    "node": true,
    "undef": true
}
```
* Put it in a file named **.jshintrc**

## Run `jshint` with

```
jshint --config .jshintrc <filename.js>
```

### or

## Install `eslint`

```
npm -g i eslint
```

## Config file for `eslint`

```json
{
    "env" : {
    "node" : true
},
    "rules" : {
    "strict" : 0
  }
}
```

* Put it in a file named **.eslintrc**

## Run `eslint` with

```
eslint --config .eslintrc <filename.js>
```
