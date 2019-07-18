# Angular Examples

> This is a fork with some modifications from the [github](https://github.com/UltimateAngular/) repositories.

## Project Setup and Tooling

### Tools

I would recommend a text editor and browser:

[![](https://img.shields.io/badge/Visual%20Studio%20Code-latest-green.svg)](http://code.visualstudio.com)
[![](https://img.shields.io/badge/Google%20Chrome-latest-green.svg)](https://www.google.com/chrome)

### Prerequisites

Please make sure that you have the following installed:

[![](https://img.shields.io/badge/Node.js-latest-green.svg)](https://nodejs.org/en/download/current/)
[![](https://img.shields.io/badge/node--sass-latest-green.svg)](https://www.npmjs.com/package/node-sass)

Install `node-sass` globally:

```bash
npm install -g node-sass
```

### Project Install

##### Step 1: Project Dependencies

To install the project dependencies, you can run:

```bash
npm install
```

This will install our dependencies for running our Angular application.

#### Step 2: Running the project

During development, the project is built using `webpack-dev-server`. This provides a local development server as well as having webpack recompile our app when a file changes. The project will also automatically refresh the page whenever we make changes.

To start the project in development, run:

```bash
npm start
```

This will output some information about the project (such as the TypeScript version and build progress). Once you see "build completed", you are ready to code!

Open your browser to [localhost:4000](http://localhost:4000) to start running the code.

#### Step 3: End-to-End tests

Jasmine is a javascript testing framework that supports a software development practice called Behaviour Driven Development(BDD). It’s a specific flavour of Test Driven Development (TDD).

Karma is a tool which lets us spawn browsers and run jasmine tests inside of them all from the command line. The results of the tests are also displayed on the command line.

To start e2e tests, run:

```bash
npm run test
```

### Project Tooling

The project uses `webpack` to build and compile all of our assets. This will do the following for us: 

- Compile all our TypeScript code into JavaScript (starting from `main.ts` and branching outwards from imported files)
- Bundle all our JavaScript into one file to use
- Allow us to use SASS for our component's CSS files
- Provide the polyfills needed to run our app in all modern browsers
- Mock a JSON backend using [json-server](https://github.com/typicode/json-server)

## Licence
[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?color=blue&style=flat-square)](http://opensource.org/licenses/MIT)
