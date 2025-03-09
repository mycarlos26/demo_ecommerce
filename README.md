# Serenity/JS Cucumber Playwright Template


npx cucumber-js --tags @comprar
npx serenity-bdd run

npx cucumber-js --tags @comprar && npx serenity-bdd run && npx http-server -p 8080 target/site/serenity -s -o


npx cucumber-js --tags @compra_variada
npx cucumber-js --tags @comppra_dual
npx cucumber-js --tags @creacion_usuario
npx cucumber-js --tags @usuario_existente
npx cucumber-js --tags @login_exitoso 
npx cucumber-js --tags @login_fallido
npx cucumber-js --tags @login_and_buy
## Usage


### Installation

Once you have the code on your computer, use your computer terminal to run the following command in the directory where you've cloned the project:
```
npm ci
```

Running [`npm ci`](https://docs.npmjs.com/cli/v6/commands/npm-ci) downloads the [Node modules](https://docs.npmjs.com/about-packages-and-modules) this project depends on,
as well the [Serenity BDD CLI](https://github.com/serenity-bdd/serenity-cli) reporter jar. 

.

### Execution


```
npm run lint            # runs code linter
npm run lint:fix        # attempts to automatically fix linting issues
npm run clean           # removes reports from any previous test run
npm test                # executes the example test suite
                        # and generates the report under ./target/site/serenity
npm start               # starts a mini HTTP server and serves the test reports
                        # at http://localhost:8080
```
