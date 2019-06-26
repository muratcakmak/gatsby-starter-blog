---
title: JavaScript Tooling CheatSheet
date: "2019-03-11T21:12:03.284Z"
description: Quick JavaScript Tooling Guide
---

## Eslint

Disable Eslint for the file

```
/* eslint-disable import/no-mutable-exports */
console.dir(obj)
```

Disable on the line

```
console.dir(obj) // eslint-disable-line no-console
```

Disable next line

```
// eslint-disable-next-line no-console
console.dir(obj)
```

Example `.eslintrc`

```js{numberLines: true}
{
  "extends": "eslint-config-airbnb",
  "parser": "babel-eslint",
  "plugins": ["react-native"],
  "globals": {
    "__DEV__": true,
    "fetch": true,
    "navigator": true,
    "IntervalID": true,
    "TimeoutID": true
  },
  "rules": {
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": [2, { "ignore": ["electron"] }],
    "import/prefer-default-export": 1,
    "linebreak-style": 0,
    "operator-linebreak": [
      2,
      "after",
      { "overrides": { "?": "before" } }
    ],
    "no-console": 1,
    "no-use-before-define": 0,
    "no-plusplus": 1,
    "implicit-arrow-linebreak": ["error", "beside"],
    "space-in-parens": ["error", "never"],
    "max-len": 1,
    "arrow-parens": 0,
    "comma-dangle": [
      2,
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline"
      }
    ],
    "react/jsx-filename-extension": [
      1,
      { "extensions": [".js", ".jsx"] }
    ],
    "react/prefer-stateless-function": [
      1,
      { "ignorePureComponents": true }
    ],
    "react/prop-types": [1, {}],
    "react/jsx-boolean-value": 0,
    "react/destructuring-assignment": 0,
    "react/sort-comp": 0,
    "react-native/no-unused-styles": 2,
    "no-return-assign": 0,
    "no-shadow": 0,
    "no-confusing-arrow": 0
  }
}
```

## Flow

```js
// ignore next line
// $FlowFixMe
const supressedFlowError;
```

## Prettier

Example `.prettierrc` setup

```js{numberLines: true}
{
  "useTabs": false,
  "printWidth": 72,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all"
}
```

### ESLint References

- [Disable Rule](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-abusive-eslint-disable.md)
