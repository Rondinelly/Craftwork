## Instalar `jshint`

```
npm install -g jshint
```

## Configurar o arquivo `jshint`

```json
{
    "node": true,
    "undef": true
}
```
- Grave em um arquivo **.jshintrc**

## Executar `jshint`

```
jshint --config .jshintrc <filename.js>
```

## Instalar `eslint`

```
npm -g i eslint
```

## Configurar o arquivo `eslint`

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

- Grave em um arquivo **.eslintrc**

## Executar `eslint`

```
eslint --config .eslintrc <filename.js>
```
