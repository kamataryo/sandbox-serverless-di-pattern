# Sandbox Serverless DI Pattern

![Node.js CI](https://github.com/kamataryo/sandbox-serverless-di-pattern/workflows/Node.js%20CI/badge.svg)

A sandbox to test Lambda function with Dependencies Injection Pattern.

## Description

The handler `src/hello.handler` has `src/handler.dependencies` as a DI container.
You can inject a dependencies at test:

```javascript
const { dependencies, handler } = require("src/hello.js");
dependencies.saas = () => {
  /* Write your own mock here. */
};

// Write any test
// ...
```

Check `src/hello.test.js` as an actual example.

## try test

```shell
$ git clone git@github.com:kamataryo/sandbox-serverless-di-pattern.git
$ cd sandbox-serverless-di-pattern
$ yarn
$ npm t
```
